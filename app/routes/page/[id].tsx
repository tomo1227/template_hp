import { createRoute } from "honox/factory";
import { ssgParams } from "hono/ssg";
import { getPostsByPage, getTotalPages } from "../../components/feature/blogs/sorts";
import { ArticleListItem } from "../../components/feature/blogs/ArticleListItems";
import { Fragment } from "hono/jsx/jsx-runtime";

export default createRoute(
  ssgParams(async () => {
    const maxPage = getTotalPages();
    const ids = Array.from({ length: maxPage }, (_, i) => i + 1);

    return ids.map((id) => ({
      id: id.toString(),
    }));
  }),
  async (c) => {
    const pageSize = 10;
    const id = c.req.param('id');
    const currentPage = Number(id)
    const totalPages = getTotalPages();

    if (!id || id.trim() === "") {
      return c.notFound()
    }

    const posts = await getPostsByPage(Number(id), pageSize);

    if (posts.length === 0) {
      return c.notFound()
    }

    return c.render(
      <div class={"mt-6 flex flex-col gap-12"}>
        {posts.map((post) => (
          <Fragment key={post.entryName}>
            <ArticleListItem
              title={post.frontmatter.title}
              createdDate={post.frontmatter.createdDate}
              updatedDate={post.frontmatter.updatedDate}
              description={post.frontmatter.description}
              iconUrl={post.frontmatter.iconUrl}
              tags={post.frontmatter.tags}
              entryName={post.entryName}
            />
          </Fragment>
        ))}
        <div class="flex justify-center mt-8 gap-4">
          {currentPage > 1 && (
            <a href={`/page/${currentPage - 1}`} class="text-blue-500">
              前のページ
            </a>
          )}
          {currentPage < totalPages && (
            <a href={`/page/${currentPage + 1}`} class="text-blue-500">
              次のページ
            </a>
          )}
        </div>
      </div>
    );
  }
);
