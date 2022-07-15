import { terser } from 'rollup-plugin-terser'
export default {
	input: 'src/index.js',
	output: [{
		file: './eventbus.min.js',
		format: 'cjs',
		name:'eventbusjs',
		exports: 'auto'
	}],
	plugins: [
		terser()
	]
};