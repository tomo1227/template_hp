import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const contents = `User-agent: * 
Sitemap: https://tomomon-blog.pages.dev/sitemap.xml`;
  return c.text(contents, 200);
});
