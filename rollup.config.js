import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import babel from "@rollup/plugin-babel"
export default {
	input: 'src/index.js',
	output: [{
		file: './dist/eventbus.min.js',
		format: 'cjs',
		name:'eventbusjs',
		exports: 'auto'
	}, {
		file: './dist/eventbus.ems.js',
		format: "esm",
		name:'eventbusjs',
		exports: 'auto'
	},],
	plugins: [
		terser(),
		resolve(),
		commonjs(),
		// babel({ babelHelpers: 'bundled' })
	]
};