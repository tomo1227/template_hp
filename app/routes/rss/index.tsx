import { createRoute } from "honox/factory";
import generatedRssFeed from '../../components/feature/blogs/rss/feed';

const feeds = async () => await generatedRssFeed();

export default createRoute(
  async (c) => {
    const rssFeed = await feeds();
    c.header('Content-Type', 'application/rss')
    return c.text(rssFeed, 200);
  }
);
