/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_CCOGXrug.mjs';
import 'kleur/colors';
import { a as $$SocialIcons, $ as $$Layout } from '../chunks/Layout_DK7VvmdS.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$ContactUsBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-wwe7bprx> <button class="h-16 px-5 rounded-xl bg-[var(--color-secondary-2)] transition-colors duration-500 text-white" data-astro-cid-wwe7bprx>Contact us</button> </div> `;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/components/ContactUsBtn.astro", undefined);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "About Us - Accoreviews" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid font-sans grid-cols-2 s:grid-cols-1 sm:grid-cols-1 grid-rows-2 gap-x-5 gap-y-10 s:gap-y-2.5 sm:gap-y-1 sm:gap-x-1 py-20 s:py-10 sm:py-14 px-24 s:px-[30px] sm:px-[40px] md:px-[50px] text-[var(--color-text)]"> <div class=" sm:h-fit"> <img src="https://res.cloudinary.com/dumilooyu/image/upload/v1741345736/cv4mptugj4yjzbtlra5x.jpg" alt="Accoreviews 2025." class="h-full w-full object-cover rounded-md"> </div> <div class="p-4 space-y-5 s:space-y-2.5 sm:h-fit"> <h4 class="font-semibold text-4xl s:text-xl sm:text-2xl font-sans text-[var(--color-secondary-2)]">Who We Are</h4> <p>At Acco Shops, we’re passionate about finding the best deals so you don’t have to! We bring you top-rated tech, office, and home gadgets, along with unexpected finds that make life easier—all at the best prices.</p> <p>Our goal is simple: help you save money while discovering products you’ll love. Whether it’s a must-have gadget or a budget-friendly essential, we curate the best Amazon deals so you can shop smarter.</p> ${renderComponent($$result2, "ContactUsBtn", $$ContactUsBtn, {})} </div> <div class="p-4 space-y-5 s:space-y-2.5 s:order-4 sm:order-4"> <!-- <h4 class="font-semibold text-4xl font-sans">Who We Are</h4> --> <p>We bring you handpicked deals that offer real value, affordable finds to fit every lifestyle, and a seamless shopping experience with direct Amazon links. J</p> <p>We focus on bringing you affordable finds that fit every lifestyle, from must-have tech to home and office essentials.</p> <p>Shopping with us is seamless and hassle-free, thanks to our direct Amazon links, making it easier than ever to discover and purchase top-rated products. Join our growing community of smart shoppers and start saving today! </p> ${renderComponent($$result2, "SocialIcons", $$SocialIcons, {})} </div> <div class="s:order-3 sm:order-3"> <img src="https://res.cloudinary.com/dumilooyu/image/upload/v1741345621/luxaxzetzeozbygjtpar.jpg" alt="Accoreviews 2025." class="h-full w-full object-cover rounded-md"> </div> </div> ` })}`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/pages/about.astro", undefined);

const $$file = "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
