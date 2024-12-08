const { defineConfig } = require("cypress");
module.exports = {
  e2e: {
    chromeWebSecurity: false, // Disable web security
    baseUrl: 'https://parabank.parasoft.com',
  },
  setupNodeEvents(on, config) {
    config.proxy = {
      http: 'http://your-proxy-server:port',
      https: 'https://your-proxy-server:port',
    };
    return config;
  }
};


  
