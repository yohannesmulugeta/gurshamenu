import { readFileSync, writeFileSync } from 'node:fs';
import { render } from '../.ssr/prerender.js';
const file = new URL('../dist/index.html', import.meta.url);
const html = readFileSync(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('Missing root mount');
writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
