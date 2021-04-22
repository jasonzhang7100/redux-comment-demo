const { override, fixBabelImports } = require('customize-cra');

// realize importing Antd on demand without ejecting webpack config
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
