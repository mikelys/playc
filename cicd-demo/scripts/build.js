import { cp, mkdir, writeFile } from 'node:fs/promises';

// Use file URLs so the output always stays inside this project.
const output = new URL('../dist/', import.meta.url);
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'style.css', 'app.js', 'message.js']) {
  await cp(new URL(`../src/${name}`, import.meta.url), new URL(name, output));
}
await writeFile(new URL('build-info.json', output), JSON.stringify({
  commit: process.env.GITHUB_SHA || 'local',
  builtAt: new Date().toISOString(),
}, null, 2));
console.log('Built website in cicd-demo/dist/');
