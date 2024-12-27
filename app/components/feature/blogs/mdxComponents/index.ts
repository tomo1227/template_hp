import type { MDXComponents } from "mdx/types";
import { AnchorLink } from "./anchorLink";
import { ArticleImage } from "./articleImage";
import { BlogCard } from "./blogCard";
import { Accordion } from "./accordion";

export function useMDXComponents(): MDXComponents {
  const components = {
    img: ArticleImage,
    BlogCard: BlogCard,
    a: AnchorLink,
    Accordion: Accordion
  };
  return components;
}
