import lang from '../localization/';

const contentImport = (name, langSection) => {
  const output = {},
        content = lang[langSection].content[name];

  Object.keys(content).forEach(key => {
    var image;
    try { image = require('../images/' + name + '/' + key + '.png') }
    catch {};

    if (Array.isArray(content[key])) {
      output[key] = {
        name: content[key][0],
        image: image,
        info: content[key][1]
      }
    } else {
      output[key] = {
        name: content[key],
        image: image,
        info: ''
      }
    }
  });

  return output;
}

export default contentImport;
