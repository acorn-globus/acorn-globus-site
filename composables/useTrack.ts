// useTrack — typed wrapper around window.dataLayer.push for GA4 via GTM.
//
// Why a union type: misspelling an event name or shipping an event with the
// wrong parameter shape silently poisons reports. The discriminated union
// below catches those at compile time. To add a new event: extend TrackEvent,
// update docs/analytics-events.md, then configure a GA4 Event tag in GTM
// that listens for the same `event` name.
//
// The taxonomy itself is documented in docs/analytics-events.md — keep the
// two in sync.

type SocialPlatform = 'linkedin' | 'x' | 'github'
type CtaVariant = 'sidebar' | 'body' | 'footer' | 'floating' | 'inline' | 'header'

export type TrackEvent =
  // ── Primary conversions ────────────────────────────────────────────────
  | { event: 'contact_form_submit'; form_location: 'contact_page'; services: string[] }
  | { event: 'click_book_call'; source_page: string; cta_variant?: CtaVariant }
  | { event: 'click_email'; source_page: string; cta_variant?: CtaVariant; email?: string }
  // ── Secondary (diagnostic) ─────────────────────────────────────────────
  | { event: 'form_start'; form_location: string }
  | { event: 'smart_cta_impression'; source_page: string; cta_variant: string }
  | { event: 'smart_cta_click'; source_page: string; cta_variant: string }
  | { event: 'smart_cta_dismiss'; source_page: string; cta_variant: string }
  | { event: 'outbound_social_click'; source_page: string; platform: SocialPlatform; url: string }

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export function useTrack() {
  return (e: TrackEvent) => {
    if (typeof window === 'undefined') return
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(e as unknown as Record<string, unknown>)
  }
}
