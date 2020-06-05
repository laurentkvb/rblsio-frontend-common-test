// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import ts from "@wessberg/rollup-plugin-ts";

export default {
	input: 'src/main.ts',
	output: {
		dir: './dist',
		format: 'cjs'
	},
	plugins: [
		ts({
		}, 			typescript(),
		)
	]
};
