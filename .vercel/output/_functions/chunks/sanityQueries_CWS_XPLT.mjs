import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "cdhpbfy3", // Fallback to hardcoded value if env var is missing
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2025-02-23",
  useCdn: process.env.NODE_ENV === "production", 
});

async function getBlogPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    subTitle,
    mainImage {
      asset -> {
        url
      }
    },
    "author": author->name,
    category,
    readingTime,
    publishedAt,
    tags,
    body,
    subBlogs[] {
      title,
      description,
      price,
      shopLink,
      img {
        asset -> {
          url
        }
      },
      rating,
      type
    }
  }`;
  return await sanityClient.fetch(query, { slug });
}

// Keep getBlogPosts for index.astro
async function getBlogPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset -> {
        url
      }
    },
    "author": author->name,
    category,
    readingTime
  }`;
  return await sanityClient.fetch(query);
}

export { getBlogPosts as a, getBlogPostBySlug as g };
