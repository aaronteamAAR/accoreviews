/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro } from '../chunks/astro/server_CCOGXrug.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CxQbwnXQ.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_DVJChC3g.mjs';
import { a as getBlogPosts } from '../chunks/sanityQueries_CWS_XPLT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BlogPopularComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPopularComponent;
  const { dataCategory } = Astro2.props;
  const allPosts = await getBlogPosts();
  const popularPosts = allPosts.filter((post) => post.category === dataCategory).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<div class="px-[150px] pt-[70px] s:px-[30px] sm:px-[40px] md:px-[60px]"> <h1 class="font-sans text-3xl font-normal text-[var(--color-text)] s:text-center sm:text-center">Popular from
<span class="italic font-thin bg-[var(--color-secondary-1)] px-2">${dataCategory}</span> </h1> <div class="grid s:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 grid-cols-3 gap-4 my-6"> ${popularPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, { "image": post.mainImage?.asset.url, "author": post.author, "readingTime": post.readingTime, "title": post.title, "category": post.category, "id": post.slug })}`)} </div> </div>`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/components/blogs/BlogPopularComponent.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Home - Accoreviews" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogPopularComponent", $$BlogPopularComponent, { "dataCategory": "Current deals" })} ` })}`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/pages/index.astro", undefined);

const $$file = "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
