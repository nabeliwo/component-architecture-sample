const path = require('path');

module.exports = storybookBaseConfig => Object.assign({}, storybookBaseConfig, {
  resolve: {
    modulesDirectories: ['src', 'node_modules']
  }
});
