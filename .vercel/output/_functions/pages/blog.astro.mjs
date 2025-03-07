/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CCOGXrug.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DK7VvmdS.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_DVJChC3g.mjs';
import { a as getBlogPosts } from '../chunks/sanityQueries_CWS_XPLT.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getBlogPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Blogs - Accoreviews" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="text-center font-sans text-xl font-semibold mt-10">Blogs</h3> <div class="grid s:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 grid-cols-3 gap-y-8 gap-x-4 my-6 px-[120px] s:px-[30px] sm:px-[40px] md:px-[60px]"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "image": post.mainImage?.asset.url, "author": post.author, "readingTime": post.readingTime, "title": post.title, "category": post.category, "id": post.slug })}`)} </div> ` })}`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/pages/blog/index.astro", undefined);

const $$file = "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
