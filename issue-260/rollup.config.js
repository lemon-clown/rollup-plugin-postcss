import postcss from 'rollup-plugin-postcss'
import postcssUrl from 'postcss-url'


export default {
  input: './src/index.js',
  output: {
    file: './lib/esm/index.js',
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    postcss({
      plugins: [
        postcssUrl({
          url: 'inline',
        }),
      ]
    })
  ]
}
