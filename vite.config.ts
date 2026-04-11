import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = "docs";

function copyPagesMetadata() {
  return {
    name: "copy-pages-metadata",
    apply: "build" as const,
    async closeBundle() {
      for (const fileName of ["CNAME", ".nojekyll"]) {
        const sourcePath = path.resolve(__dirname, "public", fileName);
        const targetPath = path.resolve(__dirname, outDir, fileName);

        try {
          const fileContents = await fs.readFile(sourcePath);
          await fs.writeFile(targetPath, fileContents);
        } catch (error) {
          if (
            !(error instanceof Error) ||
            !("code" in error) ||
            error.code !== "ENOENT"
          ) {
            throw error;
          }
        }
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyPagesMetadata()],
  // GitHub Pages is currently serving the repository root. We publish the
  // production bundle into /docs and keep asset URLs relative so /docs works
  // even when the root entry page redirects there.
  base: "./",
  build: {
    outDir,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
