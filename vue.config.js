const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vietspeecheduvietspeechedu/' // Thay tên repository của các bạn vào đây nhé
    : '/'
}
