import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';

const SOURCE_FILE = path.resolve('src/components/UserItem.tsx');
const TARGET_FILE = path.resolve('src/components/UserItem.source.ts');

const generate = () => {
  const content = fs.readFileSync(SOURCE_FILE, 'utf8');

  const output = `// AUTO-GENERATED — DO NOT EDIT
export const USERITEM_SOURCE = \`${content
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${')}\`;
`;

  fs.writeFileSync(TARGET_FILE, output, 'utf8');
  console.log('[UserItem] source.ts updated');
};

generate();
chokidar.watch(SOURCE_FILE).on('change', generate);
