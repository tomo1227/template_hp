import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const contents = `User-agent: * 
Sitemap: https://pathy.jp/sitemap.xml`;
  return c.text(contents, 200);
});
