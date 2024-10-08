// @ts-ignore
import styles from "../static/tailwind.css?url";

export function Hello() {
  return (
    <html>
      <head>
        <link href={styles} rel="stylesheet" />
      </head>
      <body>
        <div>
          <h1 class="text-2xl text-red-600 font-bold underline">
            Hello, World!
          </h1>
          <p>My First Page</p>
          <p>a</p>
        </div>
      </body>
    </html>
  );
}
