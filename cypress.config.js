const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'https://adc-bill.stephanetoukam.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
