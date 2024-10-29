import type { JSX } from "hono/jsx/jsx-runtime";

type Props = {
  children: JSX.Element;
};
export const Header = (props: Props) => {
  return (
    <header
      class={
        "text-center border-b px-4 mx-2 max-md:px-2 dark:border-gray-500 w-full h-16 tracking-widest dark:text-gray-100 flex justify-between items-center"
      }
    >
      <a href="/" class={"flex items-center"}>
        <h2 class={"font-semibold text-center text-2xl max-md:text-xl"}>
          Tomoki Ota's Blog
        </h2>
      </a>
      <div class={"flex justify-center"}>
        <div class="mr-2">{props.children}</div>
        <a
          href="https://www.instagram.com/tomomon1227"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="dark:text-white  h-10 w-10 flex justify-center rounded-xl transition-opacity hover:opacity-70 items-center"
            type="button"
          >
            <svg
              class="dark:stroke-white dark:fill-white"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <title>instagram icon</title>
              <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
            </svg>
          </button>
        </a>
        <a
          href="https://x.com/tomomon1227"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="dark:text-white  h-10 w-10 flex justify-center rounded-xl transition-opacity hover:opacity-70 items-center"
            type="button"
          >
            <svg
              class="dark:stroke-white dark:fill-white"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>X account link</title>
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </g>
            </svg>
          </button>
        </a>
        <a
          href="https://github.com/tomo1227/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="dark:text-white h-10 w-10 flex justify-center rounded-xl transition-opacity hover:opacity-70 items-center"
            type="button"
          >
            <svg
              class="dark:stroke-white dark:fill-white"
              focusable="false"
              viewBox="0 0 24 24"
              width="30"
              data-testid="GitHubIcon"
            >
              <title>github account link</title>
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
            </svg>
          </button>
        </a>


        <a
          href={import.meta.env.PROD ? "/rss.txt" : "/rss"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="dark:text-white h-10 w-10 flex justify-center rounded-xl transition-opacity hover:opacity-70 items-center"
            type="button"
          >
            <svg
              class="dark:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <title>RSS link</title>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
};
