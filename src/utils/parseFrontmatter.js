export default function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return { meta: {}, content: raw }

  const meta = {}
  match[1].split('\n').forEach((line) => {
    const idx = line.indexOf(':')
    if (idx !== -1) {
      const key = line.slice(0, idx).trim()
      const val = line.slice(idx + 1).trim()
      if (key) meta[key] = val
    }
  })

  const content = raw.slice(match[0].length).replace(/^\r?\n/, '')
  return { meta, content }
}
