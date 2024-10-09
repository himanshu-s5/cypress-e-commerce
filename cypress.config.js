const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: true,
      html: true,
      json: true,
    },
    screenshotsFolder: 'cypress/reports/html/screenshots', 
    videosFolder: 'cypress/reports/html/videos',
   
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
