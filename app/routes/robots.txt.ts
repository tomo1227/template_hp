import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const contents = `User-agent: * 
  Allow: /`;
  return c.text(contents, 200);
});
