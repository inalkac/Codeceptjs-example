const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: 'maximize',
      
    }
  },
  include: {
    I: './steps_file.js',
    editCVWindowPage: './pages/editCVWindow.js',
    loadBTKAkademyPage: './pages/loadBTKAkademy.js',
    classListPage: './pages/classList.js',
    menuFragment: './fragments/menu.js',
    cvIntroFragment: './fragments/cvIntro.js',
    searchClassFragment: './fragments/searchClass.js',
    submitClassFragment: './fragments/submitClass.js',
  },
  bootstrap: null,
  mocha: {},
  name: '1milyon',
  plugins: {
    pauseOnFail: {},
    allure: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    }
  }
}