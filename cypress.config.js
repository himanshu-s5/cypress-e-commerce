const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video:true,
  videoUploadOnPass:false,
  e2e: {
    setupNodeEvents(on, config) {

      this.screenshotOnRunFailure = true;
      return config;
    },
  },
});
