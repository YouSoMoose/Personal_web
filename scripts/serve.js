const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
};

http.createServer((req, res) => {
  let route;
  try {
    route = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400);
    return res.end('Bad request');
  }
  if (route === '/') route = '/index.html';
  const file = path.resolve(root, '.' + route);
  const allowed = /^\/(?:index\.html|(?:css|js|assets)\/)/.test(route);

  if (!allowed || !file.startsWith(root + path.sep)) {
    res.writeHead(404);
    return res.end('Not found');
  }

  fs.stat(file, (error, info) => {
    if (error || !info.isFile()) {
      res.writeHead(404);
      return res.end('Not found');
    }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
}).listen(4173, '127.0.0.1', () => {
  console.log('Website preview: http://127.0.0.1:4173');
});
