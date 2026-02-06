import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./config";

// Only create client if projectId is configured
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

// Helper to safely fetch data
export async function sanityFetch<T>(
  query: string,
  params?: { [key: string]: string }
): Promise<T | null> {
  if (!client) {
    return null;
  }
  try {
    if (params) {
      return await client.fetch<T>(query, params);
    }
    return await client.fetch<T>(query);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}
