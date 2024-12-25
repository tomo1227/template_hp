import { Style } from "hono/css";
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ThemeButton from "../islands/ThemeButton";
import { getTags } from "../components/feature/blogs/sorts";


export default jsxRenderer(({ children, frontmatter, title, entryName }) => {
  const blogName = "Tomoki Ota's Blog"
  const tags = getTags();
  const ogpTitle = title ? `${title} - ${blogName}` : blogName;
  const ogpPath = title ? `static/assets/img/ogp/${entryName}.png` : "static/assets/img/ogp/ogp.png";
  const twitterCardPath = title ? `static/assets/img/twitterCard/${entryName}.png` : "static/assets/img/twitterCard/twitterCard.png";
  const currentPath = useRequestContext().req.path;
  const baseUrl = "https://pathy.jp";
  const currentUrl = baseUrl + currentPath + "/";

  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="RZUgeeUBHVqNBaiUqj1H5xvc2feSikztj86Nh2KU-C8" />
        <meta name="description" content={frontmatter?.description ?? "フロントエンドからバックエンドまで日々の開発で得た知見や最新の技術トレンドを発信します。"} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogpTitle} />
        <meta property="og:description" content={frontmatter?.description ?? "フロントエンドからバックエンドまで日々の開発で得た知見や最新の技術トレンドを発信します。"} />
        <meta property="og:site_name" content={blogName} />
        <meta
          property="og:image"
          content={`${baseUrl}/${ogpPath}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tomomon1227" />
        <meta name="twitter:creator" content="@tomomon1227" />
        <meta name="twitter:title" content={ogpTitle} />
        <meta name="twitter:description" content={frontmatter?.description ?? "フロントエンドからバックエンドまで日々の開発で得た知見や最新の技術トレンドを発信します。"} />
        <meta
          name="twitter:image"
          content={`${baseUrl}/${twitterCardPath}`}
        />
        <link rel="canonical" href="currentUrl" />
        {<title>{frontmatter?.title ?? "Tomoki Ota's Blog"}</title>}
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
        <link rel="apple-touch-icon" href="/static/assets/apple-touch-icon.png" />
        <link rel="manifest" href="/static/assets/site.webmanifest" />
      </head>
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-F6RL6PBSF9"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-F6RL6PBSF9');
          `,
        }}
      />

      <body class="flex flex-col items-center mb-2 bg-[#fbf9f2] dark:bg-zinc-800 mx-2 min-h-screen">
        <Header>
          <ThemeButton />
        </Header>
        <div id="main-contents" class="flex flex-row">
          <aside id="side-tag-bar" class="w-1/6 p-4 in-h-screen flex-start fixed left-10 mt-9 md:block hidden">
            <nav>
              <ul class="flex flex-wrap gap-2 mt-20 p-0 list-none">
                {tags.map((tag) => (
                  <li key={tag} class="inline-block">
                    <a href={`/tags/${tag}`}
                      class="relative inline-block h-7 leading-7 px-3 bg-sky-500 rounded-full text-white text-xs no-underline transition duration-200 hover:bg-gray-700"
                    >{tag}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main class="max-w-[780px] w-screen px-6 mt-6 flex-grow">
            <div id="toc"></div>
            <article>{children}</article>
          </main>
        </div>
        <Footer />
      </body>
      {import.meta.env.PROD ? (
        <script type="module" src="/static/assets/tocbot.js" />
      ) : (
        <script type="module" src="/app/assets/tocbot.ts" />
      )}
    </html>
  );
});
