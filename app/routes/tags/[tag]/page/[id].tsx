import { createRoute } from "honox/factory";
import { ssgParams } from "hono/ssg";

import { Fragment } from "hono/jsx/jsx-runtime";
import { getPostsByPageFilteredByTag, getTags, getTotalPagesFilteredByTag } from "../../../../components/feature/blogs/sorts";
import { ArticleListItem } from "../../../../components/feature/blogs/ArticleListItems";

const pageSize = 10;

export default createRoute(
  ssgParams(async () => {
    const tags = getTags();

    return tags.map((tag) => ({
      tag: tag,
      id: (getTotalPagesFilteredByTag(pageSize, tag)).toString() || "1",
    }));
  }),
  async (c) => {
    const id = c.req.param('id');
    const tag = c.req.param('tag');
    const currentPage = Number(id)
    const totalPages = await getTotalPagesFilteredByTag(pageSize, tag);

    if (!id || id.trim() === "") {
      return c.notFound()
    }

    const posts = await getPostsByPageFilteredByTag(Number(id), pageSize, tag);

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
            <a href={`/tags/${tag}/page/${currentPage - 1}`} class="text-blue-500">
              前のページ
            </a>
          )}
          {currentPage < totalPages && (
            <a href={`/tags/${tag}/page/${currentPage + 1}`} class="text-blue-500">
              次のページ
            </a>
          )}
        </div>
      </div>
    );
  }
);
