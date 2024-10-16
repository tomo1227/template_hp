import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import client from "honox/vite/client";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
    };
  }

  const commonConfig = {
    plugins: [
      honox(),
      ssg({ entry }),
      mdx({
        jsxImportSource: "hono/jsx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    ],
    server: {
      port: 3001,
      host: "0.0.0.0",
      watch: {
        usePolling: true, // コンテナ環境での監視方法を変更
        interval: 1000,
      },
    },
  };

  if (mode === "production") {
    return {
      ...commonConfig,
      build: {
        assetsDir: "static",
        emptyOutDir: false,
        ssrEmitAssets: true,
        rollupOptions: {
          input: ["/app/assets/styles/tailwind.css", "/app/assets/theme.ts"],
          output: {
            entryFileNames: "static/assets/[name].js",
            assetFileNames: (assetInfo) => {
              return "static/assets/[name].[ext]";
            },
          },
        },
      },
      ssr: {
        target: "node",
        external: [
          "unified",
          "@mdx-js/mdx",
          "satori",
          "@resvg/resvg-js",
          "feed",
          "budoux",
          "jsdom",
        ],
      },
    };
  }

  return commonConfig;
});
