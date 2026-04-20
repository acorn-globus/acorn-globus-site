// Global click delegation for analytics events that fire from many spots.
// Listening on document capture lets us avoid editing 11+ mailto anchors and
// 3 social links across 9 files — a stray new link gets tracked automatically
// without remembering to wire it up.
//
// Handles three primary-conversion / secondary events:
//   click_email          → mailto:business@acornglobus.com anywhere
//   click_book_call      → https://calendar.app.google/... anywhere
//   outbound_social_click → linkedin.com/company/acornglobus, x.com/AcornGlobus,
//                           github.com/acorn-globus (only our own accounts)

import { useTrack } from '~/composables/useTrack'

const EMAIL_ADDRESS = 'business@acornglobus.com'
const CALENDAR_HOST = 'calendar.app.google'

type SocialMatch = { platform: 'linkedin' | 'x' | 'github'; urlFragment: string }
const SOCIAL_MATCHERS: SocialMatch[] = [
  { platform: 'linkedin', urlFragment: 'linkedin.com/company/acornglobus' },
  { platform: 'x', urlFragment: 'x.com/AcornGlobus' },
  { platform: 'github', urlFragment: 'github.com/acorn-globus' },
]

export default defineNuxtPlugin((nuxtApp) => {
  const track = useTrack()

  const onClick = (e: MouseEvent) => {
    // Walk up the DOM because clicks often land on inner text, icon, or span.
    const anchor = (e.target as Element | null)?.closest?.('a')
    if (!anchor) return
    const href = anchor.getAttribute('href') || ''
    if (!href) return

    const route = nuxtApp.$router?.currentRoute?.value
    const sourcePage = route?.fullPath || (typeof window !== 'undefined' ? window.location.pathname : '')

    // Heuristic for variant: check which landmark the anchor sits in.
    const variant: 'sidebar' | 'body' | 'footer' | 'header' | 'floating' | 'inline' = (() => {
      if (anchor.closest('footer')) return 'footer'
      if (anchor.closest('header, nav[role="navigation"]')) return 'header'
      if (anchor.closest('aside, .sidebar, [data-cta-variant="sidebar"]')) return 'sidebar'
      if (anchor.closest('[data-cta-variant="floating"]')) return 'floating'
      return 'body'
    })()

    // ── Email ───────────────────────────────────────────────────────────
    if (href.startsWith('mailto:')) {
      const email = href.slice('mailto:'.length).split('?')[0]
      track({
        event: 'click_email',
        source_page: sourcePage,
        cta_variant: variant,
        email,
      })
      return
    }

    // ── Book-a-call (Google Calendar) ───────────────────────────────────
    if (href.includes(CALENDAR_HOST)) {
      track({
        event: 'click_book_call',
        source_page: sourcePage,
        cta_variant: variant,
      })
      return
    }

    // ── Social (only our own accounts) ──────────────────────────────────
    for (const m of SOCIAL_MATCHERS) {
      if (href.includes(m.urlFragment)) {
        track({
          event: 'outbound_social_click',
          source_page: sourcePage,
          platform: m.platform,
          url: href,
        })
        return
      }
    }
  }

  if (typeof window !== 'undefined') {
    document.addEventListener('click', onClick, { capture: true, passive: true })
  }
})
