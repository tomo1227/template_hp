// vite.config.ts
import ssg from "file:///workspace/node_modules/@hono/vite-ssg/dist/index.js";
import mdx from "file:///workspace/node_modules/@mdx-js/rollup/index.js";
import honox from "file:///workspace/node_modules/honox/dist/vite/index.js";
import remarkFrontmatter from "file:///workspace/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///workspace/node_modules/remark-mdx-frontmatter/dist/remark-mdx-frontmatter.js";
import { defineConfig } from "file:///workspace/node_modules/vite/dist/node/index.js";
import client from "file:///workspace/node_modules/honox/dist/vite/client.js";
var entry = "./app/server.ts";
var vite_config_default = defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()]
    };
  }
  const commonConfig = {
    plugins: [
      honox(),
      ssg({ entry }),
      mdx({
        jsxImportSource: "hono/jsx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
      })
    ],
    server: {
      port: 3001,
      host: "0.0.0.0",
      watch: {
        usePolling: true,
        // コンテナ環境での監視方法を変更
        interval: 1e3
      }
    }
  };
  if (mode === "production") {
    return {
      ...commonConfig,
      build: {
        assetsDir: "static",
        emptyOutDir: false,
        ssrEmitAssets: true,
        rollupOptions: {
          input: ["assets/styles/tailwind.css", "assets/theme.ts"],
          output: {
            entryFileNames: "static/assets/[name].js",
            assetFileNames: (assetInfo) => {
              return "static/assets/[name].[ext]";
            }
          }
        }
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
          "jsdom"
        ]
      }
    };
  }
  return commonConfig;
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvd29ya3NwYWNlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy93b3Jrc3BhY2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgc3NnIGZyb20gXCJAaG9uby92aXRlLXNzZ1wiO1xuaW1wb3J0IG1keCBmcm9tIFwiQG1keC1qcy9yb2xsdXBcIjtcbmltcG9ydCBob25veCBmcm9tIFwiaG9ub3gvdml0ZVwiO1xuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gXCJyZW1hcmstZnJvbnRtYXR0ZXJcIjtcbmltcG9ydCByZW1hcmtNZHhGcm9udG1hdHRlciBmcm9tIFwicmVtYXJrLW1keC1mcm9udG1hdHRlclwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcImhvbm94L3ZpdGUvY2xpZW50XCI7XG5cbmNvbnN0IGVudHJ5ID0gXCIuL2FwcC9zZXJ2ZXIudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBpZiAobW9kZSA9PT0gXCJjbGllbnRcIikge1xuICAgIHJldHVybiB7XG4gICAgICBwbHVnaW5zOiBbY2xpZW50KCldLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBjb21tb25Db25maWcgPSB7XG4gICAgcGx1Z2luczogW1xuICAgICAgaG9ub3goKSxcbiAgICAgIHNzZyh7IGVudHJ5IH0pLFxuICAgICAgbWR4KHtcbiAgICAgICAganN4SW1wb3J0U291cmNlOiBcImhvbm8vanN4XCIsXG4gICAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtGcm9udG1hdHRlciwgcmVtYXJrTWR4RnJvbnRtYXR0ZXJdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDMwMDEsXG4gICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICAgIHdhdGNoOiB7XG4gICAgICAgIHVzZVBvbGxpbmc6IHRydWUsIC8vIFx1MzBCM1x1MzBGM1x1MzBDNlx1MzBDQVx1NzRCMFx1NTg4M1x1MzA2N1x1MzA2RVx1NzZFM1x1ODk5Nlx1NjVCOVx1NkNENVx1MzA5Mlx1NTkwOVx1NjZGNFxuICAgICAgICBpbnRlcnZhbDogMTAwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBpZiAobW9kZSA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY29tbW9uQ29uZmlnLFxuICAgICAgYnVpbGQ6IHtcbiAgICAgICAgYXNzZXRzRGlyOiBcInN0YXRpY1wiLFxuICAgICAgICBlbXB0eU91dERpcjogZmFsc2UsXG4gICAgICAgIHNzckVtaXRBc3NldHM6IHRydWUsXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICBpbnB1dDogW1wiYXNzZXRzL3N0eWxlcy90YWlsd2luZC5jc3NcIiwgXCJhc3NldHMvdGhlbWUudHNcIl0sXG4gICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJzdGF0aWMvYXNzZXRzL1tuYW1lXS5qc1wiLFxuICAgICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICAgICAgLy8gaWYgKGFzc2V0SW5mby5uYW1lID09PSBcIi5jc3NcIikge1xuICAgICAgICAgICAgICAvLyAgIHJldHVybiBgYXNzZXRzL3N0eWxlcy9bbmFtZV0uW2V4dF1gO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIHJldHVybiBcInN0YXRpYy9hc3NldHMvW25hbWVdLltleHRdXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc3NyOiB7XG4gICAgICAgIHRhcmdldDogXCJub2RlXCIsXG4gICAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICAgXCJ1bmlmaWVkXCIsXG4gICAgICAgICAgXCJAbWR4LWpzL21keFwiLFxuICAgICAgICAgIFwic2F0b3JpXCIsXG4gICAgICAgICAgXCJAcmVzdmcvcmVzdmctanNcIixcbiAgICAgICAgICBcImZlZWRcIixcbiAgICAgICAgICBcImJ1ZG91eFwiLFxuICAgICAgICAgIFwianNkb21cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjb21tb25Db25maWc7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ04sT0FBTyxTQUFTO0FBQ2hPLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTywwQkFBMEI7QUFDakMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBRW5CLElBQU0sUUFBUTtBQUVkLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLE1BQUksU0FBUyxVQUFVO0FBQ3JCLFdBQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLGVBQWU7QUFBQSxJQUNuQixTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsTUFDYixJQUFJO0FBQUEsUUFDRixpQkFBaUI7QUFBQSxRQUNqQixlQUFlLENBQUMsbUJBQW1CLG9CQUFvQjtBQUFBLE1BQ3pELENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxZQUFZO0FBQUE7QUFBQSxRQUNaLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLFNBQVMsY0FBYztBQUN6QixXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxPQUFPO0FBQUEsUUFDTCxXQUFXO0FBQUEsUUFDWCxhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsUUFDZixlQUFlO0FBQUEsVUFDYixPQUFPLENBQUMsOEJBQThCLGlCQUFpQjtBQUFBLFVBQ3ZELFFBQVE7QUFBQSxZQUNOLGdCQUFnQjtBQUFBLFlBQ2hCLGdCQUFnQixDQUFDLGNBQWM7QUFJN0IscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsUUFDSCxRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxTQUFPO0FBQ1QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
