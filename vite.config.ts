// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages guard: only when building in GitHub Actions (or GITHUB_PAGES=true) do we
// switch to a static prerendered build under the /datawithzain/ subpath. Lovable hosting
// and preview keep the default SSR config untouched.
const isGithubPages =
  process.env['GITHUB_PAGES'] === "true" || process.env['GITHUB_ACTIONS'] === "true";
const base = isGithubPages ? "/datawithzain/" : "/";

export default defineConfig({
  vite: { base },
  tanstackStart: isGithubPages
    ? {
        server: { entry: "server" },
        router: { basepath: "/datawithzain" },
        pages: [{ path: "/" }],
        prerender: {
          enabled: true,
          autoStaticPathsDiscovery: false,
          crawlLinks: false,
          filter: (page: { path: string }) => !/\.(pdf|ico|png|jpe?g|svg|webp)$/i.test(page.path),
        },
        spa: { enabled: true, prerender: { crawlLinks: false } },
      }
    : {
        // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
        server: { entry: "server" },
      },
});
