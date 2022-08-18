module.exports = {
  // ERQU
  files: ['./proto/blog.proto'],
  // Optional
  dist: './assets/apischema.json',
  // Optional
  formatServicePath: (path) => path.replace(/\./g, '/'),
  // Optional, will convert long to string by default
  long: 'number'
}
