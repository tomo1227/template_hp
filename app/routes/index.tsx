import { createRoute } from "honox/factory";
import { getPosts } from "../components/feature/blogs/sorts";
import { ArticleListItem } from "../components/feature/blogs/AritclesListItems";
import { Fragment } from "hono/jsx/jsx-runtime";

export default createRoute((c) => {
  const posts = getPosts();
  console.log("posts:", posts)
  console.log("c:", c)
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
    </div>
  );
});
