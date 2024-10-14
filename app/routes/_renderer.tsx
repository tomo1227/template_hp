import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { Header } from "../components/Header";
import ThemeButton from "../islands/ThemeButton";

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang="jp">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {<title>{title ?? frontmatter?.title ?? "My Blog"}</title>}
        <Script src="/app/client.ts" async />
        {import.meta.env.PROD ? (
          <script src="/static/assets/theme.js" />
        ) : (
          <script src="/app/theme.ts" />
        )}
        <Link
          href="assets/styles/tailwind.css"
          rel="stylesheet"
          manifest={{
            "assets/styles/tailwind.css": {
              file: "/static/assets/tailwind.css",
            },
          }}
        />
        <link rel="icon" href="/static/assets/favicon.ico" />
      </head>
      <body>
        <Header>
          <ThemeButton />
        </Header>
        <main>
          <article>{children}</article>
        </main>
        <footer>
          <p>&copy; 2024 My HP Template. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
});
