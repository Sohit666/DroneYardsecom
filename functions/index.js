const functions = require('firebase-functions');
const next = require('next');

const app = next({
  dev: false,  // Set to 'false' for production
  conf: { distDir: '.next' }  // Ensure the correct path to the Next.js build directory
});

const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
