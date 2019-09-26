const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const buble = require('rollup-plugin-buble')

module.exports = [
    {
        input: 'build/es5.js',
        output: {
            file: 'dist/json5.js',
            format: 'cjs',
        },
        plugins: [
            resolve(),
            commonjs(),
            buble({ transforms: { dangerousForOf: true } }),
        ],
    },
    {
        input: 'lib/index.js',
        output: {
            file: 'dist/json5.module.js',
            format: 'esm',
        },
        plugins: [resolve(), commonjs()],
    },
]
