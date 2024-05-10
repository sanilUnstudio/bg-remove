import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "ns2szmd1",
    apiVersion: '2022-03-07',
    dataset: 'production',
    useCdn: false,
});

const builder = ImageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}