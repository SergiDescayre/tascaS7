import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [
    resolve({
      // Agrega aquí tus opciones de resolución de módulos
      // Por ejemplo, puedes especificar las extensiones de archivo que Rollup debe considerar al resolver las importaciones
      extensions: ['.js', '.jsx']
    })
  ]
};
