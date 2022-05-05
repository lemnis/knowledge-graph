import { base } from "../constants.js";
import { ExternalId } from "./wikidata/data/external-id.js";
import { WikimediaEntities } from "./wikidata/data/wikimedia-entities.js";
import { GlobeCoordinate } from "./wikidata/data/globe-coordinate.js";
import { OfTopic } from "./wikidata/data/of-topic.js";
import { CategoryProperties } from "./wikidata/data/category-properties.js";

const Socials = {
  Wikipedia: {
    name: "Wikipedia",
    icon: "socials/wikipedia.svg",
  },
  P856: {
    name: "Website",
    icon: "socials/imdb.svg",
  },
  ...[...Object.entries(ExternalId)]
    .filter((i) => i[1].ignore !== true && i[1].icon)
    .reduce((acc, a) => Object.assign(acc, { [a[0]]: a[1] }), {}),
};

const Vikidia = {
  en: "P7829",
  fr: "P7818",
  it: "P7822",
  es: "P7827",
  eu: "P7832",
  am: "P7841",
  de: "P7843",
  ca: "P9123",
  ru: "P9124",
};

const VideoProperties = [
  // video
  "P10",
];

const AudioProperties = [
  // audio
  "P51",
  // pronunciation audio
  "P443",
  // spoken text audio
  "P989",
  // audio recording of the subject's spoken voice
  "P990",
];

const ImageProperties = [
  // traffic sign
  "P14",
  // route map
  "P15",
  // image
  "P18",
  // flag image
  'P41',
  // coat of arms image
  'P94',
  // signature
  "P109",
  // chemical structure
  "P117",
  // logo image
  "P154",
  // // seal image
  // 'P158',
  // taxon range map image
  "P181",
  // bathymetry image
  "P207",
  // // locator map image
  // 'P242',
  // astronomic symbol image
  "P367",
  // Sandbox-CommonsMediaFile
  "P368",
  // orbit diagram
  "P491",
  // Gene Atlas Image
  "P692",
  // page banner
  "P948",
  // document file on Wikimedia Commons
  "P996",
  // image of grave
  "P1442",
  // monogram
  "P1543",
  // detail map
  "P1621",
  // place name sign
  "P1766",
  // commemorative plaque image
  "P1801",
  // distribution map
  "P1846",
  // // location map
  // 'P1943',
  // relief location map
  "P1944",
  // playing range image
  "P2343",
  // service ribbon image
  "P2425",
  // sectional view
  "P2713",
  // // collage image
  // 'P2716',
  // icon
  "P2910",
  // label in sign language
  "P2919",
  // sheet music
  "P3030",
  // // image of design plans
  // "P3311",
  // film poster
  "P3383",
  // nighttime view
  "P3451",
  // escutcheon image
  "P4004",
  // panoramic view
  "P4291",
  // photosphere image
  "P4640",
  // 3D model
  "P4896",
  // winter view
  "P5252",
  // schematic
  "P5555",
  // image of interior
  "P5775",
  // sail emblem
  "P5962",
  // stroke order
  "P6655",
  // Wikidata property example for media
  "P6685",
  // related image
  "P6802",
  // extracted from
  "P7009",
  // name (image
  "P7407",
  // code (image
  "P7415",
  // image of backside
  "P7417",
  // image of frontside
  "P7418",
  // image with frame
  "P7420",
  // creator's signature
  "P7457",
  // ex-libris
  "P8195",
  // molecular model or crystal lattice model
  "P8224",
  // traffic sign template image
  "P8505",
  // size comparison diagram
  "P8512",
  // view
  "P8517",
  // aerial view
  'P8592',
  // twin town sign
  "P8667",
  // rank insignia
  "P8766",
  // small logo or icon
  "P8972",
  // image of entrance
  "P9721",
  // inscription image
  "P9906",
  // Museu da Pessoa History
  "P10032",
  // image with color chart
  "P10093",
  // reference image
  "P10253",
  // cantilever sign
  "P10544",
  // image set
  "P10696",
];

const Ignore = [
  // Google Knowledge Graph
  "P2671",
  // Freebase ID
  "P646",
  // Wikidata usage instructions
  "P2559",
  "P373",
  "P7763",
  "P31",
  "P8672",
  "P3417",
  "P1741",
  "P2847",
  // Coat of arms image
  "P94",
  // Collage Image
  "P2716",
  // Locator map image
  "P242",
  // Location map
  "P1943",
  // Image of design plans
  "P3311",
  ...CategoryProperties,
];

/** @param {{ [key: string]: { value: string } }} props */
const getLink = ({
  propFormat,
  valueLabel,
  propType,
  value,
  valueSitelink,
}) => {
  if (propFormat) {
    return propFormat.value.replace("$1", valueLabel.value);
  } else if (propType?.value === "http://wikiba.se/ontology#Url") {
    return valueLabel.value;
  } else if (propType?.value === "http://wikiba.se/ontology#WikibaseItem") {
    if (valueSitelink) return valueSitelink.value;
    return value.value;
  }

  return;
};

/** @param {{ [key: string]: { value: string } }} item */
const getValue = (item) => {
  const href = getLink(item);
  const value = item.valueSitelinkName?.value || item.valueLabel.value;
  return href ? /*html*/ `<a target="_blank" href="${href}">${value}</a>` : value;
};

/**
 * @param {{ results: { bindings: Record<string, {value: string, datatype?: string }>[]}}} data
 * @param {string} id
 */
export const transform = (data, id, lang = "en") =>
  data.results.bindings.reduce(
    /**
     *
     * @param {import("../types.js").Schema} acc
     * @param {*} item
     * @param {*} i
     * @param {*} arr
     * @returns
     */
    (acc, item, i, arr) => {
      const propLabel =
        item.propLabel.value.slice(0, 1).toUpperCase() +
        item.propLabel.value.slice(1);

      // If it has profiles, add wikidata as first item on last iteration.
      if (
        item.itemSitelink?.value &&
        acc.profiles.length &&
        i + 1 === arr.length
      ) {
        acc.body.link = item.itemSitelink.value;
        acc.profiles.unshift({
          ...Socials.Wikipedia,
          link: item.itemSitelink.value,
        });
      }

      if (
        item.valueLabel.value.match(/^Q[0-9]+$/) ||
        Ignore.some((i) => item.prop.value.endsWith("/" + i))
      )
        return acc;

      if (ImageProperties.some((i) => item.prop.value.endsWith(i))) {
        const image = item.value.value
          .replace("http://commons.wikimedia.org/wiki/Special:FilePath/", "")
          .replace(/%20/g, "+");
        acc.images.push({
          link: `https://commons.wikimedia.org/w/thumb.php?width=1000&f=${image}`,
        });
      } else if (item.prop.value.endsWith("/P856")) {
        acc.website = item.valueLabel.value;
      } else if (item.prop.value.endsWith("/P625")) {
        // TODO
      } else if (
        item.prop.value &&
        Object.keys(Socials).some((i) => item.prop.value.endsWith(i))
      ) {
        acc.profiles.push({
          ...[...Object.entries(Socials)].find(([id]) =>
            item.prop.value.endsWith(id)
          )?.[1],
          link: getLink(item),
        });
      } else if (
        item.prop.value &&
        Object.values(Vikidia).some((i) => item.prop.value.endsWith(i))
      ) {
        const vikidiaLang = [...Object.entries(Vikidia)].find((i) =>
          item.prop.value.endsWith(i[1])
        )?.[0];
        if (vikidiaLang === lang) {
          acc.profiles.push({
            name: "Vikipeda",
            icon: "./socials/vikidia.png",
            link: getLink(item),
          });
        }
      } else if (
        // Ignore unmapped properties of specific type
        [
          ...[...Object.entries(ExternalId)]
            .filter(([, item]) => item.ignore === true)
            .map(([key]) => key),
          ...WikimediaEntities,
          ...GlobeCoordinate,
          ...OfTopic,
        ].some((property) => item.prop.value.endsWith(property))
      ) {
      } else if (
        item.value.datatype === "http://www.w3.org/2001/XMLSchema#dateTime"
      ) {
        const date = new Date(item.valueLabel.value);
        acc.facts[propLabel] = isNaN(date) ? item.valueLabel.value : date.toDateString();
      } else if (acc.facts[propLabel]) {
        acc.facts[propLabel] += `, ${getValue(item)}`;
      } else {
        acc.facts[propLabel] = getValue(item);
      }

      return acc;
    },
    {
      heading: data.results.bindings?.[0].itemLabel?.value,
      images: [],
      body: {
        source: "wikipedia",
        text: data.results.bindings?.[0].itemDescription?.value,
      },
      facts: {},
      profiles: [],
      source: {
        link: `https://www.wikidata.org/wiki/${id}`,
        text: /*html*/ `Powered by Wikidata <img src="${new URL(
          "assets/wikidata.svg",
          base
        )}" width="32" height="16" />`,
      },
    }
  );

/**
 * @param {string} id
 * @param {string} language
 */
export const wikidata = async (id, language = "en") => {
  const response = await fetch(
    "https://query.wikidata.org/sparql?query=" +
      encodeURIComponent(/*sql*/ `SELECT DISTINCT
          ?itemLabel
          ?itemDescription
          ?itemSitelink
          ?prop
          ?propLabel
          ?propFormat
          ?propType
          ?value
          ?valueLabel
          ?valueSitelink
          ?valueSitelinkName
        WHERE {
          VALUES ?item { wd:${id} }
          ?item ?key ?statement.
          ?statement p:* ?value.
          ?prop wikibase:directClaim ?key.
          ?prop wikibase:propertyType ?propType.
          FILTER(!isLiteral(?value) || lang(?value) = "" || langMatches(lang(?value), "${language}"))
          SERVICE wikibase:label { bd:serviceParam wikibase:language "${language}". }
          OPTIONAL {
            ?itemSitelink schema:about ?item;
                          schema:isPartOf <https://${language}.wikipedia.org/>;
          }
          OPTIONAL {
            ?valueSitelink  schema:about ?value;
                            schema:isPartOf <https://${language}.wikipedia.org/>;
                            schema:name ?valueSitelinkName;
          }
          OPTIONAL { ?prop wdt:P1630 ?propFormat.}
      }`),
    {
      headers: {
        Accept: "application/sparql-results+json",
      },
    }
  );

  return response.json();
};
