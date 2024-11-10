import { createRoute } from "honox/factory";
import { getPostsByPageFilteredByTag, getPostsFilteredByTag, getTags, getTotalPagesFilteredByTag } from "../../components/feature/blogs/sorts";
import { Fragment } from "hono/jsx/jsx-runtime";
import { TitleIcon } from "../../components/parts/TitleIcon";
import { ssgParams } from "hono/ssg";
import { ArticleListItem } from "../../components/feature/blogs/ArticleListItems";

const pageSize = 10;

export default createRoute(
  ssgParams(async () => {
    const tags = getTags();
    return tags.map((tag) => ({
      tag: tag,
    }));
  }),
  async (c) => {
    const currentPage = 1;
    const tag = c.req.param('tag');
    if (!tag || tag.trim() === "") {
      return c.notFound()
    }
    const totalPages = await getTotalPagesFilteredByTag(pageSize, tag);

    const posts = await getPostsByPageFilteredByTag(1, pageSize, tag);

    if (posts.length === 0) {
      return c.notFound()
    }

    return c.render(
      <div>
        <div class={"flex flex-col mb-10 items-center"}>
          <h1
            class={`text-center leading-tight text-3xl mb-0 mt-6 pb-2 font-bold flex justify-center items-center space-x-2 flex-wrap`}
          >
            <TitleIcon iconUrl="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Pushpin/Flat/pushpin_flat.svg" size={30} />
            &nbsp;{tag}
          </h1>
        </div>
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
      </div>
    );
  }
);
