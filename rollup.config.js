import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

var files = require('./files')

export default files.map(filename => {
  return Object.assign({}, {
    input: `src/${filename}`,
    output: {
      file: `${filename.slice(0, -3)}.bundle.js`,
      format: 'iife',
      name: 'myfunc',
      dir: 'dist',
    },
  }, {
    watch: {
      include: 'src/**.js',
      exclude: 'node_modules/**'
    },
    plugins: [
      resolve({
        jsnext: true,
        browser: true,
        main: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      }),
      replace({
        BUILD: JSON.stringify(process.env.BUILD || 'development')
      }),
      (process.env.BUILD === 'production' && uglify.uglify()),
    ]
  })
})