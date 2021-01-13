import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';
export default {
  input: 'src/index.ts', // 打包入口
  output: [
    {
      file: pkg.browser,
      name: 'tools',
      // 打包输出格式
      format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(), // 解析TypeScript
    nodeResolve(), // 查找和打包node_modules中的第三方模块
    json(), // 支持导入json文件
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
  ],
};
