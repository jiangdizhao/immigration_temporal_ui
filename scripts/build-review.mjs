import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const review = join(root, 'review')
const distIndex = readFileSync(join(dist, 'index.html'), 'utf8')

const cssHref = distIndex.match(/<link[^>]+href="([^"]+\.css)"[^>]*>/i)?.[1]
const jsSrc = distIndex.match(/<script[^>]+src="([^"]+\.js)"[^>]*><\/script>/i)?.[1]
if (!cssHref || !jsSrc) throw new Error('Could not find Vite CSS/JS assets in dist/index.html')

const css = readFileSync(join(dist, cssHref.replace(/^\//, '')), 'utf8')
const js = readFileSync(join(dist, jsSrc.replace(/^\//, '')), 'utf8')
const offlineJs = js.replace(/\(function\(\)\{let e=document\.createElement\(`link`\)[\s\S]*?\}\)\(\);/, '')
const safeJs = offlineJs.replace(/<\/script/gi, '\\x3C/script')
const html = distIndex
  .replace(/<link[^>]+href="[^"]+\.css"[^>]*>/i, () => `<style data-review-bundle>\n${css}\n</style>`)
  .replace(/<script[^>]+src="[^"]+\.js"[^>]*><\/script>/i, () => `<script type="module" data-review-bundle>\n${safeJs}\n<\/script>`)
  .replace(/\s+(crossorigin|integrity)="[^"]*"/gi, '')

rmSync(review, { recursive: true, force: true })
mkdirSync(review, { recursive: true })
const htmlPath = join(review, 'OPEN_ME_Sovereign_Nexus_UI.html')
const readmePath = join(review, 'README.txt')
const zipPath = join(review, 'Sovereign_Nexus_UI_Review.zip')
writeFileSync(htmlPath, html)
writeFileSync(readmePath, '请双击 OPEN_ME_Sovereign_Nexus_UI.html 浏览界面。\n无需安装任何软件。\n建议使用 Chrome、Edge、Safari 或 Firefox。\n\n这是 Sovereign Nexus 律界智能 UI 原型，内容与数据仅供设计评审。\n')

// Small dependency-free ZIP writer: the review bundle contains only two stored files.
const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0 })
const crc32 = buffer => { let c = 0xffffffff; for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0 }
const zipFile = (name, content) => { const nameBuffer = Buffer.from(name); const data = Buffer.from(content); const local = Buffer.alloc(30 + nameBuffer.length); local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(0, 6); local.writeUInt16LE(0, 8); local.writeUInt16LE(0, 10); local.writeUInt16LE(0, 12); local.writeUInt32LE(crc32(data), 14); local.writeUInt32LE(data.length, 18); local.writeUInt32LE(data.length, 22); local.writeUInt16LE(nameBuffer.length, 26); local.writeUInt16LE(0, 28); nameBuffer.copy(local, 30); return { local: Buffer.concat([local, data]), nameBuffer, data, crc: crc32(data) } }
const entries = [zipFile('OPEN_ME_Sovereign_Nexus_UI.html', html), zipFile('README.txt', readFileSync(readmePath))]
let offset = 0; const localParts = []; const centralParts = []
for (const entry of entries) { localParts.push(entry.local); const central = Buffer.alloc(46 + entry.nameBuffer.length); central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6); central.writeUInt16LE(0, 8); central.writeUInt16LE(0, 10); central.writeUInt16LE(0, 12); central.writeUInt16LE(0, 14); central.writeUInt32LE(entry.crc, 16); central.writeUInt32LE(entry.data.length, 20); central.writeUInt32LE(entry.data.length, 24); central.writeUInt16LE(entry.nameBuffer.length, 28); central.writeUInt16LE(0, 30); central.writeUInt16LE(0, 32); central.writeUInt16LE(0, 34); central.writeUInt16LE(0, 36); central.writeUInt32LE(0, 38); central.writeUInt32LE(offset, 42); entry.nameBuffer.copy(central, 46); centralParts.push(central); offset += entry.local.length }
const centralDirectory = Buffer.concat(centralParts); const body = Buffer.concat([...localParts, centralDirectory]); const end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(0, 8); end.writeUInt16LE(entries.length, 10); end.writeUInt32LE(centralDirectory.length, 12); end.writeUInt32LE(offset, 16); writeFileSync(zipPath, Buffer.concat([body, end]))
console.log(`Created ${htmlPath}`)
console.log(`Created ${zipPath}`)
