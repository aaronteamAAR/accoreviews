/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_CCOGXrug.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_qool2awm.mjs';
import { g as getBlogPostBySlug } from '../../chunks/sanityQueries_DPoIersC.mjs';
import { toHTML } from '@portabletext/to-html';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const blog = await getBlogPostBySlug(slug);
  if (!blog) {
    return new Response(null, { status: 404 });
  }
  const bodyHTML = toHTML(blog.body || []);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": `${blog.title} - Accoreviews`, "data-astro-cid-4sn4zg3r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1440px] font-sans mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12" data-astro-cid-4sn4zg3r> <a href="/blog" class="inline-block mb-8" data-astro-cid-4sn4zg3r> <span class="h-11 w-11 rounded-full bg-[var(--color-secondary-2)] hover:bg-[var(--color-secondary-2-dark)] transition-colors duration-300 flex justify-center items-center text-white" data-astro-cid-4sn4zg3r> <i class="fa-solid fa-arrow-left" data-astro-cid-4sn4zg3r></i> </span> </a> <div class="flex flex-col items-center mt-6" data-astro-cid-4sn4zg3r> <div class="w-full max-w-4xl px-4" data-astro-cid-4sn4zg3r> <h1 class="font-bold text-black text-[44px] sm:text-4xl lg:text-[44px] mb-4 break-words" data-astro-cid-4sn4zg3r> ${blog.title} </h1> <h3 class="font-semibold text-2xl sm:text-2xl text-[var(--color-text)] mb-6" data-astro-cid-4sn4zg3r> ${blog.subTitle || ""} </h3> </div> </div> <div class="mt-6 mb-8" data-astro-cid-4sn4zg3r> <img${addAttribute(blog.mainImage?.asset.url, "src")}${addAttribute(`Image for blog ${blog.slug}`, "alt")} class="w-full max-h-[80vh] object-cover rounded-lg" data-astro-cid-4sn4zg3r> </div> <div class="flex flex-col items-center space-y-6" data-astro-cid-4sn4zg3r> <div class="w-full max-w-5xl px-4" data-astro-cid-4sn4zg3r> <!-- READING TIME / DATE (uncomment if needed) --> <!-- <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-20 border-b border-gray-500 pb-4 text-[var(--color-text)] text-sm">
          <span>{blog.readingTime || 0} read</span>
          <span>{new Date(blog.publishedAt || new Date()).toLocaleDateString()}</span>
        </div> --> <div class="prose prose-lg max-w-none text-[19px] py-8 leading-relaxed text-gray-800" data-astro-cid-4sn4zg3r>${unescapeHTML(bodyHTML)}</div> </div> <!-- FEATURED PRODUCTS --> <div class="w-full max-w-5xl text-[19px] px-4 mt-8 space-y-8" data-astro-cid-4sn4zg3r> ${(blog.subBlogs || []).map((subBlog) => renderTemplate`<div class="flex flex-col space-y-4 pb-6 border-b last:border-b-0" data-astro-cid-4sn4zg3r> <h2 class="text-xl font-bold text-[#131A22]" data-astro-cid-4sn4zg3r> ${subBlog.title} </h2> <div class="w-full" data-astro-cid-4sn4zg3r> <img${addAttribute(subBlog.img?.asset.url, "src")}${addAttribute(subBlog.title, "alt")} class="w-full max-h-[500px] object-cover rounded-md" data-astro-cid-4sn4zg3r> </div> <p class="text-gray-800" data-astro-cid-4sn4zg3r>${subBlog.description}</p> <p class="text-gray-800" data-astro-cid-4sn4zg3r><b data-astro-cid-4sn4zg3r>Price:</b> ${subBlog.price}</p> <p data-astro-cid-4sn4zg3r> <a${addAttribute(subBlog.shopLink || "#", "href")} class="text-[#005276] underline w-full sm:w-auto text-start" data-astro-cid-4sn4zg3r>
Shop Now
</a> </p> </div>`)} </div> </div> </div> ` })} `;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/pages/blog/[slug].astro", undefined);

const $$file = "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
