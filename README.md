# next-font-mirrors

A proxy for Next.js font loading with Google Fonts mirror support.

## Installation

```bash
npm install next-font-mirrors --save-dev
```

## Usage

Set the `NEXT_FONT_GOOGLE_MOCKED_RESPONSES` environment variable to this package, which will be imported by Next.js:

```bash
NEXT_FONT_GOOGLE_MOCKED_RESPONSES=next-font-mirrors
```

## Environment Variables

- `NEXT_FONT_GOOGLE_MOCKED_RESPONSES`: Set to `next-font-mirrors` to enable the proxy
- `NEXT_FONT_GOOGLE_MIRROR_URL`: Mirror URL for Google Fonts. When set, requests to `fonts.googleapis.com` will be redirected to this mirror.

## License

Apache-2.0
