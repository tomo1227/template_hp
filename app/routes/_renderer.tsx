import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang="jp">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {<title>{title ?? frontmatter?.title ?? "My Blog"}</title>}
        {/* <link rel="stylesheet" href="./static/assets/tailwind.css" /> */}
        <link rel="icon" href="/static/assets/favicon.ico" />
        <link rel="stylesheet" href="/static/assets/style.css" />
      </head>
      <body>
        <header>
          <h1>
            <a href="/">The Code Wanderlust</a>
            <span>by Tomoki Ota</span>
          </h1>
        </header>
        <main>
          <article>{children}</article>
        </main>
        <footer>
          <p>&copy; 2024 The Code Wanderlust. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
});
