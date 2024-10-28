import { Fragment } from "hono/jsx/jsx-runtime";
import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import {
  getLatestPostsWithoutTargetPost,
  getPostByEntryName,
  getPosts,
} from "../../components/feature/blogs/sorts";
import { formattedDate } from "../../components/feature/blogs/date";
import { ArticleListItem } from "../../components/feature/blogs/AritclesListItems";
import { Profile } from "../../components/parts/Profile";
import { TitleIcon } from "../../components/parts/TitleIcon";
import { XIcon } from "../../components/parts/icons";
import { model as jaModel } from "budoux/dist/data/models/ja";
import { Parser } from "budoux/dist/parser";

const parser = new Parser(jaModel);

export default createRoute(
  ssgParams(() => {
    const posts = getPosts();
    return posts.map((post) => ({
      slug: post.entryName,
    }));
  }),
  async (c) => {
    const slug = c.req.param("slug");
    if (slug === ":slug") {
      c.status(404);
      return c.text("Not Found");
    }

    const post = getPostByEntryName(slug);
    const pageTitle = post?.frontmatter.title ?? "";
    const date = formattedDate(post?.frontmatter.createdDate ?? "");

    const latestPosts = getLatestPostsWithoutTargetPost(post?.entryName ?? "");
    const hasLatestPosts = latestPosts.length > 0;
    const splitedTitle = parser.parse(post?.frontmatter.title ?? "");
    const titleLen = pageTitle.length;
    return c.render(
      <div>
        <div class={"flex flex-col mb-10 items-center"}>
          <TitleIcon iconUrl={post?.frontmatter.iconUrl ?? ""} />
          <h1
            class={`text-center leading-tight text-3xl mb-0 mt-6 pb-2 font-bold flex justify-center md:auto-phrase ${
              titleLen > 20 && "md:w-[90%]"
            }`}
          >
            {splitedTitle}
          </h1>
          <time
            class={
              "flex justify-center text-gray-600 dark:text-gray-300 text-base"
            }
          >
            {date}
          </time>
        </div>
        <article class={"markdown"}>{post?.Component({})}</article>

        <div class={"mt-10 flex items-center justify-center gap-2"}>
          <span>この記事をシェアする</span>
          <a
            href={`https://twitter.com/intent/tweet?url=https://template-hp.pages.dev/entry/${
              post?.entryName
            }&text=${post?.frontmatter.title}${" - "}tomomon's blog`}
            referrerpolicy="no-referrer"
            class={"flex hover:opacity-70 transition-opacity"}
          >
            <XIcon size={26} />
          </a>
        </div>

        <Profile />
        {hasLatestPosts && (
          <div class={"flex flex-col gap-3"}>
            <p class={"font-bold"}>新着記事</p>
            <div class={"flex flex-col gap-4"}>
              {latestPosts.map((post) => (
                <Fragment key={post.entryName}>
                  <ArticleListItem
                    entryName={post.entryName}
                    createdDate={post.frontmatter.createdDate}
                    updatedDate={post.frontmatter.updatedDate}
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    iconUrl={post.frontmatter.iconUrl}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        )}
        {/* <Footer /> */}
      </div>,
      {
        title: pageTitle,
        entryName: slug,
        frontmatter: post?.frontmatter,
      }
    );
  }
);
