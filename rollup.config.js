// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import ts from "@wessberg/rollup-plugin-ts";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';


export default {
	input: 'src/index.ts',
	format     : "iife",
	output: {
		dir: './build',
		format: 'cjs',
	},
	plugins: [
		ts({}),
		typescript(),
		commonjs({
			// include: [ "./index.js", "node_modules/**" ], // Default: undefined
			// if true then uses of `global` won't be dealt with by this plugin
			ignoreGlobal: false, // Default: false

			// if false then skip sourceMap generation for CommonJS modules
			sourceMap: false // Default: true
		}),
		resolve({}),
	]
};
