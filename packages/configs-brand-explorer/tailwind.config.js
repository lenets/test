const {
  getTailwindConfig: _getConfig,
} = require('configs-common/tailwind.config');

function getTailwindConfig({ purge }) {
  return _getConfig({
    brandStyles: {
      colorPrimary: '#008560',
      colorPrimaryLight: '#007353',
      colorPrimaryLighter: '#169D7C',

      colorSecondary: '#D24701',
      colorSecondaryLight: '#D24701',
      colorSecondaryLighter: '#D24701',

      colorThird: '#D9D9D9',
    },
    brandFontPrimary: 'Nunito',
    brandFontSecondary: 'Montserrat',
    purge,
  });
}

module.exports = { getTailwindConfig };
