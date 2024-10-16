import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { Header } from "../components/Header";
import ThemeButton from "../islands/ThemeButton";
import { Style } from "hono/css";

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang="jp">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {<title>{title ?? frontmatter?.title ?? "My Blog"}</title>}
        {import.meta.env.PROD ? (
          <script src="/static/theme.js" />
        ) : (
          <script src="/app/assets/theme.ts" />
        )}
        <Script src="/app/client.ts" />
        <Style />
        <Link
          href="/app/assets/styles/tailwind.css"
          rel="stylesheet"
          manifest={{
            "/app/assets/styles/tailwind.css": {
              file: "/static/assets/tailwind.css",
            },
          }}
        />
        <link rel="icon" href="/static/assets/favicon.ico" />
      </head>
      <body class="flex flex-col items-center mb-2 bg-[#fbf9f2] dark:bg-zinc-800 mx-2">
        <Header>
          <ThemeButton />
        </Header>
        <main class="max-w-[780px] w-screen px-6 mt-6">
          <article>{children}</article>
        </main>
        <footer>
          <p>&copy; 2024 My HP Template. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
});
