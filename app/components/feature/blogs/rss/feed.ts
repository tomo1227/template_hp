import { Feed } from "feed";
import { getPosts } from "../sorts";
import { DEV_BLOG_URL } from "../../../../constants";
import { formattedDate } from "../date";

export default async function generatedRssFeed() {
  const posts = getPosts();

  const baseUrl = DEV_BLOG_URL;
  const date = new Date();

  const feed = new Feed({
    title: DEV_BLOG_URL,
    description: "Tomoki Otaのテックブログ",
    id: DEV_BLOG_URL,
    link: baseUrl,
    copyright: "© 2024 Tomoki Ota's Blog. All rights reserved.",
    updated: date,
    // feedLinks: {
    //   rss2: `${DEV_BLOG_URL}/rss/feed.xml`,
    //   json: `${DEV_BLOG_URL}/rss/feed.json`,
    // },
  });

  posts.forEach((post) => {
    feed.addItem({
      id: `${DEV_BLOG_URL}/posts/${post.entryName}/`,
      title: post.frontmatter.title,
      link: `${DEV_BLOG_URL}/posts/${post.entryName}/`,
      date: new Date(formattedDate(post.frontmatter.createdDate)),
    });
  });
  return feed.rss2();
  // fs.mkdirSync("/static/rss", { recursive: true });
  // fs.writeFileSync("/static/rss/feed.xml", feed.rss2());
  // fs.writeFileSync("/static/rss/feed.json", feed.json1());
  // feed.items = feed.items.slice(0, 3);
  // fs.writeFileSync("/static/rss/last_three_feed.json", feed.json1());
}
