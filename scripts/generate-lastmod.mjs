/**
 * Build a route -> last-git-commit-date map for the sitemap.
 *
 * Why this exists: the sitemap previously stamped `new Date()` at build time onto
 * every static URL, so every deploy told Google that all 42 pages had changed,
 * including pages a deploy never touched. Google only honours <lastmod> from sites
 * that are consistently accurate about it and ignores the field otherwise, so an
 * always-now timestamp spends the signal and eventually loses it.
 *
 * This resolves each route to the file that renders it and reads that file's real
 * last-commit date, so <lastmod> answers "when did this page's content actually
 * change" rather than "when did we last deploy".
 *
 * Runs before build (see package.json). Writes server/utils/lastmod.json.
 * Failure is non-fatal: an empty map makes the sitemap fall back to build time,
 * which is the previous behaviour, so a missing git history can never break a deploy.
 */
import { execSync } from 'node:child_process'
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'server', 'utils', 'lastmod.json')

/** Route path -> source file that renders it. Mirrors the staticPaths list in urls.ts. */
const routeToFile = (route) => {
  const clean = route.replace(/\/$/, '')
  if (clean === '') return 'pages/index.vue'
  // A route can be pages/foo.vue or pages/foo/index.vue; prefer whichever exists.
  const flat = `pages${clean}.vue`
  const nested = `pages${clean}/index.vue`
  return existsSync(join(root, flat)) ? flat : nested
}

const ROUTES = [
  '/', '/about', '/how-we-work', '/contact', '/portfolio', '/designs',
  '/services', '/services/resource-augmentation', '/services/mvp-development',
  '/mvp-development-for-startups', '/services/full-project-delivery',
  '/services/dedicated-development-team', '/services/maintenance-support',
  '/services/ai-development', '/services/ai-agent-development', '/hire-ai-developers',
  '/services/ai-app-rescue',
  '/case-studies/eitoss', '/case-studies/formester', '/case-studies/invoice-falcon',
  '/case-studies/performline', '/case-studies/rumie',
  '/hire-full-stack-developer', '/hire-mobile-app-developer', '/hire-react-developer',
  '/hire-angular-developer', '/hire-vuejs-developer', '/hire-nuxt-developer',
  '/hire-nodejs-developer', '/hire-python-developer', '/hire-django-developer',
  '/hire-rails-developer', '/hire-dotnet-developer', '/hire-flutter-developer',
  '/hire-react-native-developer',
  '/guides/mvp-development', '/guides/it-staff-augmentation',
  '/offshore-software-development-india', '/privacy-policy', '/blog',
]

const map = {}
let resolved = 0

for (const route of ROUTES) {
  const file = routeToFile(route)
  if (!existsSync(join(root, file))) continue
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${file}"`, {
      cwd: root,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    if (iso) {
      map[route] = iso
      resolved++
    }
  } catch {
    // no git history for this file; sitemap falls back to build time
  }
}

// Shared components change the rendered bytes of every page that imports them.
// The footer and header are on every page, so when they change, every page did.
try {
  const shared = ['components/V3Footer.vue', 'components/V3Header.vue']
    .filter((f) => existsSync(join(root, f)))
    .map((f) =>
      execSync(`git log -1 --format=%cI -- "${f}"`, {
        cwd: root, encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'],
      }).trim()
    )
    .filter(Boolean)
    .sort()
    .pop()
  if (shared) {
    for (const route of Object.keys(map)) {
      if (new Date(shared) > new Date(map[route])) map[route] = shared
    }
  }
} catch {
  // ignore
}

mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, JSON.stringify(map, null, 2))
console.log(`[lastmod] resolved ${resolved}/${ROUTES.length} routes from git history -> server/utils/lastmod.json`)
