// eslint-disable-next-line import/no-extraneous-dependencies
const { addBabelPlugin, override } = require('customize-cra');
// ESTE ARQUIVO NÃO ESTÁ SENDO UTILIZADO
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import  ',
    {
      rootPathSuffix: 'src',
    },
  ])
);
