import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "cdhpbfy3", // Fallback to hardcoded value if env var is missing
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2025-02-23",
  useCdn: process.env.NODE_ENV === "production", // Use CDN in production, disable in dev for fresher data
});