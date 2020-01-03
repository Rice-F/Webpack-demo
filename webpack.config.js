// 基本配置文件，webpack打包的时候默认寻找该文件
const path = require('path');

module.exports = {
  // mode属性可以配置开发模式还是生产环境
  // mode: 'development',
  // 指定入口文件
  entry: './src/index.js',
  output: {
    // 打包后的文件名
    filename: 'bundle.js',
    // __dirname--相对webpack.config.js这个文件同级根目录，生成的打包文件dist目录下面
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // webpack根据test对应的正则表达式，来确定查找哪些文件，并将其提供给指定的loader
      // 当前以.css结尾的全部文件，都将被提供给style-loader和css-loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};