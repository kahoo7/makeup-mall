const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
    .set('network', resolve('src/network'))
    .set('views', resolve('src/views'))
    .set('common', resolve('src/components/common'))
    .set('content', resolve('src/components/content'))
  },
}

