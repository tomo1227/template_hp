import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import client from "honox/vite/client";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { defineConfig } from "vite";
import theme from "./public/static/assets/theme.json";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
    };
  }

  const commonConfig = {
    plugins: [
      honox({}),
      ssg({ entry }),
      mdx({
        jsxImportSource: "hono/jsx",
        providerImportSource: "./app/lib/mdxComponents",
        remarkPlugins: [
          remarkFrontmatter,
          remarkMdxFrontmatter,
          [
            remarkRehype,
            {
              footnoteBackContent: "↩︎",
              footnoteLabel: " ",
              footnoteLabelTagName: "hr",
              footnoteBackLabel: "Back to reference 1",
            },
          ],
          remarkGfm,
          remarkParse,
        ],
        rehypePlugins: [rehypeStringify, [rehypePrettyCode, { theme: theme }]],
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
            assetFileNames: () => {
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
