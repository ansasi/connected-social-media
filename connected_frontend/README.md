# Connected frontend

The React frontend for Connected, built with Vite and Tailwind CSS.

## Requirements

- Node.js 22.12 or newer
- npm

## Environment

Create a `.env` file with:

```dotenv
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_SANITY_PROJECT_ID=your-sanity-project-id
VITE_SANITY_TOKEN=your-sanity-token
```

Existing Netlify variables named `REACT_APP_GOOGLE_API_TOKEN`,
`REACT_APP_SANITY_PROJECT_ID`, and `REACT_APP_SANITY_TOKEN` remain supported by
the Vite configuration during migration.

## Development

```bash
npm install
npm run dev
```

Create the production bundle with `npm run build`.
