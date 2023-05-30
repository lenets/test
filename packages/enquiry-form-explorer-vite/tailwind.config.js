// eslint-disable-next-line no-undef
const { getTailwindConfig } = require('configs-brand-explorer/tailwind.config');


// eslint-disable-next-line no-undef
module.exports = getTailwindConfig({
  purge: [
    '../components-vue3/src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
});
