import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/app.ts',
  output: {
    file: 'build/app.js',
    format: 'cjs',
  },
  plugins: [typescript(), terser()],
};
