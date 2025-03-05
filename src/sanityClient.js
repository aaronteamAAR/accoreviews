import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "cdhpbfy3", 
  dataset: "production",
  apiVersion: "2025-02-23", 
  useCdn: true, 
});