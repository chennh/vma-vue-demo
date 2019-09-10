'use strict'
const path = require('path')
const buildApi = require('vma-vue-assist/dist/static/buildApi/index.js')

buildApi({
  baseURL: 'http://wechat.h5h5h5.cn',
  output: path.resolve('src/api2')
})
