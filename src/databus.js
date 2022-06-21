import clearSky from './images/01.jpg'; // Photo by <a href="https://unsplash.com/@kylethacker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyle Thacker</a> on <a href="https://unsplash.com/s/photos/clear-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import fewClouds from './images/02.jpg'; // Photo by <a href="https://unsplash.com/@xaze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">x</a> on <a href="https://unsplash.com/s/photos/sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import scatteredClouds from './images/03.jpg'; // Photo by <a href="https://unsplash.com/@marcobian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marco Bianchetti</a> on <a href="https://unsplash.com/s/photos/scattered-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import brokenClouds from './images/04.jpg'; // Photo by <a href="https://unsplash.com/@tolga__?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tolga Ulkan</a> on <a href="https://unsplash.com/s/photos/broken-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import showerRain from './images/09.jpg'; // Photo by <a href="https://unsplash.com/@by_syeoni?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Suhyeon Choi</a> on <a href="https://unsplash.com/s/photos/rain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import rain from './images/10.jpg'; // Photo by <a href="https://unsplash.com/@wackeltin_meem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Valentin Müller</a> on <a href="https://unsplash.com/s/photos/rain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import thunderstorm from './images/11.jpg'; // Photo by <a href="https://unsplash.com/@paniscusbcn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josep Castells</a> on <a href="https://unsplash.com/s/photos/storm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import snow from './images/13.jpg'; // Photo by <a href="https://unsplash.com/@joyreal328?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joy Real</a> on <a href="https://unsplash.com/s/photos/snowing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import mist from './images/50.jpg'; // Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/s/photos/mist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const data = {};
const watch = {};

const setData = function (key, value) {
  data[key] = value;
  if (key in watch) {
    const callbacks = watch[key];
    callbacks.forEach((callback) => callback());
  }
};
const getData = function (key) {
  return data[key];
};

const watchKey = function (key, callback) {
  if (!(key in watch)) {
    watch[key] = [];
  }
  watch[key].push(callback);
};

setData('01', {
  src: clearSky,
  attribution:
    'Photo by <a href="https://unsplash.com/@kylethacker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyle Thacker</a> on <a href="https://unsplash.com/s/photos/clear-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
});
setData('02', {
  src: fewClouds,
  attribution:
    'Photo by <a href="https://unsplash.com/@xaze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">x</a> on <a href="https://unsplash.com/s/photos/sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
});
setData('03', {
  src: scatteredClouds,
  attribution:
    'Photo by <a href="https://unsplash.com/@marcobian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marco Bianchetti</a> on <a href="https://unsplash.com/s/photos/scattered-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
});
setData('04', {
  src: brokenClouds,
  attribution:
    'Photo by <a href="https://unsplash.com/@tolga__?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tolga Ulkan</a> on <a href="https://unsplash.com/s/photos/broken-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
});
setData('09', {
  src: showerRain,
  attribution:
    'Photo by <a href="https://unsplash.com/@by_syeoni?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Suhyeon Choi</a> on <a href="https://unsplash.com/s/photos/rain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
});
setData('10', {
  src: rain,
  attribution:
    'Photo by <a href="https://unsplash.com/@wackeltin_meem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Valentin Müller</a> on <a href="https://unsplash.com/s/photos/rain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>}',
});
setData('11', {
  src: thunderstorm,
  attribution:
    'Photo by <a href="https://unsplash.com/@paniscusbcn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josep Castells</a> on <a href="https://unsplash.com/s/photos/storm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
});
setData('13', {
  src: snow,
  attribution:
    'Photo by <a href="https://unsplash.com/@joyreal328?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joy Real</a> on <a href="https://unsplash.com/s/photos/snowing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
});
setData('50', {
  src: mist,
  attribution:
    'Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/s/photos/mist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
});

export { setData, getData, watchKey };
