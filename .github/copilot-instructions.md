# Solar Grid System - AI Coding Agent Instructions

## Project Overview
**Solar Energy Planning & Decision Support System** - A React + Vite frontend application that helps users evaluate solar energy feasibility for their location, estimate energy requirements, calculate financial benefits, and provide guidance before investment.

## Architecture & Tech Stack

### Frontend Stack
- **React 19.2** with React Router v7 for routing
- **Vite 7.2** as the build tool (Fast Refresh enabled)
- **JSX** without TypeScript (note: project is JavaScript-only)
- **No CSS framework** - inline styles and CSS modules used

### Project Structure
```
frontend/src/
├── App.jsx                 # Root component routing to pages
├── main.jsx               # React app initialization with StrictMode
├── routes/
│   └── AppRoutes.jsx      # Router config with BrowserRouter & Routes
├── pages/
│   ├── Welcome.jsx        # Landing page with feature description
│   └── Welcome copy.jsx   # (appears to be unused - consider removing)
├── Components/            # (empty - ready for feature components)
├── assets/                # (empty - for images, fonts, etc.)
├── App.css & index.css    # Global styles
└── main.jsx               # Entry point
```

## Key Patterns & Conventions

### Component Structure
- **Functional components only** - no class components
- Simple inline component definitions (see `Welcome.jsx`, `AppRoutes.jsx`)
- Minimal state management - lift state to route level if needed
- Use React Router's `<BrowserRouter>`, `<Routes>`, `<Route>` pattern (see `AppRoutes.jsx`)

### Routing Convention
- All routes defined in `/src/routes/AppRoutes.jsx` (single source of truth)
- Pages stored in `/src/pages/` directory
- Components used in pages stored in `/src/Components/` (currently empty, expand here)
- Example: `<Route path="/" element={<Welcome />} />`

### Code Style Requirements
- **ESLint enforced**: Uses `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- **React Hooks Rules**: Checked by `react-hooks` plugin
- **Unused variables rule**: Variables matching pattern `^[A-Z_]` (constants, React components) won't trigger "no-unused-vars"
- **No TypeScript** - JavaScript with JSX only

## Critical Developer Workflows

### Build & Development
```bash
npm run dev       # Start Vite dev server with HMR (http://localhost:5173)
npm run build     # Production build to /dist
npm run lint      # Run ESLint on all .js and .jsx files
npm run preview   # Preview production build locally
```

### Common Issues
- Vite requires explicit file extensions in imports: `import X from "./path/file.jsx"` (not just `"./path/file"`)
- React Router requires `<BrowserRouter>` wrapping all `<Routes>` (already configured in `AppRoutes.jsx`)
- Components must be added to `AppRoutes.jsx` to appear in routing

## Integration Points & Dependencies

### External Services
- No backend integration visible yet - project is frontend-only
- No API/service layer implemented (ready to be added in `src/services/` if needed)

### State Management
- **Current**: None - using React built-in state via hooks
- **Future**: May need Redux/Zustand for cross-feature state (energy calculations, location data, financial analysis)

## Common Tasks

**Adding a new page:**
1. Create component in `/src/pages/PageName.jsx`
2. Import in `/src/routes/AppRoutes.jsx`
3. Add route: `<Route path="/page-name" element={<PageName />} />`

**Adding a reusable component:**
1. Create in `/src/Components/ComponentName.jsx`
2. Import where needed: `import ComponentName from "../Components/ComponentName"`

**Checking code quality:**
```bash
npm run lint    # Check for violations
```

## Decision Context

- **Vite over Webpack**: Faster dev experience, faster builds
- **No TypeScript yet**: Project is in early stage; add if complexity grows
- **Router at root level**: Simplifies navigation architecture
- **Inline styles in Welcome.jsx**: Typical for MVP; extract to CSS modules/Tailwind as UI grows
