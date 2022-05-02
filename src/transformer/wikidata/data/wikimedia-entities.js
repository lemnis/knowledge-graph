/*
SELECT DISTINCT ?prop ?propLabel WHERE {
  ?prop wdt:P31/wdt:P279* wd:Q51118821.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
}
*/

export const WikimediaEntities = [
  // category for value same as Wikidata
  "P3734",
  // category for alumni of educational institution
  "P3876",
  // category for employees of the organization
  "P4195",
  // category contains
  "P4224",
  // category for films in this language
  "P5996",
  // category for members of a team
  "P6112",
  // category for eponymous categories
  "P6186",
  // member category
  "P6365",
  // related category
  "P7084",
  // category for the interior of the item
  "P7561",
  // category for ship name
  "P7782",
  // category for files created with program
  "P7861",
  // category for maps
  "P7867",
  // content partnership category
  "P8464",
  // category for honorary citizens of entity
  "P10280",
  // is a list of
  "P360",
  // has list
  "P2354",
  // appears in the heritage monument list
  "P2817",
  // template has topic
  "P1423",
  // topic's main template
  "P1424",
  // corresponding template
  "P2667",
  // Wikimedia language code
  "P424",
  // topic's main Wikimedia portal
  "P1151",
  // Wikimedia portal's main topic
  "P1204",
  // Wikimedia database name
  "P1800",
  // MediaWiki hooks used
  "P2377",
  // Wikidata SPARQL query equivalent
  "P3921",
  // Wikimedia username
  "P4174",
  // kinship equivalent in SPARQL at Wikidata
  "P4316",
  // template or module that populates category
  "P4329",
  // Wikimedia import URL
  "P4656",
  // Wikispore ID
  "P7721",
  // Wikimedia Incubator URL
  "P9748",
  // Wikidata language code
  "P9753",
  // Toolhub ID
  "P10025",
  // Lingua Libre ID
  "P10369",
  // on focus list of Wikimedia project
  "P5008",
  // maintained by WikiProject
  "P6104",
  // video
  "P10",
  // traffic sign
  "P14",
  // route map
  "P15",
  // image
  "P18",
  // flag image
  "P41",
  // audio
  "P51",
  // coat of arms image
  "P94",
  // signature
  "P109",
  // chemical structure
  "P117",
  // logo image
  "P154",
  // seal image
  "P158",
  // taxon range map image
  "P181",
  // bathymetry image
  "P207",
  // locator map image
  "P242",
  // astronomic symbol image
  "P367",
  // Commons category
  "P373",
  // pronunciation audio
  "P443",
  // orbit diagram
  "P491",
  // Gene Atlas Image
  "P692",
  // Commons gallery
  "P935",
  // page banner
  "P948",
  // spoken text audio
  "P989",
  // audio recording of the subject's spoken voice
  "P990",
  // document file on Wikimedia Commons
  "P996",
  // image of grave
  "P1442",
  // Commons Creator page
  "P1472",
  // monogram
  "P1543",
  // Commons Institution page
  "P1612",
  // detail map
  "P1621",
  // place name sign
  "P1766",
  // commemorative plaque image
  "P1801",
  // distribution map
  "P1846",
  // location map
  "P1943",
  // relief location map
  "P1944",
  // category for pictures taken with camera
  "P2033",
  // playing range image
  "P2343",
  // service ribbon image
  "P2425",
  // sectional view
  "P2713",
  // collage image
  "P2716",
  // icon
  "P2910",
  // image of design plans
  "P3311",
  // film poster
  "P3383",
  // nighttime view
  "P3451",
  // geoshape
  "P3896",
  // escutcheon image
  "P4004",
  // Sandbox-Tabular data
  "P4045",
  // Sandbox-Geographic shape
  "P4047",
  // weather history
  "P4150",
  // tabular population
  "P4179",
  // panoramic view
  "P4291",
  // photosphere image
  "P4640",
  // tabular software version
  "P4669",
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
  // related image
  "P6802",
  // creator's signature
  "P7457",
  // tabular case data
  "P8204",
  // based on tabular data
  "P8265",
  // view
  "P8517",
  // aerial view
  "P8592",
  // category for the exterior of the item
  "P8596",
  // twin town sign
  "P8667",
  // rank insignia
  "P8766",
  // category for the view from the item
  "P8933",
  // category for the view of the item
  "P8989",
  // Commons media contributed by
  "P9126",
  // named place on map
  "P9664",
  // image of entrance
  "P9721",
  // inscription image
  "P9906",
  // Museu da Pessoa History
  "P10032",
  // image with color chart
  "P10093",
  // original catalog description
  "P10358",
  // image set
  "P10696",
  // category's main topic
  "P301",
  // topic's main category
  "P910",
  // category combines topics
  "P971",
  // bodies of water basin category
  "P1200",
  // category for people born here
  "P1464",
  // category for people who died here
  "P1465",
  // category for films shot at this location
  "P1740",
  // list related to category
  "P1753",
  // category related to list
  "P1754",
  // category of people buried here
  "P1791",
  // category of associated people
  "P1792",
  // category for recipients of this award
  "P2517",
  // property usage tracking category
  "P2875",
  // category for value different from Wikidata
  "P3709",
  // category for value not in Wikidata
  "P3713",
];
