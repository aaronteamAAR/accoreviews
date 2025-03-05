export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "subTitle", title: "Subtitle", type: "string" },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    { name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } },
    { name: "category", title: "Category", type: "string" },
    { name: "readingTime", title: "Reading Time (minutes)", type: "number" },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
    {
      name: "subBlogs", 
      title: "Featured Products",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", title: "Product Title", type: "string" },
          { name: "description", title: "Description", type: "text" },
          { name: "price", title: "Price", type: "string" }, 
          { name: "img", title: "Image", type: "image", options: { hotspot: true } }, 
          { name: "shopLink", title: "Shop Link", type: "url" }, 
        ],
      }],
    },
  ],
};