// jscs:disable maximumLineLength
const poleSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAMFAQMAAAD5tH6PAAAABlBMVEV8fn9MaXFGhH/xAAAAAnRSTlP9ANeBUsgAAALCSURBVHhe7MuxDYJAGIDRIxSUjMAorsZot4ErOAIlhQErz7MwmJD8nsn72pcv7c+WlMa9lN9g+gTjlwAAAGvgEQ8AAAAAGNo/juEecZwBAAAAAIAt6AAA9K0e7QMAAOzRxzEAAAAAoGv7iIc54jgDAAAAAAA54mgdAEh/dQAAACjdIo6fAwAAgPVSw/UFeapgGwpsaaxg7Qosqa8gpwJz6ip41FEHx46DMBiA5eHAkRK8nfBK2RK2A7s0SqEEz7wLBwbWshQEkcUlZj5L+SPHABwMFQAYaLcz5BsiAe0CA9xrH3ACOIKCEAio70aQENwHLtw90ADXRsC3RQEg4N0+wUFQno2fYEc4qBO4CQJV0GabwCMcFbjxDXy9IfTMEKUCnoqTN3sabeG4oQKvgMB37Tf8WyDx9Q0/C2SOxZ8CF107BYU3Cj5R/n7ByPtHAecFBcmCbMGlwT9QLKgWNAv6aUGyIFtwWVAsqBY0C7oCx3AaFTpvJNB5O4HK67pR4Qn0sPb+9ju2DB1BdfJlQ9CdYg0PqE69RQQV1nMc3YlBd2LQnRhUJwHViUF3YsgLBAEwKgoY35FXgAHnFxwf+F67VREs8BY4C8CEw4JowW6Bt8BZsFkAJkQL9hXkmA5f4IrkXSA0ibVA7MBrhU3e9mMBL885EkjILLEE5mPWz+Cm08kRSLnkRciSZOQ9EK5xk+SNCGV+bJIwQR0gsQJCm6AwOIQ+QR2xEE6BxgAPJAHJi5AnGINDuARkjAhFQMaIUKl2zYvQpleyLucuD3rJeyCcNPR1jAiJOq1jRMg09CWvR7hGJ8nrEArEAYVhQ6jSSfIiNC8wxvhzQ48TnALrShZkCy4LigEyxm/oVkU/ZSRveYOGLM/jLVbXUMef4S1vINB5I4HO2wlUXkegxxgIdN5IoPP2V2jg3qFDMCBFA3I34PeB/9dX2XWJvBh0AAAAAElFTkSuQmCC';
const disappointingSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACrAQMAAAAZ9kEpAAAABlBMVEX///////9VfPVsAAAAAnRSTlMC+YDE5QIAAAHvSURBVHhezdZRqtwgGAVgRcBHl+BS3Em3ouvpJip0H0XoBoS+CIh/M3YS1XrmYhjae5iBhI8D4UAk7B2xVJP/Ak7PYHGziI/F11tNZ/Ik1DKK6OQ7BfaIrqI6+TmI7uTXIIa6DGKhEBJOkZ3Rl4T60P4SeQiPp0hy/aBBpiasxR6ST1GlE0NBlUtyJ+qQH5ck1tOfjnqIjpN8aQI7YRSZkYiEhMdL/CiMtc6exNcSb0iCkhciH2KgWCiUoAQgnDwQQQ4KQ1KWko5/viFpT8RnlwwE7CZy3RqIhKKgaCgmr4Q/JCKxAYpHQg4KA8KxlLWU/y3slTC6Iw6JhUIeCKcARAAhJskBUYUhyaPoS3QcxUChp9ja7sKbGD+IpPjszqLozCy6EzeIbWJHoY+lTMIvydMTiEvSJJLMU8IsZViwpV9+WlSn9fX4omsaJCwmjHWcTuTwNUO+iRjFNeGdTC96L2IQ+xTP5pNTN5lP268133wbZ4ypklbi6ohITFiIfS3WIyG3EoaE2mxbIgqUvIB6mEkoKu2LjlsiSh0Uil9JrlMjIbctnNi2iLIvMt+Q9A+k7Au/I7QvDAu5d4r1+2LCO0XHfVFpX2Q+fkBQR8COKEytO5ycyUCI1h12SNwVS+TXYojcWhQRW0dQBjKfR78BII7SJhLMqRAAAAAASUVORK5CYII=';
// jscs:enable maximumLineLength

let disappointingImage;
let poleImage;

const createImages = (Image) => {
  poleImage = new Image();
  disappointingImage = new Image();
  poleImage.src = poleSrc;
  disappointingImage.src = disappointingSrc;
};

const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
  let words = text.split(' ');
  let line = '';
  let lineCount = 0;

  for (var i = 0; i < words.length; i++) {
    let test = words[i];
    let metrics = context.measureText(test);
    while (metrics.width > maxWidth) {
      test = test.substring(0, test.length - 1);
      metrics = context.measureText(test);
    }
    if (words[i] != test) {
      words.splice(i + 1, 0,  words[i].substr(test.length));
      words[i] = test;
    }

    test = line + words[i] + ' ';
    metrics = context.measureText(test);

    if (metrics.width > maxWidth && i > 0) {
      context.fillText(line, x, y);
      line = words[i] + ' ';
      y += lineHeight;
      lineCount++;
    } else {
      line = test;
    }
  }
  context.fillText(line, x, y);
};

export default ({canvas, intro, grievance, image}) => {

  if (!poleImage) {
    createImages(image || Image);
  }

  grievance = grievance || '';

  canvas.width = 500;
  canvas.height = 400;

  const context = canvas.getContext('2d');

  context.fillStyle = '#FF1493';
  context.fillRect(0, 0, 500, 400);

  context.drawImage(poleImage, 10, 20, 89, 360);

  context.drawImage(disappointingImage, 100, 70, 200, 171);

  const backgroundColor = '#CBFF48';
  const textColor = '#fff';

  context.fillStyle = textColor;
  context.font = '25px Helvetica';
  wrapText(context, intro, 100, 50, 440, 28);

  context.fillStyle = textColor;
  context.font = '25px Helvetica';
  wrapText(context, grievance || '', 100, 280, 400, 28);

  context.fillStyle = '#fff';
  context.font = '12px Helvetica';
  wrapText(context,
    'Share your own grievance @ http://getfestivus.com/air-grievance',
    140, 390, 740, 22);

  return canvas;
};
