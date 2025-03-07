import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, f as renderHead, b as createAstro, g as renderSlot } from './astro/server_CCOGXrug.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { ChakraProvider, useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, Flex, DrawerCloseButton, DrawerBody } from '@chakra-ui/react';

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const icons = [
    { iconClass: "fa-brands fa-facebook-f", link: "https://web.facebook.com/acco.shopss/" },
    { iconClass: "fa-brands fa-x-twitter", link: "https://www.x.com" },
    { iconClass: "fa-brands fa-instagram", link: "https://www.instagram.com/acco.shopss?igsh=a29ha3o3bTR3NnNx&utm_source=qr" },
    { iconClass: "fa-brands fa-pinterest-p", link: "https://www.pinterest.com" },
    { iconClass: "fa-brands fa-youtube", link: "https://www.youtube.com" },
    { iconClass: "fa-solid fa-house", link: "/" }
  ];
  return renderTemplate`<!-- ICONS -->${maybeRenderHead()}<div class="px-10 sm:px-0 s:px-0"> <div class="flex items-center gap-3 my-3 text-xl text-[var(--color-text)]"> ${icons.map((icon) => renderTemplate`<span class="h-6 w-6 hover:text-[var(--color-secondary-2)] hover:cursor-pointer"> <a${addAttribute(icon.link, "href")}><i${addAttribute(icon.iconClass, "class")}></i></a> </span>`)} </div> </div>`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/components/SocialIcons.astro", undefined);

const ChakraWrapper = ({ children }) => {
  return /* @__PURE__ */ jsx(ChakraProvider, { children });
};

const icons = [
  { iconClass: "fa-brands fa-facebook-f", link: "https://www.faceboox.com" },
  { iconClass: "fa-brands fa-x-twitter", link: "https://www.x.com" },
  { iconClass: "fa-brands fa-instagram", link: "https://www.instagram.com" },
  { iconClass: "fa-brands fa-pinterest-p", link: "https://www.pinterest.com" },
  { iconClass: "fa-brands fa-youtube", link: "https://www.youtube.com" },
  { iconClass: "fa-solid fa-house", link: "/" }
];
const SidebarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const links = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "All Blogs", link: "/blog" },
    { id: 3, text: "About us", link: "/about" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: onOpen, variant: "ghost", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-bars text-2xl hover:text-[var(--color-secondary-2)]" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Drawer, { placement: "left", onClose, isOpen, children: [
      /* @__PURE__ */ jsx(DrawerOverlay, {}),
      /* @__PURE__ */ jsxs(
        DrawerContent,
        {
          bg: "white",
          width: "container.sm",
          children: [
            /* @__PURE__ */ jsx(DrawerHeader, { children: /* @__PURE__ */ jsxs(Flex, { align: "center", gap: 2, justify: "space-between", width: "full", margin: 20, children: [
              /* @__PURE__ */ jsxs("div", { className: "h-10 w-3/4 border border-blackAlpha-500 flex items-center gap-2 px-2.5 bg-white hover:border-gray-600", children: [
                /* @__PURE__ */ jsx("i", { className: "fa-solid fa-magnifying-glass text-xl" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search",
                    className: "outline-none w-full placeholder:text-gray-400 text-gray-500 text-sm capitalize"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(DrawerCloseButton, { size: "xl" })
            ] }) }),
            /* @__PURE__ */ jsxs(DrawerBody, { children: [
              /* @__PURE__ */ jsx("ul", { className: "space-y-5", children: links.map((link) => /* @__PURE__ */ jsx("li", { className: "text-[var(--color-text)] h-10 w-40 px-3 flex items-center", children: /* @__PURE__ */ jsx("a", { href: link.link, children: link.text }) }, link.id)) }),
              /* @__PURE__ */ jsx("div", { className: "mx-10 sm:mx-5 s:mx-5 border-b border-[var(--color-secondary-2)]", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 my-3 text-xl text-[var(--color-text)]", children: icons.map((icon, index) => /* @__PURE__ */ jsx("span", { className: "h-6 w-6 hover:text-[var(--color-secondary-2)] hover:cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: icon.link, children: /* @__PURE__ */ jsx("i", { className: icon.iconClass }) }) }, index)) }) })
            ] })
          ]
        }
      )
    ] }) })
  ] });
};

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { id: 1, text: "Popular", link: "/" },
    { id: 2, text: "All Blogs", link: "/blog" },
    { id: 3, text: "About us", link: "/about" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between items-center px-10 border-b border-gray-300 py-2.5 sticky top-0"> <!-- SIDE BAR --> <div> ${renderComponent($$result, "ChakraWrapper", ChakraWrapper, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SideBarDrawer", SidebarDrawer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/components/SideBarDrawer", "client:component-export": "default" })} ` })} </div> <!-- NAV LINKS --> <ul class="flex gap-10 s:hidden"> ${links.map((link) => renderTemplate`<li class="font-normal  text-gray-500 hover:text-[var(--color-secondary-2)]"> <a${addAttribute(link.link, "href")}>${link.text}</a> </li>`)} </ul> <!-- SEARCH --> <div> <i class="fa-solid fa-magnifying-glass text-2xl"></i> </div> </div>`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/components/Navigation.astro", undefined);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <div class="s:hidden sm:hidden"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, {})} </div> <div class="flex justify-center my-0- items-center h-40 s:h-10 s:my-10"> <a href="/"> <img src="../../public/accobwn.png" alt="Accoreviews Logo" class="max-w-full h-[80px] object-contain"> </a> </div> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div>`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/components/Header.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-20 w-full border-t border-gray-300 py-2.5 flex justify-between items-center px-16 s:px-5 s:text-center sm:px-6"> <span class="font-normal font-sans s:text-xs">
&copy;Copyright accoreviews 2025. All rights reserved.
</span> <img src="../../public/accobwn.png" alt="Accoreviews Logo" class="h-11 w-auto s:hidden"> </div>`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/components/Footer.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle } = Astro2.props;
  const path = Astro2.url.pathname;
  console.log(path);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dygn4o3nv/image/upload/c_crop,w_350,h_350/v1738229906/Add_a_heading_hblhik.png"><link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "ChakraProvider", ChakraProvider, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} </body></html>`;
}, "C:/Users/Aaron/Documents/codes/accoblog/accoreviews/src/layouts/Layout.astro", undefined);

export { $$Layout as $, $$SocialIcons as a };
