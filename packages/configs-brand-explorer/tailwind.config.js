const {
  getTailwindConfig: _getConfig,
} = require('configs-common/tailwind.config');

function getTailwindConfig({ purge, site }) {
  let schema = {};
  switch (site) {
    case 'stattravel':
      schema = {
        brandStyles: {
          colorPrimary: '#0065BD',
          colorPrimaryLight: '#007353',
          colorPrimaryLighter: '#0065bd66',
          colorPrimaryDark: '#1B365D',

          colorSecondary: '#D24701',
          colorSecondaryLight: '#D24701',
          colorSecondaryLighter: '#D24701',

          colorThird: '#D9D9D9',
        },
        brandFontPrimary: 'Titillium Web',
        brandFontSecondary: 'Titillium Web',
      }
      break;

    default:
      schema = {
        brandStyles: {
          colorPrimary: '#008560',
          colorPrimaryLight: '#007353',
          colorPrimaryLighter: '#0085604d',
          colorPrimaryDark: '#000',

          colorSecondary: '#D24701',
          colorSecondaryLight: '#D24701',
          colorSecondaryLighter: '#D24701',

          colorThird: '#D9D9D9',
        },
        brandFontPrimary: 'Nunito',
        brandFontSecondary: 'Montserrat',
      }
      break;
  }
  return _getConfig({
    ...schema,
    purge,
  });
}

module.exports = { getTailwindConfig };