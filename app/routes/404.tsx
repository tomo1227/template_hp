import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div class="mt-6 flex flex-col justify-center items-center h-32">
      <h1 class="text-6xl py-6">404 Not Found</h1>
      <h2 class="text-3xl">お探しのページが見つかりませんでした。</h2>
    </div>
  );
}
);
