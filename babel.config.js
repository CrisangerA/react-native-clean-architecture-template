module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@modules': './src/modules',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': ['./src/modules/shared/domain/utils'],
        },
      },
    ],
  ],
};
