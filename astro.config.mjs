import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { globSync } from 'glob'

const site = 'https://adampunk.com'
const assetPages = globSync('public/{documents,presentations}/*.pdf').map(
  (p) => `${site}/${p.replace(/^public\//, '')}`,
)

export default defineConfig({
  site,
  integrations: [sitemap({ customPages: assetPages })],
})
