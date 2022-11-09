import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "vi2gkbhk",
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);