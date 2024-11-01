import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { Header } from "../components/Header";
import ThemeButton from "../islands/ThemeButton";
import { Style } from "hono/css";
import { Footer } from "../components/Footer";

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {<title>{title ?? frontmatter?.title ?? "Tomoki Ota's Blog"}</title>}
        {import.meta.env.PROD ? (
          <script src="/static/assets/theme.js" />
        ) : (
          <script src="/app/assets/theme.ts" />
        )}
        <Script src="/app/client.ts" />
        <Style />
        {import.meta.env.PROD ? (
          <link href="/static/assets/tailwind.css" rel="stylesheet" />
        ) : (
          <link href="/app/assets/styles/tailwind.css" rel="stylesheet" />
        )}
        <link rel="icon" href="/static/assets/favicon.ico" />
      </head>
      <body class="flex flex-col items-center mb-2 bg-[#fbf9f2] dark:bg-zinc-800 mx-2 min-h-screen">
        <Header>
          <ThemeButton />
        </Header>
        <main class="max-w-[780px] w-screen px-6 mt-6 flex-grow">
          <div id="toc"></div>
          <article>{children}</article>
        </main>
        <Footer />
      </body>
      {import.meta.env.PROD ? (
        <script type="module" src="/components/assets/toc.js" />
      ) : (
        <script type="module" src="/app/assets/toc.ts" />
      )}
    </html>
  );
});
