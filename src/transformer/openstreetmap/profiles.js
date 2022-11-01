const fullUrlRegex = /^https?|ftp|file:\/\//;

/** @type {Record<string, { name: string, icon: string, urlPrefix?: string }>} */
const tagToProfile = {
  website: { name: "Website", icon: "socials/website.svg" },
  url: { name: "Website", icon: "socials/website.svg" },

  // Socials
  instagram: { name: "Instagram", icon: "socials/instagram.svg" },
  "contact:instagram": { name: "Instagram", icon: "socials/instagram.svg" },
  facebook: { name: "Facebook", icon: "socials/facebook.svg" },
  "contact:facebook": { name: "Facebook", icon: "socials/facebook.svg" },
  twitter: { name: "Twitter", icon: "socials/twitter.svg" },
  "contact:twitter": { name: "Twitter", icon: "socials/twitter.svg" },
  youtube: { name: "Youtube", icon: "socials/youtube.svg" },
  "contact:youtube": { name: "Youtube", icon: "socials/youtube.svg" },
  "brand:youtube": { name: "Youtube", icon: "socials/youtube.svg" },

  // Other data sources
  wikidata: {
    name: "Wikidata",
    icon: "socials/wikidata.svg",
    urlPrefix: "https://www.wikidata.org/wiki/",
  },
  wikimedia_commons: {
    name: "Wikimedia Commons",
    icon: "socials/commons.svg",
    urlPrefix: "https://commons.wikimedia.org/wiki/",
  },
  wikipedia: {
    name: "Wikipedia",
    icon: "socials/wikipedia.svg",
    urlPrefix: "https://es.wikipedia.org/wiki/",
  },
  mapillary: {
    name: "Mapillary",
    icon: "socials/mapillary.svg",
    urlPrefix: "https://www.mapillary.com/app/?pKey=",
  },
};

export const tagKeys = Object.keys(tagToProfile);

/** @param {(string | null)[][]} factList */
export const getProfiles = (factList) => {
  return factList
    .filter(([key]) => key && tagKeys.includes(key))
    .map(([key, value]) => {
      if (!key) throw new Error(`Unexpected key given: ${key}`);

      const profile = tagToProfile[key];

      return {
        ...profile,
        link:
          (value && !value.match(fullUrlRegex) ? profile.urlPrefix || "" : "") +
          value,
      };
    });
};
