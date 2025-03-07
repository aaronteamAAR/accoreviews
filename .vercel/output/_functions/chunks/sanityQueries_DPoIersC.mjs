import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: "cdhpbfy3", 
  dataset: "production",
  apiVersion: "2025-02-23", 
  useCdn: true, 
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
