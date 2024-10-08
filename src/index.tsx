import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { Hello } from "./components/Hello";
// import "../dist/output.css";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));
// app.use("/favicon.ico", serveStatic({ path: "./static/favicon.ico" }));
app.get("/", async (c) => {
  return c.render(<Hello></Hello>);
});

export default app;
