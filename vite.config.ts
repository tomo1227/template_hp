import ssg from "@hono/vite-ssg";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";

const entry = "src/index.tsx";

export default defineConfig({
  plugins: [ssg({ entry }), devServer({ entry })],
  server: {
    port: 3001,
    host: "0.0.0.0",
  },
});
