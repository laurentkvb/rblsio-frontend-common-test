// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import ts from "@wessberg/rollup-plugin-ts";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';


export default {
	input: 'src/index.ts',
	output: {
		dir: './build',
		format: 'cjs'
	},
	plugins: [
		ts({},
		typescript(),
		commonjs(),
		resolve(),
		),
		typescript(),
		commonjs(),
		resolve({}),
	]
};
