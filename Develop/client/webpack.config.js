const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  mode: 'development', 
  entry: {
    main: './src/js/index.js',
    install: './src/js/install.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Text Editor',
    }),

   
    new InjectManifest({
      swSrc: './src-sw.js', // Custom service worker source file
      swDest: 'src-sw.js',  // Destination in the output (dist) folder
    }),

    // Generates the manifest.json file for the PWA
    new WebpackPwaManifest({
      name: 'Text Editor',
      short_name: 'JATE',
      description: 'Just Another Text Editor!',
      background_color: '#ffffff',
      theme_color: '#225ca3',
      start_url: './',
      publicPath: './', // Ensure relative path for deployment
      icons: [
        {
          src: path.resolve('src/images/logo.png'), // Path to the source icon in the src/images folder
          sizes: [96, 128, 192, 256, 384, 512],     // Multiple sizes for different devices
          destination: path.join('assets', 'icons'), // Copy to 'dist/assets/icons'
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};