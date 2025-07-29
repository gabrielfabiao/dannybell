import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            logo: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            cta: true,
            Menu: true,
          },
        },
        "blocks.info-block": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },
        "blocks.book-now": true,
      },
    },
  },
});

console.log("Home page query:", homePageQuery);

export async function getHomePage() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);

  url.search = homePageQuery;

  console.log("Fetching home page data from:", url);

  return await fetchAPI(url.href, { method: "GET" });
}
