module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './app/components',
          data: './app/data',
          screens: './app/screens',
          styles: './app/styles',
          navigation: './app/navigation',
        },
      },
    ],
  ],
};
