# Replace these placeholder assets

The site references the following assets. Drop real files here with the exact
names below — no code changes needed.

| File           | Purpose                              | Spec                        |
| -------------- | ------------------------------------ | --------------------------- |
| `og-image.png` | Open Graph / social share preview    | 1200 × 630 px, PNG          |
| `favicon.ico`  | Browser tab icon                     | 32 × 32 (or .ico multisize) |
| `logo.svg`     | (Optional) replace the text wordmark | scalable SVG                |

Currently the brand mark is rendered as a styled **text wordmark** in
`components/Navbar.tsx` and `components/Footer.tsx`. If you have a logo image,
swap the wordmark `<span>` for a `next/image` `<Image>` there.

The campus map uses a keyless Google Maps embed driven by
`SITE.campus.mapQuery` in `lib/site.ts` — update that string (or the iframe
`src` in `components/Campus.tsx`) for a precise pin.
