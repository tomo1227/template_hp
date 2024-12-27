import { JSDOM } from "jsdom";

type BlogCardProps = {
  url: URL;
};

export async function BlogCard({ url }: BlogCardProps) {
  let ogpData = {
    title: "デフォルトタイトル",
    description: "説明がありません",
    ogpImage: "",
    url: "",
  };
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTPエラー: ${res.status}`);
    }
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // TODO:ogpのimageが存在しない時の画像を用意しておく
    ogpData = {
      title:
        document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content") || document.title,
      description:
        document
          .querySelector('meta[property="og:description"]')
          ?.getAttribute("content") || "",
      ogpImage:
        document
          .querySelector('meta[property="og:image"]')
          ?.getAttribute("content") || "",
      url:
        document
          .querySelector('meta[property="og:url"]')
          ?.getAttribute("content") || "",
    };
  } catch (error) {
    console.error("データの取得中にエラーが発生しました:", error);
  }
  return (
    <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; max-width: 400px; margin: 16px auto; background-color: white; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
      onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 6px 12px rgba(0, 0, 0, 0.15)';"
      onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)';">
      <a href={ogpData.url} target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: block; width: 100%;">
        {ogpData.ogpImage && (
          <img
            src={ogpData.ogpImage}
            alt={ogpData.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px 8px 0 0",
              marginBottom: "8px",
            }}
          />
        )}
        <h2 style="font-size: 1.5rem; font-weight: bold; margin: 8px 0; color: #111827;">{ogpData.title}</h2>
        <p style="font-size: 1rem; color: #6b7280; margin: 8px 0 0;">{ogpData.description}</p>
      </a>
    </div>
  );
}
