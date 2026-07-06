#!/usr/bin/env node
// claude-md/*.md を dist/ 配下の生成済みbundleに合成する。
// 情報源は claude-md/*.md — dist/ を直接編集しない。

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

process.chdir(join(dirname(fileURLToPath(import.meta.url)), '..'))

const BUNDLES = {
  universal: ['git-and-gh-operations', 'collaboration-norms', 'performance-discussion-norms'],
  'product-repo': ['decision-making', 'autonomy-and-task-tracking', 'engineering-conventions'],
}

const HEADER = [
  '<!-- GENERATED FILE — do not edit directly.',
  '     Source: claude-md/*.md, composed by scripts/build-bundles.mjs.',
  '     Edit the source files under claude-md/ and re-run this script instead. -->',
].join('\n')

mkdirSync('dist', { recursive: true })

for (const [name, sources] of Object.entries(BUNDLES)) {
  const out = `dist/${name}.md`
  let content = `${HEADER}\n\n`
  for (const f of sources) content += `${readFileSync(`claude-md/${f}.md`, 'utf8')}\n`
  writeFileSync(out, content)
  console.log(`wrote ${out}`)
}
