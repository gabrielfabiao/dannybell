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
            menu: true,
          },
        },
        "blocks.header": {
          populate: {
            logo: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            navbarLink: true,
          },
        },
        "blocks.about-us": {
          populate: {
            image: {
              populate: {
                fields: ["url", "alternativeText"],
              },
            },
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
        "blocks.events-section": {
          populate: {
            pastEvents: {
              populate: {
                images: {
                  fields: ["url", "alternativeText"],
                },
              },
              fields: ["title", "date"],
            },
            futureEvent: true,
          },
        },
      },
    },
  },
});


export const weeklyMenuQuery = "";

export async function getHomePage() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);

  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

export async function getWeeklyMenu() {
  const path = "/api/weekly-menus";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);

  url.search = weeklyMenuQuery;

  return await fetchAPI(url.href, { method: "GET" });
}
