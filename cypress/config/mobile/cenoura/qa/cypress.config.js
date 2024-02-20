const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      app: 'cenoura',
      env: 'qa',
      platform: 'mobile'
    }
  },
});
