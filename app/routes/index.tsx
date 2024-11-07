import { createRoute } from "honox/factory";
import { getTotalPages, getPostsByPage } from "../components/feature/blogs/sorts";
import { Fragment } from "hono/jsx/jsx-runtime";
import { ArticleListItem } from "../components/feature/blogs/ArticleListItems";

const pageSize = 10;

export default createRoute((c) => {
  const posts = getPostsByPage(1, pageSize);
  const currentPage = 1;
  const totalPages = getTotalPages(pageSize);

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
});
