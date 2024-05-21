const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.ts', '.tsx'], // Assurez-vous que '.tsx' et '.ts' sont inclus
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Ajoutez 'ts' et 'tsx' ici
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:metro-react-native-babel-preset'],
          },
        },
      },
      {
        test: /\.tsx?$/, // Ajoutez cette règle pour les fichiers TypeScript
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
