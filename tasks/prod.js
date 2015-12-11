import gulp from 'gulp';
import pm2 from 'pm2';

const instances = process.env.WEB_CONCURRENCY || -1;
const maxMemory = process.env.WEB_MEMORY || 512;

gulp.task('prod', () => pm2.connect((err) => {
  if (err) {
    console.error(err);
    return process.exit(2);
  }
  pm2.start(
    {
      script: 'server/bin/www',
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      exec_mode: 'cluster',
      instances: instances,
      max_memory_restart: `${maxMemory}M`
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    },
    (err) => {
      if (err) {
        return console.error(
          'Error while launching applications',
          err.stack || err
        );
      }
      console.log('PM2 and application has been succesfully started');

      pm2.launchBus((err, bus) => {
        console.log('[PM2] Log streaming started');

        bus.on('log:out', (packet) => {
          console.log(`[App:${packet.process.name}] ${packet.data}`);
        });

        bus.on('log:err', (packet) => {
          console.error(`[App:${packet.process.name}][Err] ${packet.data}`);
        });
      });
    }
  );
}));
