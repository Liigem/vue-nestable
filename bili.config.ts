import { Config } from 'bili'

const config: Config = {
  banner: true,
  plugins: {
    commonjs: true,
    vue: true
  },
  input: {
    index: 'src/main.js',
  },
  output: {
    dir: 'dist',
    extractCSS: true,
    format: ['esm', 'iife-min', 'cjs', 'cjs-min', 'umd-min'],
    moduleName: 'vueNestable',
  }
}

export default config
