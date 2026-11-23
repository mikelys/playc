import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

// Serve only the known build files, on this computer.
const types = {
  '/index.html': 'text/html; charset=utf-8',
  '/style.css': 'text/css; charset=utf-8',
  '/app.js': 'text/javascript; charset=utf-8',
  '/message.js': 'text/javascript; charset=utf-8',
  '/build-info.json': 'application/json; charset=utf-8',
};
export const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const file = pathname === '/' ? '/index.html' : pathname;
  if (!Object.hasOwn(types, file)) {
    response.writeHead(404).end('Not found');
    return;
  }
  try {
    const body = await readFile(new URL(`../dist${file}`, import.meta.url));
    response.writeHead(200, { 'Content-Type': types[file], 'Cache-Control': 'no-store' });
    response.end(body);
  } catch {
    response.writeHead(404).end('Build missing. Run npm run build first.');
  }
});
server.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
server.listen(3000, '127.0.0.1', () => console.log('Open http://127.0.0.1:3000 (Ctrl+C to stop)'));
