// eslint-disable-next-line no-undef
const { defineConfig } = require("cypress");

// eslint-disable-next-line no-undef
module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 120000,
  viewportHeight: 768,
  viewportWidth: 1024,
  env: {
    baseUrl: 'http://automationpractice.com/index.php',
    accountPageUrl:
      'http://automationpractice.com/index.php?controller=my-account',
    accountCreationUrl:
      'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation',
    welcomeText:
      'Welcome to your account. Here you can manage all of your personal information and orders.',
    addedWishConfirmationMsg: 'Added to your wishlist.',
    productAddedMsg: 'Product successfully added to your shopping cart',
    emptyCartMsg: 'Your shopping cart is empty.',
    orderCompleteMsg: 'Your order on My Store is complete.',
    finalPrice: '$29.00',
    paymentType: 'Bank-wire payment.',
    moreThanHundred: 'You may not request more than 100 items.',
    missingHashmsg: ' You must provide a hash.',
    missingTimestamp: 'You must provide a timestamp.',
  },reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'Senior Challenge Report',
    reportPageTitle: 'Senior Challenge Report',
    reportFilename: 'Report',
    embeddedScreenshots: true,
    charts: true,
    inline: true,
    overwrite: false,
    autoOpen: false,
    showPending: false,
    showSkipped: true,
    timestamp: "longDate",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line no-undef
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});