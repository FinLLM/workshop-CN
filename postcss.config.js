const pxtorem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    pxtorem({
      rootValue: 16, // 基准值
      propList: ['*'], // 需要转换的属性列表，['*'] 表示全部属性都进行转换
      selectorBlackList: [], // 要忽略的选择器，可以使用正则
      replace: true, // 是否替换原有的 px 单位
      mediaQuery: true, // 是否转换媒体查询中的 px 单位
      minPixelValue: 2, // 最小的转换像素值，低于该值的像素将不进行转换
    }),
  ],
}
