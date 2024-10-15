import type { Meta } from "../types";

// export default function Top() {
//   const posts = import.meta.glob<{ frontmatter: Meta }>("./posts/*.mdx", {
//     eager: true,
//   });
//   return (
//     <div class="mt-6 flex flex-col gap-12">
//       <h2>Posts</h2>
//       <ul class="article-list">
//         {Object.entries(posts).map(([id, module]) => {
//           if (module.frontmatter) {
//             return (
//               <li>
//                 <a href={`${id.replace(/\.mdx$/, "")}`}>
//                   {module.frontmatter.title}
//                 </a>
//               </li>
//             );
//           }
//         })}
//       </ul>
//     </div>
//   );
// }
import { Fragment } from "hono/jsx/jsx-runtime";
import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const posts = import.meta.glob<{ frontmatter: Meta }>("./posts/*.mdx", {
    eager: true,
  });
  return c.render(
    <div class={"mt-6 flex flex-col gap-12"}>
      {Object.entries(posts).map(([id, module]) => {
        if (module.frontmatter) {
          return (
            <li>
              <a href={`${id.replace(/\.mdx$/, "")}`}>
                {module.frontmatter.title}
              </a>
            </li>
          );
        }
      })}
    </div>
  );
});
