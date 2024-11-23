module.exports = function (config) {
    config.set({
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false // Laisse Jasmine afficher les résultats des tests
      },
      reporters: ['progress', 'coverage'], // Affiche la progression et la couverture
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage'),
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' }
        ]
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false, // Désactive le watch mode pour la CI
      browsers: ['ChromeHeadlessCI'], // Utilise uniquement ChromeHeadlessCI
      customLaunchers: {
        ChromeHeadlessCI: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
        }
      },
      singleRun: true // Assure que Karma quitte après exécution
    });
  };
  