const BASE_URL = process.env.NODE_ENV === 'production'
  ? './'
  : '/'
module.exports = {
    productionSourceMap:false,//不生成map文件
    publicPath: BASE_URL,
}
