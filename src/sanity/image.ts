import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = client ? imageUrlBuilder(client) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) {
    // Return a mock builder that returns empty strings
    const mockBuilder = {
      width: () => mockBuilder,
      height: () => mockBuilder,
      url: () => "",
    };
    return mockBuilder;
  }
  return builder.image(source);
}
