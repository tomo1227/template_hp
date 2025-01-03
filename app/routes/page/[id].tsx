import { createRoute } from "honox/factory";
import { ssgParams } from "hono/ssg";
import { getPostsByPage, getTotalPages } from "../../components/feature/blogs/sorts";
import { ArticleListItem } from "../../components/feature/blogs/ArticleListItems";
import { Fragment } from "hono/jsx/jsx-runtime";

const pageSize = 10;

export default createRoute(
  ssgParams(async () => {
    const totalPages = getTotalPages(pageSize);
    const ids = Array.from({ length: totalPages }, (_, i) => i + 1);

    return ids.map((id) => ({
      id: id.toString(),
    }));
  }),
  async (c) => {
    const id = c.req.param('id');
    const currentPage = Number(id)
    const totalPages = getTotalPages(pageSize);

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
