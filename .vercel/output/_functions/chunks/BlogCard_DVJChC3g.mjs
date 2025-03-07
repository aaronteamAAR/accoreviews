import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_CCOGXrug.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const {
    id: slug,
    // Rename id to slug (or keep as id if you prefer)
    title,
    author,
    image,
    category,
    readingTime
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-2.5 font-sans"> <div class="group relative"> <div class="absolute top-6 left-6 py-1.5 px-2.5 bg-[var(--color-secondary-2)] text-xs text-white hidden group-hover:block transition-all duration-1000">${category}</div> <a${addAttribute(`/blog/${slug}`, "href")}> <img${addAttribute(image, "src")}${addAttribute(`Image from Blog post ${category} ${slug}`, "alt")} class="w-full h-[300px] object-cover hover:cursor-pointer"> </a> </div> <div class="flex flex-col justify-between h-[80px]"> <h4 class="font-normal text-lg my-3 text-gray-500 hover:text-[var(--color-secondary-2)] hover:cursor-pointer"><a${addAttribute(`/blog/${slug}`, "href")}>${title}</a></h4> <div class="flex gap-1.5 items-center text-xs justify-end"> <span>By ${author}</span> <span class="h-1 w-1 rounded-full bg-[var(--color-secondary-2)]"></span> <span class="text-gray-600">${readingTime} mins read</span> </div> </div> </div>`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/components/blogs/BlogCard.astro", undefined);

export { $$BlogCard as $ };
