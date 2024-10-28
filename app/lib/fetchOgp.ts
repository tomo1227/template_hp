type OgpKey = "title" | "description" | "image" | "url";
type Ogp = {
  title: string;
  description: string;
  image: string;
  url: string;
  imageAlt?: string;
  favicon?: string;
};
export const fetchOgp = async (url: string) => {
  const ogp: Ogp = {
    title: "",
    description: "",
    image: "",
    url: "",
  };
  try {
    const response = await fetch(url);
    const html = await response.text();
    const host = new URL(url).host;
    ogp.favicon = `https://www.google.com/s2/favicons?domain=${host}&sz=20`;
    const metaTags = html.match(/<meta [^>]*>/g);

    if (metaTags) {
      metaTags.forEach((tag) => {
        const propMatch = tag.match(/property="og:([^"]*)"/);
        const contentMatch = tag.match(/content="([^"]*)"/);

        if (propMatch && contentMatch) {
          const key = propMatch[1];
          if (key === "image:alt") {
            ogp.imageAlt = contentMatch[1];
          } else if (isOgpKey(key)) {
            ogp[key] = contentMatch[1];
          }
        }
      });
    }
    return ogp;
  } catch (e) {
    console.error(e);
  }
};


function isOgpKey(key: any): key is OgpKey {
  return (
    key === "title" ||
    key === "image" ||
    key === "description" ||
    key === "url" ||
    key === "alt"
  );
}
