import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
	input: 'index.js',
	output:
	{
		dir: 'build',
		format: 'umd',
		name: 'helloworld',
		compact: true
	},
	plugins: [commonjs(), resolve(), json()],
};

