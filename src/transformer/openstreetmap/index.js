import { getProfiles, tagKeys } from "./profiles.js";
import { linkify } from "./rich-text.js";

const RICH_KEYS = {
  IMAGE: "image",
  NAME: "name",
};

const richKeys = [...Object.values(RICH_KEYS), ...tagKeys];

/**
 * @param {Document} data
 * @param {string} id
 * @returns {Schema}
 */
export const transform = (data, id) => {
  const factsRaw = Array.from(data.querySelectorAll("tag")).map((item) => [
    item.getAttribute("k"),
    item.getAttribute("v"),
  ]);

  const images = factsRaw
    .filter(([key]) => key === RICH_KEYS.IMAGE)
    .map(([, value]) => ({ link: value || "" }));
  const profiles = getProfiles(factsRaw);

  /** @type {[string | null, string | null][]} */
  const factLinked = factsRaw.map((item) => [
    item[0],
    item[1] ? linkify(item[1]) : "",
  ]);
  /** @type {[any, any][]} */
  const facts = factLinked.filter(
    ([key, value]) => key && value && !richKeys.includes(key)
  );

  return {
    heading: data.querySelector('tag[k="name"]')?.getAttribute("v") || "",
    images,
    facts,
    profiles,
    source: {
      link: `https://www.openstreetmap.org/${id}`,
      text: /*html*/ `Powered by OpenStreetMap <img src="./src/socials/openstreetmap.svg" width="16" height="16" />`,
    },
  };
};

/** @param {string} query OpenStreetMap ID to display */
export const openstreetmap = (query) =>
  fetch(`https://www.openstreetmap.org/api/0.6/${query}`)
    .then((r) => r.text())
    .then((text) => {
      const parser = new DOMParser();
      return parser.parseFromString(text, "text/xml");
    });
