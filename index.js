import app from './src/app.js';
import Bun from 'bun';

const bunApp = Bun.serve({
  port: 3030,
  fetch: app.fetch,
  idleTimeout: 30,
});

console.log(`server is started goto ${bunApp.url}ui`);
