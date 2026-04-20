# Analytics event taxonomy

Source of truth for every event pushed to `window.dataLayer` by this codebase. When GTM is configured, each event below maps to a GA4 Event tag that forwards it to the property.

Changing this list without updating `composables/useTrack.ts` (the typed union) or the GTM tags will silently drop data — keep all three in sync.

## Primary conversions

Mark each of these as a conversion in **GA4 → Admin → Events → "Mark as conversion"** toggle.

| event_name | fires when | parameters | wired in |
|---|---|---|---|
| `contact_form_submit` | POST to Formester returns success | `form_location: 'contact_page'`, `services: string[]` | `pages/contact.vue` — inside `handleSubmit` after `await axios.post` resolves |
| `click_book_call` | click on a Google Calendar link (`calendar.app.google/...`) anywhere on the site | `source_page: string`, `cta_variant?: 'sidebar' \| 'body' \| 'footer' \| 'floating' \| 'inline' \| 'header'` | `plugins/analytics-delegated.client.ts` — delegated listener |
| `click_email` | click on any `mailto:business@acornglobus.com` anywhere on the site | `source_page: string`, `cta_variant?: ...`, `email: string` | `plugins/analytics-delegated.client.ts` — delegated listener |

## Secondary (diagnostic) events

These are engagement signals. Do NOT mark as conversions — they inflate the number and dilute the metric.

| event_name | fires when | parameters | wired in |
|---|---|---|---|
| `form_start` | first input focused on the contact form | `form_location: string` | `pages/contact.vue` — `@focusin.once` on the `<form>` |
| `smart_cta_impression` | SmartCta floating bar becomes visible (scroll ≥ 60 %) | `source_page: string`, `cta_variant: string` (= `dismissKey` prop) | `components/lead-capture/SmartCta.vue` — inside scroll handler, once per mount |
| `smart_cta_click` | click on the SmartCta button | same | `SmartCta.vue` — `@click` on the NuxtLink |
| `smart_cta_dismiss` | click on the SmartCta X button | same | `SmartCta.vue` — `dismiss()` |
| `outbound_social_click` | click on LinkedIn / X / GitHub link (only our own accounts) | `source_page: string`, `platform: 'linkedin' \| 'x' \| 'github'`, `url: string` | `plugins/analytics-delegated.client.ts` — delegated listener |

## Already covered by GA4 Enhanced Measurement

Nothing to wire in code — GA4 auto-tracks these as long as Enhanced Measurement is on for the Data Stream.

- `page_view` — every route navigation
- `scroll` — 90% of page depth reached
- `click` — outbound clicks (to non-acornglobus domains)
- `file_download` — click on links ending in common file extensions
- `video_start` / `video_progress` / `video_complete` — YouTube / Vimeo embeds

> **Disabled deliberately:** `form_start` / `form_submit` under Enhanced Measurement. The built-in detection is heuristic-based and misfires on the Nuxt SPA. Our explicit events above replace it cleanly.

## Adding a new event

1. Extend the `TrackEvent` union in `composables/useTrack.ts` with the new discriminant + parameter shape
2. Call `useTrack()` from the component that owns the action
3. Add a row to the table above
4. Create a matching GA4 Event tag in GTM — see `projects/marketing-acorn/gtm-runbook.md` in the selflearningai repo for the click-by-click steps
5. If it's a conversion, mark it in GA4 → Admin → Events

## Testing in GTM Preview mode

1. In the GTM UI, click **Preview** (top right) → paste `https://acornglobus.com/`
2. In the Tag Assistant window that opens, navigate the site and trigger the actions above
3. The dataLayer panel should show each event with its parameters
4. GA4 DebugView (GA4 → Admin → DebugView) will show the event arriving ~30 s later if Preview mode is active
