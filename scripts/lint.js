import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src", "scripts"];
const files = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    if (stat.isFile() && /\.(js|css)$/.test(path)) files.push(path);
  }
}

roots.forEach(walk);

const failures = [];
for (const file of files) {
  const content = readFileSync(file, "utf8");
  if (file !== "scripts/lint.js" && content.includes("console.log")) failures.push(`${file}: contains debug logging`);
  if (/[ \t]+$/m.test(content)) failures.push(`${file}: contains trailing line whitespace`);
}

if (failures.length) {
  process.stderr.write(`${failures.join("\n")}\n`);
  process.exit(1);
}

process.stdout.write(`Checked ${files.length} files\n`);
