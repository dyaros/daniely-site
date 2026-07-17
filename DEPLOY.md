# Deploying to daniely.studio (GitHub → Cloudflare Pages)

## Files in this package
- `index.html` — the landing page (everything inline: CSS, MailerLite embed)
- `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png`, `icon-512.png` — D-monogram favicons, bronze on charcoal

## Deploy
1. In the GitHub repo connected to your Cloudflare Pages project, **replace the existing `index.html` at the repo root** with this one. Same name, same location, on the branch Pages deploys from (check: Cloudflare dashboard → Workers & Pages → your project → Settings → Builds & deployments → Production branch; usually `main`).
2. Add all six favicon files to the **repo root**, next to index.html. (The page references them as `/favicon-32.png` etc. — root-relative.)
3. Commit and push.
4. In the Pages dashboard → Deployments, confirm a new deployment triggers and shows **Success** for your commit.
5. Hard-refresh https://daniely.studio (Ctrl/Cmd+Shift+R). The tab title should now read "The TRUST Scorecard — Free Digital Presence Self-Assessment | danielycontent".

If the old page still shows after a successful deployment: the repo Pages is connected to isn't the one you pushed to, or the file went to a non-production branch. That was the likely cause of the last attempt — the live headers showed Pages serving fresh (uncached) content, so it's serving exactly what's in the production branch.

## Verify after deploy
- [ ] Title and page are the new design (cream background, DANIELY CONTENT wordmark)
- [ ] Favicon shows the bronze D in the browser tab
- [ ] The signup form renders **inside the final section, styled** (white inputs, bronze button). If it looks unstyled, MailerLite changed its class names — tell me and I'll patch the CSS.
- [ ] Submit a test signup with a real email you control → confirm it lands in MailerLite group "Scorecard leads"
- [ ] (Once automation is built) the delivery email arrives with both PDFs

## Two placeholders to know about
1. **Founder photo** — the founder section currently shows a "DY" monogram tile. Swap it for a real photo (`/founder.jpg`) when you have one; the exact `<img>` tag is in an HTML comment at that spot. Brand guardrail: real photo only, no stock.
2. **noscript fallback** mentions `hello@daniely.studio` — set up that address (or change it in the HTML) so non-JS visitors have a path.

## Form details baked in
- MailerLite account: 2502590 (universal JS loaded at the bottom of the page)
- Embedded form: `mLLG3x` → group "Scorecard leads"
- Captures first name + email only; delivery happens by email, not on-page download — by design.
