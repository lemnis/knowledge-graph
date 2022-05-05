/*
Base query:
SELECT DISTINCT ?prop ?propLabel WHERE {
  ?prop wikibase:propertyType wikibase:ExternalId.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
} ORDER BY ?prop

Ignore deprecated:
SELECT DISTINCT ?prop ?icon WHERE {
  ?prop wikibase:propertyType wikibase:ExternalId.
  ?prop wdt:P31/wdt:P279* wd:Q60457486.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
ORDER BY (?prop)
*/

/** @type {Record<string, { ignore?: boolean, name?: string, icon?: string }>} */
export const ExternalId = {
  // ISBN-13
  P212: { ignore: true },
  // ISNI
  P213: { ignore: true },
  // VIAF ID
  P214: { ignore: true },
  // ISO 639-1 code
  P218: { ignore: false },
  // ISO 639-2 code
  P219: { ignore: false },
  // ISO 639-3 code
  P220: { ignore: false },
  // ISO 639-6 code (discontinued)
  P221: { ignore: true },
  // GND ID
  P227: { ignore: true },
  // CAS Registry Number
  P231: { ignore: true },
  // EC number
  P232: { ignore: true },
  // InChI
  P234: { ignore: true },
  // InChIKey
  P235: { ignore: true },
  // ISSN
  P236: { ignore: true },
  // OCLC control number
  P243: { ignore: true },
  // Library of Congress authority ID
  P244: { ignore: true },
  // Union List of Artist Names ID
  P245: { ignore: true },
  // COSPAR ID
  P247: { ignore: true },
  // ATC code
  P267: { ignore: true },
  // Bibliothèque nationale de France ID
  P268: { ignore: true },
  // IdRef ID
  P269: { ignore: true },
  // CALIS ID
  P270: { ignore: true },
  // CiNii author ID (books)
  P271: { ignore: true },
  // GOST 7.75–97 code
  P278: { ignore: true },
  // ISO 3166-1 alpha-2 code
  P297: { ignore: false },
  // ISO 3166-1 alpha-3 code
  P298: { ignore: false },
  // ISO 3166-1 numeric code
  P299: { ignore: false },
  // ISO 3166-2 code
  P300: { ignore: false },
  // EE breed number
  P303: { ignore: true },
  // IETF language tag
  P305: { ignore: true },
  // IMDb ID
  P345: { name: "IMDb", icon: "socials/imdb.svg" },
  // Joconde work ID
  P347: { ignore: true },
  // National Diet Library ID
  P349: { ignore: true },
  // RKDimages ID
  P350: { ignore: true },
  // Entrez Gene ID
  P351: { ignore: true },
  // UniProt protein ID
  P352: { ignore: true },
  // HGNC gene symbol
  P353: { ignore: true },
  // HGNC ID
  P354: { ignore: true },
  // DOI
  P356: { ignore: true },
  // Rijksmonument ID
  P359: { ignore: true },
  // INSEE municipality code
  P374: { ignore: true },
  // SCN
  P377: { ignore: true },
  // Mérimée ID
  P380: { ignore: true },
  // PCP reference number
  P381: { ignore: true },
  // CBS municipality code
  P382: { ignore: true },
  // SBN author ID
  P396: { ignore: true },
  // OpenStreetMap relation ID
  P402: { name: "OSM", icon: "socials/openstreetmap.svg" },
  // Libraries Australia ID
  P409: { ignore: true },
  // botanist author abbreviation
  P428: { ignore: true },
  // dantai code
  P429: { ignore: false },
  // callsign of airline
  P432: { ignore: false },
  // MusicBrainz artist ID
  P434: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // MusicBrainz work ID
  P435: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // MusicBrainz release group ID
  P436: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // German municipality key
  P439: { ignore: true },
  // German district key
  P440: { ignore: true },
  // China administrative division code
  P442: { ignore: true },
  // Structurae structure ID
  P454: { ignore: true },
  // Emporis building ID
  P455: { ignore: true },
  // IMO ship number
  P458: { ignore: true },
  // NOR
  P464: { ignore: true },
  // CELEX number
  P476: { ignore: true },
  // Canadian Register of Historic Places ID
  P477: { ignore: true },
  // FilmAffinity ID
  P480: { ignore: true },
  // Palissy ID
  P481: { ignore: true },
  // IMA Number, broad sense
  P484: { ignore: true },
  // MeSH descriptor ID
  P486: { ignore: true },
  // OMIM ID
  P492: { ignore: true },
  // ICD-9
  P493: { ignore: true },
  // ICD-10
  P494: { ignore: true },
  // ORCID iD
  P496: { ignore: true },
  // CBDB ID
  P497: { ignore: true },
  // ISO 4217 code
  P498: { ignore: false },
  // ISO standard
  P503: { ignore: false },
  // ISO 15924 alpha-4 code
  P506: { ignore: false },
  // Swedish county code
  P507: { ignore: true },
  // BNCF Thesaurus ID
  P508: { ignore: true },
  // Swedish municipality code
  P525: { ignore: true },
  // Find a Grave memorial ID
  P535: { ignore: true },
  // ATP player ID
  P536: { ignore: true },
  // Museofile
  P539: { ignore: true },
  // Mathematics Genealogy Project ID
  P549: { ignore: true },
  // DiseasesDB
  P557: { ignore: true },
  // ICD-O
  P563: { ignore: true },
  // IPNI author ID
  P586: { ignore: true },
  // MMSI
  P587: { ignore: true },
  // GNIS ID
  P590: { ignore: true },
  // ChEMBL ID
  P592: { ignore: true },
  // Ensembl gene ID
  P594: { ignore: true },
  // Guide to Pharmacology Ligand ID
  P595: { ignore: true },
  // WTA player ID
  P597: { ignore: true },
  // ITF player ID
  P599: { ignore: true },
  // Wine AppDB ID
  P600: { ignore: true },
  // MedlinePlus ID
  P604: { ignore: true },
  // NUTS code
  P605: { ignore: true },
  // E number
  P628: { ignore: true },
  // Paris city digital code
  P630: { ignore: true },
  // cultural properties of Belarus reference number
  P632: { ignore: true },
  // Quebec cultural heritage directory ID
  P633: { ignore: true },
  // ISTAT ID
  P635: { ignore: true },
  // RefSeq protein ID
  P637: { ignore: true },
  // PDB structure ID
  P638: { ignore: true },
  // RefSeq RNA ID
  P639: { ignore: true },
  // Léonore ID
  P640: { ignore: true },
  // Freebase ID
  P646: { ignore: true },
  // Open Library ID
  P648: { ignore: true },
  // NRHP reference number
  P649: { ignore: true },
  // RKDartists ID
  P650: { ignore: true },
  // Biografisch Portaal van Nederland ID
  P651: { ignore: true },
  // UNII
  P652: { ignore: true },
  // PubMed Health
  P653: { ignore: true },
  // RTECS number
  P657: { ignore: true },
  // ChemSpider ID
  P661: { ignore: true },
  // PubChem CID
  P662: { ignore: true },
  // DSM-IV classification
  P663: { ignore: true },
  // KEGG ID
  P665: { ignore: true },
  // GeneReviews ID
  P668: { ignore: true },
  // Mouse Genome Informatics ID
  P671: { ignore: true },
  // MeSH tree code
  P672: { ignore: true },
  // eMedicine ID
  P673: { ignore: true },
  // Google Books ID
  P675: { ignore: true },
  // ÚSOP code
  P677: { ignore: true },
  // ZVG number
  P679: { ignore: true },
  // ChEBI ID
  P683: { ignore: true },
  // NCBI taxonomy ID
  P685: { ignore: true },
  // Gene Ontology ID
  P686: { ignore: true },
  // BHL page ID
  P687: { ignore: true },
  // NKCR AUT ID
  P691: { ignore: true },
  // UN number
  P695: { ignore: true },
  // Interlex ID
  P696: { ignore: true },
  // PubMed ID
  P698: { ignore: true },
  // Disease Ontology ID
  P699: { ignore: true },
  // Kemler code
  P700: { ignore: true },
  // Dodis ID
  P701: { ignore: true },
  // Ensembl transcript ID
  P704: { ignore: true },
  // Ensembl protein ID
  P705: { ignore: true },
  // Historic Scotland ID
  P709: { ignore: true },
  // Dana 8th edition
  P714: { ignore: true },
  // DrugBank ID
  P715: { ignore: true },
  // JPL Small-Body Database SPK-ID
  P716: { ignore: true },
  // Minor Planet Center observatory code
  P717: { ignore: true },
  // Canmore ID
  P718: { ignore: true },
  // OKATO ID
  P721: { ignore: true },
  // UIC station code
  P722: { ignore: true },
  // Digitale Bibliotheek voor de Nederlandse Letteren author ID
  P723: { ignore: true },
  // Internet Archive ID
  P724: { ignore: true },
  // Litholex ID
  P731: { ignore: true },
  // BGS Lexicon of Named Rock Units ID
  P732: { ignore: true },
  // DINOloket ID
  P733: { ignore: true },
  // Low German Bibliography and Biography ID
  P745: { ignore: true },
  // World Heritage Site ID
  P757: { ignore: true },
  // Kulturminne ID
  P758: { ignore: true },
  // Alberta Register of Historic Places ID
  P759: { ignore: true },
  // DPLA ID
  P760: { ignore: true },
  // Lake ID (Sweden)
  P761: { ignore: true },
  // Czech cultural heritage ID
  P762: { ignore: true },
  // PEI Register of Historic Places ID
  P763: { ignore: true },
  // OKTMO ID
  P764: { ignore: true },
  // Swiss municipality code
  P771: { ignore: true },
  // INE municipality code
  P772: { ignore: true },
  // ISO 3166-3
  P773: { ignore: false },
  // FIPS 55-3 (locations in the US)
  P774: { ignore: true },
  // Swedish urban area code
  P775: { ignore: true },
  // Swedish minor urban area code
  P776: { ignore: true },
  // Swedish civil parish code/ATA code
  P777: { ignore: true },
  // Church of Sweden parish code
  P778: { ignore: true },
  // Church of Sweden Pastoratskod
  P779: { ignore: true },
  // SIKART ID
  P781: { ignore: true },
  // LAU
  P782: { ignore: true },
  // ISIL
  P791: { ignore: true },
  // GNIS Antarctica ID
  P804: { ignore: true },
  // Italian cadastre code (municipality)
  P806: { ignore: true },
  // Bien de Interés Cultural (BIC) code
  P808: { ignore: true },
  // WDPA ID
  P809: { ignore: true },
  // ITIS TSN
  P815: { ignore: true },
  // arXiv ID
  P818: { ignore: true },
  // ADS bibcode
  P819: { ignore: true },
  // CGNDB unique ID
  P821: { ignore: true },
  // Meteoritical Bulletin Database ID
  P824: { ignore: true },
  // BBC programme ID
  P827: { name: "BBC", icon: "socials/bbc.svg" },
  // OEIS ID
  P829: { ignore: true },
  // Encyclopedia of Life ID
  P830: { ignore: true },
  // GSS code (2011)
  P836: { ignore: true },
  // BioLib taxon ID
  P838: { ignore: true },
  // IMSLP ID
  P839: { ignore: true },
  // Fossilworks ID for this taxon
  P842: { ignore: true },
  // SIRUTA code
  P843: { ignore: true },
  // UBIGEO code
  P844: { ignore: true },
  // Saskatchewan Register of Heritage Property ID
  P845: { ignore: true },
  // GBIF taxon ID
  P846: { ignore: true },
  // Japanese military aircraft designation
  P849: { ignore: true },
  // WoRMS-ID for taxa
  P850: { ignore: true },
  // ESPNscrum player ID
  P858: { ignore: true },
  // e-archiv.li ID
  P860: { ignore: true },
  // PremiershipRugby.com ID
  P861: { ignore: true },
  // Operational Requirement of the UK Air Ministry
  P862: { ignore: true },
  // InPhO ID
  P863: { ignore: true },
  // ACM Digital Library author ID
  P864: { ignore: true },
  // BMLO ID
  P865: { ignore: true },
  // Perlentaucher ID
  P866: { ignore: true },
  // ROME Occupation Code (v3)
  P867: { ignore: true },
  // FIPS 6-4
  P882: { ignore: true },
  // State Water Register Code (Russia)
  P884: { ignore: true },
  // Lexicon istoric retic ID
  P886: { ignore: true },
  // JSTOR article ID
  P888: { ignore: true },
  // Mathematical Reviews ID
  P889: { ignore: true },
  // RfC ID
  P892: { ignore: true },
  // SSRN article ID
  P893: { ignore: true },
  // zbMATH work ID
  P894: { ignore: true },
  // FIPS 10-4 (countries and regions)
  P901: { ignore: true },
  // HDS ID
  P902: { ignore: true },
  // PORT film ID
  P905: { ignore: true },
  // SELIBR ID
  P906: { ignore: true },
  // Nova Scotia Register of Historic Places ID
  P909: { ignore: true },
  // South African municipality code
  P911: { ignore: true },
  // GRAU index
  P917: { ignore: true },
  // NOC Occupation Code
  P918: { ignore: true },
  // SOC Code (2010)
  P919: { ignore: true },
  // LEM ID
  P920: { ignore: true },
  // PMCID
  P932: { ignore: true },
  // Heritage NL ID
  P933: { ignore: true },
  // FishBase species ID
  P938: { ignore: true },
  // KSH code
  P939: { ignore: true },
  // ISIN
  P946: { ignore: true },
  // RSL ID (person)
  P947: { ignore: true },
  // National Library of Israel ID (old)
  P949: { ignore: true },
  // Biblioteca Nacional de España ID
  P950: { ignore: true },
  // NSZL (VIAF) ID
  P951: { ignore: true },
  // IBNR ID
  P954: { ignore: false },
  // ISBN-10
  P957: { ignore: true },
  // MSW ID
  P959: { ignore: true },
  // Tropicos ID
  P960: { ignore: true },
  // IPNI plant ID
  P961: { ignore: true },
  // MycoBank taxon name ID
  P962: { ignore: true },
  // Austrian municipality key
  P964: { ignore: true },
  // MusicBrainz label ID
  P966: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // code for weekend and holiday homes (Sweden)
  P980: { ignore: true },
  // BAG residence ID
  P981: { ignore: true },
  // MusicBrainz area ID
  P982: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // IOC country code
  P984: { ignore: true },
  // Philippine Standard Geographic Code
  P988: { ignore: true },
  // Curlie ID
  P998: { ignore: true },
  // ARICNS
  P999: { ignore: true },
  // National Library of Romania ID
  P1003: { ignore: true },
  // MusicBrainz place ID
  P1004: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // Portuguese National Library ID
  P1005: { ignore: true },
  // Nationale Thesaurus voor Auteurs ID
  P1006: { ignore: true },
  // Lattes Platform number
  P1007: { ignore: true },
  // Iran statistics ID
  P1010: { ignore: true },
  // Art & Architecture Thesaurus ID
  P1014: { ignore: true },
  // NORAF ID
  P1015: { ignore: true },
  // Vatican Library ID (former scheme)
  P1017: { ignore: true },
  // KldB-2010 occupation code
  P1021: { ignore: true },
  // CNO-11 occupation code
  P1022: { ignore: true },
  // SBC-2010 occupation code
  P1023: { ignore: true },
  // SBFI occupation code
  P1024: { ignore: true },
  // SUDOC editions
  P1025: { ignore: true },
  // Dewey Decimal Classification
  P1036: { ignore: true },
  // ZDB ID
  P1042: { ignore: true },
  // IDEO Job ID
  P1043: { ignore: true },
  // SWB editions
  P1044: { ignore: true },
  // Sycomore ID
  P1045: { ignore: true },
  // Catholic Hierarchy person ID
  P1047: { ignore: true },
  // NCL ID
  P1048: { ignore: true },
  // PSH ID
  P1051: { ignore: true },
  // Portuguese Job Code CPP-2010
  P1052: { ignore: true },
  // ResearcherID
  P1053: { ignore: true },
  // NDL bib ID
  P1054: { ignore: true },
  // NLM Unique ID
  P1055: { ignore: true },
  // ERA Journal ID
  P1058: { ignore: true },
  // CVR number
  P1059: { ignore: true },
  // Thailand central administrative unit code
  P1067: { ignore: true },
  // Statistics Denmarks classification of occupation (DISCO-08)
  P1069: { ignore: true },
  // PlantList-ID
  P1070: { ignore: true },
  // ICTV virus ID
  P1076: { ignore: true },
  // KOATUU identifier
  P1077: { ignore: true },
  // EUL editions
  P1084: { ignore: true },
  // LibraryThing work ID
  P1085: { ignore: true },
  // ATVK ID
  P1115: { ignore: true },
  // ELSTAT geographical code
  P1116: { ignore: true },
  // Classified properties and protected areas of Wallonia ID
  P1133: { ignore: true },
  // Kunstindeks Danmark Artist ID
  P1138: { ignore: true },
  // EHAK id
  P1140: { ignore: true },
  // BN (Argentine) editions
  P1143: { ignore: true },
  // Library of Congress Control Number (LCCN) (bibliographic)
  P1144: { ignore: true },
  // World Athletics athlete ID
  P1146: { ignore: true },
  // Library of Congress Classification
  P1149: { ignore: true },
  // Regensburg Classification
  P1150: { ignore: true },
  // Scopus author ID
  P1153: { ignore: true },
  // Scopus EID
  P1154: { ignore: true },
  // Scopus affiliation ID
  P1155: { ignore: true },
  // Scopus source ID
  P1156: { ignore: true },
  // US Congress Bio ID
  P1157: { ignore: true },
  // CODEN
  P1159: { ignore: true },
  // ISO 4 abbreviation
  P1160: { ignore: false },
  // Z39.5 abbreviation
  P1161: { ignore: true },
  // Bluebook abbreviation
  P1162: { ignore: true },
  // USB vendor ID
  P1167: { ignore: true },
  // municipality code (Denmark)
  P1168: { ignore: true },
  // Geokod
  P1172: { ignore: true },
  // LIBRIS editions
  P1182: { ignore: true },
  // Handle ID
  P1184: { ignore: true },
  // Rodovid ID
  P1185: { ignore: true },
  // MEP directory ID
  P1186: { ignore: true },
  // Dharma Drum Institute of Liberal Arts person ID
  P1187: { ignore: true },
  // Dharma Drum Institute of Liberal Arts place ID
  P1188: { ignore: true },
  // Chinese Library Classification
  P1189: { ignore: true },
  // Universal Decimal Classification
  P1190: { ignore: true },
  // Finnish municipality number
  P1203: { ignore: true },
  // NUKAT ID
  P1207: { ignore: true },
  // ISMN
  P1208: { ignore: true },
  // CN
  P1209: { ignore: true },
  // Atlas ID
  P1212: { ignore: true },
  // NLC authorities
  P1213: { ignore: true },
  // Riksdagen person-ID
  P1214: { ignore: true },
  // National Heritage List for England number
  P1216: { ignore: true },
  // Internet Broadway Database venue ID
  P1217: { ignore: true },
  // Internet Broadway Database production ID
  P1218: { ignore: true },
  // Internet Broadway Database show ID
  P1219: { ignore: true },
  // Internet Broadway Database person ID
  P1220: { ignore: true },
  // U.S. National Archives Identifier
  P1225: { ignore: true },
  // Openpolis ID
  P1229: { ignore: true },
  // JSTOR journal ID
  P1230: { ignore: true },
  // Linguist list code
  P1232: { ignore: true },
  // Internet Speculative Fiction Database author ID
  P1233: { ignore: true },
  // ISFDB publication ID
  P1234: { ignore: true },
  // ISFDB series ID
  P1235: { ignore: true },
  // Parsons code
  P1236: { ignore: true },
  // Box Office Mojo film ID (former scheme)
  P1237: { ignore: true },
  // Swedish Football Association player ID
  P1238: { ignore: true },
  // ISFDB publisher ID
  P1239: { ignore: true },
  // Swiss Football Association club number
  P1241: { ignore: true },
  // Theatricalia play ID
  P1242: { ignore: true },
  // ISRC
  P1243: { ignore: true },
  // OmegaWiki Defined Meaning
  P1245: { ignore: true },
  // patent number
  P1246: { ignore: true },
  // KulturNav-ID
  P1248: { ignore: true },
  // Danish Bibliometric Research Indicator (BFI) SNO/CNO
  P1250: { ignore: true },
  // ABS ASCL 2011 code
  P1251: { ignore: true },
  // AUSTLANG code
  P1252: { ignore: true },
  // BCU Ecrivainsvd ID (discontinued)
  P1253: { ignore: true },
  // Slovenska biografija ID
  P1254: { ignore: true },
  // HelveticArchives ID
  P1255: { ignore: true },
  // Iconclass notation
  P1256: { ignore: true },
  // Rotten Tomatoes ID
  P1258: { ignore: true },
  // Swedish Open Cultural Heritage URI
  P1260: { ignore: true },
  // Scandinavian Runic-text Database
  P1261: { ignore: true },
  // RAÄ number
  P1262: { ignore: true },
  // NNDB people ID
  P1263: { ignore: true },
  // AlloCiné film ID
  P1265: { ignore: true },
  // AlloCiné person ID
  P1266: { ignore: true },
  // AlloCiné series ID
  P1267: { ignore: true },
  // Norwegian Register journal ID
  P1270: { ignore: true },
  // Norway Database for Statistics on Higher education publisher ID
  P1271: { ignore: true },
  // Norway Import Service and Registration Authority periodical code
  P1272: { ignore: true },
  // CANTIC ID (old)
  P1273: { ignore: true },
  // ISFDB title ID
  P1274: { ignore: true },
  // Norway Import Service and Registration Authority publisher code
  P1275: { ignore: true },
  // Dictionnaire du Jura ID
  P1276: { ignore: true },
  // JUFO ID
  P1277: { ignore: true },
  // Legal Entity Identifier
  P1278: { ignore: true },
  // CONOR.SI ID
  P1280: { ignore: true },
  // WOEID
  P1281: { ignore: true },
  // Munzinger person ID
  P1284: { ignore: true },
  // Munzinger Sport number
  P1285: { ignore: true },
  // Munzinger Pop ID
  P1286: { ignore: true },
  // KDG Komponisten der Gegenwart ID
  P1287: { ignore: true },
  // Kritisches Lexikon der Gegenwartsliteratur ID
  P1288: { ignore: true },
  // Kritisches Lexikon zur fremdsprachigen Gegenwartsliteratur ID
  P1289: { ignore: true },
  // Association Authors of Switzerland ID (former scheme)
  P1291: { ignore: true },
  // DNB editions
  P1292: { ignore: true },
  // Royal Aero Club Aviator's Certificate ID
  P1293: { ignore: true },
  // WWF ecoregion code
  P1294: { ignore: true },
  // Gran Enciclopèdia Catalana ID
  P1296: { ignore: true },
  // IRS Employer Identification Number
  P1297: { ignore: true },
  // bibcode
  P1300: { ignore: true },
  // CTBUH Skyscraper Center building ID
  P1305: { ignore: true },
  // Swiss parliament ID
  P1307: { ignore: true },
  // EGAXA ID
  P1309: { ignore: true },
  // lostbridges.org ID
  P1311: { ignore: true },
  // NLA Trove people ID
  P1315: { ignore: true },
  // Swedish Media Database ID
  P1316: { ignore: true },
  // OpenCorporates ID
  P1320: { ignore: true },
  // Terminologia Anatomica 98 ID
  P1323: { ignore: true },
  // MusicBrainz instrument ID
  P1330: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // PACE member ID
  P1331: { ignore: true },
  // EPSG CRS
  P1338: { ignore: true },
  // Italian Chamber of Deputies dati ID
  P1341: { ignore: true },
  // Theaterlexikon der Schweiz ID
  P1362: { ignore: true },
  // ITTF table tennis player ID
  P1364: { ignore: true },
  // Art UK artist ID
  P1367: { ignore: true },
  // LNB ID
  P1368: { ignore: true },
  // Iranian National Heritage registration number
  P1369: { ignore: true },
  // IHSI ID
  P1370: { ignore: true },
  // ASI Monument ID
  P1371: { ignore: true },
  // NSK ID
  P1375: { ignore: true },
  // MTR station code
  P1377: { ignore: true },
  // China railway TMIS station code
  P1378: { ignore: true },
  // BridgeReports.com ID
  P1380: { ignore: true },
  // bridgehunter.com ID
  P1381: { ignore: true },
  // Enciclopédia Açoriana ID
  P1385: { ignore: true },
  // Japanese High School Code
  P1386: { ignore: true },
  // German regional key
  P1388: { ignore: true },
  // Index Fungorum ID
  P1391: { ignore: true },
  // ComicBookDB Creator ID
  P1392: { ignore: true },
  // Glottolog code
  P1394: { ignore: true },
  // National Cancer Institute ID
  P1395: { ignore: true },
  // Linguasphere code
  P1396: { ignore: true },
  // State Catalogue of Geographical Names (Russia) ID
  P1397: { ignore: true },
  // FCC Facility ID
  P1400: { ignore: true },
  // World Glacier Inventory ID
  P1404: { ignore: true },
  // MusicBrainz series ID
  P1407: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // Cycling Archives cyclist ID
  P1409: { ignore: true },
  // Oxford Dictionary of National Biography ID
  P1415: { ignore: true },
  // Encyclopædia Britannica Online ID
  P1417: { ignore: true },
  // Sandrart.net person ID
  P1422: { ignore: true },
  // Lost Art ID
  P1428: { ignore: true },
  // OpenPlaques subject ID
  P1430: { ignore: true },
  // Jewish Encyclopedia ID (Russian)
  P1438: { ignore: true },
  // Norwegian filmography ID
  P1439: { ignore: true },
  // FIDE player ID
  P1440: { ignore: true },
  // Sports-Reference.com Olympic athlete ID (archived)
  P1447: { ignore: true },
  // catholic.ru ID
  P1453: { ignore: true },
  // Cadw Building ID
  P1459: { ignore: true },
  // NIEA building ID
  P1460: { ignore: true },
  // Post-Reformation Digital Library author ID
  P1463: { ignore: true },
  // WALS lect code
  P1466: { ignore: true },
  // WALS genus code
  P1467: { ignore: true },
  // WALS family code
  P1468: { ignore: true },
  // FIFA player ID (discontinued)
  P1469: { ignore: true },
  // BLPL author ID
  P1473: { ignore: true },
  // BLPL document ID
  P1474: { ignore: true },
  // vici.org ID
  P1481: { ignore: true },
  // kulturnoe-nasledie.ru ID
  P1483: { ignore: true },
  // Gertrude identifier
  P1529: { ignore: true },
  // CQ Ranking male cyclist ID
  P1541: { ignore: true },
  // Federal Register Document Number
  P1544: { ignore: true },
  // Orphanet ID
  P1550: { ignore: true },
  // Exceptional heritage of Wallonia ID
  P1551: { ignore: true },
  // Yandex Music artist ID
  P1553: { name: "Yandex Music", icon: "socials/yandex-music.svg" },
  // UBERON ID
  P1554: { ignore: true },
  // Executive Order number
  P1555: { ignore: true },
  // zbMATH author ID
  P1556: { ignore: true },
  // AllMovie title ID
  P1562: { ignore: true },
  // MacTutor biography ID
  P1563: { ignore: true },
  // At the Circulating Library ID
  P1564: { ignore: true },
  // Enciclopedia de la Literatura en México ID
  P1565: { ignore: true },
  // GeoNames ID
  P1566: { ignore: true },
  // NIS/INS code
  P1567: { ignore: true },
  // BBC Genome ID
  P1573: { name: "BBC", icon: "socials/bbc.svg" },
  // RISS catalog
  P1575: { ignore: true },
  // Gregory-Aland-Number
  P1577: { ignore: true },
  // Gmelin number
  P1578: { ignore: true },
  // Reaxys registry number
  P1579: { ignore: true },
  // University of Barcelona authority ID (obsolete)
  P1580: { ignore: true },
  // MalaCards ID
  P1583: { ignore: true },
  // Pleiades ID
  P1584: { ignore: true },
  // Brazilian municipality code
  P1585: { ignore: true },
  // Catalan object of cultural interest ID
  P1586: { ignore: true },
  // Slovene Cultural Heritage Register ID
  P1587: { ignore: true },
  // Cambridge Alumni Database ID
  P1599: { ignore: true },
  // Inventari del Patrimoni Arquitectònic de Catalunya code
  P1600: { ignore: true },
  // Esperantist ID
  P1601: { ignore: true },
  // Art UK venue ID
  P1602: { ignore: true },
  // Dialnet author ID
  P1607: { ignore: true },
  // Dialnet book ID
  P1608: { ignore: true },
  // Dialnet journal ID
  P1609: { ignore: true },
  // Dialnet article ID
  P1610: { ignore: true },
  // History of Parliament ID
  P1614: { ignore: true },
  // CLARA-ID
  P1615: { ignore: true },
  // SIREN number
  P1616: { ignore: true },
  // BBC Things ID
  P1617: { name: "BBC", icon: "socials/bbc.svg" },
  // MarineTraffic Port ID
  P1624: { ignore: true },
  // Thai cultural heritage ID
  P1626: { ignore: true },
  // Ethnologue.com language code
  P1627: { ignore: true },
  // China Vitae person ID
  P1631: { ignore: true },
  // Hermann-Mauguin notation
  P1632: { ignore: true },
  // messes.info Catholic church ID
  P1644: { ignore: true },
  // NIST/CODATA ID
  P1645: { ignore: true },
  // Dictionary of Welsh Biography ID
  P1648: { ignore: true },
  // KMDb person ID
  P1649: { ignore: true },
  // BBF ID
  P1650: { ignore: true },
  // YouTube video ID
  P1651: { name: "YouTube", icon: "socials/youtube.svg" },
  // TERC municipality code
  P1653: { ignore: true },
  // DOI prefix
  P1662: { ignore: true },
  // ProCyclingStats cyclist ID
  P1663: { ignore: true },
  // Cycling Database ID (archived)
  P1664: { ignore: true },
  // Chessgames.com player ID
  P1665: { ignore: true },
  // Chessclub.com member ID
  P1666: { ignore: true },
  // Getty Thesaurus of Geographic Names ID
  P1667: { ignore: true },
  // ATCvet
  P1668: { ignore: true },
  // Cultural Objects Names Authority ID
  P1669: { ignore: true },
  // Canadiana Authorities ID (former scheme)
  P1670: { ignore: true },
  // Art UK artwork ID
  P1679: { ignore: true },
  // ICD-10-PCS
  P1690: { ignore: true },
  // operations and procedures key (OPS)
  P1691: { ignore: true },
  // Terminologia Embryologica
  P1693: { ignore: true },
  // Terminologia Histologica
  P1694: { ignore: true },
  // NLP ID (old)
  P1695: { ignore: true },
  // SkyscraperPage building ID
  P1699: { ignore: true },
  // SIPA ID
  P1700: { ignore: true },
  // DGPC ID
  P1702: { ignore: true },
  // DAAO ID
  P1707: { ignore: true },
  // LfDS object ID
  P1708: { ignore: true },
  // Sächsische Biografie (GND) ID
  P1710: { ignore: true },
  // British Museum person or institution ID
  P1711: { ignore: true },
  // Metacritic ID
  P1712: { name: "Metacritic", icon: "socials/metacritic.svg" },
  // Journalisted ID (discontinued)
  P1714: { ignore: true },
  // RKD/ESD (Slovenia) ID
  P1715: { ignore: true },
  // Sandre river ID
  P1717: { ignore: true },
  // Florentine musea Inventario 1890 ID
  P1726: { ignore: true },
  // Flora of North America taxon ID
  P1727: { ignore: true },
  // AllMusic artist ID
  P1728: { name: "AllMusic", icon: "socials/all-music.svg" },
  // AllMusic album ID
  P1729: { name: "AllMusic", icon: "socials/all-music.svg" },
  // AllMusic song ID
  P1730: { name: "AllMusic", icon: "socials/all-music.svg" },
  // Naturbase ID
  P1732: { ignore: true },
  // Steam application ID
  P1733: { name: "Steam", icon: "socials/steam.svg" },
  // Comedien.ch ID
  P1735: { ignore: true },
  // Information Center for Israeli Art artist ID
  P1736: { ignore: true },
  // Merck Index monograph
  P1738: { ignore: true },
  // CiNii book ID
  P1739: { ignore: true },
  // GTAA ID
  P1741: { ignore: true },
  // Bradley and Fletcher checklist number
  P1743: { ignore: true },
  // Agassiz checklist number
  P1744: { ignore: true },
  // VASCAN ID
  P1745: { ignore: true },
  // ZooBank ID for name or act
  P1746: { ignore: true },
  // Flora of China ID
  P1747: { ignore: true },
  // Parlement.com ID
  P1749: { ignore: true },
  // Art UK collection ID
  P1751: { ignore: true },
  // Aviation Safety Network accident ID
  P1755: { ignore: true },
  // Aviation Safety Network Wikibase Occurrence
  P1760: { ignore: true },
  // Watson & Dallwitz family ID
  P1761: { ignore: true },
  // National Pipe Organ Register ID
  P1763: { ignore: true },
  // Flemish Heritage Object ID
  P1764: { ignore: true },
  // denkXweb identifier
  P1769: { ignore: true },
  // Romania LMI code
  P1770: { ignore: true },
  // Integrated Postsecondary Education Data System ID
  P1771: { ignore: true },
  // USDA PLANTS ID
  P1772: { ignore: true },
  // DVN ID
  P1788: { ignore: true },
  // bureau du patrimoine de Seine-Saint-Denis ID
  P1794: { ignore: true },
  // Smithsonian American Art Museum person/institution ID
  P1795: { ignore: true },
  // ISO 639-5 code
  P1798: { ignore: false },
  // Maltese Islands National Inventory of Cultural Property ID
  P1799: { ignore: true },
  // Wikimedia database name
  P1800: { ignore: true },
  // EMLO person ID
  P1802: { ignore: true },
  // Masaryk University person ID
  P1803: { ignore: true },
  // DNF film ID
  P1804: { ignore: true },
  // ABoK number
  P1806: { ignore: true },
  // Great Aragonese Encyclopedia ID
  P1807: { ignore: true },
  // senat.fr ID
  P1808: { ignore: true },
  // National Portrait Gallery (London) person ID
  P1816: { ignore: true },
  // Kaiserhof ID
  P1818: { ignore: true },
  // genealogics.org person ID
  P1819: { ignore: true },
  // Open Food Facts food additive ID
  P1820: { ignore: true },
  // Open Food Facts food category ID
  P1821: { ignore: true },
  // Denkmalschutzamt Hamburg object ID
  P1822: { ignore: true },
  // BAnQ work ID
  P1823: { ignore: true },
  // Baseball-Reference.com major league player ID
  P1825: { ignore: true },
  // Baseball-Reference.com minor & foreign league player ID
  P1826: { ignore: true },
  // ISWC
  P1827: { ignore: true },
  // IPI name number
  P1828: { ignore: true },
  // Roud Folk Song Index number
  P1829: { ignore: true },
  // GrassBase ID
  P1832: { ignore: true },
  // Gaoloumi ID
  P1837: { ignore: true },
  // PSS-archi ID
  P1838: { ignore: true },
  // US Federal Election Commission ID
  P1839: { ignore: true },
  // Swedish district code
  P1841: { ignore: true },
  // Global Anabaptist Mennonite Encyclopedia Online ID
  P1842: { ignore: true },
  // HathiTrust ID
  P1844: { ignore: true },
  // Nasjonalbiblioteket photographer ID
  P1847: { ignore: true },
  // protected areas INPN Code
  P1848: { ignore: true },
  // SSR place name number
  P1850: { ignore: true },
  // Perry Index
  P1852: { ignore: true },
  // Kyiv street code
  P1854: { ignore: true },
  // Catholic Hierarchy diocese ID
  P1866: { ignore: true },
  // Hall of Valor ID
  P1869: { ignore: true },
  // Name Assigning Authority Number
  P1870: { ignore: true },
  // CERL Thesaurus ID
  P1871: { ignore: true },
  // Netflix ID
  P1874: { name: "Netflix", icon: "socials/netflix.svg" },
  // Web Gallery of Art ID
  P1882: { ignore: true },
  // Declarator.org ID
  P1883: { ignore: true },
  // Smithsonian volcano ID
  P1886: { ignore: true },
  // Dictionary of Medieval Names from European Sources entry
  P1888: { ignore: true },
  // CCAB ID
  P1890: { ignore: true },
  // OpenPlaques plaque ID
  P1893: { ignore: true },
  // Danish urban area code
  P1894: { ignore: true },
  // Fauna Europaea ID
  P1895: { ignore: true },
  // LibriVox author ID
  P1899: { ignore: true },
  // EAGLE id
  P1900: { ignore: true },
  // BALaT person/organisation id
  P1901: { ignore: true },
  // Spotify artist ID
  P1902: { name: "Spotify", icon: "socials/spotify.svg" },
  // Australian Dictionary of Biography ID
  P1907: { ignore: true },
  // CWGC person ID
  P1908: { ignore: true },
  // Ministry of Education of Chile school ID
  P1919: { ignore: true },
  // CWGC burial ground ID
  P1920: { ignore: true },
  // VIOLIN ID
  P1925: { ignore: true },
  // Vaccine Ontology ID
  P1928: { ignore: true },
  // ClinVar Variation ID
  P1929: { ignore: true },
  // DSM-5 classification
  P1930: { ignore: true },
  // MobyGames game ID
  P1933: { ignore: true },
  // Animator.ru film ID
  P1934: { ignore: true },
  // Deutsche Ultramarathon-Vereinigung ID
  P2162: { ignore: true },
  // FAST ID
  P2163: { ignore: true },
  // SIGIC author ID
  P2164: { ignore: true },
  // SIGIC group ID
  P2165: { ignore: true },
  // SIGIC institution ID
  P2166: { ignore: true },
  // UNSPSC Code
  P2167: { ignore: true },
  // Swedish Film Database person ID
  P2168: { ignore: true },
  // PublicWhip ID
  P2169: { ignore: true },
  // Hansard (2006–March 2016) ID
  P2170: { ignore: true },
  // TheyWorkForYou ID
  P2171: { ignore: true },
  // (discontinued) Parliamentary record identifier
  P2172: { ignore: true },
  // (discontinued) BBC News Democracy Live ID
  P2173: { ignore: true },
  // Museum of Modern Art artist ID
  P2174: { ignore: true },
  // Kansallisbiografia ID
  P2180: { ignore: true },
  // Finnish MP ID
  P2181: { ignore: true },
  // Finnish Ministers database ID
  P2182: { ignore: true },
  // DLI ID
  P2185: { ignore: true },
  // Wiki Loves Monuments ID
  P2186: { ignore: true },
  // BiblioNet publication ID
  P2187: { ignore: true },
  // BiblioNet author ID
  P2188: { ignore: true },
  // BiblioNet publisher ID
  P2189: { ignore: true },
  // C-SPAN person ID
  P2190: { ignore: true },
  // Vegetti Catalog of Fantastic Literature NILF ID
  P2191: { ignore: true },
  // endangeredlanguages.com ID
  P2192: { ignore: true },
  // Soccerbase player ID
  P2193: { ignore: true },
  // PSS-archi architect ID
  P2194: { ignore: true },
  // Soccerbase manager ID
  P2195: { ignore: true },
  // Spotify album ID
  P2205: { name: "Spotify", icon: "socials/spotify.svg" },
  // Discogs release ID
  P2206: { ignore: true },
  // Spotify track ID
  P2207: { name: "Spotify", icon: "socials/spotify.svg" },
  // SourceForge project
  P2209: { ignore: true },
  // Florentine musea catalogue ID
  P2242: { ignore: true },
  // RefSeq genome ID
  P2249: { ignore: true },
  // National Gallery of Art artist ID
  P2252: { ignore: true },
  // DfE URN
  P2253: { ignore: true },
  // Debrett's People of Today ID
  P2255: { ignore: true },
  // mix'n'match catalog ID
  P2264: { ignore: true },
  // FMD model ID
  P2266: { ignore: true },
  // PolitiFact people and groups ID
  P2267: { ignore: true },
  // Musée d'Orsay artist ID
  P2268: { ignore: true },
  // Emporis building complex ID
  P2270: { ignore: true },
  // Hederich encyclopedia article ID
  P2272: { ignore: true },
  // Heidelberg Academy for Sciences and Humanities member ID
  P2273: { ignore: true },
  // UEFA player ID
  P2276: { ignore: true },
  // Magdeburger Biographisches Lexikon ID
  P2277: { ignore: true },
  // Member of the Hellenic Parliament ID
  P2278: { ignore: true },
  // Austrian Parliament ID
  P2280: { ignore: true },
  // Apple Music album ID (U.S. version)
  P2281: { name: "Apple Music", icon: "socials/apple-music.svg" },
  // Groeningemuseum work PID
  P2282: { ignore: true },
  // CRIStin ID
  P2287: { ignore: true },
  // Danish parish code
  P2290: { ignore: true },
  // NSDAP membership number (1925–1945)
  P2298: { ignore: true },
  // Swedish Olympic Committee athlete ID
  P2323: { ignore: true },
  // GNS Unique Feature ID
  P2326: { ignore: true },
  // ProCyclingStats race ID
  P2327: { ignore: true },
  // ProCyclingStats team ID
  P2328: { ignore: true },
  // Cycling Archives race ID
  P2330: { ignore: true },
  // Cycling Archives team ID
  P2331: { ignore: true },
  // Dictionary of Art Historians ID
  P2332: { ignore: true },
  // Norwegian organisation number
  P2333: { ignore: true },
  // Swedish Film Database film ID
  P2334: { ignore: true },
  // Swedish Film Database company ID
  P2335: { ignore: true },
  // Swedish Film Database soundtrack ID
  P2336: { ignore: true },
  // Swedish Film Database group ID
  P2337: { ignore: true },
  // Musopen composer ID
  P2338: { ignore: true },
  // BoardGameGeek ID
  P2339: { ignore: true },
  // CESAR person ID
  P2340: { ignore: true },
  // AGORHA person/institution ID
  P2342: { ignore: true },
  // AGORHA work ID
  P2344: { ignore: true },
  // AGORHA event identifier
  P2345: { ignore: true },
  // Elonet movie ID
  P2346: { ignore: true },
  // YSO ID
  P2347: { ignore: true },
  // Stuttgart Database of Scientific Illustrators ID
  P2349: { ignore: true },
  // SpeedSkatingBase.eu ID
  P2350: { ignore: true },
  // UNESCO Atlas of the World's Languages in Danger ID
  P2355: { ignore: true },
  // Australian Stratigraphic Units Database ID
  P2367: { ignore: true },
  // Soccerway player ID
  P2369: { ignore: true },
  // ODIS ID
  P2372: { ignore: true },
  // Genius artist ID
  P2373: { ignore: true },
  // French Sculpture Census artist ID
  P2380: { ignore: true },
  // Academic Tree ID
  P2381: { ignore: true },
  // Chemins de mémoire ID
  P2382: { ignore: true },
  // CTHS person ID
  P2383: { ignore: true },
  // French diocesan architects ID
  P2385: { ignore: true },
  // Elonet person ID
  P2387: { ignore: true },
  // Ballotpedia ID
  P2390: { ignore: true },
  // OKPO ID
  P2391: { ignore: true },
  // NCBI locus tag
  P2393: { ignore: true },
  // MGI Gene Symbol
  P2394: { ignore: true },
  // YouTube channel ID
  P2397: { name: "YouTube", icon: "socials/youtube.svg" },
  // MLS player ID
  P2398: { ignore: true },
  // British Council artist ID
  P2399: { ignore: true },
  // JMDb film ID
  P2400: { ignore: true },
  // Six Degrees of Francis Bacon ID
  P2401: { ignore: true },
  // CiNii article ID
  P2409: { ignore: true },
  // FMD designer ID
  P2412: { ignore: true },
  // FMD magazine ID
  P2413: { ignore: true },
  // Structurae person ID
  P2418: { ignore: true },
  // Prosopographia Attica
  P2421: { ignore: true },
  // International Fencing Federation fencer ID
  P2423: { ignore: true },
  // PlayStation ID
  P2606: { ignore: true },
  // BookBrainz author ID
  P2607: { ignore: true },
  // TED speaker ID
  P2611: { ignore: true },
  // TED topic ID
  P2612: { ignore: true },
  // TED talk ID
  P2613: { ignore: true },
  // inHerit Place Number
  P2618: { ignore: true },
  // Hungarian company ID
  P2619: { ignore: true },
  // ISO 15924 numeric code
  P2620: { ignore: false },
  // Site of Special Scientific Interest (England) ID
  P2621: { ignore: true },
  // Companies House company ID
  P2622: { ignore: true },
  // MEK ID
  P2623: { ignore: true },
  // (discontinued) MetroLyrics ID
  P2624: { ignore: true },
  // PASE ID
  P2625: { ignore: true },
  // Danish National Filmography person ID
  P2626: { ignore: true },
  // ISO 9362 SWIFT/BIC code
  P2627: { ignore: false },
  // German tax authority ID
  P2628: { ignore: true },
  // TCM Movie Database film ID
  P2631: { ignore: true },
  // Minkultury film ID
  P2636: { ignore: true },
  // (discontinued) TV.com ID
  P2638: { ignore: true },
  // Filmportal ID
  P2639: { ignore: true },
  // Swimrankings.net swimmer ID
  P2640: { ignore: true },
  // Davis Cup player ID
  P2641: { ignore: true },
  // Billie Jean Cup player ID
  P2642: { ignore: true },
  // mirTarBase ID
  P2646: { ignore: true },
  // CQ Ranking men's race ID
  P2648: { ignore: true },
  // CRICOS Provider Code
  P2651: { ignore: true },
  // Estyn ID
  P2655: { ignore: true },
  // EU Transparency Register ID
  P2657: { ignore: true },
  // Datahub page
  P2666: { ignore: true },
  // Google Knowledge Graph ID
  P2671: { ignore: true },
  // SOATO ID
  P2672: { ignore: true },
  // (discontinued) Russiancinema.ru film ID
  P2678: { ignore: true },
  // Bekker Number
  P2683: { ignore: true },
  // Basketball-Reference.com NBA player ID
  P2685: { ignore: true },
  // OpenSecrets people ID
  P2686: { ignore: true },
  // NDL JPNO
  P2687: { ignore: true },
  // Box Office Mojo person ID
  P2688: { ignore: true },
  // BARTOC ID
  P2689: { ignore: true },
  // ISU figure skater ID
  P2694: { ignore: true },
  // FIG gymnast licence number
  P2696: { ignore: true },
  // ESPNcricinfo.com player ID
  P2697: { ignore: true },
  // CricketArchive player ID
  P2698: { ignore: true },
  // BFI National Archive work ID
  P2703: { ignore: true },
  // EIDR content ID
  P2704: { ignore: true },
  // Karate Records ID
  P2705: { ignore: true },
  // CQ Ranking women's race ID
  P2708: { ignore: true },
  // CQ Ranking female cyclist ID
  P2709: { ignore: true },
  // Encyclopaedia Metallum release ID
  P2721: { ignore: true },
  // Deezer artist ID
  P2722: { ignore: true },
  // Deezer album ID
  P2723: { ignore: true },
  // Deezer track ID
  P2724: { ignore: true },
  // GOG application ID
  P2725: { ignore: true },
  // UIPM athlete ID
  P2726: { ignore: true },
  // United World Wrestling ID
  P2727: { ignore: true },
  // CageMatch worker ID
  P2728: { ignore: true },
  // BWF.tournamentsoftware.com player ID
  P2729: { ignore: true },
  // ISSF athlete ID
  P2730: { ignore: true },
  // Persée author ID
  P2732: { ignore: true },
  // Persée journal ID
  P2733: { ignore: true },
  // Unz Review author ID
  P2734: { ignore: true },
  // Unz Review journal ID
  P2735: { ignore: true },
  // Biographical Directory of Federal Judges ID
  P2736: { ignore: true },
  // ResearchGate institute ID
  P2740: { ignore: true },
  // Tate artist ID
  P2741: { ignore: true },
  // Australian Geological Provinces ID
  P2742: { ignore: true },
  // Dictionary of New Zealand Biography ID
  P2745: { ignore: true },
  // PRONOM file format identifier
  P2748: { ignore: true },
  // PRONOM software ID
  P2749: { ignore: true },
  // Photographers' Identities Catalog ID
  P2750: { ignore: true },
  // Roller Coaster Database ID
  P2751: { ignore: true },
  // New Zealand Organisms Register ID
  P2752: { ignore: true },
  // Dictionary of Canadian Biography ID
  P2753: { ignore: true },
  // exploitation visa number
  P2755: { ignore: true },
  // AUSNUT food ID
  P2759: { ignore: true },
  // NUTTAB food ID
  P2760: { ignore: true },
  // Research Papers in Economics Series handle
  P2761: { ignore: true },
  // CTBUH Skyscraper Center building complex ID
  P2762: { ignore: true },
  // Danish protected area ID
  P2763: { ignore: true },
  // Wrestlingdata person ID
  P2764: { ignore: true },
  // blue-style.com ID
  P2765: { ignore: true },
  // ISO 4063 process number
  P2766: { ignore: false },
  // JudoInside judoka ID
  P2767: { ignore: true },
  // BNE journal ID
  P2768: { ignore: true },
  // D-U-N-S number
  P2771: { ignore: true },
  // FIS alpine skier ID
  P2772: { ignore: true },
  // FIS cross-country skier ID
  P2773: { ignore: true },
  // FIS freestyle skier ID
  P2774: { ignore: true },
  // FIS ski jumper ID
  P2775: { ignore: true },
  // FIS Nordic combined skier ID
  P2776: { ignore: true },
  // FIS snowboarder ID
  P2777: { ignore: true },
  // IAT triathlete ID
  P2778: { ignore: true },
  // IAT weightlifter ID
  P2779: { ignore: true },
  // IAT diver ID
  P2780: { ignore: true },
  // Models.com client ID
  P2782: { ignore: true },
  // Danish listed buildings case ID
  P2783: { ignore: true },
  // Czech neighbourhood ID code
  P2788: { ignore: true },
  // ASF KID Cave Tag Number
  P2792: { ignore: true },
  // Index Hepaticarum ID
  P2794: { ignore: true },
  // 3DMet ID
  P2796: { ignore: true },
  // Loop ID
  P2798: { ignore: true },
  // BVMC person ID
  P2799: { ignore: true },
  // Beach Volleyball Database ID
  P2800: { ignore: true },
  // FIVB beach volleyball player ID
  P2801: { ignore: true },
  // World Sailing member ID
  P2804: { ignore: true },
  // Goratings ID
  P2805: { ignore: true },
  // Australasian Pollen and Spore Atlas Code
  P2809: { ignore: true },
  // LPGA Tour golf player ID
  P2810: { ignore: true },
  // PGA Tour golf player ID
  P2811: { ignore: true },
  // MathWorld identifier
  P2812: { ignore: true },
  // P-number
  P2814: { ignore: true },
  // ESR station code
  P2815: { ignore: false },
  // HowLongToBeat ID
  P2816: { ignore: true },
  // Sherdog fighter ID
  P2818: { ignore: true },
  // Yandex Music release ID
  P2819: { name: "Yandex Music", icon: "socials/yandex-music.svg" },
  // Royal Belgian Football Association player ID
  P2823: { ignore: true },
  // Gazetteer of Planetary Nomenclature ID
  P2824: { ignore: true },
  // Megogo ID
  P2826: { ignore: true },
  // Internet Wrestling Database ID
  P2829: { ignore: true },
  // Online World of Wrestling ID
  P2830: { ignore: true },
  // Joint Electronics Type Designation Automated System designation
  P2832: { ignore: true },
  // ARKive ID
  P2833: { ignore: true },
  // NSC number
  P2840: { ignore: true },
  // Benezit ID
  P2843: { ignore: true },
  // RAN ID
  P2845: { ignore: true },
  // Google+ ID (discontinued)
  P2847: { ignore: true },
  // Apple Music artist ID (U.S. version)
  P2850: { name: "Apple Music", icon: "socials/apple-music.svg" },
  // EU Surface Water Body Code
  P2856: { ignore: true },
  // WWE.com superstar ID
  P2857: { ignore: true },
  // Killer List of Videogames ID
  P2858: { ignore: true },
  // Leidse Hoogleraren ID
  P2861: { ignore: true },
  // Catalogus Professorum Academiae Rheno-Traiectinae ID
  P2862: { ignore: true },
  // Nederlandse Molendatabase ID
  P2863: { ignore: true },
  // OpenCritic ID
  P2864: { ignore: true },
  // band number
  P2865: { ignore: true },
  // Hollandsche Molen ID
  P2866: { ignore: true },
  // Molenecho's ID
  P2867: { ignore: true },
  // miRBase pre-miRNA ID
  P2870: { ignore: true },
  // miRBase mature miRNA ID
  P2871: { ignore: true },
  // PubChem BioAssay ID (AID)
  P2874: { ignore: true },
  // SureChEMBL ID
  P2877: { ignore: true },
  // Minitel code
  P2878: { ignore: true },
  // Library of the National Congress of Argentina ID
  P2879: { ignore: true },
  // NIOSHTIC-2 ID
  P2880: { ignore: true },
  // HKMDB film ID
  P2883: { ignore: true },
  // Shakeosphere person ID
  P2886: { ignore: true },
  // reserve number (Canada)
  P2887: { ignore: true },
  // FamilySearch person ID
  P2889: { ignore: true },
  // UMLS CUI
  P2892: { ignore: true },
  // Eldoblaje Movie ID
  P2897: { ignore: true },
  // Swedish county letter
  P2898: { ignore: true },
  // Molendatabase verdwenen molens ID
  P2903: { ignore: true },
  // Beer Advocate brewery ID
  P2904: { ignore: true },
  // RateBeer brewery ID
  P2905: { ignore: true },
  // SecondHandSongs work ID
  P2908: { ignore: true },
  // SecondHandSongs artist ID
  P2909: { ignore: true },
  // MSBI person ID
  P2914: { ignore: true },
  // ECARTICO person ID
  P2915: { ignore: true },
  // COAM structure ID
  P2917: { ignore: true },
  // Great Russian Encyclopedia Online ID
  P2924: { ignore: true },
  // InterPro ID
  P2926: { ignore: true },
  // INSPIRE-HEP author ID
  P2930: { ignore: true },
  // Encyclopedia of Triangle Centers identifier
  P2931: { ignore: true },
  // Pleiades category identifier
  P2938: { ignore: true },
  // CageMatch tag team ID
  P2939: { ignore: true },
  // Catalogus Professorum Rostochiensium ID
  P2940: { ignore: true },
  // Munk's Roll ID
  P2941: { ignore: true },
  // Dailymotion channel ID
  P2942: { ignore: true },
  // warheroes.ru ID
  P2943: { ignore: true },
  // Plarr ID
  P2944: { ignore: true },
  // British Book Trade Index ID
  P2945: { ignore: true },
  // BacDive ID
  P2946: { ignore: true },
  // Estonian cultural monument ID
  P2948: { ignore: true },
  // WikiTree person ID
  P2949: { ignore: true },
  // Nomisma ID
  P2950: { ignore: true },
  // Cultural heritage database in Austria ObjektID
  P2951: { ignore: true },
  // Boat of Heritage Interest ID
  P2952: { ignore: true },
  // Estonian Research Portal person ID
  P2953: { ignore: true },
  // Transferred Account Data Interchange Group Code
  P2954: { ignore: true },
  // NAIF ID
  P2956: { ignore: true },
  // BVPH publication ID
  P2961: { ignore: true },
  // Goodreads author ID
  P2963: { name: "Goodreads", icon: "socials/goodreads.png" },
  // EU River Basin District code
  P2965: { ignore: true },
  // National Library of Wales Authority ID
  P2966: { ignore: true },
  // Queensland Heritage Register ID
  P2967: { ignore: true },
  // QUDT unit ID
  P2968: { ignore: true },
  // Goodreads version/edition ID
  P2969: { name: "Goodreads", icon: "socials/goodreads.png" },
  // Kinopolis film ID
  P2970: { ignore: true },
  // GCatholic church ID
  P2971: { ignore: true },
  // SNAP ID
  P2972: { ignore: true },
  // Spenserians person ID
  P2973: { ignore: true },
  // LBT person ID
  P2977: { ignore: true },
  // ARLHS lighthouse ID
  P2980: { ignore: true },
  // UIC alphabetical country code
  P2981: { ignore: false },
  // UIC numerical country code
  P2982: { ignore: false },
  // UNDP country code
  P2983: { ignore: false },
  // Snapchat username
  P2984: { name: "Snapchat", icon: "socials/snapchat.svg" },
  // DBSE ID
  P2985: { ignore: true },
  // aircraft registration prefix
  P2986: { ignore: true },
  // Taekwondo Data ID
  P2987: { ignore: true },
  // GOST 7.67 cyrillic
  P2988: { ignore: true },
  // Berlin cultural heritage ID
  P2424: { ignore: true },
  // Xeno-canto species ID
  P2426: { ignore: true },
  // GRID ID
  P2427: { ignore: true },
  // RePEc Short-ID
  P2428: { ignore: true },
  // Thyssen-Bornemisza artist ID
  P2431: { ignore: true },
  // J. Paul Getty Museum artist ID
  P2432: { ignore: true },
  // Panarctic Flora ID
  P2434: { ignore: true },
  // PORT person ID
  P2435: { ignore: true },
  // Transfermarkt player ID
  P2446: { ignore: true },
  // Transfermarkt manager ID
  P2447: { ignore: true },
  // Turkish Football Federation player ID
  P2448: { ignore: true },
  // Turkish Football Federation coach  ID
  P2449: { ignore: true },
  // Encyclopædia Britannica contributor ID
  P2450: { ignore: true },
  // MAME ROM name
  P2451: { ignore: true },
  // GeoNames feature code
  P2452: { ignore: true },
  // KNAW past member ID
  P2454: { ignore: true },
  // Species Profile and Threats Database ID
  P2455: { ignore: true },
  // DBLP author ID
  P2456: { ignore: true },
  // Australian National Shipwreck ID
  P2457: { ignore: true },
  // Mackolik.com player ID
  P2458: { ignore: true },
  // IBU biathlete ID
  P2459: { ignore: true },
  // Persons of Ancient Athens
  P2460: { ignore: true },
  // ComLaw ID
  P2461: { ignore: true },
  // elibrary.ru organisation ID
  P2463: { ignore: true },
  // BugGuide taxon ID
  P2464: { ignore: true },
  // Allcinema film ID
  P2465: { ignore: true },
  // Global Geoparks Network ID (former scheme)
  P2467: { ignore: true },
  // Theatricalia theatre ID
  P2468: { ignore: true },
  // Theatricalia person ID
  P2469: { ignore: true },
  // Talouselämän vaikuttajat ID
  P2470: { ignore: true },
  // Models.com person ID
  P2471: { ignore: true },
  // ACMA Radiocommunications Client Number
  P2472: { ignore: true },
  // IGPCV ID
  P2473: { ignore: true },
  // CDLI ID
  P2474: { ignore: true },
  // NAVA ID
  P2475: { ignore: true },
  // HNI person/institution ID
  P2476: { ignore: true },
  // BDRC Resource ID
  P2477: { ignore: true },
  // Railways Archive event ID
  P2478: { ignore: true },
  // SPDX license ID
  P2479: { ignore: true },
  // IHO Hydrographic Dictionary (S-32) Number
  P2480: { ignore: true },
  // Elite Prospects player ID
  P2481: { ignore: true },
  // SABR person ID
  P2482: { ignore: true },
  // NCES district ID
  P2483: { ignore: true },
  // NCES school ID
  P2484: { ignore: true },
  // FMD photographer ID
  P2485: { ignore: true },
  // FMD brand ID
  P2486: { ignore: true },
  // page at website of Belarus Geocenter
  P2487: { ignore: true },
  // hram.by ID
  P2489: { ignore: true },
  // Radzima.org ID
  P2491: { ignore: true },
  // MTMT author ID
  P2492: { ignore: true },
  // OM institution ID
  P2493: { ignore: true },
  // Latvian cultural heritage register ID
  P2494: { ignore: true },
  // Latvian toponymic names database ID
  P2496: { ignore: true },
  // Latvian National Address Register ID
  P2497: { ignore: true },
  // Catalan Biographical Dictionary of Women ID
  P2498: { ignore: true },
  // Historical Gazetteer (GOV) ID
  P2503: { ignore: true },
  // Norwegian municipality number
  P2504: { ignore: true },
  // INSEE canton code
  P2506: { ignore: true },
  // KINENOTE film ID
  P2508: { ignore: true },
  // Movie Walker film ID
  P2509: { ignore: true },
  // National Discography of Italian Song artist/group ID
  P2510: { ignore: true },
  // MSK Gent work PID
  P2511: { ignore: true },
  // Jamendo album ID
  P2513: { ignore: true },
  // Jamendo artist ID
  P2514: { ignore: true },
  // Australian Ramsar site ID
  P2516: { ignore: true },
  // Scope.dk film ID
  P2518: { ignore: true },
  // Scope.dk person ID
  P2519: { ignore: true },
  // SEED number
  P2524: { ignore: true },
  // Ramsar Sites Information Service ID
  P2525: { ignore: true },
  // National Historic Sites of Canada ID
  P2526: { ignore: true },
  // ČSFD film ID
  P2529: { ignore: true },
  // Box Office Mojo franchise ID (former scheme)
  P2530: { ignore: true },
  // Box Office Mojo studio ID
  P2531: { ignore: true },
  // WomenWriters ID
  P2533: { ignore: true },
  // Sandbox-External identifier
  P2536: { ignore: true },
  // Free Software Directory entry
  P2537: { ignore: true },
  // Nationalmuseum Sweden ID
  P2538: { ignore: true },
  // Nationalmuseum Sweden artwork ID
  P2539: { ignore: true },
  // Italian Senate of the Republic ID
  P2549: { ignore: true },
  // autores.uy ID
  P2558: { ignore: true },
  // ECHA InfoCard ID
  P2566: { ignore: true },
  // National-Football-Teams.com player ID
  P2574: { ignore: true },
  // UCSC Genome Browser assembly ID
  P2576: { ignore: true },
  // Baltisches Biographisches Lexikon digital ID (former scheme)
  P2580: { ignore: true },
  // BabelNet ID
  P2581: { ignore: true },
  // J. Paul Getty Museum object ID
  P2582: { ignore: true },
  // Australian Wetlands Code
  P2584: { ignore: true },
  // INSEE region code
  P2585: { ignore: true },
  // INSEE department code
  P2586: { ignore: true },
  // administrative code of Indonesia
  P2588: { ignore: true },
  // Statistics Indonesia ethnicity code
  P2589: { ignore: true },
  // BPS language code
  P2590: { ignore: true },
  // Québec cultural heritage directory people identifier
  P2592: { ignore: true },
  // Latvian Olympic Committee athlete ID
  P2593: { ignore: true },
  // Geni.com profile ID
  P2600: { ignore: true },
  // Eurohockey.com player ID
  P2601: { ignore: true },
  // HockeyDB.com player ID
  P2602: { ignore: true },
  // Kinopoisk film ID
  P2603: { ignore: true },
  // Kinopoisk person ID
  P2604: { ignore: true },
  // ČSFD person ID
  P2605: { ignore: true },
  // FIL athlete ID
  P2990: { ignore: true },
  // IBSF athlete ID
  P2991: { ignore: true },
  // Untappd brewery ID
  P3002: { ignore: true },
  // zanikleobce.cz abandoned objects ID
  P3003: { ignore: true },
  // Galiciana work ID
  P3004: { ignore: true },
  // Marine Regions Geographic ID
  P3006: { ignore: true },
  // Cadw Monument ID
  P3007: { ignore: true },
  // Australian Heritage Database Place ID
  P3008: { ignore: true },
  // Conservatoire du littoral ID
  P3009: { ignore: true },
  // World Archery Federation ID
  P3010: { ignore: true },
  // Statistics Canada Geographic code
  P3012: { ignore: true },
  // French national research structure identifier
  P3016: { ignore: true },
  // Rolling Stone artist ID
  P3017: { ignore: true },
  // Iranica ID
  P3021: { ignore: true },
  // Legacies of British Slave-ownership person ID
  P3023: { ignore: true },
  // ITU letter code
  P3024: { ignore: true },
  // UK National Archives ID
  P3029: { ignore: true },
  // EPPO Code
  P3031: { ignore: true },
  // Indonesian ethnicity code
  P3034: { ignore: true },
  // ISBN publisher prefix
  P3035: { ignore: true },
  // IWM memorial ID
  P3038: { ignore: true },
  // SoundCloud ID
  P3040: { ignore: true },
  // CageMatch wrestling stable ID
  P3042: { ignore: true },
  // College Football HoF ID
  P3044: { ignore: true },
  // HanCinema person ID
  P3045: { ignore: true },
  // ForaDeJogo player ID
  P3046: { ignore: true },
  // PlaymakerStats.com player ID
  P3047: { ignore: true },
  // racing-reference driver ID
  P3048: { ignore: true },
  // Scottish Football Association player ID
  P3049: { ignore: true },
  // FACR player ID
  P3050: { ignore: true },
  // Kindred Britain ID
  P3051: { ignore: true },
  // Bloomberg person ID
  P3052: { ignore: true },
  // K League player ID
  P3053: { ignore: true },
  // Ontario MPP ID
  P3054: { ignore: true },
  // NAQ elected person ID
  P3055: { ignore: true },
  // TCM Movie Database person ID
  P3056: { ignore: true },
  // Charity Commission no.
  P3057: { ignore: true },
  // Architectuurgids architect ID
  P3058: { ignore: true },
  // Architectuurgids building ID
  P3059: { ignore: true },
  // ButMoth ID
  P3060: { ignore: true },
  // Basisregistratie Instellingen number
  P3061: { ignore: true },
  // LepIndex ID
  P3064: { ignore: true },
  // RERO ID
  P3065: { ignore: true },
  // GLAM Identifier
  P3066: { ignore: true },
  // WIPO ST.3
  P3068: { ignore: true },
  // UN document symbol
  P3069: { ignore: true },
  // Storting person ID
  P3072: { ignore: true },
  // CosIng number
  P3073: { ignore: true },
  // Grace's Guide ID
  P3074: { ignore: true },
  // Open Beauty Facts category ID
  P3076: { ignore: true },
  // Cineplex Germany film ID
  P3077: { ignore: true },
  // SIMBAD ID
  P3083: { ignore: true },
  // Catalogue of Life in Taiwan ID
  P3088: { ignore: true },
  // Flags of the World ID
  P3089: { ignore: true },
  // ISBN identifier group
  P3097: { ignore: true },
  // ClinicalTrials.gov ID
  P3098: { ignore: true },
  // Internet Bird Collection species ID
  P3099: { ignore: true },
  // Flora of Australia ID (old)
  P3100: { ignore: true },
  // FloraBase ID
  P3101: { ignore: true },
  // Plantarium ID
  P3102: { ignore: true },
  // Gares & Connexions ID
  P3104: { ignore: true },
  // Tela Botanica ID
  P3105: { ignore: true },
  // Guardian topic ID
  P3106: { ignore: true },
  // LdiF ID
  P3107: { ignore: true },
  // Yelp ID
  P3108: { name: "Yelp", icon: "socials/yelp.svg" },
  // Peakbagger mountain ID
  P3109: { ignore: true },
  // ISzDb film ID
  P3110: { ignore: true },
  // FEI athlete ID
  P3111: { ignore: true },
  // DistroWatch ID
  P3112: { ignore: true },
  // ISzDb person ID
  P3114: { ignore: true },
  // ISzDb company ID
  P3115: { ignore: true },
  // ISzDb dub ID
  P3116: { ignore: true },
  // DSSTox substance ID
  P3117: { ignore: true },
  // OpenDomesday settlement ID
  P3118: { ignore: true },
  // Code for China Reservoir Name
  P3119: { ignore: true },
  // TOID
  P3120: { ignore: true },
  // Epguides ID
  P3121: { ignore: true },
  // OpenDomesday person ID
  P3122: { ignore: true },
  // Stanford Encyclopedia of Philosophy ID
  P3123: { ignore: true },
  // Polish scientist ID
  P3124: { ignore: true },
  // EDRPOU code
  P3125: { ignore: true },
  // ALCUIN ID
  P3126: { ignore: true },
  // Latindex ID
  P3127: { ignore: true },
  // CiNetMag film ID
  P3128: { ignore: true },
  // cine.gr film ID
  P3129: { ignore: true },
  // NSW Flora ID
  P3130: { ignore: true },
  // Redalyc journal ID
  P3131: { ignore: true },
  // NSZL name authority ID
  P3133: { ignore: true },
  // TripAdvisor ID
  P3134: { ignore: true },
  // elCinema film ID
  P3135: { ignore: true },
  // elCinema person ID
  P3136: { ignore: true },
  // OFDb film ID
  P3138: { ignore: true },
  // SourehCinema film ID
  P3139: { ignore: true },
  // SourehCinema person ID
  P3140: { ignore: true },
  // EDb film ID
  P3141: { ignore: true },
  // EDb person ID
  P3142: { ignore: true },
  // (discontinued) elFilm film ID
  P3143: { ignore: true },
  // (discontinued) elFilm person ID
  P3144: { ignore: true },
  // Sratim ID
  P3145: { ignore: true },
  // CiNetMag person ID
  P3146: { ignore: true },
  // United States Reports ID
  P3147: { ignore: true },
  // iNaturalist taxon ID
  P3151: { ignore: true },
  // Findsmiley ID
  P3152: { ignore: true },
  // Crossref funder ID
  P3153: { ignore: true },
  // Runeberg author ID
  P3154: { ignore: true },
  // Runeberg book ID
  P3155: { ignore: true },
  // UGentMemorialis professor ID
  P3159: { ignore: true },
  // Minnesota legislator ID
  P3160: { ignore: true },
  // Rock and Roll Hall of Fame ID
  P3162: { ignore: true },
  // Scottish Charity number
  P3163: { ignore: true },
  // Horsetelex ID
  P3165: { ignore: true },
  // Webpedigrees ID
  P3166: { ignore: true },
  // Allbreedpedigree ID
  P3167: { ignore: true },
  // Sporthorse data ID
  P3168: { ignore: true },
  // Infochevaux ID
  P3169: { ignore: true },
  // Cultural Heritage Armenia ID
  P3170: { ignore: true },
  // Olympic.org athlete ID (archived)
  P3171: { ignore: true },
  // World Bridge Federation ID
  P3172: { ignore: true },
  // Statoids ID
  P3175: { ignore: true },
  // Patrimonio Web JCyL ID
  P3177: { ignore: true },
  // Zaragoza monument ID
  P3178: { ignore: true },
  // Visual Novel Database ID
  P3180: { ignore: true },
  // OpenCitations bibliographic resource ID
  P3181: { ignore: true },
  // FANTOIR code
  P3182: { ignore: true },
  // (discontinued) Wall Street Journal topic ID
  P3183: { ignore: true },
  // Czech National Bibliography ID
  P3184: { ignore: true },
  // VK ID
  P3185: { ignore: true },
  // TAXREF ID
  P3186: { ignore: true },
  // Marburger Professorenkatalog ID
  P3187: { ignore: true },
  // IMIS person ID
  P3191: { ignore: true },
  // Last.fm ID
  P3192: { name: "Last.fm", icon: "socials/last-fm.png" },
  // GS1 Company Prefix
  P3193: { ignore: true },
  // INA video ID
  P3194: { ignore: true },
  // USGS earthquake ID
  P3196: { ignore: true },
  // Federal Heritage Buildings ID (Canada)
  P3197: { ignore: true },
  // JewishGen Locality ID
  P3198: { ignore: true },
  // charity number (Isle of Man)
  P3199: { ignore: true },
  // Northern Ireland charity number
  P3200: { ignore: true },
  // Medical Dictionary for Regulatory Activities ID
  P3201: { ignore: true },
  // UAI code
  P3202: { ignore: true },
  // Ciné-Ressources film ID
  P3203: { ignore: true },
  // Ciné-Ressources person ID
  P3204: { ignore: true },
  // data.gouv.fr organisation ID
  P3206: { ignore: true },
  // Vine user ID
  P3207: { ignore: true },
  // New General Catalogue ID
  P3208: { ignore: true },
  // Heritage Railway Station of Canada ID
  P3209: { ignore: true },
  // Heritage Lighthouse of Canada ID
  P3211: { ignore: true },
  // ISAN
  P3212: { ignore: true },
  // Indian census area code (2001)
  P3213: { ignore: true },
  // SIRET number
  P3215: { ignore: true },
  // Dictionary of Swedish National Biography ID
  P3217: { ignore: true },
  // Auñamendi ID
  P3218: { ignore: true },
  // Encyclopædia Universalis ID
  P3219: { ignore: true },
  // KvK company ID
  P3220: { ignore: true },
  // New York Times topic ID
  P3221: { name: "New York Times", icon: "socials/new-york-times.svg" },
  // NE.se ID
  P3222: { ignore: true },
  // Online List of Lights ID
  P3223: { ignore: true },
  // NAICS code
  P3224: { ignore: true },
  // Corporate Number (Japan)
  P3225: { ignore: true },
  // HAS member ID
  P3226: { ignore: true },
  // Cultural Heritage Kosovo ID
  P3227: { ignore: true },
  // South Dakota legislator ID
  P3229: { ignore: true },
  // SCAR Composite Gazetteer place ID
  P3230: { ignore: true },
  // PhilPapers author ID
  P3232: { ignore: true },
  // PhilPeople profile
  P3233: { ignore: true },
  // Code List for Cultural Heritage Organizations
  P3234: { ignore: true },
  // PhilPapers topic
  P3235: { ignore: true },
  // PhilPapers publication ID
  P3236: { ignore: true },
  // KU Leuven person ID
  P3237: { ignore: true },
  // NBN System Key
  P3240: { ignore: true },
  // Catholic Encyclopedia ID
  P3241: { ignore: true },
  // SIC code
  P3242: { ignore: true },
  // OKVED 1.1 code of the economic activity
  P3243: { ignore: true },
  // OKPD code of the good or service
  P3245: { ignore: true },
  // OKVED 2 code of the economic activity
  P3246: { ignore: true },
  // OKP ID of the good or service
  P3248: { ignore: true },
  // OKPD2 code of the good or service
  P3250: { ignore: true },
  // Cave E-Cadastre ID
  P3256: { ignore: true },
  // Queensland place ID
  P3257: { ignore: true },
  // LiveJournal ID
  P3258: { ignore: true },
  // Myspace ID
  P3265: { ignore: true },
  // Library of Congress Format Description Document ID
  P3266: { ignore: true },
  // Flickr user ID
  P3267: { name: "Flickr", icon: "socials/flckr.svg" },
  // Fotografen.nl ID
  P3269: { ignore: true },
  // Zeri image ID
  P3272: { ignore: true },
  // Actorenregister ID
  P3273: { ignore: true },
  // Angel List ID
  P3276: { ignore: true },
  // KANTL member ID
  P3277: { ignore: true },
  // BAnQ author ID
  P3280: { ignore: true },
  // French National Assembly Lobbyist ID
  P3281: { ignore: true },
  // Bandcamp ID
  P3283: { ignore: true },
  // (discontinued) Yahoo! Japan Talent Database ID
  P3284: { ignore: true },
  // Mathematics Subject Classification ID
  P3285: { ignore: true },
  // Squash Info player ID
  P3286: { ignore: true },
  // World Spider Catalog ID
  P3288: { ignore: true },
  // Cellosaurus ID
  P3289: { ignore: true },
  // biography at the Landtag of Mecklenburg-Vorpommern
  P3290: { ignore: true },
  // DocCheck Flexikon En ID
  P3291: { ignore: true },
  // DocCheck Flexikon De ID
  P3292: { ignore: true },
  // BALaT object ID
  P3293: { ignore: true },
  // DRÚSOP ID
  P3296: { ignore: true },
  // Flemish Parliament person ID
  P3297: { ignore: true },
  // Belgian Senate person ID
  P3298: { ignore: true },
  // student register of the University of Helsinki ID (1640–1852)
  P3299: { ignore: true },
  // Open Media Database film ID
  P3302: { ignore: true },
  // NGS pumping station ID
  P3304: { ignore: true },
  // KINENOTE person ID
  P3305: { ignore: true },
  // Galiciana authority ID
  P3307: { ignore: true },
  // lib.reviews ID
  P3308: { ignore: true },
  // SummitPost ID
  P3309: { ignore: true },
  // 365Chess.com player ID
  P3314: { ignore: true },
  // ChessTempo.com player ID
  P3315: { ignore: true },
  // ICCF player ID
  P3316: { ignore: true },
  // Guía Digital del Patrimonio Cultural de Andalucía identifier
  P3318: { ignore: true },
  // Vlinderstichting-ID
  P3322: { ignore: true },
  // petit-patrimoine.com ID
  P3324: { ignore: true },
  // student register of the University of Helsinki ID (1853–1899)
  P3325: { ignore: true },
  // World Waterfall Database ID
  P3326: { ignore: true },
  // Réserves naturelles de France ID
  P3327: { ignore: true },
  // wurvoc.org measure ID
  P3328: { ignore: true },
  // CIViC variant ID
  P3329: { ignore: true },
  // (discontinued) Supermodels.nl ID
  P3330: { ignore: true },
  // HGVS nomenclature
  P3331: { ignore: true },
  // ACM Digital Library citation ID
  P3332: { ignore: true },
  // ACM Digital Library event ID
  P3333: { ignore: true },
  // Encyclopedia of Surfing ID
  P3338: { ignore: true },
  // World Surf League ID
  P3339: { ignore: true },
  // Kvikmyndir film ID
  P3340: { ignore: true },
  // Kvikmyndir person ID
  P3341: { ignore: true },
  // legislation.gov.uk ID
  P3343: { ignore: true },
  // Vote Smart ID
  P3344: { ignore: true },
  // RxNorm ID
  P3345: { ignore: true },
  // HKMDB person ID
  P3346: { ignore: true },
  // PermID
  P3347: { ignore: true },
  // National Library of Greece ID
  P3348: { ignore: true },
  // World Health Organisation international non-proprietary name numeric ID
  P3350: { ignore: true },
  // Adult Film Database actor ID
  P3351: { ignore: true },
  // musipedia tune ID
  P3352: { ignore: true },
  // National Recreation Trails Database ID
  P3353: { ignore: true },
  // Nobel Prize People Nomination ID
  P3360: { ignore: true },
  // PictoRight ID code
  P3361: { ignore: true },
  // Tennis Hall of Fame player ID
  P3363: { ignore: true },
  // Treccani ID
  P3365: { ignore: true },
  // GECD person ID
  P3366: { ignore: true },
  // GECD film ID
  P3367: { ignore: true },
  // Prabook ID
  P3368: { ignore: true },
  // Géopatronyme ID
  P3370: { ignore: true },
  // Observatoire du Patrimoine Religieux ID
  P3371: { ignore: true },
  // Auckland Art Gallery artist ID
  P3372: { ignore: true },
  // GECD Firmen-ID
  P3375: { ignore: true },
  // Enterprise number (Belgium)
  P3376: { ignore: true },
  // Bloomberg company ID
  P3377: { ignore: true },
  // Merck Index reaction ID
  P3378: { ignore: true },
  // Model Manual ID
  P3379: { ignore: true },
  // FAO 2007 genetic resource ID
  P3380: { ignore: true },
  // File Format Wiki page ID
  P3381: { ignore: true },
  // GeneDB ID
  P3382: { ignore: true },
  // Japan Sumo Association ID
  P3385: { ignore: true },
  // French Sculpture Census work ID
  P3386: { ignore: true },
  // LittleSis people ID
  P3388: { ignore: true },
  // Royal Swedish Academy of Letters member ID
  P3389: { ignore: true },
  // NLB authority ID
  P3390: { ignore: true },
  // Verkhovna Rada MP ID
  P3391: { ignore: true },
  // Surman ID
  P3392: { ignore: true },
  // LittleSis organization ID
  P3393: { ignore: true },
  // Finnish Lake ID
  P3394: { ignore: true },
  // French Catholic Church structure ID
  P3396: { ignore: true },
  // Guide of the French Church person ID
  P3397: { ignore: true },
  // Butterflies and Moths of North America ID
  P3398: { ignore: true },
  // JTWC tropical cyclone ID
  P3399: { ignore: true },
  // CORDIS Project ID
  P3400: { ignore: true },
  // Wilderness Connect ID
  P3401: { ignore: true },
  // The Vogue List ID
  P3404: { ignore: true },
  // Nederlands Soortenregister ID
  P3405: { ignore: true },
  // Saccharomyces Genome Database ID
  P3406: { ignore: true },
  // Klosterdatenbank ID
  P3407: { ignore: true },
  // FINA athlete ID
  P3408: { ignore: true },
  // Catalogus Professorum Lipsiensis ID
  P3409: { ignore: true },
  // Clergy of the Church of England database ID
  P3410: { ignore: true },
  // Saxon Academy of Sciences member ID
  P3411: { ignore: true },
  // Canadian Environmental Sustainability Indicators ID (Protected areas)
  P3412: { ignore: true },
  // Leopoldina member ID
  P3413: { ignore: true },
  // Yle Areena item ID
  P3414: { ignore: true },
  // Quora topic ID
  P3417: { name: "Quora", icon: "socials/quora.svg" },
  // Google Play Store app ID
  P3418: { name: "Google Play", icon: "socials/google-play.svg" },
  // Basic Unit of Settlement code (Czech)
  P3419: { ignore: true },
  // Calflora ID
  P3420: { ignore: true },
  // Belvedere artist ID
  P3421: { ignore: true },
  // INSEE countries and foreign territories code
  P3422: { ignore: true },
  // INSEE arrondissement code
  P3423: { ignore: true },
  // Natura 2000 site ID
  P3425: { ignore: true },
  // ArbetSam ID
  P3426: { ignore: true },
  // AS.com athlete ID
  P3427: { ignore: true },
  // Electronic Enlightenment ID
  P3429: { ignore: true },
  // SNAC ARK ID
  P3430: { ignore: true },
  // Publons publication ID
  P3431: { ignore: true },
  // ERIH PLUS ID
  P3434: { ignore: true },
  // VGMdb artist ID
  P3435: { ignore: true },
  // AELG ID
  P3436: { ignore: true },
  // Debian stable package
  P3442: { ignore: true },
  // Victorian Heritage Database ID
  P3443: { ignore: true },
  // eBird taxon ID
  P3444: { ignore: true },
  // Cinema of Israel ID
  P3445: { ignore: true },
  // Italian Athletics Federation athlete ID
  P3446: { ignore: true },
  // NSW Heritage database ID
  P3449: { ignore: true },
  // IPI base code
  P3453: { ignore: true },
  // Arch Linux package
  P3454: { ignore: true },
  // CircleID writer ID
  P3455: { ignore: true },
  // ATP tennis tournament ID
  P3456: { ignore: true },
  // CNC authorization number
  P3458: { ignore: true },
  // Euring number
  P3459: { ignore: true },
  // FAMA work ID
  P3462: { ignore: true },
  // Fedora package
  P3463: { ignore: true },
  // Israeli CBS municipal ID
  P3466: { ignore: true },
  // Inventario Sculture - Polo Museale Fiorentino
  P3467: { ignore: true },
  // National Inventors Hall of Fame ID
  P3468: { ignore: true },
  // WTA tennis tournament ID
  P3469: { ignore: true },
  // Woodland Trust wood ID
  P3470: { ignore: true },
  // WikiSkripta ID
  P3471: { ignore: true },
  // VICNAMES Place ID
  P3472: { ignore: true },
  // Ubuntu package
  P3473: { ignore: true },
  // SANU member ID
  P3475: { ignore: true },
  // PSA World Tour player ID
  P3476: { ignore: true },
  // Nihon Tarento Meikan ID
  P3477: { ignore: true },
  // Songkick artist ID
  P3478: { ignore: true },
  // Omni topic ID
  P3479: { ignore: true },
  // base Mémoire reference
  P3480: { ignore: true },
  // Parks & Gardens UK record ID
  P3481: { ignore: true },
  // Europeana Fashion creator ID
  P3482: { ignore: true },
  // VGMdb album ID
  P3483: { ignore: true },
  // FilmPolski.pl ID
  P3495: { ignore: true },
  // ZNIEFF ID
  P3498: { ignore: true },
  // Gentoo package
  P3499: { ignore: true },
  // Ringgold ID
  P3500: { ignore: true },
  // Ameblo username
  P3502: { ignore: true },
  // LombardiaBeniCulturali building ID
  P3503: { ignore: true },
  // Florentine Inventario Palatina art ID
  P3504: { ignore: true },
  // BoardGameGeek designer ID
  P3505: { ignore: true },
  // Luding designer ID
  P3506: { ignore: true },
  // Bivouac.com mountain ID
  P3507: { ignore: true },
  // Dagens Nyheter topic ID
  P3509: { ignore: true },
  // VGMDb organization ID
  P3511: { ignore: true },
  // peakware mountain ID
  P3513: { ignore: true },
  // U.S. National Geodetic Survey ID
  P3514: { ignore: true },
  // NPCA ID
  P3515: { ignore: true },
  // National Park Foundation ID
  P3516: { ignore: true },
  // (discontinued) Geographical Names Board of NSW ID
  P3517: { ignore: true },
  // Smithsonian trinomial
  P3518: { ignore: true },
  // Pfam ID
  P3519: { ignore: true },
  // databaseOlympics.com athlete ID (archived)
  P3520: { ignore: true },
  // European Tour golf player ID
  P3521: { ignore: true },
  // NHL.com player ID
  P3522: { ignore: true },
  // Rfam ID
  P3523: { ignore: true },
  // Simple Modular Architecture Research Tool ID
  P3524: { ignore: true },
  // ACB.com player ID
  P3525: { ignore: true },
  // wisden.com ID
  P3526: { ignore: true },
  // Eurobasket.com player ID
  P3527: { ignore: true },
  // Luding game ID
  P3528: { ignore: true },
  // AZBilliards ID
  P3531: { ignore: true },
  // databaseFootball.com ID
  P3532: { ignore: true },
  // DraftExpress ID
  P3533: { ignore: true },
  // (discontinued) Australian Government Organisations Register ID
  P3534: { ignore: true },
  // Japan Golf Tour player ID
  P3535: { ignore: true },
  // euroleague.net player ID
  P3536: { ignore: true },
  // FootballDatabase.eu player ID
  P3537: { ignore: true },
  // Fussballdaten.de player ID
  P3538: { ignore: true },
  // NFL.com ID (former scheme)
  P3539: { ignore: true },
  // MLB.com player ID
  P3541: { ignore: true },
  // FIBA player ID
  P3542: { ignore: true },
  // Te Papa agent ID
  P3544: { ignore: true },
  // Theoi Project ID
  P3545: { ignore: true },
  // AustralianFootball.com ID
  P3546: { ignore: true },
  // AFL Tables player ID
  P3547: { ignore: true },
  // Australian Business Number
  P3548: { ignore: true },
  // Australian Company Number
  P3549: { ignore: true },
  // Australian Register of Therapeutic Goods ID
  P3550: { ignore: true },
  // Australian Registered Body Number
  P3551: { ignore: true },
  // Australian Registered Scheme Number
  P3552: { ignore: true },
  // Zhihu topic ID
  P3553: { ignore: true },
  // World Series of Poker ID
  P3554: { ignore: true },
  // World Guide to Covered Bridges ID
  P3555: { ignore: true },
  // CurlingZone ID
  P3556: { ignore: true },
  // World Curling Federation ID
  P3557: { ignore: true },
  // USCF player ID
  P3558: { ignore: true },
  // College Football Data Warehouse ID
  P3560: { ignore: true },
  // Pro-Football-Reference.com player ID
  P3561: { ignore: true },
  // Admiralty number
  P3562: { ignore: true },
  // NGA lighthouse ID
  P3563: { ignore: true },
  // Global Poker Index ID
  P3564: { ignore: true },
  // J.League player ID
  P3565: { ignore: true },
  // Just Sports Stats ID
  P3566: { ignore: true },
  // HHOF.com NHL player ID
  P3567: { ignore: true },
  // Official World Golf Ranking player ID
  P3568: { ignore: true },
  // Cultureel Woordenboek ID
  P3569: { ignore: true },
  // European Case Law ID
  P3570: { ignore: true },
  // ESPN.com MLB player ID
  P3571: { name: "ESPN", icon: "socials/espn.svg" },
  // ESPNcricinfo playing ground ID
  P3572: { ignore: true },
  // European Handball Federation player ID (archived)
  P3573: { ignore: true },
  // FanGraphs player ID
  P3574: { ignore: true },
  // TLG author ID
  P3576: { ignore: true },
  // Croatian Football Federation player ID
  P3577: { ignore: true },
  // Sina Weibo user ID
  P3579: { ignore: true },
  // SIPCA code
  P3580: { ignore: true },
  // Pro Football Hall of Fame ID (old)
  P3581: { ignore: true },
  // Sunshine Tour golf player ID
  P3582: { ignore: true },
  // Surfline ID
  P3583: { ignore: true },
  // ITRA runner ID
  P3584: { ignore: true },
  // UltraSignup runner ID
  P3585: { ignore: true },
  // CricketArchive playing ground ID
  P3586: { ignore: true },
  // Common Vulnerabilities and Exposures ID
  P3587: { ignore: true },
  // WNBA player ID
  P3588: { ignore: true },
  // GCD series ID
  P3589: { ignore: true },
  // Relations Ontology ID
  P3590: { ignore: true },
  // WCSPF ID
  P3591: { ignore: true },
  // AFI Catalog of Feature Films ID
  P3593: { ignore: true },
  // Araneae Spider ID
  P3594: { ignore: true },
  // Biografiskt Lexikon för Finland ID
  P3595: { ignore: true },
  // Danish ancient monument ID
  P3596: { ignore: true },
  // F-Droid package
  P3597: { ignore: true },
  // Hockey-Reference.com player ID
  P3598: { ignore: true },
  // archival creator authority record at the Archives nationales
  P3599: { ignore: true },
  // protected heritage site in Brussels ID
  P3600: { ignore: true },
  // MarineTraffic Lighthouse ID
  P3601: { ignore: true },
  // Minneapolis Institute of Art constituent ID
  P3603: { ignore: true },
  // World Triathlon triathlete ID
  P3604: { ignore: true },
  // 90minut player ID
  P3605: { ignore: true },
  // BOLD Systems taxon ID
  P3606: { ignore: true },
  // Booking.com hotel ID
  P3607: { ignore: true },
  // EU VAT number
  P3608: { ignore: true },
  // Recreation.gov gateway ID
  P3609: { ignore: true },
  // Borden Code
  P3611: { ignore: true },
  // Le Monde diplomatique subject ID
  P3612: { ignore: true },
  // Naturvårdsregistret ID
  P3613: { ignore: true },
  // DigDag ID
  P3614: { ignore: true },
  // Vision of Britain unit ID
  P3615: { ignore: true },
  // Vision of Britain place ID
  P3616: { ignore: true },
  // Ski-DB skier ID
  P3619: { ignore: true },
  // BWFbadminton.com player ID
  P3620: { ignore: true },
  // Darts Database player ID
  P3621: { ignore: true },
  // Russian Bandy Federation player ID
  P3622: { ignore: true },
  // BadmintonLink player ID
  P3623: { ignore: true },
  // CWE ID
  P3624: { ignore: true },
  // Australian Antarctic Gazetteer ID
  P3626: { ignore: true },
  // Historical Gazetteer of England's Place Names ID
  P3627: { ignore: true },
  // British History Online VCH ID
  P3628: { ignore: true },
  // Babelio author ID
  P3630: { ignore: true },
  // Babelio work ID
  P3631: { ignore: true },
  // British Museum thesaurus ID
  P3632: { ignore: true },
  // British Museum place ID
  P3633: { ignore: true },
  // The Met object ID
  P3634: { ignore: true },
  // Peakbagger area ID
  P3635: { ignore: true },
  // PDB ligand ID
  P3636: { ignore: true },
  // European Medicines Agency product number
  P3637: { ignore: true },
  // Oorlogsmonument ID
  P3638: { ignore: true },
  // KEPN ID
  P3639: { ignore: true },
  // National Drug Code
  P3640: { ignore: true },
  // Uniform Type Identifier
  P3641: { ignore: true },
  // ARCHON code
  P3642: { ignore: true },
  // FFR player ID
  P3644: { ignore: true },
  // All Blacks player ID
  P3645: { ignore: true },
  // Naismith Memorial Basketball Hall of Fame ID
  P3646: { ignore: true },
  // NBA.com player ID
  P3647: { ignore: true },
  // American Hockey League player ID
  P3651: { ignore: true },
  // Kontinental Hockey League player ID
  P3652: { ignore: true },
  // ARRS runner ID
  P3653: { ignore: true },
  // Chess.com member ID
  P3654: { ignore: true },
  // BDFutbol player ID
  P3655: { ignore: true },
  // Cross-tables.com Scrabble player ID
  P3656: { ignore: true },
  // Croatian Football Statistics player ID
  P3657: { ignore: true },
  // DZFoot.com player ID
  P3658: { ignore: true },
  // Estonian Football Association player ID
  P3659: { ignore: true },
  // FootballFacts.ru player ID
  P3660: { ignore: true },
  // ForaDeJogo manager ID
  P3661: { ignore: true },
  // Ukrainian Association of Football player ID
  P3662: { ignore: true },
  // Fotbal DNES player ID
  P3663: { ignore: true },
  // Futsal Planet player ID
  P3664: { ignore: true },
  // L'Équipe football player ID
  P3665: { ignore: true },
  // EPCR player ID
  P3666: { ignore: true },
  // IWF athlete ID
  P3667: { ignore: true },
  // Sambafoot player ID
  P3668: { ignore: true },
  // Swimming Australia swimmer ID
  P3669: { ignore: true },
  // Tennis Archives player ID
  P3670: { ignore: true },
  // USA Gymnastics athlete ID
  P3671: { ignore: true },
  // IOF athlete ID
  P3672: { ignore: true },
  // film-documentaire.fr film ID
  P3673: { ignore: true },
  // Mutopia composer ID
  P3674: { ignore: true },
  // Hans Christian Andersen Centre work ID
  P3675: { ignore: true },
  // National Bridge Inventory Number
  P3676: { ignore: true },
  // Wereld van Oranje player ID
  P3677: { ignore: true },
  // SA Rugby player ID
  P3678: { ignore: true },
  // ESPNFC.com player ID
  P3681: { ignore: true },
  // Australian Olympic Committee athlete ID
  P3682: { ignore: true },
  // LFP player ID (former scheme)
  P3683: { ignore: true },
  // Driver Database driver ID
  P3684: { ignore: true },
  // ESPN.com NBA player ID
  P3685: { name: "ESPN", icon: "socials/espn.svg" },
  // ESPN.com NFL player ID
  P3686: { name: "ESPN", icon: "socials/espn.svg" },
  // ESPN.com NHL player ID
  P3687: { name: "ESPN", icon: "socials/espn.svg" },
  // ICF canoer ID
  P3689: { ignore: true },
  // IFSC climber ID
  P3690: { ignore: true },
  // International Swimming Hall of Fame ID
  P3691: { ignore: true },
  // NCAA.com team ID
  P3692: { ignore: true },
  // short-track speed skater ISU ID
  P3693: { ignore: true },
  // SpeedSkatingNews.info speed skater ID
  P3694: { ignore: true },
  // SpeedSkatingStats speed skater ID
  P3695: { ignore: true },
  // Sports-Reference.com college basketball player ID
  P3696: { ignore: true },
  // Sports-Reference.com college football player ID
  P3697: { ignore: true },
  // Tennis Australia player ID
  P3698: { ignore: true },
  // Transfermarkt referee ID
  P3699: { ignore: true },
  // NHF player ID
  P3700: { ignore: true },
  // Catalogue of Illuminated Manuscripts ID
  P3702: { ignore: true },
  // JMDb person or company ID
  P3703: { ignore: true },
  // KMDb film ID
  P3704: { ignore: true },
  // RITVA Program ID
  P3705: { ignore: true },
  // RITVA Person ID
  P3706: { ignore: true },
  // Gridabase glacier ID
  P3707: { ignore: true },
  // PhDTree person ID
  P3708: { ignore: true },
  // Jewish Encyclopedia Daat ID
  P3710: { ignore: true },
  // Vanderkrogt.net Statues ID
  P3711: { ignore: true },
  // Recreation.gov point of interest ID
  P3714: { ignore: true },
  // NISH Hall of Fame ID (archived)
  P3715: { ignore: true },
  // MEROPS enzyme ID
  P3717: { ignore: true },
  // NCMEC person ID
  P3718: { ignore: true },
  // GPnotebook ID
  P3720: { ignore: true },
  // USCG lighthouse ID
  P3723: { ignore: true },
  // USHMM Holocaust Encyclopedia ID
  P3724: { ignore: true },
  // CEV player ID
  P3725: { ignore: true },
  // EU-Football.info player ID
  P3726: { ignore: true },
  // Serbia municipality ID
  P3727: { ignore: true },
  // New Zealand Heritage List number
  P3728: { ignore: true },
  // Serbia cadastral municipality ID
  P3731: { ignore: true },
  // PhilPapers record
  P3732: { ignore: true },
  // (discontinued) MOOMA artist ID
  P3733: { ignore: true },
  // Yad Vashem Encyclopedia of the Ghettos ID
  P3735: { ignore: true },
  // Eurovision Song Contest song ID
  P3736: { ignore: true },
  // FIH player ID
  P3742: { ignore: true },
  // ITU/ISO/IEC object identifier
  P3743: { ignore: true },
  // World Rugby Sevens Series player ID
  P3745: { ignore: true },
  // Wildflowers of Israel ID
  P3746: { ignore: true },
  // SSRN author ID
  P3747: { ignore: true },
  // Israel Football Association player ID
  P3748: { ignore: true },
  // Google Maps Customer ID
  P3749: { ignore: true },
  // KMDb documentary film ID
  P3750: { ignore: true },
  // Shoftim BeIsrael judge ID
  P3751: { ignore: true },
  // DOCOMOMO Ibérico ID
  P3758: { ignore: true },
  // SAHRA heritage site ID
  P3759: { ignore: true },
  // Iditarod musher ID
  P3760: { ignore: true },
  // openMLOL author ID
  P3762: { ignore: true },
  // MIMO instrument ID
  P3763: { ignore: true },
  // All-Athletics.com ID (archived)
  P3765: { ignore: true },
  // European Athletics ID (archived)
  P3766: { ignore: true },
  // French Athletics Federation athlete ID
  P3767: { ignore: true },
  // Medieval Libraries of Great Britain ID
  P3768: { ignore: true },
  // It's Rugby player ID
  P3769: { ignore: true },
  // PeakFinder ID
  P3770: { ignore: true },
  // Artnet artist ID
  P3782: { ignore: true },
  // Christie's object ID
  P3783: { ignore: true },
  // CiteSeerX article ID
  P3784: { ignore: true },
  // danskefilm film ID
  P3785: { ignore: true },
  // Danskefilm person ID
  P3786: { ignore: true },
  // danskefilm silent film ID
  P3787: { ignore: true },
  // BNMM authority ID
  P3788: { ignore: true },
  // Telegram username
  P3789: { name: "Telegram", icon: "socials/telegram.svg" },
  // AnimeCons.com guest ID
  P3790: { ignore: true },
  // Art Renewal Center artist ID
  P3791: { ignore: true },
  // Dictionary of Sydney ID
  P3794: { ignore: true },
  // Flora of Israel Online plant ID
  P3795: { ignore: true },
  // Bureau of Meteorology station ID
  P3796: { ignore: true },
  // autonomous system number
  P3797: { ignore: true },
  // Star Wars Databank ID
  P3798: { ignore: true },
  // Safsal player ID
  P3799: { ignore: true },
  // Safsal coach ID
  P3800: { ignore: true },
  // INEGI municipality ID
  P3801: { ignore: true },
  // Launchpad.net project ID
  P3802: { ignore: true },
  // TV Guide show ID (former scheme)
  P3804: { ignore: true },
  // Tax-exempt heritage asset ID
  P3805: { ignore: true },
  // Mapa place ID
  P3806: { ignore: true },
  // S2A3 Biographical Database ID
  P3807: { ignore: true },
  // The Numbers movie ID
  P3808: { ignore: true },
  // (discontinued) YerelNET district ID
  P3809: { ignore: true },
  // Parks.it ID
  P3810: { ignore: true },
  // Evidence & Conclusion Ontology ID
  P3811: { ignore: true },
  // Elle.fr person ID
  P3812: { ignore: true },
  // Bivouac.com pass ID
  P3813: { ignore: true },
  // BoF person ID
  P3814: { ignore: true },
  // FI WarSampo person ID
  P3817: { ignore: true },
  // FI WarSampo army unit ID
  P3819: { ignore: true },
  // Flanders Arts Institute venue ID
  P3820: { ignore: true },
  // Bangla Movie Database ID
  P3821: { ignore: true },
  // permanent building number VTJ-PRT
  P3824: { ignore: true },
  // United States Statutes at Large citation
  P3825: { ignore: true },
  // Welsh Rugby Union men's player ID
  P3826: { ignore: true },
  // JSTOR topic ID
  P3827: { ignore: true },
  // Publons author ID
  P3829: { ignore: true },
  // CueTracker player ID
  P3830: { ignore: true },
  // Europeana Fashion Vocabulary ID
  P3832: { ignore: true },
  // (discontinued) Mendeley person ID
  P3835: { ignore: true },
  // Pinterest username
  P3836: { name: "Pinterest", icon: "socials/pinterest.svg" },
  // United States Public Law
  P3837: { ignore: true },
  // Tab4u song ID
  P3838: { ignore: true },
  // Tab4u artist ID
  P3839: { ignore: true },
  // Human Phenotype Ontology ID
  P3841: { ignore: true },
  // German Athletics Association athlete ID
  P3843: { ignore: true },
  // Deutsche Synchronkartei film ID
  P3844: { ignore: true },
  // TV Guide person ID (former scheme)
  P3845: { ignore: true },
  // DBC author ID
  P3846: { ignore: true },
  // Open Library subject ID
  P3847: { ignore: true },
  // Irish Rugby Football Union men's player ID
  P3848: { ignore: true },
  // LombardiaBeniCulturali institution ID
  P3849: { ignore: true },
  // LombardiaBeniCulturali toponym ID
  P3850: { ignore: true },
  // Cinenacional.com movie ID
  P3851: { ignore: true },
  // FlyBase Gene ID
  P3852: { ignore: true },
  // Rat Genome Database ID
  P3853: { ignore: true },
  // Soundtrack Collector ID
  P3854: { ignore: true },
  // LombardiaBeniCulturali artwork ID
  P3855: { ignore: true },
  // Quebec municipalities geographical code
  P3856: { ignore: true },
  // Cinenacional.com person ID
  P3857: { ignore: true },
  // Environment Ontology ID
  P3859: { ignore: true },
  // Wormbase Gene ID
  P3860: { ignore: true },
  // App Store app ID
  P3861: { name: "App Store", icon: "socials/apple-store.svg" },
  // MyDramaList name ID
  P3862: { ignore: true },
  // Italian Navy Lighthouses and Beacons ID
  P3863: { ignore: true },
  // LAWA waterbody ID
  P3866: { ignore: true },
  // Israel Chess Federation player ID
  P3867: { ignore: true },
  // MyDramaList title ID
  P3868: { ignore: true },
  // IAFD female performer ID
  P3869: { ignore: true },
  // ZFIN Gene ID
  P3870: { ignore: true },
  // Justia Patents inventor ID
  P3874: { ignore: true },
  // Justia Patents company ID
  P3875: { ignore: true },
  // HappyCow restaurant ID
  P3877: { ignore: true },
  // USA Track & Field Hall of Fame ID (legacy.usatf.org)
  P3881: { ignore: true },
  // Tilastopaja female athlete ID
  P3882: { ignore: true },
  // Red Bull athlete ID
  P3883: { ignore: true },
  // Tilastopaja male athlete ID
  P3884: { ignore: true },
  // History of Modern Biomedicine ID
  P3885: { ignore: true },
  // KVAB member ID
  P3887: { ignore: true },
  // Boijmans artist ID
  P3888: { ignore: true },
  // Swiss Federal Archives ID
  P3889: { ignore: true },
  // MetaboLights Compound ID
  P3890: { ignore: true },
  // PictoRight ID-Droit de suite
  P3892: { ignore: true },
  // OSTI article ID
  P3894: { ignore: true },
  // INAO product ID
  P3895: { ignore: true },
  // Ladies European Tour golf player ID
  P3897: { ignore: true },
  // Hotels.com hotel ID
  P3898: { ignore: true },
  // Medium username
  P3899: { ignore: true },
  // CONICET person ID
  P3900: { ignore: true },
  // ADAGP artist ID
  P3901: { ignore: true },
  // VIVC grape variety ID
  P3904: { ignore: true },
  // Ishim ID
  P3906: { ignore: true },
  // LoJ peak ID
  P3907: { ignore: true },
  // Reprezentacija player ID
  P3908: { ignore: true },
  // Bollywood Hungama person numeric ID
  P3910: { ignore: true },
  // STW Thesaurus for Economics ID
  P3911: { ignore: true },
  // MobyGames developer ID
  P3913: { ignore: true },
  // GuideStar Israel organization ID
  P3914: { ignore: true },
  // Australian Athletics Historical Results athlete ID
  P3915: { ignore: true },
  // UNESCO Thesaurus ID
  P3916: { ignore: true },
  // Répertoire national des associations identifier
  P3918: { ignore: true },
  // Canadian Coastguard Lighthouse ID
  P3920: { ignore: true },
  // World Athletics athlete ID (Diamond League)
  P3923: { ignore: true },
  // Track and Field Statistics female athlete ID
  P3924: { ignore: true },
  // Track and Field Statistics male athlete ID
  P3925: { ignore: true },
  // USA Track & Field athlete ID (legacy.usatf.org)
  P3926: { ignore: true },
  // eWRC-results.com racer ID
  P3927: { ignore: true },
  // MotoGP racer ID
  P3928: { ignore: true },
  // V&A item ID
  P3929: { ignore: true },
  // Rallye-info.com driver or co-driver ID
  P3930: { ignore: true },
  // Digital Valencian Library author ID
  P3932: { ignore: true },
  // Cinema.de ID
  P3933: { ignore: true },
  // Chamber of Deputies of Italy storia ID
  P3935: { ignore: true },
  // NFF person ID
  P3936: { ignore: true },
  // Reactome ID
  P3937: { ignore: true },
  // English Short Title Catalogue identifier
  P3939: { ignore: true },
  // OlimpBase Chess Olympiad player ID
  P3940: { ignore: true },
  // Israel Antiquities Authority ID
  P3941: { ignore: true },
  // UCI BMX Supercross World Cup Results rider ID
  P3942: { ignore: true },
  // Tumblr username
  P3943: { ignore: true },
  // Old Bailey Proceedings ID
  P3944: { ignore: true },
  // RANM member ID
  P3945: { ignore: true },
  // Dictionary Grierson ID
  P3946: { ignore: true },
  // MLL player ID
  P3948: { ignore: true },
  // Juwra.com ID
  P3949: { ignore: true },
  // BioRxiv ID
  P3951: { ignore: true },
  // Stereo Ve Mono artist ID
  P3952: { ignore: true },
  // (discontinued) ALPG Tour golf player ID
  P3953: { ignore: true },
  // Italian Senate ID
  P3954: { ignore: true },
  // NLL player ID
  P3955: { ignore: true },
  // National Academy of Medicine (France) member ID
  P3956: { ignore: true },
  // RealGM basketball player ID
  P3957: { ignore: true },
  // ENARD athlete ID
  P3958: { ignore: true },
  // NNL item ID
  P3959: { ignore: true },
  // Base biographique AUTOR ID
  P3960: { ignore: true },
  // Unifrance film ID
  P3961: { ignore: true },
  // Global Trade Item Number
  P3962: { ignore: true },
  // Clochers de France ID
  P3963: { ignore: true },
  // BDCYL authority ID
  P3964: { ignore: true },
  // Bridgeman artist ID
  P3965: { ignore: true },
  // CETS number
  P3968: { ignore: true },
  // PASE Domesday person ID
  P3971: { ignore: true },
  // PASE Domesday place
  P3972: { ignore: true },
  // PIM authority ID
  P3973: { ignore: true },
  // Database of Classical Scholars ID
  P1935: { ignore: true },
  // Digital Atlas of the Roman Empire ID
  P1936: { ignore: true },
  // UN/LOCODE
  P1937: { ignore: true },
  // Project Gutenberg author ID
  P1938: { ignore: true },
  // Dyntaxa ID
  P1939: { ignore: true },
  // conifers.org ID
  P1940: { ignore: true },
  // Mapillary ID
  P1947: { ignore: true },
  // BerlPap identifier
  P1948: { ignore: true },
  // CulturaItalia ID
  P1949: { ignore: true },
  // Encyclopaedia Metallum band ID
  P1952: { ignore: true },
  // Discogs artist ID
  P1953: { ignore: true },
  // Discogs master ID
  P1954: { ignore: true },
  // Discogs label ID
  P1955: { ignore: true },
  // Trismegistos Geo ID
  P1958: { ignore: true },
  // Dutch Senate person ID
  P1959: { ignore: true },
  // Google Scholar author ID
  P1960: { ignore: true },
  // CTHS society ID
  P1961: { ignore: true },
  // Biblioteca Nacional de Chile catalogue number
  P1966: { ignore: true },
  // BoxRec boxer ID
  P1967: { ignore: true },
  // Foursquare venue ID
  P1968: { ignore: true },
  // MovieMeter film ID
  P1970: { ignore: true },
  // Open Hub ID
  P1972: { ignore: true },
  // RSL editions
  P1973: { ignore: true },
  // INEGI locality ID
  P1976: { ignore: true },
  // Les Archives du spectacle person ID
  P1977: { ignore: true },
  // USDA NDB number
  P1978: { ignore: true },
  // Righteous Among The Nations ID
  P1979: { ignore: true },
  // PolSys ID
  P1980: { ignore: true },
  // Anime News Network person ID
  P1982: { ignore: true },
  // Anime News Network company ID
  P1983: { ignore: true },
  // Anime News Network manga ID
  P1984: { ignore: true },
  // Anime News Network anime ID
  P1985: { ignore: true },
  // Biographical Dictionary of Italian People ID
  P1986: { ignore: true },
  // Le Delarge artist ID
  P1988: { ignore: true },
  // Encyclopaedia Metallum artist ID
  P1989: { ignore: true },
  // Plazi ID
  P1992: { ignore: true },
  // AllMusic composition ID
  P1994: { name: "AllMusic", icon: "socials/all-music.svg" },
  // parliament.uk biography pages
  P1996: { ignore: true },
  // Facebook Places ID
  P1997: { name: "Facebook", icon: "socials/facebook.svg" },
  // CPDL ID
  P2000: { ignore: true },
  // Twitter username
  P2002: { name: "Twitter", icon: "socials/twitter.svg" },
  // Instagram username
  P2003: { name: "Instagram", icon: "socials/instagram.svg" },
  // NALT ID
  P2004: { ignore: true },
  // Catalogus Professorum Halensis ID
  P2005: { ignore: true },
  // ZooBank author ID
  P2006: { ignore: true },
  // ZooBank publication ID
  P2007: { ignore: true },
  // IPNI publication ID
  P2008: { ignore: true },
  // Cooper-Hewitt Person ID
  P2011: { ignore: true },
  // Facebook ID
  P2013: { name: "Facebook", icon: "socials/facebook.svg" },
  // Museum of Modern Art work ID
  P2014: { ignore: true },
  // Hansard (1803–2005) ID
  P2015: { ignore: true },
  // Catalogus Professorum Academiae Groninganae ID
  P2016: { ignore: true },
  // Teuchos ID
  P2018: { ignore: true },
  // AllMovie person ID
  P2019: { ignore: true },
  // WorldFootball.net player ID
  P2020: { ignore: true },
  // German cattle breed ID
  P2024: { ignore: true },
  // Find A Grave cemetery ID
  P2025: { ignore: true },
  // Avibase ID
  P2026: { ignore: true },
  // Colour Index International constitution ID
  P2027: { ignore: true },
  // United States Armed Forces service number
  P2028: { ignore: true },
  // Dictionary of Ulster Biography ID
  P2029: { ignore: true },
  // (discontinued) NASA biographical ID
  P2030: { ignore: true },
  // Project Gutenberg ebook ID
  P2034: { ignore: true },
  // African Plant Database ID
  P2036: { ignore: true },
  // GitHub username
  P2037: { name: "Github", icon: "socials/github.svg" },
  // ResearchGate profile ID
  P2038: { ignore: true },
  // CITES Species+ ID
  P2040: { ignore: true },
  // National Gallery of Victoria artist ID
  P2041: { ignore: true },
  // Artsy artist ID
  P2042: { ignore: true },
  // Human Metabolome Database ID
  P2057: { ignore: true },
  // HSDB ID
  P2062: { ignore: true },
  // LIPID MAPS ID
  P2063: { ignore: true },
  // KNApSAcK ID
  P2064: { ignore: true },
  // NIAID ChemDB ID
  P2065: { ignore: true },
  // Fellow of the Royal Society ID
  P2070: { ignore: true },
  // Mémoire des hommes ID
  P2071: { ignore: true },
  // CDB Chemical ID
  P2072: { ignore: true },
  // internetmedicin.se ID
  P2074: { ignore: true },
  // AcademiaNet ID
  P2080: { ignore: true },
  // BLDAM object ID
  P2081: { ignore: true },
  // M.49 code
  P2082: { ignore: true },
  // Leadscope ID
  P2083: { ignore: true },
  // ZINC ID
  P2084: { ignore: true },
  // Nikkaji ID
  P2085: { ignore: true },
  // CDD Public ID
  P2086: { ignore: true },
  // Crunchbase person ID
  P2087: { name: "Crunchbase", icon: "socials/crunchbase.svg" },
  // Crunchbase organization ID
  P2088: { name: "Crunchbase", icon: "socials/crunchbase.svg" },
  // Library of Congress JukeBox ID (former scheme)
  P2089: { ignore: true },
  // Power of 10 athlete ID
  P2090: { ignore: true },
  // World Rowing ID (numeric format)
  P2091: { ignore: true },
  // Bildindex der Kunst und Architektur ID
  P2092: { ignore: true },
  // BC Geographical Names ID
  P2099: { ignore: true },
  // Banque de noms de lieux du Québec ID
  P2100: { ignore: true },
  // RXNO Ontology
  P2106: { ignore: true },
  // Kunstindeks Danmark artwork ID
  P2108: { ignore: true },
  // NDF-RT ID
  P2115: { ignore: true },
  // YerelNet village ID
  P2123: { ignore: true },
  // PubChem Substance ID (SID)
  P2153: { ignore: true },
  // Cell Line Ontology ID
  P2158: { ignore: true },
  // Guthrie code
  P2161: { ignore: true },
  // nature preserve in North Rhine-Westphalia ID
  P3974: { ignore: true },
  // BVMC work ID
  P3976: { ignore: true },
  // Songkick venue ID
  P3977: { ignore: true },
  // IECIC 2015 ID
  P3978: { ignore: true },
  // Unifrance company ID
  P3979: { ignore: true },
  // Unifrance person ID
  P3980: { ignore: true },
  // Misjonsarkiv person ID
  P3981: { ignore: true },
  // TA98 Latin term
  P3982: { ignore: true },
  // subreddit
  P3984: { name: "Reddit", icon: "socials/reddit.svg" },
  // Sequence Ontology ID
  P3986: { ignore: true },
  // SHARE Catalogue author ID
  P3987: { ignore: true },
  // National Library Board Singapore ID
  P3988: { ignore: true },
  // BG EKATTE place ID
  P3990: { ignore: true },
  // Austrian Textbook ID
  P3991: { ignore: true },
  // SSB urban settlement number
  P3992: { ignore: true },
  // Vitaskrá ID
  P3993: { ignore: true },
  // Filmweb.pl ID
  P3995: { ignore: true },
  // Bait La Zemer Ha-Ivri song ID
  P3996: { ignore: true },
  // Bait La Zemer Ha-Ivri artist ID
  P3997: { ignore: true },
  // Censo-Guía archive ID
  P3998: { ignore: true },
  // Facebook page ID
  P4003: { name: "Facebook", icon: "socials/facebook.svg" },
  // Bavarikon ID
  P4005: { ignore: true },
  // DBS ID
  P4007: { ignore: true },
  // Early Aviators people ID
  P4008: { ignore: true },
  // RKY national built heritage environment ID
  P4009: { ignore: true },
  // Semantic Scholar paper ID
  P4011: { ignore: true },
  // Semantic Scholar author ID
  P4012: { ignore: true },
  // Giphy username
  P4013: { ignore: true },
  // Australian Statistical Geography 2011 ID
  P4014: { ignore: true },
  // Vimeo identifier
  P4015: { ignore: true },
  // SlideShare username
  P4016: { ignore: true },
  // Ustream username
  P4017: { ignore: true },
  // The Arabidopsis Information Resource Accession
  P4018: { ignore: true },
  // USL Championship player ID
  P4019: { ignore: true },
  // danskefilm animated film ID
  P4021: { ignore: true },
  // danskefilm TV series ID
  P4022: { ignore: true },
  // German Football Association person ID
  P4023: { ignore: true },
  // ADW taxon ID
  P4024: { ignore: true },
  // Pinakothek artist ID
  P4025: { ignore: true },
  // Cullum number
  P4026: { ignore: true },
  // National Discography of Italian Song work ID
  P4027: { ignore: true },
  // Google Scholar paper ID
  P4028: { ignore: true },
  // Latvian Protected Nature Territory ID
  P4029: { ignore: true },
  // PLU code
  P4030: { ignore: true },
  // Hungarian NGO ID
  P4031: { ignore: true },
  // Mastodon address
  P4033: { ignore: true },
  // Shironet artist ID
  P4034: { ignore: true },
  // Shironet song ID
  P4035: { ignore: true },
  // South Australian Heritage Register Database ID
  P4037: { ignore: true },
  // Danish List of Lights and Fog signals ID
  P4038: { ignore: true },
  // Rock.com.ar artist ID
  P4040: { ignore: true },
  // Rock.com.ar album ID
  P4041: { ignore: true },
  // ESBL athlete ID
  P4042: { ignore: true },
  // SIMC place ID
  P4046: { ignore: true },
  // J.League manager ID
  P4048: { ignore: true },
  // French Olympic Committee athlete ID
  P4050: { ignore: true },
  // Legislation of Ukraine ID
  P4051: { ignore: true },
  // Academia.edu institutional ID
  P4052: { ignore: true },
  // team Deutschland ID
  P4053: { ignore: true },
  // Canadian Olympic Committee athlete ID
  P4054: { ignore: true },
  // Norwegian List of Lights ID
  P4055: { ignore: true },
  // New Zealand Olympic Committee athlete ID
  P4056: { ignore: true },
  // Irish Sites and Monuments Record ID
  P4057: { ignore: true },
  // FINESS ID
  P4058: { ignore: true },
  // Irish National Monument ID
  P4059: { ignore: true },
  // Brazilian Olympic Committee athlete ID
  P4060: { ignore: true },
  // Lithuanian National Olympic Committee athlete ID
  P4061: { ignore: true },
  // Czech Olympic Committee (olympijskytym.cz) athlete ID
  P4062: { ignore: true },
  // United States Olympic & Paralympic Committee athlete ID
  P4063: { ignore: true },
  // Argentine Olympic Committee athlete ID
  P4065: { ignore: true },
  // Hungarian Olympic Committee athlete ID
  P4066: { ignore: true },
  // Romanian Olympic and Sports Committee athlete ID
  P4067: { ignore: true },
  // Chinese Olympic Committee athlete ID
  P4068: { ignore: true },
  // Italian National Olympic Committee athlete ID
  P4069: { ignore: true },
  // Zemereshet artist ID
  P4071: { ignore: true },
  // Zemereshet song ID
  P4072: { ignore: true },
  // Fandom wiki ID
  P4073: { name: "Fandom", icon: "socials/fandom.svg" },
  // FFN swimmer ID
  P4074: { ignore: true },
  // Czech Monument Catalogue Number
  P4075: { ignore: true },
  // WorldSBK.com racer identifier
  P4076: { ignore: true },
  // Pizmonet ID
  P4077: { ignore: true },
  // Theatres Trust Database ID
  P4079: { ignore: true },
  // BHL creator ID
  P4081: { ignore: true },
  // Park Alpha Code
  P4083: { ignore: true },
  // MyAnimeList people ID
  P4084: { ignore: true },
  // MyAnimeList character ID
  P4085: { ignore: true },
  // MyAnimeList anime ID
  P4086: { ignore: true },
  // MyAnimeList manga ID
  P4087: { ignore: true },
  // Irish National Inventory of Architectural Heritage ID
  P4088: { ignore: true },
  // Global Terrorism Database ID
  P4089: { ignore: true },
  // Biodiversity Repository ID
  P4090: { ignore: true },
  // Australian Statistical Geography 2016 ID
  P4093: { ignore: true },
  // Australian Standard Geographic Classification 2006 ID
  P4094: { ignore: true },
  // Principal Galaxies Catalogue ID
  P4095: { ignore: true },
  // RePEc institute ID
  P4096: { ignore: true },
  // MuseScore ID
  P4097: { ignore: true },
  // BVMC place ID
  P4098: { ignore: true },
  // Atlas of Hillforts ID
  P4102: { ignore: true },
  // Carnegie Hall agent ID
  P4104: { ignore: true },
  // Finnish archaeological heritage ID
  P4106: { ignore: true },
  // Framalibre ID
  P4107: { ignore: true },
  // Gedbas genealogy person ID
  P4108: { ignore: true },
  // URN-NBN
  P4109: { ignore: true },
  // Crunchyroll ID
  P4110: { ignore: true },
  // danskefilm TV Christmas calendar
  P4111: { ignore: true },
  // danskfilmogtv person ID
  P4112: { ignore: true },
  // FRED time-series ID
  P4113: { ignore: true },
  // ADK member ID
  P4114: { ignore: true },
  // INSPIRE ID
  P4115: { ignore: true },
  // JewAge person ID
  P4116: { ignore: true },
  // National Record of the Historic Environment ID
  P4117: { ignore: true },
  // NLS-FI Geographic Name ID
  P4118: { ignore: true },
  // NLS Geographic Names Register Place ID
  P4119: { ignore: true },
  // Ontario Heritage Act Register ID
  P4120: { ignore: true },
  // openAIP ID
  P4121: { ignore: true },
  // PalDat plant ID
  P4122: { ignore: true },
  // French National Assembly ID
  P4123: { ignore: true },
  // Who's Who in France biography ID
  P4124: { ignore: true },
  // Titan ID
  P4125: { ignore: true },
  // ESEC person ID
  P4126: { ignore: true },
  // EmbassyPages.com ID
  P4127: { ignore: true },
  // NPSN Indonesian school ID
  P4128: { ignore: true },
  // Cinema Treasures ID
  P4129: { ignore: true },
  // USHMM person ID
  P4130: { ignore: true },
  // Tourer.it ID
  P4133: { ignore: true },
  // WIGOS station ID
  P4136: { ignore: true },
  // Treasury of Lives ID
  P4138: { ignore: true },
  // National Assembly of Nigeria ID
  P4139: { ignore: true },
  // Gatehouse Gazetteer place ID
  P4141: { ignore: true },
  // RIWAQ Registry of Historic Buildings in Palestine ID
  P4142: { ignore: true },
  // Finnish List of Lights ID
  P4143: { ignore: true },
  // Athenaeum artwork ID
  P4144: { ignore: true },
  // Athenaeum person ID
  P4145: { ignore: true },
  // Athenaeum museum ID
  P4146: { ignore: true },
  // National Forest Foundation ID
  P4154: { ignore: true },
  // Czech Registration ID
  P4156: { ignore: true },
  // MEG ID
  P4157: { ignore: true },
  // autores.ar ID
  P4158: { ignore: true },
  // WeRelate person ID
  P4159: { ignore: true },
  // Michelin Restaurants ID
  P4160: { ignore: true },
  // Michelin Voyages ID
  P4161: { ignore: true },
  // AUR package
  P4162: { ignore: true },
  // National Baseball Hall of Fame and Museum ID
  P4164: { ignore: true },
  // CODECS ID
  P4165: { ignore: true },
  // Georgian National Register of Monuments ID
  P4166: { ignore: true },
  // Dagens Næringsliv topic ID
  P4167: { ignore: true },
  // IEDB Epitope ID
  P4168: { ignore: true },
  // YCBA agent ID
  P4169: { ignore: true },
  // America's National Parks ID
  P4170: { ignore: true },
  // World Heritage Tentative List ID
  P4171: { ignore: true },
  // America's Byways road ID
  P4172: { ignore: true },
  // Instagram location ID
  P4173: { name: "Instagram", icon: "socials/instagram.svg" },
  // Wikimedia username
  P4174: { ignore: true },
  // Patreon ID
  P4175: { name: "Patreon", icon: "socials/patreon.svg" },
  // Finnish National Gallery artist ID
  P4177: { ignore: true },
  // Beazley Archive Pottery Database ID
  P4178: { ignore: true },
  // GujLit Person ID
  P4180: { ignore: true },
  // GujLit book ID
  P4181: { ignore: true },
  // National Natural Landmarks site ID
  P4182: { ignore: true },
  // Australian Women's Register ID
  P4186: { ignore: true },
  // Rivers.gov protected area ID
  P4190: { ignore: true },
  // Alljudo judoka ID
  P4191: { ignore: true },
  // LNH player ID
  P4192: { ignore: true },
  // Familypedia person ID
  P4193: { ignore: true },
  // CNPS ID
  P4194: { ignore: true },
  // IBM graphic character set global ID
  P4197: { ignore: true },
  // Google Play Music artist ID (former scheme)
  P4198: { ignore: true },
  // Google Play Music album ID (former scheme)
  P4199: { ignore: true },
  // Christie's creator ID
  P4200: { ignore: true },
  // PagesJaunes ID
  P4201: { ignore: true },
  // ROARMAP ID
  P4203: { ignore: true },
  // The Times of India topic ID
  P4204: { ignore: true },
  // FOIH person ID
  P4206: { ignore: true },
  // Italian National Earthquake Center ID
  P4207: { ignore: true },
  // Billboard artist ID
  P4208: { ignore: true },
  // danskfilmogtv title ID
  P4209: { ignore: true },
  // Bashkir encyclopedia (Bashkir version) ID (former scheme)
  P4210: { ignore: true },
  // Bashkir encyclopedia (Russian version) ID (former scheme)
  P4211: { ignore: true },
  // PACTOLS thesaurus ID
  P4212: { ignore: true },
  // nLab ID
  P4215: { ignore: true },
  // LNB Pro A player ID
  P4216: { ignore: true },
  // UK Electoral Commission ID
  P4217: { ignore: true },
  // Tyrolean Art Cadastre inventory ID
  P4219: { ignore: true },
  // National Criminal Justice ID
  P4221: { ignore: true },
  // United Nations Treaty Series Volume Number
  P4222: { ignore: true },
  // Treccani's Enciclopedia Italiana ID
  P4223: { ignore: true },
  // Cyworld ID
  P4226: { ignore: true },
  // Indonesian Small Islands Directory ID
  P4227: { ignore: true },
  // Encyclopedia of Australian Science ID
  P4228: { ignore: true },
  // ICD-10-CM
  P4229: { ignore: true },
  // Sefaria ID
  P4230: { ignore: true },
  // United Nations Treaty Series registration number
  P4231: { ignore: true },
  // Figshare author ID
  P4232: { ignore: true },
  // PatientsLikeMe condition ID
  P4233: { ignore: true },
  // PatientsLikeMe treatment ID
  P4235: { ignore: true },
  // PatientsLikeMe symptom ID
  P4236: { ignore: true },
  // Bavarian monument authority ID
  P4244: { ignore: true },
  // cultural heritage monument in Serbia ID
  P4245: { ignore: true },
  // LfD-HB object ID
  P4246: { ignore: true },
  // Tagesschau election ID
  P4247: { ignore: true },
  // The Black Book ID
  P4248: { ignore: true },
  // Vincoli in Rete ID
  P4249: { ignore: true },
  // TSE number
  P4251: { ignore: true },
  // All-Russian Mathematical Portal ID
  P4252: { ignore: true },
  // Banglapedia ID (Bengali)
  P4254: { ignore: true },
  // Banglapedia ID (English)
  P4255: { ignore: true },
  // BOE ID
  P4256: { ignore: true },
  // National Museums of Japan e-museum ID
  P4257: { ignore: true },
  // Gallica ID
  P4258: { ignore: true },
  // Lega Pallavolo Serie A Femminile player ID
  P4259: { ignore: true },
  // NPB player ID
  P4260: { ignore: true },
  // FFVoile sailor ID
  P4261: { ignore: true },
  // Footoféminin.fr player ID
  P4262: { ignore: true },
  // THW Kiel player ID
  P4263: { ignore: true },
  // LinkedIn company ID
  P4264: { name: "LinkedIn", icon: "socials/linkedin.png" },
  // Reddit username
  P4265: { name: "Reddit", icon: "socials/reddit.svg" },
  // Bavarian geotope ID
  P4266: { ignore: true },
  // Landtag of Liechtenstein ID
  P4267: { ignore: true },
  // Daum TV series ID
  P4270: { ignore: true },
  // DPLA subject term
  P4272: { ignore: true },
  // New York City Landmarks Preservation Commission ID
  P4273: { ignore: true },
  // Tunisian geographic code
  P4274: { ignore: true },
  // Japanese Database of National important cultural properties
  P4275: { ignore: true },
  // Cinémathèque québécoise work identifier
  P4276: { ignore: true },
  // Daum movie ID
  P4277: { ignore: true },
  // FCI rider ID
  P4278: { ignore: true },
  // hydrological order number
  P4279: { ignore: true },
  // International Standard Text Code
  P4280: { ignore: true },
  // LNV player ID
  P4281: { ignore: true },
  // LUMIERE film ID
  P4282: { ignore: true },
  // LUMIERE director ID
  P4283: { ignore: true },
  // Nominis given name ID
  P4284: { ignore: true },
  // Theses.fr person ID
  P4285: { ignore: true },
  // Nominis saint ID
  P4286: { ignore: true },
  // Riigikogu ID
  P4287: { ignore: true },
  // UK National Fruit Collection ID
  P4288: { ignore: true },
  // LFH player ID
  P4289: { ignore: true },
  // PM20 folder ID
  P4293: { ignore: true },
  // PROSPERO ID
  P4294: { ignore: true },
  // MIL-STD-2525 Symbol Identification Code
  P4297: { ignore: true },
  // VBL people ID
  P4298: { ignore: true },
  // ITF wheelchair player ID until 2019
  P4299: { ignore: true },
  // YouTube playlist ID
  P4300: { name: "YouTube", icon: "socials/youtube.svg" },
  // PfaF ID
  P4301: { ignore: true },
  // Royal Dutch Athletics Federation athlete ID
  P4302: { ignore: true },
  // Lega Pallavolo Serie A player ID
  P4303: { ignore: true },
  // FOIH materials ID
  P4304: { ignore: true },
  // FOIH styles and cultures ID
  P4305: { ignore: true },
  // FOIH periods ID
  P4306: { ignore: true },
  // FOIH heritage types ID
  P4307: { ignore: true },
  // FOIH value types ID
  P4308: { ignore: true },
  // FOIH event types ID
  P4309: { ignore: true },
  // FOIH decree types ID
  P4310: { ignore: true },
  // FOIH taxon ID
  P4311: { ignore: true },
  // musée de Bretagne identifiant collections ID
  P4313: { ignore: true },
  // SpeedskatingResults.com speed skater ID
  P4314: { ignore: true },
  // SwimSwam ID
  P4315: { ignore: true },
  // GARD rare disease ID
  P4317: { ignore: true },
  // Scottish Sports Hall of Fame athlete ID
  P4318: { ignore: true },
  // Elite Prospects staff ID
  P4319: { ignore: true },
  // BFI Filmography person ID
  P4326: { ignore: true },
  // BHL bibliography ID
  P4327: { ignore: true },
  // Brueckenweb ID
  P4328: { ignore: true },
  // Department of Education and Skills roll number
  P4331: { ignore: true },
  // Deutsche Synchronkartei actor ID
  P4332: { ignore: true },
  // GenBank assembly accession number
  P4333: { ignore: true },
  // Heritage Conservation District of Ontario ID
  P4334: { ignore: true },
  // IDESCAT territorial code in Catalonia
  P4335: { ignore: true },
  // Lloyd's Register Ship ID
  P4336: { ignore: true },
  // digitised page from Lloyd's Register of Ships from 1930 to 1945
  P4337: { ignore: true },
  // LOINC ID
  P4338: { ignore: true },
  // Radio Radicale organizer ID
  P4339: { ignore: true },
  // PubsHistory pub ID
  P4340: { ignore: true },
  // Store norske leksikon ID
  P4342: { ignore: true },
  // WBPLN author ID
  P4343: { ignore: true },
  // QEdu ID
  P4344: { ignore: true },
  // T4T35 megalith ID
  P4346: { ignore: true },
  // Florida Sports Hall of Fame athlete ID
  P4347: { ignore: true },
  // Lotsawa House Tibetan author ID
  P4348: { ignore: true },
  // Lotsawa House Indian author ID
  P4349: { ignore: true },
  // Cravo Albin artist ID
  P4351: { ignore: true },
  // BillionGraves cemetery ID
  P4352: { ignore: true },
  // PROSITE documentation ID
  P4355: { ignore: true },
  // Megalithic Portal ID
  P4356: { ignore: true },
  // Musikverket person ID
  P4357: { ignore: true },
  // Dutch lost building register ID
  P4358: { ignore: true },
  // gravsted.dk ID
  P4359: { ignore: true },
  // Monumentos de São Paulo ID
  P4360: { ignore: true },
  // ExecutedToday ID
  P4361: { ignore: true },
  // Alabama Sports Hall of Fame athlete ID (archived)
  P4362: { ignore: true },
  // Delaware Sports Hall of Fame ID
  P4363: { ignore: true },
  // Georgia Sports Hall of Fame ID (archived)
  P4364: { ignore: true },
  // Hawai‘i Sports Hall of Fame ID (archived)
  P4365: { ignore: true },
  // Kansas Sports Hall of Fame ID (archived)
  P4366: { ignore: true },
  // Louisiana Sports Hall of Fame ID
  P4367: { ignore: true },
  // Mississippi Sports Hall of Fame ID
  P4368: { ignore: true },
  // Cairn author ID
  P4369: { ignore: true },
  // KBO hitter ID
  P4370: { ignore: true },
  // KBO pitcher ID
  P4371: { ignore: true },
  // iPatrimônio ID
  P4372: { ignore: true },
  // National Trust Collections ID
  P4373: { ignore: true },
  // New Mexico Sports Hall of Fame ID
  P4374: { ignore: true },
  // North Carolina Sports Hall of Fame ID
  P4375: { ignore: true },
  // Oklahoma Sports Hall of Fame ID (dead link)
  P4376: { ignore: true },
  // Women's Sports Foundation ID
  P4377: { ignore: true },
  // Sandrart.net artwork ID
  P4380: { ignore: true },
  // Soccerdonna player ID
  P4381: { ignore: true },
  // LFB player ID
  P4382: { ignore: true },
  // Tennessee Sports Hall of Fame athlete ID
  P4383: { ignore: true },
  // DAMIT asteroid ID
  P4384: { ignore: true },
  // Missouri Sports Hall of Fame ID
  P4385: { ignore: true },
  // Virginia Sports Hall of Fame ID
  P4386: { ignore: true },
  // Mappy place ID
  P4388: { ignore: true },
  // Science Museum people ID
  P4389: { ignore: true },
  // The-Sports.org athlete ID
  P4391: { ignore: true },
  // British Columbia Sports Hall of Fame ID
  P4392: { ignore: true },
  // Anvisa drug ID
  P4393: { ignore: true },
  // NeuroNames ID (plain mode)
  P4394: { ignore: true },
  // BrainInfo ID (hierarchical)
  P4395: { ignore: true },
  // Alberta Sports Hall of Fame ID (archived)
  P4396: { ignore: true },
  // IPC.infostradasports.com sportsperson ID
  P4397: { ignore: true },
  // Canada's Sports Hall of Fame athlete ID
  P4398: { ignore: true },
  // Itaú Cultural ID
  P4399: { ignore: true },
  // Memória Globo ID
  P4400: { ignore: true },
  // Museus Brazil ID
  P4401: { ignore: true },
  // Women's Collegiate Tennis Hall of Fame ID
  P4402: { ignore: true },
  // MusicBrainz recording ID
  P4404: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // NLBPA ID
  P4405: { ignore: true },
  // Nova Scotia Sport Hall of Fame ID (dead link)
  P4406: { ignore: true },
  // Opera Vivra singer ID
  P4407: { ignore: true },
  // sports.ru athlete ID
  P4408: { ignore: true },
  // Baseball Almanac ID
  P4409: { ignore: true },
  // Women's Basketball Hall of Fame ID
  P4410: { ignore: true },
  // Quora username
  P4411: { name: "Quora", icon: "socials/quora.svg" },
  // Ontario Sports Hall of Fame ID (archived)
  P4412: { ignore: true },
  // Manitoba Sports Hall of Fame ID
  P4413: { ignore: true },
  // New Brunswick Sports Hall of Fame athlete ID
  P4414: { ignore: true },
  // Sport Australia Hall of Fame inductee ID
  P4415: { ignore: true },
  // Quebec Sports Hall of Fame ID
  P4416: { ignore: true },
  // Russian Premier League player ID
  P4417: { ignore: true },
  // New Zealand Sports Hall of Fame ID
  P4418: { ignore: true },
  // Videolectures ID
  P4419: { ignore: true },
  // Sportbox.ru ID
  P4421: { ignore: true },
  // U.S. Ski and Snowboard Hall of Fame athlete ID
  P4422: { ignore: true },
  // Portuguese lighthouse ID
  P4423: { ignore: true },
  // GACS ID
  P4427: { ignore: true },
  // United Rugby Championship player ID
  P4429: { ignore: true },
  // New York City Parks monument ID
  P4430: { ignore: true },
  // Google Doodle
  P4431: { ignore: true },
  // AKL Online artist ID
  P4432: { ignore: true },
  // Indian Foundation for Butterflies ID
  P4433: { ignore: true },
  // LesBiographies.com ID
  P4434: { ignore: true },
  // snap package
  P4435: { ignore: true },
  // (discontinued) The Coptic Library ID
  P4436: { ignore: true },
  // BFI Films, TV and people ID
  P4438: { ignore: true },
  // MNCARS artist ID
  P4439: { ignore: true },
  // Biblioteca Nacional de México ID
  P4440: { ignore: true },
  // Shirat Nashim person ID
  P4449: { ignore: true },
  // HAL author ID
  P4450: { ignore: true },
  // (discontinued) Scoresway handball person ID
  P4451: { ignore: true },
  // Argentine Senate member ID
  P4453: { ignore: true },
  // Argentine Chamber of Deputies ID
  P4454: { ignore: true },
  // Coinage of the Roman Republic Online ID
  P4455: { ignore: true },
  // Internet Off-Broadway Database ID
  P4456: { ignore: true },
  // DAHR artist ID
  P4457: { ignore: true },
  // Dutch Cemetery in Chinsurah person ID
  P4458: { ignore: true },
  // Spanish Biographical Dictionary ID
  P4459: { ignore: true },
  // Kaitai Struct format gallery ID
  P4460: { ignore: true },
  // World Golf Hall of Fame player ID
  P4461: { ignore: true },
  // Canadian Baseball Hall of Fame inductee ID
  P4462: { ignore: true },
  // Canadian Ski Hall of Fame inductee ID
  P4463: { ignore: true },
  // Rugby League Project player ID
  P4464: { ignore: true },
  // Ecole des chartes thesis abstract ID
  P4465: { ignore: true },
  // Unified Astronomy Thesaurus ID
  P4466: { ignore: true },
  // Twitch game ID
  P4467: { name: "Twitch", icon: "socials/twitch.svg" },
  // Mountain Bike Hall of Fame inductee ID
  P4468: { ignore: true },
  // IGHOF athlete ID
  P4469: { ignore: true },
  // British Bobsleigh & Skeleton Association ID
  P4470: { ignore: true },
  // Rush Parliamentary Archive ID
  P4471: { ignore: true },
  // Czech Jockey Club horse ID
  P4472: { ignore: true },
  // Melon artist ID
  P4473: { ignore: true },
  // International Boxing Hall of Fame boxer ID
  P4474: { ignore: true },
  // European Fencing Confederation fencer ID
  P4475: { ignore: true },
  // Australian Baseball League player ID
  P4476: { ignore: true },
  // Humble Store ID
  P4477: { ignore: true },
  // Survey of Scottish Witchcraft - Accused witch ID
  P4478: { ignore: true },
  // INDUCKS character ID
  P4479: { ignore: true },
  // INDUCKS publication ID
  P4480: { ignore: true },
  // INDUCKS creator ID
  P4481: { ignore: true },
  // INDUCKS publisher ID
  P4482: { ignore: true },
  // INDUCKS story ID
  P4483: { ignore: true },
  // INDUCKS issue ID
  P4484: { ignore: true },
  // INDUCKS miniseries ID
  P4485: { ignore: true },
  // Google Play developer ID
  P4486: { name: "Google Play Store", icon: "socials/google-play.svg" },
  // Camera Decision ID
  P4487: { ignore: true },
  // COAM architect ID
  P4488: { ignore: true },
  // Hellenic Olympic Committee athlete ID
  P4489: { ignore: true },
  // British Olympic Association athlete ID
  P4490: { ignore: true },
  // Isidore scholar ID
  P4491: { ignore: true },
  // Barbarian F.C. ID
  P4493: { ignore: true },
  // Barbarian R.C. ID
  P4494: { ignore: true },
  // Xenopus Anatomical Ontology ID
  P4495: { ignore: true },
  // World Snooker athlete ID
  P4498: { ignore: true },
  // Snooker.org player ID
  P4502: { ignore: true },
  // Wimbledon player ID
  P4503: { ignore: true },
  // IWRP athlete ID
  P4504: { ignore: true },
  // IAFD male performer ID
  P4505: { ignore: true },
  // California Sports Hall of Fame athlete ID
  P4507: { ignore: true },
  // CycleBase cyclist ID
  P4508: { ignore: true },
  // National Monuments of Namibia Site Reference
  P4509: { ignore: true },
  // Scottish Cemetery Kolkata person ID
  P4512: { ignore: true },
  // Africultures movie ID
  P4513: { ignore: true },
  // Africultures person ID
  P4514: { ignore: true },
  // Prisma ID
  P4515: { ignore: true },
  // Mémoire du cyclisme cyclist ID
  P4516: { ignore: true },
  // ctext work ID
  P4517: { ignore: true },
  // Melon album ID
  P4518: { ignore: true },
  // SUNCAT ID
  P4520: { ignore: true },
  // Radio Radicale person ID
  P4521: { ignore: true },
  // Alaska Sports Hall of Fame athlete ID
  P4522: { ignore: true },
  // Vermont Sports Hall of Fame athlete ID
  P4523: { ignore: true },
  // Survey of Scottish Witchcraft - Person ID
  P4524: { ignore: true },
  // MuIS object ID
  P4525: { ignore: true },
  // ABA bird ID
  P4526: { ignore: true },
  // UK Parliament thesaurus ID
  P4527: { ignore: true },
  // NVE Drainage Basin (REGINE) ID
  P4528: { ignore: true },
  // Douban film ID
  P4529: { ignore: true },
  // Bangladesh administrative division code (pre-2017)
  P4530: { ignore: true },
  // ChinesePosters artist ID
  P4531: { ignore: true },
  // Survey of Scottish Witchcraft - Trial ID
  P4532: { ignore: true },
  // Czech street ID
  P4533: { ignore: true },
  // EUTA person ID
  P4534: { ignore: true },
  // EUTA theatre ID
  P4535: { ignore: true },
  // EThOS thesis ID
  P4536: { ignore: true },
  // Spider Ontology ID
  P4537: { ignore: true },
  // (discontinued) Snooker Database player ID
  P4538: { ignore: true },
  // Collective Biographies of Women ID
  P4539: { ignore: true },
  // IBTrACS cyclone ID
  P4540: { ignore: true },
  // Croatian Olympic Committee athlete ID
  P4541: { ignore: true },
  // World of O athlete ID
  P4542: { ignore: true },
  // Tennis Temple player ID
  P4544: { ignore: true },
  // Gymn Forum athlete ID
  P4546: { ignore: true },
  // Serbian Olympic Committee athlete ID
  P4547: { ignore: true },
  // Commonwealth Games Federation athlete ID
  P4548: { ignore: true },
  // ARLIMA ID
  P4549: { ignore: true },
  // CNRS research group ID
  P4550: { ignore: true },
  // Everyone Remembered ID
  P4551: { ignore: true },
  // RA Collections ID
  P4553: { ignore: true },
  // ICRC PoW ID
  P4554: { ignore: true },
  // Canada Games athlete ID
  P4555: { ignore: true },
  // FAI ID
  P4556: { ignore: true },
  // Indiana Basketball Hall of Fame ID
  P4557: { ignore: true },
  // SNCZI-IPE dam ID
  P4558: { ignore: true },
  // IJF judoka ID
  P4559: { ignore: true },
  // National Collegiate Basketball Hall of Fame ID
  P4560: { ignore: true },
  // Basketball-Reference.com WNBA player ID
  P4561: { ignore: true },
  // Japanese Baseball Hall of Fame ID
  P4562: { ignore: true },
  // Art Museum of Estonia artist ID
  P4563: { ignore: true },
  // Art Museum of Estonia artwork ID
  P4564: { ignore: true },
  // BTO five-letter code
  P4567: { ignore: true },
  // SNCZI-IPE reservoir ID
  P4568: { ignore: true },
  // BPH journal ID
  P4569: { ignore: true },
  // West Australian Football League player ID
  P4571: { ignore: true },
  // SS KL Auschwitz Garrison ID
  P4572: { ignore: true },
  // Norwegian historical register of persons ID
  P4574: { ignore: true },
  // Tidal artist ID
  P4576: { ignore: true },
  // Tidal album ID
  P4577: { ignore: true },
  // Tidal track ID
  P4578: { ignore: true },
  // Tidal music video ID
  P4579: { ignore: true },
  // Berlinische Galerie artist ID
  P4580: { ignore: true },
  // Städel Museum artist ID
  P4581: { ignore: true },
  // Kulturelles Erbe Köln object ID
  P4582: { ignore: true },
  // U.S. Gymnastics Hall of Fame athlete ID
  P4583: { ignore: true },
  // Accademia della Crusca ID
  P4585: { ignore: true },
  // (discontinued) Argentinian Historic Heritage ID
  P4587: { ignore: true },
  // International World Games Association athlete ID
  P4588: { ignore: true },
  // Dreadnought Project page
  P4589: { ignore: true },
  // Atomic Heritage Foundation ID
  P4590: { ignore: true },
  // National Inventory of Canadian Military Memorials ID
  P4591: { ignore: true },
  // Mountain Project ID
  P4592: { ignore: true },
  // Spanish Paralympic Committee athlete ID
  P4593: { ignore: true },
  // arXiv author ID
  P4594: { ignore: true },
  // NIOSH Numbered Publication ID
  P4596: { ignore: true },
  // FAPESP institution ID
  P4597: { ignore: true },
  // FAPESP researcher ID
  P4598: { ignore: true },
  // Lives of WWI ID
  P4601: { ignore: true },
  // World Rugby Hall of Fame ID
  P4604: { ignore: true },
  // South Dakota Sports Hall of Fame ID
  P4605: { ignore: true },
  // National Film Board of Canada film ID
  P4606: { ignore: true },
  // Swedish Musical Heritage ID
  P4607: { ignore: true },
  // Queensland Australian Football Hall of Fame inductee ID
  P4609: { ignore: true },
  // ARTIC artwork ID
  P4610: { ignore: true },
  // LACMA ID
  P4611: { ignore: true },
  // LKL player ID
  P4612: { ignore: true },
  // Encyclopedia of Modern Ukraine ID
  P4613: { ignore: true },
  // WAFL FootyFacts ID
  P4615: { ignore: true },
  // UniProt journal ID
  P4616: { ignore: true },
  // DVV player ID
  P4617: { ignore: true },
  // AUSNUT 2011–13 Food Group ID
  P4618: { ignore: true },
  // National Library of Brazil ID
  P4619: { ignore: true },
  // Merkelstiftung person ID
  P4620: { ignore: true },
  // Württembergische Kirchengeschichte person ID
  P4621: { ignore: true },
  // South Australian Football Hall of Fame inductee ID
  P4623: { ignore: true },
  // Museum of Fine Arts, Boston object ID
  P4625: { ignore: true },
  // EK number
  P4627: { ignore: true },
  // Online Books Page author ID
  P4629: { ignore: true },
  // DORIS ID
  P4630: { ignore: true },
  // Iowa Sports Hall of Fame ID
  P4631: { ignore: true },
  // Bechdel Test Movie List ID
  P4632: { ignore: true },
  // Indian Financial System Code
  P4635: { ignore: true },
  // Sherpa Juliet ID
  P4636: { ignore: true },
  // FoodEx2 code
  P4637: { ignore: true },
  // The Peerage person ID
  P4638: { ignore: true },
  // Estonian Football Association team ID
  P4639: { ignore: true },
  // Welsh Chapels ID
  P4641: { ignore: true },
  // Colorado Sports Hall of Fame ID
  P4642: { ignore: true },
  // Philadelphia Museum of Art work ID
  P4643: { ignore: true },
  // ESCO skill ID
  P4644: { ignore: true },
  // RCR number
  P4645: { ignore: true },
  // BSD Portal athlete ID
  P4650: { ignore: true },
  // Senedd ID
  P4651: { ignore: true },
  // ESCO Occupation ID
  P4652: { ignore: true },
  // Flathub ID
  P4655: { ignore: true },
  // The Numbers person ID
  P4657: { ignore: true },
  // Coflein ID
  P4658: { ignore: true },
  // Musée d'Orsay artwork ID
  P4659: { ignore: true },
  // CPDOC ID
  P4660: { ignore: true },
  // SAN archive conservator ID
  P4662: { ignore: true },
  // DACS ID (former)
  P4663: { ignore: true },
  // Wiki Aves bird ID
  P4664: { ignore: true },
  // CineMagia title ID
  P4665: { name: "CineMagia", icon: "socials/CineMagia.jpg" },
  // CineMagia person ID
  P4666: { name: "CineMagia", icon: "socials/CineMagia.jpg" },
  // Buenos Aires legislator ID
  P4667: { ignore: true },
  // USA Gymnastics Hall of Fame athlete ID
  P4668: { ignore: true },
  // Sjukvårdsrådgivningen Category ID
  P4670: { ignore: true },
  // Hall of Light ID
  P4671: { ignore: true },
  // EMLO location ID
  P4672: { ignore: true },
  // Museum of Fine Arts, Houston object ID
  P4673: { ignore: true },
  // Indianapolis Museum of Art artwork ID
  P4674: { ignore: true },
  // MAVISE TV channel ID
  P4676: { ignore: true },
  // MAVISE on-demand audiovisual service ID
  P4677: { ignore: true },
  // MAVISE competent authority ID
  P4678: { ignore: true },
  // MAVISE company ID
  P4679: { ignore: true },
  // Eldoblaje dub actor ID
  P4681: { ignore: true },
  // Eldoblaje original actor ID
  P4682: { ignore: true },
  // National Gallery of Art artwork ID
  P4683: { ignore: true },
  // National Gallery of Victoria artwork ID
  P4684: { ignore: true },
  // Nintendo of America Game Store ID (former scheme)
  P4685: { ignore: true },
  // Carnegie Museum of Art ID
  P4686: { ignore: true },
  // Dictionnaire des peintres belges ID
  P4687: { ignore: true },
  // Environmental Register code (Estonia)
  P4689: { ignore: true },
  // Oireachtas member ID
  P4690: { ignore: true },
  // OpenSecrets organization ID
  P4691: { ignore: true },
  // American Art Collaborative object ID
  P4692: { ignore: true },
  // Argentine deputy votations ID
  P4693: { ignore: true },
  // Arquivo Arq ID
  P4694: { ignore: true },
  // GEMS Code
  P4695: { ignore: true },
  // CIQUAL2017 ID
  P4696: { ignore: true },
  // Historic Place Names of Wales ID
  P4697: { ignore: true },
  // Conseil de Presse Luxembourg journalist ID
  P4698: { ignore: true },
  // Canal-U channel ID
  P4699: { ignore: true },
  // Cairn publication ID
  P4700: { ignore: true },
  // Google Arts & Culture asset ID
  P4701: { ignore: true },
  // Google Arts & Culture partner ID
  P4702: { ignore: true },
  // HATVP person ID
  P4703: { ignore: true },
  // Smithsonian American Art Museum artwork ID
  P4704: { ignore: true },
  // ZXDB ID
  P4705: { ignore: true },
  // Ent'revues ID
  P4706: { ignore: true },
  // Rugby Canada ID
  P4707: { ignore: true },
  // VOGRIPA ID
  P4708: { ignore: true },
  // Barnes Foundation ID
  P4709: { ignore: true },
  // Guardiana ID
  P4710: { ignore: true },
  // CHGIS ID
  P4711: { ignore: true },
  // Minneapolis Institute of Art artwork ID
  P4712: { ignore: true },
  // Walters Art Museum ID
  P4713: { ignore: true },
  // Guide to North American Birds ID
  P4715: { ignore: true },
  // Académie des Inscriptions et Belles-Lettres member ID
  P4716: { ignore: true },
  // Académie française member ID
  P4717: { ignore: true },
  // Basketball-Reference.com NBA coach ID
  P4718: { ignore: true },
  // Basketball-Reference.com WNBA coach ID
  P4720: { ignore: true },
  // MuBE Virtual ID
  P4721: { ignore: true },
  // Érudit journal ID
  P4722: { ignore: true },
  // GSMArena phone ID
  P4723: { ignore: true },
  // Maitron ID
  P4724: { ignore: true },
  // C-SPAN organization ID
  P4725: { ignore: true },
  // Sign@l journal ID
  P4726: { ignore: true },
  // Deutsche Synchronkartei dubbing voice actor ID
  P4727: { ignore: true },
  // uBio ID
  P4728: { ignore: true },
  // (discontinued) INRAN Italian Food ID
  P4729: { ignore: true },
  // Mir@bel journal ID
  P4730: { ignore: true },
  // The Baseball Cube player ID
  P4731: { ignore: true },
  // IUPAC Gold Book ID
  P4732: { ignore: true },
  // IBM code page ID
  P4734: { ignore: true },
  // IBM coded character set ID
  P4735: { ignore: true },
  // IBM graphic character global ID
  P4736: { ignore: true },
  // Solomon R. Guggenheim Foundation artwork ID
  P4737: { ignore: true },
  // Yale Center for British Art artwork ID
  P4738: { ignore: true },
  // Musée des Augustins artwork ID (former scheme)
  P4739: { ignore: true },
  // Brooklyn Museum artwork ID
  P4740: { ignore: true },
  // OpenEdition journal ID
  P4741: { ignore: true },
  // Uniform Resource Identifier Scheme
  P4742: { ignore: true },
  // Basketball-Reference.com NBA G League player ID
  P4744: { ignore: true },
  // Elhuyar ZTH ID
  P4746: { ignore: true },
  // Line Music artist ID
  P4747: { ignore: true },
  // Line Music album ID
  P4748: { ignore: true },
  // Dictionnaire des auteurs luxembourgeois ID
  P4749: { ignore: true },
  // National Historic Ships certificate number
  P4750: { ignore: true },
  // Sports-Reference.com college basketball coach ID
  P4751: { ignore: true },
  // Manus Online manuscript ID
  P4752: { ignore: true },
  // Ecocrop ID
  P4753: { ignore: true },
  // Harvard botanical journal ID
  P4754: { ignore: true },
  // UK railway station code
  P4755: { ignore: true },
  // V Live channel ID
  P4756: { ignore: true },
  // Songwriters Hall of Fame ID
  P4757: { ignore: true },
  // MONA ID
  P4758: { ignore: true },
  // Luminous-Lint ID
  P4759: { ignore: true },
  // LTI Korea Library ID
  P4760: { ignore: true },
  // Images d'Art artwork ID
  P4761: { ignore: true },
  // Common Database on Designated Areas ID
  P4762: { ignore: true },
  // crates.io ID
  P4763: { ignore: true },
  // Base Arcade artwork ID
  P4764: { ignore: true },
  // Australian honours ID
  P4766: { ignore: true },
  // cinematografo.it name or company ID
  P4768: { ignore: true },
  // GameFAQs game ID
  P4769: { ignore: true },
  // compArt institution ID
  P4771: { ignore: true },
  // compArt person ID
  P4772: { ignore: true },
  // MobyGames company ID
  P4773: { ignore: true },
  // USA Rugby player ID
  P4778: { ignore: true },
  // MYmovies actor ID (former scheme)
  P4779: { ignore: true },
  // MYmovies movie ID
  P4780: { ignore: true },
  // MYmovies director ID (former scheme)
  P4781: { ignore: true },
  // Movieplayer person ID
  P4782: { ignore: true },
  // Movieplayer film ID
  P4783: { ignore: true },
  // Movieplayer TV-series ID
  P4784: { ignore: true },
  // MYmovies name ID (former scheme)
  P4785: { ignore: true },
  // cinematografo film ID
  P4786: { ignore: true },
  // CiNii author ID (articles)
  P4787: { ignore: true },
  // Who's Who UK ID
  P4789: { ignore: true },
  // Basketball-Reference.com international player ID
  P4790: { ignore: true },
  // identifiers.org prefix
  P4793: { ignore: true },
  // Basketball-Reference.com referee ID
  P4795: { ignore: true },
  // Basketball-Reference.com NBL player ID
  P4796: { ignore: true },
  // member of the Assembly of Madrid ID
  P4797: { ignore: true },
  // BTO Birds of Britain ID
  P4798: { ignore: true },
  // Rugby Australia ID
  P4799: { ignore: true },
  // EUAP ID
  P4800: { ignore: true },
  // LoC and MARC vocabularies ID
  P4801: { ignore: true },
  // BVPB authority ID
  P4802: { ignore: true },
  // Amtrak station code
  P4803: { ignore: true },
  // Compagnon de la Libération ID
  P4804: { ignore: true },
  // Gaming-History ID
  P4806: { ignore: true },
  // Fauna Europaea New ID
  P4807: { ignore: true },
  // Royal Academy new identifier
  P4808: { ignore: true },
  // BWSA ID
  P4811: { ignore: true },
  // Statistical Service of Cyprus Geocode
  P4812: { ignore: true },
  // PARES ID
  P4813: { ignore: true },
  // Inventories of American Painting and Sculpture control number
  P4814: { ignore: true },
  // Lemon 64 identifier
  P4816: { ignore: true },
  // Panoptikum podcast ID
  P4818: { ignore: true },
  // Swedish Portrait Archive ID
  P4819: { ignore: true },
  // TORA ID
  P4820: { ignore: true },
  // Cour des comptes magistrate ID
  P4821: { ignore: true },
  // La Poste personality ID
  P4822: { ignore: true },
  // American National Biography ID
  P4823: { ignore: true },
  // org-id.guide ID
  P4824: { ignore: true },
  // Swimrankings.net meet ID
  P4827: { ignore: true },
  // Swiss Enterprise Identification Number
  P4829: { ignore: true },
  // Swedish Football Association national team player ID
  P4830: { ignore: true },
  // Bandysidan player ID
  P4831: { ignore: true },
  // World Sailing regatta ID
  P4832: { ignore: true },
  // Sailboatdata ID
  P4833: { ignore: true },
  // Deutsche Synchronkartei series ID
  P4834: { ignore: true },
  // TheTVDB.com series ID
  P4835: { ignore: true },
  // Irish Rugby Football Union women's player ID
  P4836: { ignore: true },
  // CATO ID
  P4838: { ignore: true },
  // Wolfram Language entity code
  P4839: { ignore: true },
  // Directory of Czech publishers ID
  P4840: { ignore: true },
  // ASHRAE refrigerant number
  P4842: { ignore: true },
  // Bulbapedia article ID
  P4845: { ignore: true },
  // Lemon Amiga identifier
  P4846: { ignore: true },
  // CPC-Power ID
  P4847: { ignore: true },
  // Libraries.org ID
  P4848: { ignore: true },
  // International Numbering System number
  P4849: { ignore: true },
  // JECFA database ID
  P4852: { ignore: true },
  // JMPR database ID
  P4853: { ignore: true },
  // Uppslagsverket Finland ID
  P4854: { ignore: true },
  // Phasmida Species File ID
  P4855: { ignore: true },
  // AtariAge ID
  P4857: { ignore: true },
  // Atari Legend identifier
  P4858: { ignore: true },
  // Atarimania identifier
  P4859: { ignore: true },
  // BMI work ID
  P4860: { ignore: true },
  // Charity Navigator ID
  P4861: { ignore: true },
  // Amazon author ID
  P4862: { name: "Amazon", icon: "socials/amazon.svg" },
  // REBASE Enzyme Number
  P4866: { ignore: true },
  // Hispania Nostra Red List code
  P4868: { ignore: true },
  // Operabase ID
  P4869: { ignore: true },
  // GEPRIS project ID
  P4870: { ignore: true },
  // GEPRIS organization ID
  P4871: { ignore: true },
  // GEPRIS person ID
  P4872: { ignore: true },
  // World Rugby Women's Sevens Series player ID
  P4879: { ignore: true },
  // FFR Sevens player ID
  P4880: { ignore: true },
  // Maison d'écrivain ID
  P4881: { ignore: true },
  // AFL Tables coach ID
  P4885: { ignore: true },
  // Web umenia creator ID
  P4887: { ignore: true },
  // AFL Tables umpire ID
  P4888: { ignore: true },
  // MuIS person or group ID
  P4889: { ignore: true },
  // EPHE ID
  P4890: { ignore: true },
  // Patrons de France ID
  P4891: { ignore: true },
  // Siprojuris ID
  P4892: { ignore: true },
  // X Games athlete ID
  P4893: { ignore: true },
  // ACE Repertory work ID
  P4894: { ignore: true },
  // AICTE institute application ID
  P4897: { ignore: true },
  // Chronicling America newspaper ID
  P4898: { ignore: true },
  // Brooklyn Museum Exhibition ID
  P4899: { ignore: true },
  // Zenodo ID
  P4901: { ignore: true },
  // CONABIO ID
  P4902: { ignore: true },
  // New Georgia Encyclopedia ID
  P4903: { ignore: true },
  // Tropicos publication ID
  P4904: { ignore: true },
  // KMSKA work PID
  P4905: { ignore: true },
  // Bargeton ID
  P4906: { ignore: true },
  // Guide Nicaise ID
  P4907: { ignore: true },
  // AlloCiné company ID
  P4910: { ignore: true },
  // Annuaire des fondations ID
  P4911: { ignore: true },
  // Ready64 ID
  P4916: { ignore: true },
  // Gamebase64 identifier
  P4917: { ignore: true },
  // Plus/4 World ID
  P4919: { ignore: true },
  // England Rugby men's player ID
  P4920: { ignore: true },
  // Snooker.org tournament ID
  P4921: { ignore: true },
  // Rugby Football Union women's sevens player ID
  P4922: { ignore: true },
  // Rugby Football Union men's sevens player ID
  P4923: { ignore: true },
  // CueTracker tournament ID
  P4924: { ignore: true },
  // Rugby Football Union women's player ID
  P4925: { ignore: true },
  // PRotein Ontology ID
  P4926: { ignore: true },
  // Invaluable.com person ID
  P4927: { ignore: true },
  // Ricorso author ID
  P4928: { ignore: true },
  // AINM ID
  P4929: { ignore: true },
  // Julien ID
  P4930: { ignore: true },
  // Todotango.com person ID
  P4931: { ignore: true },
  // Todotango.com work ID
  P4932: { ignore: true },
  // Big Cartoon Database ID
  P4933: { ignore: true },
  // Small Monuments of Plzeň Catalogue ID
  P4935: { ignore: true },
  // SFMOMA artist ID
  P4936: { ignore: true },
  // Japan Rugby Football Union men's player ID
  P4937: { ignore: true },
  // Japan Rugby Football Union women's player ID
  P4938: { ignore: true },
  // BFMTV.com director ID
  P4939: { ignore: true },
  // Japan Rugby Football Union women's sevens player ID
  P4940: { ignore: true },
  // Japan Rugby Football Union men's sevens player ID
  P4941: { ignore: true },
  // Societe.com director ID
  P4942: { ignore: true },
  // Dominicains ID
  P4943: { ignore: true },
  // Premiers préfets ID
  P4944: { ignore: true },
  // Library of Congress Demographic Group Terms ID
  P4946: { ignore: true },
  // TMDb movie ID
  P4947: { ignore: true },
  // DDB ID
  P4948: { ignore: true },
  // Irish Rugby Football Union men's sevens player ID
  P4949: { ignore: true },
  // Irish Rugby Football Union women's sevens player ID
  P4950: { ignore: true },
  // Library of Congress Genre/Form Terms ID
  P4953: { ignore: true },
  // MR Author ID
  P4955: { ignore: true },
  // BDH edition ID
  P4956: { ignore: true },
  // AIDA freediver ID
  P4957: { ignore: true },
  // paris.fr equipment ID
  P4959: { ignore: true },
  // Generation MSX identifier
  P4960: { ignore: true },
  // Sega8bit.com identifier
  P4961: { ignore: true },
  // Abandonia identifier
  P4962: { ignore: true },
  // Svenskt kvinnobiografiskt lexikon ID
  P4963: { ignore: true },
  // SPLASH
  P4964: { ignore: true },
  // Behind The Voice Actors video game ID
  P4965: { ignore: true },
  // Hungarian National Assembly identifier
  P4966: { ignore: true },
  // UK Provider Reference Number
  P4971: { ignore: true },
  // Norwegian war sailor register person ID
  P4972: { ignore: true },
  // Wikitribune category
  P4973: { ignore: true },
  // Scottish Rugby Union men's player ID
  P4974: { ignore: true },
  // Scottish Rugby Union men's sevens player ID
  P4975: { ignore: true },
  // Scottish Rugby Union women's player ID
  P4976: { ignore: true },
  // IDA place ID
  P4977: { ignore: true },
  // PRS Legislative Research MP ID
  P4978: { ignore: true },
  // Thésaurus de la désignation des objets mobiliers ID
  P4979: { ignore: true },
  // Thésaurus de la désignation des œuvres architecturales et des espaces aménagés ID
  P4980: { ignore: true },
  // Kinoliste ID
  P4981: { ignore: true },
  // Women’s Elite Rugby ID
  P4982: { ignore: true },
  // TMDb TV series ID
  P4983: { ignore: true },
  // TMDb person ID
  P4985: { ignore: true },
  // Routard.com place ID
  P4986: { ignore: true },
  // Scottish Rugby Union women's sevens player ID
  P4987: { ignore: true },
  // RKDlibrary ID
  P4989: { ignore: true },
  // Biographical Dictionary of Georgia ID
  P4991: { ignore: true },
  // DBA ID
  P4992: { ignore: true },
  // Hungarian public body ID
  P4993: { ignore: true },
  // ruchess ID
  P4994: { ignore: true },
  // World Para Snowboard athlete ID
  P4996: { ignore: true },
  // METAR code
  P5001: { ignore: true },
  // Orthodox Encyclopedia ID
  P5002: { ignore: true },
  // Amphibians of India ID
  P5003: { ignore: true },
  // National Thesis Number (France)
  P5005: { ignore: true },
  // DNV Vessel register ID
  P5006: { ignore: true },
  // Behind The Voice Actors person ID
  P5007: { ignore: true },
  // Territographie ID
  P5010: { ignore: true },
  // Prazdne Domy building ID
  P5011: { ignore: true },
  // Welsh Rugby Union women's player ID
  P5013: { ignore: true },
  // Welsh Rugby Union men's sevens player ID
  P5014: { ignore: true },
  // Digital Typhoon typhoon ID
  P5015: { ignore: true },
  // Digital Typhoon cyclone ID
  P5016: { ignore: true },
  // Chile Rugby player ID
  P5018: { ignore: true },
  // Brockhaus Enzyklopädie online ID
  P5019: { ignore: true },
  // Code of Household Registration and Conscription Information System (Taiwan)
  P5020: { ignore: true },
  // Researchmap ID
  P5029: { ignore: true },
  // Animated Knots ID
  P5031: { ignore: true },
  // Filmweb.pl film ID
  P5032: { ignore: true },
  // Filmweb.pl person ID
  P5033: { ignore: true },
  // National Library of Korea ID
  P5034: { ignore: true },
  // Lambiek Comiclopedia artist ID
  P5035: { ignore: true },
  // AmphibiaWeb Species ID
  P5036: { ignore: true },
  // Plants of the World online ID
  P5037: { ignore: true },
  // Fogis.se player ID
  P5038: { ignore: true },
  // Authorea author ID
  P5039: { ignore: true },
  // Rosetta Code ID
  P5047: { ignore: true },
  // Church of Sweden ID
  P5048: { ignore: true },
  // Harvard designation
  P5049: { ignore: true },
  // UMAC ID
  P5050: { ignore: true },
  // IRMNG ID
  P5055: { ignore: true },
  // Handball-Bundesliga player ID
  P5057: { ignore: true },
  // Encyklopedia Teatru Polskiego person ID
  P5058: { ignore: true },
  // DOAB publisher ID
  P5062: { ignore: true },
  // Interlingual Index ID
  P5063: { ignore: true },
  // World of Physics identifier
  P5064: { ignore: true },
  // Flanders Arts Institute person ID
  P5068: { ignore: true },
  // JAAF athlete ID
  P5073: { ignore: true },
  // Polish Athletics Federation ID
  P5075: { ignore: true },
  // Römpp online ID
  P5076: { ignore: true },
  // Russian Athletics ID
  P5077: { ignore: true },
  // Athletics Canada ID
  P5078: { ignore: true },
  // NVE Lake Database ID
  P5079: { ignore: true },
  // Norsk biografisk leksikon ID
  P5080: { ignore: true },
  // Norsk kunstnerleksikon ID
  P5081: { ignore: true },
  // Store medisinske leksikon ID
  P5082: { ignore: true },
  // Adult Film Database film ID
  P5083: { ignore: true },
  // Yahoo Answers category
  P5084: { ignore: true },
  // Pschyrembel Online ID
  P5085: { ignore: true },
  // FIPS 5-2 alpha code (US states)
  P5086: { ignore: true },
  // FIPS 5-2 numeric code (US states)
  P5087: { ignore: true },
  // Internet Encyclopedia of Philosophy ID
  P5088: { ignore: true },
  // ARRS race ID
  P5090: { ignore: true },
  // HanCinema drama ID
  P5091: { ignore: true },
  // ISC event ID
  P5092: { ignore: true },
  // road number (Estonia)
  P5093: { ignore: true },
  // HPIP ID
  P5094: { ignore: true },
  // Logainm ID
  P5097: { ignore: true },
  // IAFD film ID
  P5098: { ignore: true },
  // Il mondo dei doppiatori ID
  P5099: { ignore: true },
  // Swedish Literature Bank Author ID
  P5101: { ignore: true },
  // FIS speed skier ID
  P5103: { ignore: true },
  // New Zealand Gazetteer place ID
  P5104: { ignore: true },
  // Dictionary of Algorithms and Data Structures ID
  P5106: { ignore: true },
  // Behind The Voice Actors character ID
  P5107: { ignore: true },
  // HanCinema film ID
  P5108: { ignore: true },
  // Italian School ID
  P5114: { ignore: true },
  // Directory of Open Access Journals ID
  P5115: { ignore: true },
  // (discontinued) LGDB game ID
  P5116: { ignore: true },
  // (discontinued) LGDB emulator ID
  P5117: { ignore: true },
  // (discontinued) LGDB tool ID
  P5118: { ignore: true },
  // (discontinued) LGDB engine ID
  P5119: { ignore: true },
  // TFRRS athlete ID
  P5120: { ignore: true },
  // All About Jazz musician ID
  P5121: { ignore: true },
  // Ontario public library ID
  P5122: { ignore: true },
  // Swedish Literature Bank edition
  P5123: { ignore: true },
  // WikiCFP event ID
  P5124: { ignore: true },
  // WikiCFP conference series ID
  P5127: { ignore: true },
  // ICAA film catalogue ID
  P5128: { ignore: true },
  // Stepwell Atlas ID
  P5129: { ignore: true },
  // Chinese Political Elites Database ID
  P5142: { ignore: true },
  // amateur radio callsign
  P5143: { ignore: true },
  // Bugs! album ID
  P5144: { ignore: true },
  // Bugs! artist ID
  P5145: { ignore: true },
  // Cinema Project (Israel) ID
  P5146: { ignore: true },
  // Dictionary of Swedish Translators ID
  P5147: { ignore: true },
  // e-MEC entry
  P5148: { ignore: true },
  // Ester ID
  P5149: { ignore: true },
  // Israel Film Fund ID
  P5151: { ignore: true },
  // KKBox album ID
  P5153: { ignore: true },
  // KKBox artist ID
  P5154: { ignore: true },
  // Norwegian war sailor register ship-ID
  P5156: { ignore: true },
  // OnsOranje match ID
  P5157: { ignore: true },
  // OnsOranje player ID
  P5158: { ignore: true },
  // The New Fund for Cinema and Television (Israel) ID
  P5159: { ignore: true },
  // Thesaurus for Graphic Materials ID
  P5160: { ignore: true },
  // Trustpilot company ID
  P5161: { ignore: true },
  // OnsOranje tournament ID
  P5162: { ignore: true },
  // Odnoklassniki ID
  P5163: { ignore: true },
  // Flanders Arts Institute organisation ID
  P5164: { ignore: true },
  // Norsk pop- og rockleksikon ID
  P5165: { ignore: true },
  // Norwegian historical lexicon ID
  P5169: { ignore: true },
  // Norwegian fjord catalog ID
  P5170: { ignore: true },
  // Rockipedia release ID
  P5171: { ignore: true },
  // Rockipedia artist ID
  P5172: { ignore: true },
  // Rockipedia area ID
  P5173: { ignore: true },
  // Rockipedia label ID
  P5174: { ignore: true },
  // Univ-droit jurist ID
  P5175: { ignore: true },
  // KIT Linked Open Numbers ID
  P5176: { ignore: true },
  // Victorian Heritage Register ID
  P5177: { ignore: true },
  // FloraCatalana ID
  P5179: { ignore: true },
  // CIVICUS Monitor country entry
  P5180: { ignore: true },
  // Relationship Science organization ID
  P5181: { ignore: true },
  // JMA Seismic Intensity Database ID
  P5182: { ignore: true },
  // Eurohockey.com club ID
  P5183: { ignore: true },
  // Daum Encyclopedia ID
  P5184: { ignore: true },
  // Melon track ID
  P5197: { ignore: true },
  // ASC Leiden Thesaurus ID
  P5198: { ignore: true },
  // British Library system number
  P5199: { ignore: true },
  // eBird hotspot ID
  P5200: { ignore: true },
  // BAG public space ID
  P5207: { ignore: true },
  // BAG building ID
  P5208: { ignore: true },
  // ISO 3950 code
  P5209: { ignore: false },
  // National Gallery of Armenia work ID
  P5210: { ignore: true },
  // GONIAT author ID
  P5211: { ignore: true },
  // Armenian National Academy of Sciences ID
  P5212: { ignore: true },
  // Armenian Parliamentary ID
  P5213: { ignore: true },
  // GONIAT paper ID
  P5214: { ignore: true },
  // GONIAT place ID
  P5215: { ignore: true },
  // GONIAT taxon ID
  P5216: { ignore: true },
  // Spyur ID
  P5217: { ignore: true },
  // Armenian Cinema ID
  P5218: { ignore: true },
  // BMRB ID
  P5219: { ignore: true },
  // ICSC ID
  P5220: { ignore: true },
  // Tree of Life Web Project ID
  P5221: { ignore: true },
  // National Women's Soccer League player ID
  P5222: { ignore: true },
  // Information Center for Israeli Art artwork ID
  P5223: { ignore: true },
  // OlimpBase Women's Chess Olympiad player ID
  P5224: { ignore: true },
  // Argentine biography deputy ID
  P5225: { ignore: true },
  // BRAHMS artist ID
  P5226: { ignore: true },
  // Carnegie Hall event ID
  P5227: { ignore: true },
  // Carnegie Hall work ID
  P5229: { ignore: true },
  // Chromosome numbers of the Flora of Germany database ID
  P5231: { ignore: true },
  // D&B Hoovers company profile
  P5232: { ignore: true },
  // Filmow ID
  P5233: { ignore: true },
  // SpectraBase compound ID
  P5234: { ignore: true },
  // Cité de la Musique-Philharmonie de Paris work ID
  P5235: { ignore: true },
  // Artists in Canada record number
  P5239: { ignore: true },
  // RollDaBeats artist ID
  P5240: { ignore: true },
  // Songfacts song ID
  P5241: { ignore: true },
  // ARWU university ID
  P5242: { ignore: true },
  // Canal-U person ID
  P5243: { ignore: true },
  // myschool ID
  P5245: { ignore: true },
  // Pornhub star ID
  P5246: { ignore: true },
  // Giant Bomb ID
  P5247: { ignore: true },
  // IAB code
  P5250: { ignore: true },
  // Corago opera ID
  P5251: { ignore: true },
  // FilmTv.it movie ID
  P5253: { ignore: true },
  // FilmTv.it person ID
  P5254: { ignore: true },
  // FilmTv.it TV series ID
  P5255: { ignore: true },
  // OpenCorporates corporate grouping
  P5256: { ignore: true },
  // BirdLife taxon ID
  P5257: { ignore: true },
  // Czech Geomorphological Unit Code
  P5258: { ignore: true },
  // Swedish Gravestone ID
  P5259: { ignore: true },
  // App Store developer ID
  P5260: { ignore: true },
  // Les Enfoirés participant ID
  P5261: { ignore: true },
  // Les Enfoirés song ID
  P5262: { ignore: true },
  // Czech NDOP taxon ID
  P5263: { ignore: true },
  // Relationship Science person ID
  P5264: { ignore: true },
  // Dordrechts Museum artwork ID
  P5265: { ignore: true },
  // Finnish national bibliography corporate name ID
  P5266: { ignore: true },
  // YouPorn ID
  P5267: { ignore: true },
  // MNAV work ID
  P5268: { ignore: true },
  // Web umenia work ID
  P5269: { ignore: true },
  // MonDO ID
  P5270: { ignore: true },
  // Saint Louis Art Museum person ID
  P5271: { ignore: true },
  // CDMC musician ID
  P5272: { ignore: true },
  // Nelson-Atkins Museum of Art person ID
  P5273: { ignore: true },
  // SJP Online ID
  P5274: { ignore: true },
  // OED Online ID
  P5275: { ignore: true },
  // Strava ID of a professional sport person
  P5283: { ignore: true },
  // Douban movie celebrity ID
  P5284: { ignore: true },
  // Firmenbuchnummer
  P5285: { ignore: true },
  // Songfacts artist ID
  P5287: { ignore: true },
  // StadiumDB identifier
  P5288: { ignore: true },
  // World Stadium Database identifier
  P5289: { ignore: true },
  // Redump.org ID
  P5290: { ignore: true },
  // Taratata artist ID
  P5291: { ignore: true },
  // NRJ artist ID
  P5292: { ignore: true },
  // Akout ID
  P5293: { ignore: true },
  // Church of Norway building ID
  P5294: { ignore: true },
  // Lafonoteca artist ID
  P5295: { ignore: true },
  // Party Number (Taiwan)
  P5296: { ignore: true },
  // Companies House officer ID
  P5297: { ignore: true },
  // Webb-site person ID
  P5298: { ignore: true },
  // AntWeb ID
  P5299: { ignore: true },
  // Webb-site organization ID
  P5300: { ignore: true },
  // France Culture person ID
  P5301: { ignore: true },
  // BRAHMS work ID
  P5302: { ignore: true },
  // DLCM ID
  P5303: { ignore: true },
  // LONSEA ID
  P5306: { ignore: true },
  // Dictionary of Scottish Architects ID
  P5308: { ignore: true },
  // Drouot artist ID
  P5309: { ignore: true },
  // Protected Buildings Register in Finland ID
  P5310: { ignore: true },
  // Kino-teatr.ua film ID
  P5311: { ignore: true },
  // Kino-teatr.ua person ID
  P5312: { ignore: true },
  // Protected Buildings Register in Finland Building ID
  P5313: { ignore: true },
  // BioStor work ID
  P5315: { ignore: true },
  // Swedish Signaturer.se ID
  P5316: { ignore: true },
  // César Award film ID
  P5318: { ignore: true },
  // César Award person ID
  P5319: { ignore: true },
  // IUF member ID
  P5320: { ignore: true },
  // Museo del Prado artist ID
  P5321: { ignore: true },
  // Swedish National Archive Reference Code
  P5324: { ignore: true },
  // Swedish Academy member ID
  P5325: { ignore: true },
  // fernsehserien.de ID
  P5327: { ignore: true },
  // ARMB member ID
  P5329: { ignore: true },
  // OCLC work ID
  P5331: { ignore: true },
  // OpenDOAR ID
  P5332: { ignore: true },
  // Bérose ID
  P5333: { ignore: true },
  // Rom Galil settlement ID
  P5334: { ignore: true },
  // Or Movement settlement ID
  P5335: { ignore: true },
  // Or Movement regional council ID
  P5336: { ignore: true },
  // Google News topics ID
  P5337: { ignore: true },
  // SilentEra.com film ID
  P5338: { ignore: true },
  // Lega Serie A soccer player ID
  P5339: { ignore: true },
  // American Film Institute person ID
  P5340: { ignore: true },
  // Poetry Foundation ID
  P5341: { ignore: true },
  // Poets.org poet ID
  P5343: { ignore: true },
  // Printemps des poètes poet ID
  P5344: { ignore: true },
  // PC Engine Software Bible ID
  P5345: { ignore: true },
  // (discontinued) Playboy Plus ID
  P5346: { ignore: true },
  // Amphibian Species of the World ID
  P5354: { ignore: true },
  // abgeordnetenwatch.de politician ID
  P5355: { ignore: true },
  // Laut.de artist ID
  P5356: { ignore: true },
  // The Encyclopedia of Science Fiction ID
  P5357: { ignore: true },
  // Operone opera ID
  P5358: { ignore: true },
  // Operone composer ID
  P5359: { ignore: true },
  // MobyGames group ID
  P5360: { ignore: true },
  // BNB person ID
  P5361: { ignore: true },
  // Académie des sciences morales et politiques member ID
  P5362: { ignore: true },
  // Académie des beaux-arts member ID
  P5363: { ignore: true },
  // British Council writer ID
  P5364: { ignore: true },
  // Internet Book Database of Fiction writer ID
  P5365: { ignore: true },
  // Operissimo artist ID
  P5366: { ignore: true },
  // National Gallery of Canada artist ID
  P5368: { ignore: true },
  // Encyclopædia Universalis author ID
  P5369: { ignore: true },
  // Entomologists of the World ID
  P5370: { ignore: true },
  // GAMECIP media format ID
  P5371: { ignore: true },
  // Dictionnaire critique des historiens de l'art ID
  P5372: { ignore: true },
  // École normale alumnus ID
  P5373: { ignore: true },
  // Académie des sciences d'outre-mer member ID
  P5374: { ignore: true },
  // BIU Santé person ID
  P5375: { ignore: true },
  // Medicina author ID
  P5376: { ignore: true },
  // Étonnants voyageurs participant ID
  P5377: { ignore: true },
  // Akadem person ID
  P5378: { ignore: true },
  // GAMECIP platform ID
  P5379: { ignore: true },
  // National Academy of Sciences member ID
  P5380: { ignore: true },
  // EGROKN ID
  P5381: { ignore: true },
  // Behind The Voice Actors franchise ID
  P5382: { ignore: true },
  // archINFORM project ID
  P5383: { ignore: true },
  // Behind The Voice Actors film ID
  P5384: { ignore: true },
  // IGN game ID
  P5385: { ignore: true },
  // Behind The Voice Actors TV show ID
  P5387: { ignore: true },
  // Bulgarian Antarctic Gazetteer ID
  P5388: { ignore: true },
  // Classiques des sciences sociales ID
  P5390: { ignore: true },
  // Norwegian Polar Institute place name ID
  P5391: { ignore: true },
  // Poetry Archive poet ID
  P5392: { ignore: true },
  // cipM poet ID
  P5393: { ignore: true },
  // Poets & Writers author ID
  P5394: { ignore: true },
  // Canadian Encyclopedia article ID
  P5395: { ignore: true },
  // Online Books Page publication ID
  P5396: { ignore: true },
  // Tierstimmenarchiv ID
  P5397: { ignore: true },
  // TDKIV term ID
  P5398: { ignore: true },
  // GeoNLP ID
  P5400: { ignore: true },
  // CNAP artist ID
  P5403: { ignore: true },
  // Rate Your Music artist ID
  P5404: { ignore: true },
  // Rendez-vous de l'histoire ID
  P5406: { ignore: true },
  // MHK object ID
  P5407: { ignore: true },
  // Fantastic Fiction author ID
  P5408: { ignore: true },
  // Île en île author ID
  P5409: { ignore: true },
  // Flanders Music Centre person ID
  P5410: { ignore: true },
  // CeBeDem composer ID
  P5411: { ignore: true },
  // Ricochet author ID
  P5413: { ignore: true },
  // The Paris Review interviewee ID
  P5414: { ignore: true },
  // Whonamedit? doctor ID
  P5415: { ignore: true },
  // Common Procurement Vocabulary
  P5417: { ignore: true },
  // Pasteur Institute person ID
  P5418: { ignore: true },
  // NYRB contributor ID
  P5419: { ignore: true },
  // Trading Card Database person ID
  P5421: { ignore: true },
  // Lega Serie A team ID
  P5424: { ignore: true },
  // IPTC NewsCode
  P5429: { ignore: true },
  // Poetry International Web poet ID
  P5430: { ignore: true },
  // setlist.fm artist ID
  P5431: { ignore: true },
  // setlist.fm venue ID
  P5432: { ignore: true },
  // Gfycat user ID
  P5434: { ignore: true },
  // pixiv user ID
  P5435: { ignore: true },
  // EuroVoc ID
  P5437: { ignore: true },
  // Elysee.fr president ID
  P5440: { ignore: true },
  // Encyclopaedia Herder person ID
  P5441: { ignore: true },
  // Library of Congress of Chile person ID
  P5442: { ignore: true },
  // Collège de France professor ID
  P5443: { ignore: true },
  // Language Council of Norways termwiki ID
  P5445: { ignore: true },
  // Inventory of French sanctuaries ID
  P5449: { ignore: true },
  // Biographisches Archiv der Psychiatrie  ID
  P5450: { ignore: true },
  // House of Representatives of Morocco ID
  P5451: { ignore: true },
  // MyHeritage Surname ID
  P5452: { ignore: true },
  // Logicielsmoto identifier
  P5453: { ignore: true },
  // USNPL ID
  P5454: { ignore: true },
  // SGJP Online ID
  P5455: { ignore: true },
  // TasteAtlas ID
  P5456: { ignore: true },
  // Conseil constitutionnel ID
  P5457: { ignore: true },
  // Guide to Pharmacology Target ID
  P5458: { ignore: true },
  // RHE doctor ID
  P5459: { ignore: true },
  // RHE professor ID
  P5462: { ignore: true },
  // AE member ID
  P5463: { ignore: true },
  // A Church Near You church ID
  P5464: { ignore: true },
  // Australian Poetry Library poet ID
  P5465: { ignore: true },
  // French Academy in Rome resident ID
  P5466: { ignore: true },
  // GlyphWiki ID
  P5467: { ignore: true },
  // Historia de la Medicina person ID
  P5468: { ignore: true },
  // Mormon Literature and Creative Arts Database artist ID
  P5469: { ignore: true },
  // Scottish Poetry Library poet ID
  P5470: { ignore: true },
  // The Reptile Database ID
  P5473: { ignore: true },
  // LegaBasket.it player ID
  P5476: { ignore: true },
  // Les Voix de la poésie poet ID
  P5477: { ignore: true },
  // RPO poet ID
  P5478: { ignore: true },
  // SBN books ID
  P5485: { ignore: true },
  // artist-info curator ID
  P5488: { ignore: true },
  // artist-info artist ID
  P5489: { ignore: true },
  // artist-info location ID
  P5490: { ignore: true },
  // BD Gest' author ID
  P5491: { ignore: true },
  // EDIT16 catalogue author ID
  P5492: { ignore: true },
  // EDIT16 catalogue printer ID
  P5493: { ignore: true },
  // GameSpot game ID
  P5494: { ignore: true },
  // Mormon Literature and Creative Arts Database Works ID
  P5495: { ignore: true },
  // Médicos históricos doctor ID
  P5496: { ignore: true },
  // Doroszewski Online ID
  P5497: { ignore: true },
  // Base de datos de premiados person ID
  P5498: { ignore: true },
  // Boijmans work ID
  P5499: { ignore: true },
  // IPHAN ID
  P5500: { ignore: true },
  // Brenda Tissue Ontology ID
  P5501: { ignore: true },
  // LRB contributor ID
  P5502: { ignore: true },
  // Poetry Society of America poet ID
  P5503: { ignore: true },
  // RISM ID
  P5504: { ignore: true },
  // WorldCat Registry ID
  P5505: { ignore: true },
  // Poetry In Voice poet ID
  P5506: { ignore: true },
  // artist-info exhibition ID
  P5507: { ignore: true },
  // archINFORM person or group ID
  P5508: { ignore: true },
  // MAPS poet ID
  P5509: { ignore: true },
  // DEFA film database ID
  P5510: { ignore: true },
  // Enciclopèdia de l'Esport Català ID
  P5513: { ignore: true },
  // Znicenekostely ID
  P5515: { ignore: true },
  // Virtual Laboratory person ID
  P5516: { ignore: true },
  // Auvergne-Rhône-Alpes Regional Inventory identifier
  P5517: { ignore: true },
  // CONDEPHAAT ID
  P5525: { ignore: true },
  // Academia Brasileira de Letras ID
  P5527: { ignore: true },
  // Belgian Heritage in Brazil ID
  P5528: { ignore: true },
  // Altmetric DOI
  P5530: { ignore: true },
  // Central Index Key
  P5531: { ignore: true },
  // L'île author ID
  P5532: { ignore: true },
  // (discontinued) Kopaliński Online ID
  P5533: { ignore: true },
  // Open Media Database person ID
  P5534: { ignore: true },
  // Prison History ID
  P5535: { ignore: true },
  // Swedish place name register SOFI
  P5536: { ignore: true },
  // Auteurs en Auvergne-Rhône-Alpes ID
  P5538: { ignore: true },
  // Eulalie ID
  P5539: { ignore: true },
  // RedTube ID
  P5540: { ignore: true },
  // Paris Faculty of Science professor ID
  P5541: { ignore: true },
  // Literature Ireland ID
  P5542: { ignore: true },
  // Livre et lecture en Bretagne ID
  P5543: { ignore: true },
  // Paris Faculty of Letters professor ID (1909-1939)
  P5544: { ignore: true },
  // Paris Faculty of Letters professor ID (1809–1908)
  P5545: { ignore: true },
  // College de France professor ID (1909-1939)
  P5546: { ignore: true },
  // CICLIC author ID
  P5547: { ignore: true },
  // INEPAC ID
  P5549: { ignore: true },
  // La Vie des idées ID
  P5550: { ignore: true },
  // Courrier international topic ID
  P5551: { ignore: true },
  // CNRS Talent page
  P5552: { ignore: true },
  // IDIH ID
  P5553: { ignore: true },
  // Courrier international source ID
  P5554: { ignore: true },
  // KLEKs ID
  P5556: { ignore: true },
  // Interbibly author ID
  P5557: { ignore: true },
  // Le Monde ID
  P5558: { ignore: true },
  // MUSE journal ID
  P5559: { ignore: true },
  // Institut culturel de Bretagne ID
  P5561: { ignore: true },
  // Tebeosfera ID
  P5562: { ignore: true },
  // CSDE Lynching Database ID
  P5563: { ignore: true },
  // CRAN project
  P5565: { ignore: true },
  // RubyGems gem
  P5566: { ignore: true },
  // National Research Institute for Cultural Properties artist ID
  P5567: { ignore: true },
  // Python Package Index project
  P5568: { ignore: true },
  // Tebeosfera character ID
  P5569: { ignore: true },
  // NooSFere author ID
  P5570: { ignore: true },
  // NooSFere book ID
  P5571: { ignore: true },
  // archINFORM location ID
  P5573: { ignore: true },
  // CAGE code
  P5574: { ignore: true },
  // EDb company ID
  P5576: { ignore: true },
  // Indian census area code (2011)
  P5578: { ignore: true },
  // flight-report.com Airline identifier
  P5579: { ignore: true },
  // Norwegian National Road DataBase ID
  P5580: { ignore: true },
  // NATO Stock Number
  P5581: { ignore: true },
  // QS World University ID
  P5584: { ignore: true },
  // SMS Power identifier
  P5585: { ignore: true },
  // Times Higher Education World University ID
  P5586: { ignore: true },
  // Libris-URI
  P5587: { ignore: true },
  // oric.org identifier
  P5590: { ignore: true },
  // Artcyclopedia artist ID
  P5597: { ignore: true },
  // Places of Worship Inventory ID
  P5598: { ignore: true },
  // Inventory of Quebec's Places of Worship ID
  P5599: { ignore: true },
  // U-Multirank university ID
  P5600: { ignore: true },
  // TCI destination ID
  P5601: { ignore: true },
  // Chercheurs d'Asie ID
  P5602: { ignore: true },
  // Trove newspaper ID
  P5603: { ignore: true },
  // archINFORM keyword ID
  P5604: { ignore: true },
  // DOLF ID
  P5605: { ignore: true },
  // Split This Rock poet ID
  P5609: { ignore: true },
  // OpenMath ID
  P5610: { ignore: true },
  // BeWeb church ID
  P5611: { ignore: true },
  // LegaBasket.it coach ID
  P5612: { ignore: true },
  // Bibliothèque de la Pléiade ID
  P5613: { ignore: true },
  // Aosdána ID
  P5614: { ignore: true },
  // Centre national du théâtre ID
  P5615: { ignore: true },
  // Comédie-Française ID
  P5616: { ignore: true },
  // Evene ID
  P5617: { ignore: true },
  // LOA ID
  P5618: { ignore: true },
  // FFF author ID
  P5619: { ignore: true },
  // FFF character ID
  P5620: { ignore: true },
  // Marvel character ID
  P5621: { ignore: true },
  // National Cartoonists Society member ID
  P5622: { ignore: true },
  // Global Invasive Species Database ID
  P5626: { ignore: true },
  // WSO Online ID
  P5627: { ignore: true },
  // Football.it female player ID
  P5628: { ignore: true },
  // Brasseur ID
  P5629: { ignore: true },
  // Canal Académie ID
  P5631: { ignore: true },
  // Persons of Indian Studies ID
  P5632: { ignore: true },
  // Amphi-Theatrum ID
  P5633: { ignore: true },
  // Theatrum ID
  P5634: { ignore: true },
  // ANZL writer ID
  P5635: { ignore: true },
  // Black Ferns player ID
  P5636: { ignore: true },
  // CNL author ID
  P5637: { ignore: true },
  // IEEE standard
  P5638: { ignore: true },
  // LARB contributor ID
  P5639: { ignore: true },
  // Read NZ Te Pou Muramura writer ID
  P5640: { ignore: true },
  // PRELIB person ID
  P5641: { ignore: true },
  // RSL author ID
  P5643: { ignore: true },
  // World Rugby Women's World Cup player ID
  P5644: { ignore: true },
  // Académie française award winner ID
  P5645: { ignore: true },
  // AniDB anime ID
  P5646: { ignore: true },
  // Baidu ScholarID
  P5647: { ignore: true },
  // AniDB character ID
  P5648: { ignore: true },
  // AniDB person ID
  P5649: { ignore: true },
  // Exoplanet Data Explorer exoplanet ID
  P5650: { ignore: true },
  // Expedia hotel ID
  P5651: { ignore: true },
  // Carthalia ID
  P5652: { ignore: true },
  // Extrasolar Planets Encyclopaedia exoplanet ID
  P5653: { ignore: true },
  // France Musique person ID
  P5654: { ignore: true },
  // Apple Music music video ID
  P5655: { name: "Apple Music", icon: "socials/apple-music.svg" },
  // MuIS collection ID
  P5656: { ignore: true },
  // National Humanities Medal winner ID
  P5657: { ignore: true },
  // VGMdb product ID
  P5659: { ignore: true },
  // Académie de Montpellier member ID
  P5661: { ignore: true },
  // Académie de Mâcon member ID
  P5662: { ignore: true },
  // Académie de Versailles member ID
  P5663: { ignore: true },
  // Savoirs ENS ID
  P5664: { ignore: true },
  // Cartooning for Peace cartoonist ID
  P5665: { ignore: true },
  // Quais du polar writer ID
  P5666: { ignore: true },
  // NASA Exoplanet Archive exoplanet ID
  P5667: { ignore: true },
  // Hoopla title ID
  P5680: { ignore: true },
  // iNaturalist observation ID
  P5683: { ignore: true },
  // ITU-R Recommendation
  P5686: { ignore: true },
  // New Zealand Business Number
  P5687: { ignore: true },
  // ITU-T Recommendation
  P5688: { ignore: true },
  // Saskatchewan Sports Hall of Fame ID
  P5690: { ignore: true },
  // BND ID
  P5691: { ignore: true },
  // Fandango film ID
  P5693: { ignore: true },
  // Moroccan cultural heritage ID
  P5694: { ignore: true },
  // Bibliopoche author ID
  P5695: { ignore: true },
  // Indian Railways station code
  P5696: { ignore: true },
  // Invasive Species Compendium Datasheet ID
  P5698: { ignore: true },
  // Transport Canada LID
  P5699: { ignore: true },
  // La Lorraine des écrivains writer ID
  P5700: { ignore: true },
  // Tasmanian Heritage Register ID
  P5704: { ignore: true },
  // Los Angeles Review of Books author ID
  P5705: { ignore: true },
  // Recours au poème ID
  P5710: { ignore: true },
  // Revues Littéraires ID
  P5711: { ignore: true },
  // IMEC ID
  P5712: { ignore: true },
  // Tor.com author ID
  P5714: { ignore: true },
  // 2006 Commonwealth Games athlete ID
  P5716: { ignore: true },
  // TPA person ID
  P5717: { ignore: true },
  // PAM ID
  P5718: { ignore: true },
  // National Medal of Arts winner ID
  P5719: { ignore: true },
  // WSJP ID
  P5720: { ignore: true },
  // Turkish Basketball Super League ID
  P5721: { ignore: true },
  // Greek Basket League ID
  P5722: { ignore: true },
  // Polish Basketball League ID
  P5723: { ignore: true },
  // Basketball Bundesliga ID (former scheme)
  P5724: { ignore: true },
  // Baloncesto Superior Nacional ID
  P5725: { ignore: true },
  // Pietre della Memoria ID
  P5726: { ignore: true },
  // Partis d'Arcadie ID
  P5727: { ignore: true },
  // Angelicum ID
  P5731: { ignore: true },
  // bgm.tv subject ID
  P5732: { ignore: true },
  // Bilibili bangumi ID
  P5733: { ignore: true },
  // Historic Hotels of America ID
  P5734: { ignore: true },
  // Historic Hotels Worldwide ID
  P5735: { ignore: true },
  // Minor Planet Center body ID
  P5736: { ignore: true },
  // Moegirlpedia ID
  P5737: { ignore: true },
  // Open Exoplanet Catalogue exoplanet ID
  P5738: { ignore: true },
  // Pontificia Università della Santa Croce ID
  P5739: { ignore: true },
  // So Foot ID
  P5740: { ignore: true },
  // Voetbalstats player ID
  P5742: { ignore: true },
  // SR Number
  P5743: { ignore: true },
  // KERIS school ID
  P5744: { ignore: true },
  // Pacific Coast Architecture Database person ID
  P5745: { ignore: true },
  // Directorate General of Civil Aeronautics (Mexico) code
  P5746: { ignore: true },
  // CWA writer ID
  P5747: { ignore: true },
  // Basisklassifikation
  P5748: { ignore: true },
  // Amazon Standard Identification Number
  P5749: { name: "Amazon", icon: "socials/amazon.svg" },
  // FBref player ID
  P5750: { ignore: true },
  // Syndikat ID
  P5752: { ignore: true },
  // EU project RCN
  P5755: { ignore: true },
  // ABMC person ID
  P5756: { ignore: true },
  // DAV hut ID
  P5757: { ignore: true },
  // PZS hut ID
  P5758: { ignore: true },
  // ÖAV hut ID
  P5759: { ignore: true },
  // Petit Futé site ID
  P5760: { ignore: true },
  // SAC ID
  P5761: { ignore: true },
  // NDB identifier for airport beacons
  P5762: { ignore: true },
  // Directorio de Museos y Colecciones de España ID
  P5763: { ignore: true },
  // IMA museum ID
  P5764: { ignore: true },
  // The Park Database ID
  P5765: { ignore: true },
  // Osservatorio culturale del Cantone Ticino ID
  P5768: { ignore: true },
  // Animator.ru person ID
  P5770: { ignore: true },
  // Russian Biathlon DB athlete ID
  P5771: { ignore: true },
  // coach ID at the Russian Biathlon DB
  P5772: { ignore: true },
  // Television Academy Foundation interviewee ID
  P5773: { ignore: true },
  // Historic Hotels of Europe ID
  P5774: { ignore: true },
  // Arnet Miner author ID
  P5776: { ignore: true },
  // CoinMarketCap cryptocurrency ID
  P5777: { ignore: true },
  // CPAN project ID
  P5779: { ignore: true },
  // CPCRulez ID
  P5780: { ignore: true },
  // DBUnico MIBACT ID
  P5782: { ignore: true },
  // Cranach Digital Archive artwork ID
  P5783: { ignore: true },
  // DSV person ID
  P5784: { ignore: true },
  // EU Research participant ID
  P5785: { ignore: true },
  // Moviepilot.de film ID
  P5786: { ignore: true },
  // Ski Jumping Hill Archive ID
  P5787: { ignore: true },
  // The Gymternet gymnast ID
  P5788: { ignore: true },
  // WorldofVolley player ID
  P5789: { ignore: true },
  // Skijumping.pl jumper ID
  P5790: { ignore: true },
  // Cineuropa film ID
  P5791: { ignore: true },
  // NooSFere series ID
  P5792: { ignore: true },
  // Dobry słownik ID
  P5793: { ignore: true },
  // Internet Game Database game ID
  P5794: { ignore: true },
  // Internet Game Database platform ID
  P5795: { ignore: true },
  // Internet Game Database person ID
  P5796: { ignore: true },
  // Twitch channel ID
  P5797: { name: "Twitch", icon: "socials/twitch.svg" },
  // AustLII ID
  P5799: { ignore: true },
  // Academia.edu topic ID
  P5801: { ignore: true },
  // VOR/DME identifier for airport beacons
  P5803: { ignore: true },
  // SNOMED CT identifier
  P5806: { ignore: true },
  // Alternativa Teatral person ID
  P5807: { ignore: true },
  // Alternativa Teatral work ID
  P5808: { ignore: true },
  // Alternativa Teatral place ID
  P5809: { ignore: true },
  // MusicBrainz release ID
  P5813: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // IANA service name
  P5814: { ignore: true },
  // Olympics.com athlete ID / archived OlympicChannel ID
  P5815: { ignore: true },
  // BGCI garden ID
  P5818: { ignore: true },
  // International Mathematical Olympiad participant ID
  P5819: { ignore: true },
  // Film Indonesia ID
  P5820: { ignore: true },
  // (discontinued) ArhivX LOD
  P5821: { ignore: true },
  // Belvedere object ID
  P5823: { ignore: true },
  // National Trust for Historic Preservation ID
  P5827: { ignore: true },
  // Television Academy Foundation show ID
  P5829: { ignore: true },
  // Playbill production ID
  P5833: { ignore: true },
  // Leading Hotels of the World hotel ID
  P5834: { ignore: true },
  // World Travel Awards ID
  P5835: { ignore: true },
  // Relais & Châteaux ID
  P5836: { ignore: true },
  // Nintendo GameID (GameCube/Wii)
  P5838: { ignore: true },
  // Académie de Marseille member ID
  P5839: { ignore: true },
  // NPR podcast ID
  P5840: { name: "NPR", icon: "socials/npr.svg" },
  // Apple Podcasts podcast ID
  P5842: { name: "Apple Podcasts", icon: "socials/apple-podcast.svg" },
  // Gynopedia ID
  P5843: { ignore: true },
  // Treccani Vocabulary ID
  P5844: { ignore: true },
  // AnimeClick anime ID
  P5845: { ignore: true },
  // AnimeClick novel ID
  P5846: { ignore: true },
  // AnimeClick character ID
  P5847: { ignore: true },
  // AnimeClick person ID
  P5848: { ignore: true },
  // AnimeClick manga ID
  P5849: { ignore: true },
  // Ex-USSR internal airport code
  P5851: { ignore: true },
  // Index Herbariorum code
  P5858: { ignore: true },
  // Adelphi author ID
  P5859: { ignore: true },
  // AnimeClick drama ID
  P5860: { ignore: true },
  // Lepidoptera of Belgium ID
  P5862: { ignore: true },
  // CharacTour character ID
  P5863: { ignore: true },
  // Enciclovida ID
  P5864: { ignore: true },
  // IGN film ID
  P5865: { ignore: true },
  // LakeNet ID
  P5866: { ignore: true },
  // Mathematical Reviews journal ID
  P5867: { ignore: true },
  // MobyGames platform ID
  P5868: { ignore: true },
  // Northern Ireland Assembly ID
  P5870: { ignore: true },
  // Norwegian war refugees register ID
  P5871: { ignore: true },
  // re3data repository ID
  P5874: { ignore: true },
  // ResearchGate publication ID
  P5875: { ignore: true },
  // SJPXVII ID
  P5876: { ignore: true },
  // SPXVI ID
  P5877: { ignore: true },
  // Qualité Tourisme ID
  P5879: { ignore: true },
  // Muziekweb performer ID
  P5882: { ignore: true },
  // Tourisme & Handicap ID
  P5883: { ignore: true },
  // Dapodikdasmen ID
  P5884: { ignore: true },
  // Microsoft Store product ID
  P5885: { ignore: true },
  // Arkivportalen agent ID
  P5887: { ignore: true },
  // Arkivportalen archive ID
  P5888: { ignore: true },
  // Preferred Hotels & Resorts hotel ID
  P5890: { ignore: true },
  // Bpk-ID
  P5891: { ignore: true },
  // UOL Eleições ID
  P5892: { ignore: true },
  // Uralonet ID
  P5902: { ignore: true },
  // Álgu ID
  P5903: { ignore: true },
  // ASCE Historical Civil Engineering Landmark ID
  P5904: { ignore: true },
  // Comic Vine ID
  P5905: { ignore: true },
  // DxOMark ID
  P5906: { ignore: true },
  // Geheugen van de VU person ID
  P5908: { ignore: true },
  // HKCAN ID
  P5909: { ignore: true },
  // Oqaasileriffik online dictionary ID
  P5912: { ignore: true },
  // IANA Root Zone Database ID
  P5914: { ignore: true },
  // Shazam track ID
  P5915: { name: "Shazam", icon: "socials/shazam.svg" },
  // Spotify show ID
  P5916: { name: "Spotify", icon: "socials/spotify.svg" },
  // Shazam artist ID
  P5917: { name: "Shazam", icon: "socials/shazam.svg" },
  // Sprockhoff-ID
  P5918: { ignore: true },
  // Index of Historic Collectors and Dealers of Cubism ID
  P5921: { ignore: true },
  // ANZSRC 2008 FoR ID
  P5922: { ignore: true },
  // Moviepilot.de series ID
  P5925: { ignore: true },
  // Spectral Database for Organic Compounds ID
  P5926: { ignore: true },
  // Ultimate Guitar artist ID
  P5927: { ignore: true },
  // Ġabra lexeme ID
  P5928: { ignore: true },
  // Open Food Facts ingredient ID
  P5930: { ignore: true },
  // bazakolejowa.pl railway line ID
  P5931: { ignore: true },
  // IGN TV series ID
  P5932: { ignore: true },
  // tweet ID
  P5933: { name: "Twitter", icon: "socials/twitter.svg" },
  // Short Title Catalogue Flanders (STCV) identifier
  P5934: { ignore: true },
  // Flanders Arts Institute production ID
  P5935: { ignore: true },
  // old-computers.com ID
  P5936: { ignore: true },
  // Oudnederlands Woordenboek GTB ID
  P5937: { ignore: true },
  // Vroegmiddelnederlands Woordenboek GTB ID
  P5938: { ignore: true },
  // Middelnederlandsch Woordenboek GTB ID
  P5939: { ignore: true },
  // Film Indonesia person ID
  P5941: { ignore: true },
  // Protected objects Ostbelgien ID
  P5942: { ignore: true },
  // North America PlayStation Store ID
  P5944: { ignore: true },
  // VicFlora ID
  P5945: { ignore: true },
  // SUCA code
  P5946: { ignore: true },
  // CMI person ID
  P5948: { ignore: true },
  // São Paulo: os estrangeiros e a construção da cidade ID
  P5950: { ignore: true },
  // ComiXology creator ID
  P5951: { ignore: true },
  // Annuaire de la magistrature ID
  P5952: { ignore: true },
  // NT Flora ID
  P5953: { ignore: true },
  // Museu Nacional ID
  P5954: { ignore: true },
  // Sekolah Kita ID
  P5955: { ignore: true },
  // War Memorials Online ID
  P5956: { ignore: true },
  // ID of Inventory of the Archaeological and Paleontological Heritage of Catalonia
  P5957: { ignore: true },
  // Women's Japan Basketball League ID
  P5958: { ignore: true },
  // (discontinued) V.League ID (obsolete)
  P5959: { ignore: true },
  // Japan Professional Basketball League ID
  P5960: { ignore: true },
  // Elsevier journal ID
  P5963: { ignore: true },
  // Norwegian Nationaltheatret actor ID
  P5964: { ignore: true },
  // LUBW Protected Area No
  P5965: { ignore: true },
  // SAGE journal ID
  P5966: { ignore: true },
  // CPPAP ID
  P5968: { ignore: true },
  // RBF player ID
  P5969: { ignore: true },
  // Europe PlayStation Store ID
  P5971: { ignore: true },
  // Encyclopedia Virginia ID
  P5981: { ignore: true },
  // Springer journal ID
  P5983: { ignore: true },
  // APNI ID
  P5984: { ignore: true },
  // Literaturaren Zubitegia ID
  P5985: { ignore: true },
  // Getty Iconography Authority ID
  P5986: { ignore: true },
  // Indiancine.ma film ID
  P5987: { ignore: true },
  // Deezer show ID
  P5988: { ignore: true },
  // Indiancine.ma person ID
  P5989: { ignore: true },
  // Movies Anywhere ID
  P5990: { ignore: true },
  // Japan PlayStation Store ID
  P5999: { ignore: true },
  // WikiArt ID
  P6002: { ignore: true },
  // Center for Biological Diversity ID
  P6003: { ignore: true },
  // Brasiliana Iconográfica ID
  P6004: { ignore: true },
  // Muck Rack journalist ID
  P6005: { ignore: true },
  // Museum Universe Data File ID
  P6006: { ignore: true },
  // Salons ID
  P6007: { ignore: true },
  // Agoda hotel ID
  P6008: { ignore: true },
  // Techopedia ID
  P6009: { ignore: true },
  // Encyclopedia of Alabama ID
  P6010: { ignore: true },
  // Internet Pinball Database ID
  P6011: { ignore: true },
  // California Office of Historic Preservation ID
  P6012: { ignore: true },
  // Encyclopedia of Appalachia ID
  P6013: { ignore: true },
  // Handbook of Texas ID
  P6015: { ignore: true },
  // Tennessee Encyclopedia ID
  P6016: { ignore: true },
  // CanalPlan AC place ID
  P6017: { ignore: true },
  // SeaLifeBase ID
  P6018: { ignore: true },
  // Species at Risk public registry ID
  P6019: { ignore: true },
  // d'Art d'Art ! ID
  P6020: { ignore: true },
  // Hymenoptera Online taxon ID
  P6021: { ignore: true },
  // ResearchGate contributions ID
  P6023: { ignore: true },
  // Clé des langues ID
  P6024: { ignore: true },
  // Oiseaux.net ID
  P6025: { ignore: true },
  // Hypericum MySpecies ID
  P6028: { ignore: true },
  // ECOS ID
  P6030: { ignore: true },
  // IGF entrant ID
  P6032: { ignore: true },
  // CMS ID
  P6033: { ignore: true },
  // Plant Finder ID
  P6034: { ignore: true },
  // C.V. Starr Virtual Herbarium ID
  P6035: { ignore: true },
  // Wild Herps ID
  P6036: { ignore: true },
  // ProsopoMaths ID
  P6037: { ignore: true },
  // AFAS author ID
  P6038: { ignore: true },
  // Australian Faunal Directory ID
  P6039: { ignore: true },
  // BirdLife Australia ID
  P6040: { ignore: true },
  // John J. Audubon's Birds of America ID
  P6041: { ignore: true },
  // Echinoid Directory ID
  P6042: { ignore: true },
  // Espèces Envahissantes Outre-mer ID
  P6043: { ignore: true },
  // FEIS ID
  P6044: { ignore: true },
  // Global Raptor Information Network ID
  P6045: { ignore: true },
  // MNHN taxon ID
  P6046: { ignore: true },
  // Neotropical Birds ID
  P6047: { ignore: true },
  // New Zealand Birds Online ID
  P6048: { ignore: true },
  // NOAA Fisheries Species Directory ID
  P6049: { ignore: true },
  // OSF Online ID
  P6050: { ignore: true },
  // Sea Slug Forum ID
  P6051: { ignore: true },
  // Cockroach Species File ID
  P6052: { ignore: true },
  // Coreoidea Species File ID
  P6053: { ignore: true },
  // GT IBMA ID
  P6054: { ignore: true },
  // Mantodea Species File ID
  P6055: { ignore: true },
  // Red List of South African Plants ID
  P6056: { ignore: true },
  // Systematic Catalog of Culicidae ID
  P6057: { ignore: true },
  // Larousse ID
  P6058: { ignore: true },
  // Biographie vosgienne ID
  P6059: { ignore: true },
  // MoEML ID
  P6060: { ignore: true },
  // Plant Parasites of Europe ID
  P6061: { ignore: true },
  // Scoresway baseball person ID
  P6062: { ignore: true },
  // Scoresway basketball person ID
  P6063: { ignore: true },
  // Scoresway ice hockey person ID
  P6064: { ignore: true },
  // (discontinued) Scoresway rugby person ID
  P6065: { ignore: true },
  // ARD Mediathek ID
  P6067: { ignore: true },
  // DCMOTO identifier
  P6068: { ignore: true },
  // BirdLife International IBA ID
  P6070: { ignore: true },
  // Polish Olympic Committee athlete ID
  P6071: { ignore: true },
  // British Museum bioID
  P6077: { ignore: true },
  // GameFAQs platform ID
  P6078: { ignore: true },
  // (discontinued) Discogs track ID
  P6079: { ignore: true },
  // (discontinued) Discogs composition ID
  P6080: { ignore: true },
  // RIA Novosti reference
  P6081: { ignore: true },
  // NYC Building Identification Number (BIN)
  P6082: { ignore: true },
  // Cineuropa person ID
  P6083: { ignore: true },
  // Caselaw Access Project case ID
  P6090: { ignore: true },
  // MGG Online ID
  P6091: { ignore: true },
  // Map of Life ID
  P6092: { ignore: true },
  // AfroMoths ID
  P6093: { ignore: true },
  // FloraWeb ID
  P6094: { ignore: true },
  // FLOW ID
  P6096: { ignore: true },
  // AllPowerlifting.com person ID
  P6097: { ignore: true },
  // Info Flora ID
  P6098: { ignore: true },
  // YÖK Academic Profile ID
  P6100: { ignore: true },
  // Mushroom Observer ID
  P6101: { ignore: true },
  // Schleswig-Holstein cultural heritage object ID
  P6102: { ignore: true },
  // Michigan Flora ID
  P6103: { ignore: true },
  // Observation.org ID
  P6105: { ignore: true },
  // Danish Football Union player ID
  P6109: { ignore: true },
  // AllMusic release ID
  P6110: { name: "AllMusic", icon: "socials/all-music.svg" },
  // MusicNotes product ID
  P6111: { ignore: true },
  // Playbill venue ID
  P6113: { ignore: true },
  // Portal to the Flora of Italy ID
  P6114: { ignore: true },
  // Central African Plants ID
  P6115: { ignore: true },
  // Envanter.gov.tr Monument ID
  P6117: { ignore: true },
  // Letterboxd actor ID
  P6119: { ignore: true },
  // Argentinean NCAA Airport code
  P6120: { ignore: true },
  // MusicNotes song ID
  P6122: { ignore: true },
  // B3Kat dataset ID
  P6123: { ignore: true },
  // Sotheby's person ID
  P6124: { ignore: true },
  // Santiebeati ID
  P6126: { ignore: true },
  // Letterboxd film ID
  P6127: { ignore: true },
  // Threatened Species Link ID
  P6128: { ignore: true },
  // Littera ID
  P6130: { ignore: true },
  // Soccerway team ID
  P6131: { ignore: true },
  // Playbill person ID
  P6132: { ignore: true },
  // Siamzone film ID
  P6133: { ignore: true },
  // (discontinued) Thaifilm ID
  P6134: { ignore: true },
  // VD 18 ID
  P6135: { ignore: true },
  // Newseum newspaper front page ID
  P6136: { ignore: true },
  // APA ID
  P6137: { ignore: true },
  // Software Heritage identifier (SWHID)
  P6138: { ignore: true },
  // Virtual Guide to the Flora of Mongolia ID
  P6139: { ignore: true },
  // DanNet 2.2 word ID
  P6140: { ignore: true },
  // À nos grands hommes ID
  P6141: { ignore: true },
  // Verspreidingsatlas.nl ID
  P6142: { ignore: true },
  // BioOne journal ID
  P6143: { ignore: true },
  // ortsnamen.ch ID
  P6144: { ignore: true },
  // Academy Awards Database film ID
  P6145: { ignore: true },
  // The Hendon Mob ID
  P6146: { ignore: true },
  // World Poker Tour player ID
  P6147: { ignore: true },
  // GLAMOS glacier ID
  P6148: { ignore: true },
  // Academy Awards Database nominee ID
  P6150: { ignore: true },
  // ANICA ID
  P6151: { ignore: true },
  // National Portrait Gallery (United States) object ID
  P6152: { ignore: true },
  // r-hockey.ru person ID
  P6154: { ignore: true },
  // Sotheby's Museum Network ID
  P6155: { ignore: true },
  // MNAV artist ID
  P6156: { ignore: true },
  // Google News publication ID
  P6157: { ignore: true },
  // ALCA author ID
  P6158: { ignore: true },
  // Atlas of Florida Plants ID
  P6159: { ignore: true },
  // BoardGameGeek game publisher ID
  P6160: { ignore: true },
  // Invasive Plant Atlas of the United States ID
  P6161: { ignore: true },
  // Luding game publisher ID
  P6162: { ignore: true },
  // NAS ID
  P6163: { ignore: true },
  // Depósito Legal ID
  P6164: { ignore: true },
  // Corpus typographique français ID
  P6165: { ignore: true },
  // British Executions ID
  P6167: { ignore: true },
  // Bantu Lexical Reconstructions ID
  P6168: { ignore: true },
  // Welsh Book Trade Info ID
  P6169: { ignore: true },
  // System16 identifier
  P6170: { ignore: true },
  // Académie d'Arles member ID
  P6171: { ignore: true },
  // Satakore game ID
  P6172: { ignore: true },
  // Bitraga author ID
  P6173: { ignore: true },
  // The World Academy of Sciences fellow ID
  P6174: { ignore: true },
  // Bitraga work ID
  P6175: { ignore: true },
  // Cal-IPC ID
  P6176: { ignore: true },
  // EUNIS ID for species
  P6177: { ignore: true },
  // Dimensions author ID
  P6178: { ignore: true },
  // Dimensions Publication ID
  P6179: { ignore: true },
  // Dimensions Source ID
  P6180: { ignore: true },
  // Disney A to Z ID
  P6181: { ignore: true },
  // GameFAQs company ID
  P6182: { ignore: true },
  // African Journals Online  journal ID
  P6183: { ignore: true },
  // Lego set ID
  P6187: { ignore: true },
  // BDFA player ID
  P6188: { ignore: true },
  // Sabinet journal ID
  P6189: { ignore: true },
  // NSW State Archives and Records Authority Agency ID
  P6190: { ignore: true },
  // Hembygdsportalen ID
  P6192: { ignore: true },
  // Austrian Biographical Encylopedia ID
  P6194: { ignore: true },
  // Badtaste ID
  P6196: { ignore: true },
  // Badgames ID
  P6197: { ignore: true },
  // Liga MX Femenil player ID
  P6198: { ignore: true },
  // member of the Portuguese parliament ID
  P6199: { ignore: true },
  // BBC News topic ID
  P6200: { name: "BBC", icon: "socials/bbc.svg" },
  // OBV editions ID
  P6201: { ignore: true },
  // Geolex ID
  P6202: { ignore: true },
  // CNPJ
  P6204: { ignore: true },
  // Defined Term ID
  P6205: { ignore: true },
  // Guida al Fumetto Italiano ID
  P6206: { ignore: true },
  // SEINet ID
  P6209: { ignore: true },
  // LIGA profile
  P6210: { ignore: true },
  // BIBSYS work ID
  P6211: { ignore: true },
  // UK Parliament identifier
  P6213: { ignore: true },
  // Jewish Museum Berlin person ID
  P6214: { ignore: true },
  // Vesti.kz person ID
  P6215: { ignore: true },
  // Genius album ID
  P6217: { ignore: true },
  // Genius song ID
  P6218: { ignore: true },
  // TASS reference
  P6219: { ignore: true },
  // OpenTrials ID
  P6220: { ignore: true },
  // NooSFere story ID
  P6221: { ignore: true },
  // DIR3 ID
  P6222: { ignore: true },
  // L'Encyclopédie philosophique ID
  P6223: { ignore: true },
  // TrENSmissions person ID
  P6225: { ignore: true },
  // ARLLFB member ID
  P6226: { ignore: true },
  // Flora of Wisconsin ID
  P6227: { ignore: true },
  // RegiowikiAT ID
  P6228: { ignore: true },
  // Discord Store game SKU
  P6229: { ignore: true },
  // Bavarian protected area ID
  P6230: { ignore: true },
  // BDELIS ID
  P6231: { ignore: true },
  // Danske Taler speaker ID
  P6232: { ignore: true },
  // Place Names Register ID (Estonia)
  P6233: { ignore: true },
  // Biographie nationale de Belgique ID
  P6234: { ignore: true },
  // Académie royale de Belgique member ID
  P6235: { ignore: true },
  // Monument aux morts ID
  P6238: { ignore: true },
  // IEC commemorative monument of Catalonia ID
  P6239: { ignore: true },
  // MMLO ID
  P6240: { ignore: true },
  // Meteorological Service of Canada climate site ID
  P6242: { ignore: true },
  // Volksbund ID
  P6244: { ignore: true },
  // PomBase systematic ID
  P6245: { ignore: true },
  // Paris Musées work ID
  P6246: { ignore: true },
  // Lego design ID
  P6247: { ignore: true },
  // Lego element ID
  P6248: { ignore: true },
  // Apple Music music movie ID (U.S. version)
  P6250: { name: "Apple Music", icon: "socials/apple-music.svg" },
  // BSRussia player ID
  P6252: { ignore: true },
  // Beachsoccer.ru player ID
  P6253: { ignore: true },
  // SinemaTürk person ID
  P6255: { ignore: true },
  // SinemaTürk film ID
  P6256: { ignore: true },
  // Fandom article ID
  P6262: { name: "Fandom", icon: "socials/fandom.svg" },
  // MinDat mineral ID
  P6263: { ignore: true },
  // Harvard Index of Botanists ID
  P6264: { ignore: true },
  // MinDat locality ID
  P6265: { ignore: true },
  // Garzanti Linguistica ID
  P6266: { ignore: true },
  // Multiplayer ID
  P6267: { ignore: true },
  // Danmarks svampeatlas ID
  P6268: { ignore: true },
  // Amazon Music artist ID
  P6276: { name: "Amazon", icon: "socials/amazon.svg" },
  // Objectif Gard topic ID
  P6277: { ignore: true },
  // Epic Games Store ID
  P6278: { ignore: true },
  // ZVR-Number
  P6279: { ignore: true },
  // IPPDH ID
  P6281: { ignore: true },
  // French Academy of Sciences member ID
  P6282: { ignore: true },
  // MNopedia ID
  P6283: { ignore: true },
  // NCpedia ID
  P6284: { ignore: true },
  // Weeds in Ontario ID
  P6285: { ignore: true },
  // ICCD ID - S form
  P6286: { ignore: true },
  // ICCD ID - CF form
  P6287: { ignore: true },
  // ICCD ID - CG form
  P6288: { ignore: true },
  // ODNR Division of Wildlife ID
  P6289: { ignore: true },
  // Penthouse ID
  P6290: { ignore: true },
  // Complete BBC Micro Games Archive ID
  P6292: { name: "BBC", icon: "socials/bbc.svg" },
  // YSA ID
  P6293: { ignore: true },
  // ARTIC exhibition ID
  P6294: { ignore: true },
  // ARTIC artist ID
  P6295: { ignore: true },
  // bgm.tv character ID
  P6296: { ignore: true },
  // ACB.com coach ID
  P6297: { ignore: true },
  // bgm.tv person ID
  P6298: { ignore: true },
  // PC-9801 DB ID
  P6299: { ignore: true },
  // Hymnary author ID
  P6300: { ignore: true },
  // The Armory Show at 100 ID
  P6301: { ignore: true },
  // Dictionnaire de spiritualité ID
  P6302: { ignore: true },
  // Swedish Anbytarforum
  P6303: { ignore: true },
  // researchportal.helsinki.fi profile ID
  P6304: { ignore: true },
  // Wikimedia VRTS ticket number
  P6305: { ignore: true },
  // AllMusic performance ID
  P6306: { name: "AllMusic", icon: "socials/all-music.svg" },
  // Wikibase Registry ID
  P6307: { ignore: true },
  // (discontinued) Scoresway tennis person ID
  P6308: { ignore: true },
  // historical Répertoire national des associations identifier
  P6309: { ignore: true },
  // Muséosphère work ID
  P6310: { ignore: true },
  // Pressball.by football (soccer) player ID
  P6311: { ignore: true },
  // Russian Premier League staff ID
  P6312: { ignore: true },
  // Russian Premier League referee ID
  P6313: { ignore: true },
  // WorldFootball.net referee ID
  P6314: { ignore: true },
  // PlaymakerStats.com referee ID
  P6315: { ignore: true },
  // PlaymakerStats.com coach ID
  P6316: { ignore: true },
  // RusTeam player ID
  P6317: { ignore: true },
  // Crimean Football Union player ID
  P6318: { ignore: true },
  // Italian Footballers' Association player ID
  P6319: { ignore: true },
  // Futsal Association of Russia player ID
  P6320: { ignore: true },
  // Teams.by player ID
  P6321: { ignore: true },
  // vehicle identification number
  P6322: { ignore: true },
  // Centre Pompidou ID
  P6323: { ignore: true },
  // INE ID (Portugal)
  P6324: { ignore: true },
  // Critique d'art ID
  P6325: { ignore: true },
  // DVR Number
  P6326: { ignore: true },
  // Goodreads character ID
  P6327: { name: "Goodreads", icon: "socials/goodreads.png" },
  // Politika topic ID
  P6328: { ignore: true },
  // Share-VDE 1.0 author ID
  P6329: { ignore: true },
  // England Football Online manager profile
  P6330: { ignore: true },
  // England Football Online player profile
  P6331: { ignore: true },
  // Panorama de l'art ID
  P6332: { ignore: true },
  // Agence photo RMN package ID
  P6334: { ignore: true },
  // MDWS place ID
  P6335: { ignore: true },
  // JKT48 member ID
  P6336: { ignore: true },
  // PCGamingWiki ID
  P6337: { ignore: true },
  // Uppsala General Catalogue ID
  P6340: { ignore: true },
  // IFPNI species ID
  P6341: { ignore: true },
  // Dictionnaire des Wallons ID
  P6342: { ignore: true },
  // The White-files species ID
  P6347: { ignore: true },
  // Hymnary text ID
  P6348: { ignore: true },
  // Lace Bugs Database ID
  P6349: { ignore: true },
  // Doctrine ID
  P6350: { ignore: true },
  // Genius artist numeric ID
  P6351: { ignore: true },
  // OLAC video game genre vocabulary ID
  P6352: { ignore: true },
  // OSGS-Number
  P6353: { ignore: true },
  // MNAM artwork ID
  P6355: { ignore: true },
  // IHOI work ID
  P6356: { ignore: true },
  // Conférence du stage secretary ID
  P6357: { ignore: true },
  // Musée Picasso artwork ID
  P6358: { ignore: true },
  // Crew United title ID
  P6359: { ignore: true },
  // Genius album numeric ID
  P6360: { ignore: true },
  // Genius song numeric ID
  P6361: { ignore: true },
  // Litchfield Ledger ID
  P6362: { ignore: true },
  // (discontinued) Microsoft Academic ID
  P6366: { ignore: true },
  // Bahamut Gamer's Community ACG Database ID
  P6367: { ignore: true },
  // Media Arts Database anime ID (former scheme)
  P6368: { ignore: true },
  // Media Arts Database manga ID (former scheme)
  P6369: { ignore: true },
  // REDIZO
  P6370: { ignore: true },
  // Archives of Maryland Biographical Series ID
  P6371: { ignore: true },
  // Interpol WOA artwork ID (OBSOLETE)
  P6372: { ignore: true },
  // Online Catalog of Biblioteca Nacional de Portugal ID
  P6373: { ignore: true },
  // MAMVP artwork ID
  P6374: { ignore: true },
  // Psyl'list species ID
  P6376: { ignore: true },
  // VectorBase taxonomy ID
  P6377: { ignore: true },
  // iTunes TV season ID
  P6381: { name: "iTunes", icon: "socials/itunes.svg" },
  // Hungarian public thesaurus ID
  P6382: { ignore: true },
  // TV Spielfilm film ID
  P6383: { ignore: true },
  // Viperson ID
  P6384: { ignore: true },
  // Krugosvet article
  P6385: { ignore: true },
  // biathlon.com.ua person ID
  P6386: { ignore: true },
  // RBU person ID
  P6387: { ignore: true },
  // sportufo.ru person ID
  P6388: { ignore: true },
  // Skiresort.info ID
  P6389: { ignore: true },
  // Educational Institution Identification Number
  P6390: { ignore: true },
  // U-DISE code
  P6391: { ignore: true },
  // AISHE code
  P6392: { ignore: true },
  // ELNET ID
  P6394: { ignore: true },
  // Apple Books book ID (American version)
  P6395: { name: "Apple Books", icon: "socials/apple-books.svg" },
  // iTunes movie ID
  P6398: { name: "iTunes", icon: "socials/itunes.svg" },
  // Romanian Soccer player ID
  P6399: { ignore: true },
  // Skimap area ID
  P6400: { ignore: true },
  // sports.md athlete ID
  P6401: { ignore: true },
  // Gault et Millau ID
  P6402: { ignore: true },
  // TheatreOnline ID
  P6403: { ignore: true },
  // Treccani's Dizionario di Storia ID
  P6404: { ignore: true },
  // Smarthistory ID
  P6405: { ignore: true },
  // vodnimlyny.cz ID
  P6406: { ignore: true },
  // World Cube Association ID
  P6407: { ignore: true },
  // COOL species ID
  P6408: { ignore: true },
  // CORE ID
  P6409: { ignore: true },
  // LevskiSofia.info coach ID
  P6410: { ignore: true },
  // LevskiSofia.info player ID
  P6411: { ignore: true },
  // Gran Enciclopèdia de la Música ID
  P6412: { ignore: true },
  // JORFSearch organization ID
  P6413: { ignore: true },
  // DIZIE ID
  P6414: { ignore: true },
  // Football.Odessa.ua person ID
  P6415: { ignore: true },
  // sport-strana.ru article ID
  P6416: { ignore: true },
  // Homosaurus ID (V2)
  P6417: { ignore: true },
  // funk channel ID
  P6418: { ignore: true },
  // GEOFON earthquake ID
  P6419: { ignore: true },
  // Georgian National Filmography ID
  P6420: { ignore: true },
  // infosport.ru person ID
  P6421: { ignore: true },
  // ManualsLib brand ID
  P6422: { ignore: true },
  // MusicBrainz event ID
  P6423: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // LGD local body code
  P6425: { ignore: true },
  // Hymnary hymnal ID
  P6429: { ignore: true },
  // Hymnary instance ID
  P6430: { ignore: true },
  // Hymnary tune ID
  P6431: { ignore: true },
  // (discontinued) Global Species ID
  P6433: { ignore: true },
  // Amsterdam code
  P6434: { ignore: true },
  // Code of Natura 2000/FFH habitat
  P6436: { ignore: true },
  // Douban author ID
  P6441: { ignore: true },
  // Douban book version/edition ID
  P6442: { ignore: true },
  // Douban drama ID
  P6443: { ignore: true },
  // Douban game ID
  P6444: { ignore: true },
  // Douban music ID
  P6445: { ignore: true },
  // Douban musician ID
  P6446: { ignore: true },
  // Douban Read author ID
  P6447: { ignore: true },
  // Douban Read eBook ID
  P6448: { ignore: true },
  // Douban site name
  P6449: { ignore: true },
  // Douban username
  P6450: { ignore: true },
  // Zhihu username
  P6451: { ignore: true },
  // Bilibili tag ID
  P6454: { ignore: true },
  // Bilibili user ID
  P6455: { ignore: true },
  // Bilibili video ID
  P6456: { ignore: true },
  // Eventa Servo ID
  P6457: { ignore: true },
  // Mtime movie ID
  P6458: { ignore: true },
  // QQ user ID
  P6459: { ignore: true },
  // Swedish Organization Number
  P6460: { ignore: true },
  // Rock's Backpages artist ID
  P6461: { ignore: true },
  // Rock's Backpages author ID
  P6462: { ignore: true },
  // Rock's Backpages publication ID
  P6463: { ignore: true },
  // Mtime people ID
  P6464: { ignore: true },
  // Democracy Club candidate ID
  P6465: { ignore: true },
  // Hulu movie ID
  P6466: { ignore: true },
  // Hulu series ID
  P6467: { ignore: true },
  // ISA ID
  P6468: { ignore: true },
  // Fuzhou Architecture Heritage ID
  P6469: { ignore: true },
  // DALFAN ID
  P6470: { ignore: true },
  // Den Digitale Byport ID
  P6471: { ignore: true },
  // GameFAQs franchise ID
  P6472: { ignore: true },
  // NMSRCP reference number
  P6473: { ignore: true },
  // Swiss Films ID
  P6474: { ignore: true },
  // CABB player ID
  P6475: { ignore: true },
  // castingvideos ID
  P6476: { ignore: true },
  // Mecklenburg-Vorpommern protected area ID
  P6478: { ignore: true },
  // IEEE Xplore author ID
  P6479: { ignore: true },
  // IEEE Xplore document ID
  P6480: { ignore: true },
  // Strepsiptera database species ID
  P6481: { ignore: true },
  // Image Archive, Herder Institute
  P6482: { ignore: true },
  // WBCHSE code
  P6483: { ignore: true },
  // Antarctica NZ Digital Asset Manager
  P6484: { ignore: true },
  // Brentidae of the world species ID
  P6485: { ignore: true },
  // Pacific Coast Architecture Database building ID
  P6486: { ignore: true },
  // Illustrated catalog of Tessaratomidae species ID
  P6487: { ignore: true },
  // Enciclopedia delle donne ID
  P6488: { ignore: true },
  // Joan Miró Online Image Bank ID
  P6489: { ignore: true },
  // Patrimonio Digital de Castilla-La Mancha authority ID
  P6490: { ignore: true },
  // Board Game Atlas ID
  P6491: { ignore: true },
  // BVPH authority ID
  P6492: { ignore: true },
  // CCBAE publication ID
  P6493: { ignore: true },
  // Incunabula Short Title Catalogue ID
  P6494: { ignore: true },
  // KSI player ID
  P6495: { ignore: true },
  // Biblioteca Virtual Andalucía authority ID
  P6496: { ignore: true },
  // Georgian National Filmography person ID
  P6501: { ignore: true },
  // JWF Wrestlers Database person ID
  P6502: { ignore: true },
  // Indian census area code (1991)
  P6503: { ignore: true },
  // Lithuanian Sport Encyclopedia (LSE) article ID
  P6504: { ignore: true },
  // Eliseu Visconti Project ID
  P6506: { ignore: true },
  // UN/CEFACT Common Code
  P6512: { ignore: true },
  // AICTE Permanent ID
  P6513: { ignore: true },
  // DOGC ID
  P6514: { ignore: true },
  // DoBIH Number
  P6515: { ignore: true },
  // ScaleNet ID
  P6516: { ignore: true },
  // WhoSampled artist ID
  P6517: { ignore: true },
  // Business Registry code (Estonia)
  P6518: { ignore: true },
  // ISO 639-3 Change Request ID
  P6519: { ignore: false },
  // Lokalhistoriewiki.no ID
  P6520: { ignore: true },
  // Crew United person ID
  P6521: { ignore: true },
  // Fondation Maeght artist ID
  P6525: { ignore: true },
  // data.gouv.fr dataset ID
  P6526: { ignore: true },
  // V.League men's player ID
  P6527: { ignore: true },
  // V.League women's player ID
  P6528: { ignore: true },
  // BHL part ID
  P6535: { ignore: true },
  // Gateway to Research Project ID
  P6536: { ignore: true },
  // Yandex Music genre ID
  P6537: { name: "Yandex Music", icon: "socials/yandex-music.svg" },
  // Yandex Music label ID
  P6538: { name: "Yandex Music", icon: "socials/yandex-music.svg" },
  // Catálogo de Patrimonio Cultural de Castilla-La Mancha ID
  P6539: { ignore: true },
  // Inventário dos Monumentos RJ ID
  P6542: { ignore: true },
  // NZ On Screen person ID
  P6548: { ignore: true },
  // NZ On Screen work ID
  P6549: { ignore: true },
  // Pacific Coast Architecture Database firm ID
  P6550: { ignore: true },
  // Physics History Network ID
  P6551: { ignore: true },
  // Twitter user numeric ID
  P6552: { name: "Twitter", icon: "socials/twitter.svg" },
  // Represent Me ID
  P6554: { ignore: true },
  // Brazilian Electoral Unit ID
  P6555: { ignore: true },
  // SICRIS researcher ID
  P6556: { ignore: true },
  // Dimensions.guide ID
  P6557: { ignore: true },
  // National Wrestling Hall of Fame University team ID
  P6558: { ignore: true },
  // Official Charts artist ID
  P6559: { ignore: true },
  // CEMDP ID
  P6692: { ignore: true },
  // NGMDb Prod ID
  P6693: { ignore: true },
  // MeSH concept ID
  P6694: { ignore: true },
  // PRELIB organization ID
  P6696: { ignore: true },
  // Japan Search name ID
  P6698: { ignore: true },
  // Yu-Gi-Oh! TCG cards ID
  P6699: { ignore: true },
  // Saxony protected area ID
  P6700: { ignore: true },
  // Referee.ru person ID
  P6701: { ignore: true },
  // Shanghai Library person ID
  P6702: { ignore: true },
  // Shanghai Library place ID
  P6703: { ignore: true },
  // FrogMAP ID
  P6704: { ignore: true },
  // Academia Sinica authority ID
  P6705: { ignore: true },
  // De Agostini ID
  P6706: { ignore: true },
  // Australian War Memorial ID
  P6713: { ignore: true },
  // Whitney Museum of American Art artist ID
  P6714: { ignore: true },
  // SIUSA archive producer person ID
  P6715: { ignore: true },
  // MyNeta.info political party ID
  P6716: { ignore: true },
  // Indie DB game ID
  P6717: { ignore: true },
  // interwiki prefix at Wikimedia
  P6720: { ignore: true },
  // K10plus PPN ID
  P6721: { ignore: true },
  // FemBio ID
  P6722: { ignore: true },
  // BlackPast.org ID
  P6723: { ignore: true },
  // Trainline ID
  P6724: { ignore: false },
  // CatholicSaints.info ID
  P6725: { ignore: true },
  // NSW Capital Conviction ID
  P6726: { ignore: true },
  // Dimore Storiche Italiane ID
  P6727: { ignore: true },
  // Dictionnaire des Vendéens ID
  P6728: { ignore: true },
  // SportSport.ba club ID
  P6729: { ignore: true },
  // CroRec ID
  P6730: { ignore: true },
  // VTB United League player ID
  P6732: { ignore: true },
  // Archaeology Data Service person ID
  P6734: { ignore: true },
  // Watercolour World artist ID
  P6735: { ignore: true },
  // Drobné památky ID
  P6736: { ignore: true },
  // grwar.ru person ID
  P6737: { ignore: true },
  // Whitney Museum of American Art artwork ID
  P6738: { ignore: true },
  // Smotrim.ru actor profile ID
  P6739: { ignore: true },
  // Justia Patents assignee ID
  P6740: { ignore: true },
  // Kinosozvezdie biography ID
  P6741: { ignore: true },
  // Musixmatch track ID
  P6742: { ignore: true },
  // LNB Coach id
  P6743: { ignore: true },
  // FragDenStaat public body ID
  P6744: { ignore: true },
  // Orlando author ID
  P6745: { ignore: true },
  // Paměť národa ID
  P6746: { ignore: true },
  // Recreation.gov campground ID
  P6747: { ignore: true },
  // Interactive Fiction Database ID
  P6748: { ignore: true },
  // CanLII ID
  P6749: { ignore: true },
  // CineChile filmmaker ID
  P6750: { ignore: true },
  // Heritage Gazetteer of Libya ID
  P6751: { ignore: true },
  // RGALI ID
  P6752: { ignore: true },
  // OBIS ID
  P6754: { ignore: true },
  // Flora of Australia ID (new)
  P6756: { ignore: true },
  // NARA record group number
  P6759: { ignore: true },
  // Know Your Meme ID
  P6760: { ignore: true },
  // NARA collection identifier
  P6761: { ignore: true },
  // FilmFreeway ID
  P6762: { ignore: true },
  // Dictionary of Anhui Writers ID
  P6763: { ignore: true },
  // V&A person ID
  P6764: { ignore: true },
  // Guix Variable Name
  P6765: { ignore: true },
  // Who's on First ID
  P6766: { ignore: true },
  // FoodOn ID
  P6767: { ignore: true },
  // SportSport.ba news ID
  P6768: { ignore: true },
  // CJFD journal article ID
  P6769: { ignore: true },
  // Swiss National Sound Archives ID
  P6770: { ignore: true },
  // Arabic Ontology ID
  P6771: { ignore: true },
  // Buddhist Author Authority Database ID
  P6772: { ignore: true },
  // HAL structure ID
  P6773: { ignore: true },
  // Mod DB game ID
  P6774: { ignore: true },
  // Finnish Trade Register ID
  P6775: { ignore: true },
  // IMTL.org ID
  P6776: { ignore: true },
  // Danskefilmstemmer.dk person ID
  P6777: { ignore: true },
  // OBO Gazetteer ID
  P6778: { ignore: true },
  // LGBTFansDB character ID
  P6780: { ignore: true },
  // ProofWiki ID
  P6781: { ignore: true },
  // ROR ID
  P6782: { ignore: true },
  // speedrun.com game ID
  P6783: { ignore: true },
  // Harper's author ID
  P6784: { ignore: true },
  // Pakistan Railways station code
  P6785: { ignore: true },
  // National Library of Wales Catalogue ID
  P6786: { ignore: true },
  // Arachne building ID
  P6787: { ignore: true },
  // messes.info Catholic parish ID
  P6788: { ignore: true },
  // The Atlantic author ID
  P6791: { ignore: true },
  // Find NZ Artists ID
  P6792: { ignore: true },
  // Unified Social Credit Identifier
  P6795: { ignore: true },
  // OSZMI ID
  P6796: { ignore: true },
  // MSX Games World ID
  P6797: { ignore: true },
  // GLIMS ID
  P6799: { ignore: true },
  // Art Gallery of South Australia creator ID
  P6804: { ignore: true },
  // Art Gallery of South Australia work ID
  P6805: { ignore: true },
  // racing-reference race ID
  P6806: { ignore: true },
  // racing-reference track ID
  P6807: { ignore: true },
  // SportSport.ba player ID
  P6808: { ignore: true },
  // Xikao History ID
  P6809: { ignore: true },
  // Xikao Repertoire ID
  P6810: { ignore: true },
  // Prazdne Domy architect ID
  P6811: { ignore: true },
  // AntWiki article ID
  P6812: { ignore: true },
  // Mediapart tag ID
  P6813: { ignore: true },
  // NWBib ID
  P6814: { ignore: true },
  // University of Amsterdam Album Academicum ID
  P6815: { ignore: true },
  // The Dragon Archive ID
  P6816: { ignore: true },
  // SVT Play ID
  P6817: { ignore: true },
  // Australian bank branch ID
  P6820: { ignore: true },
  // Uppsala University Alvin ID
  P6821: { ignore: true },
  // Tainacan MAI ID
  P6822: { ignore: true },
  // GNU ELPA package ID
  P6823: { ignore: true },
  // RFGS person ID
  P6825: { ignore: true },
  // Igromania ID
  P6827: { ignore: true },
  // Czech parliament ID
  P6828: { ignore: true },
  // Dictionary of Irish Biography ID
  P6829: { ignore: true },
  // swMATH work ID
  P6830: { ignore: true },
  // Pinakes author ID
  P6831: { ignore: true },
  // IndicePA ID
  P6832: { ignore: true },
  // Pro-Football-Reference.com coach ID
  P6836: { ignore: true },
  // Keybase username
  P6837: { ignore: true },
  // Elhuyar Dictionary ID
  P6838: { ignore: true },
  // TV Tropes identifier
  P6839: { ignore: true },
  // ITF tournament ID
  P6841: { ignore: true },
  // Campendium ID
  P6842: { ignore: true },
  // Malaysia company number
  P6843: { ignore: true },
  // abART person ID
  P6844: { ignore: true },
  // abART document ID
  P6845: { ignore: true },
  // abART exhibition ID
  P6846: { ignore: true },
  // abART group ID
  P6847: { ignore: true },
  // abART institution ID
  P6848: { ignore: true },
  // (discontinued) DR topic ID
  P6849: { ignore: true },
  // ABA League ID
  P6850: { ignore: true },
  // Biographical Dictionary of Iowa ID
  P6851: { ignore: true },
  // CCDC Number
  P6852: { ignore: true },
  // Coco Game List ID
  P6853: { ignore: true },
  // Dimensions grant ID
  P6854: { ignore: true },
  // JIS standard
  P6857: { ignore: true },
  // Réunionnais du monde ID
  P6858: { ignore: true },
  // Corporate Number (South Korea)
  P6859: { ignore: true },
  // dbSNP ID
  P6861: { ignore: true },
  // digilibLT author ID
  P6862: { ignore: true },
  // Digital Prosopography of the Roman Republic ID
  P6863: { ignore: true },
  // eBiodiversity ID
  P6864: { ignore: true },
  // eurobasket.com coach ID
  P6865: { ignore: true },
  // euroleague.net coach ID
  P6866: { ignore: true },
  // Gamepedia wiki ID
  P6867: { ignore: true },
  // Hoopla artist ID
  P6868: { ignore: true },
  // Hoopla publisher ID
  P6869: { ignore: true },
  // Latvian National Encyclopedia Online ID
  P6870: { ignore: true },
  // ECI Lok Sabha constituency code
  P6871: { ignore: true },
  // IntraText author ID
  P6873: { ignore: true },
  // Musixmatch artist ID
  P6874: { ignore: true },
  // MAHG ID
  P6877: { ignore: true },
  // Amburger database ID
  P6878: { ignore: true },
  // ATP tennis tournament edition ID
  P6880: { ignore: true },
  // Rugby League Project ID (general)
  P6881: { ignore: true },
  // RIAA artist ID
  P6882: { ignore: true },
  // MELPA package ID
  P6888: { ignore: true },
  // Nchdb asset ID
  P6890: { ignore: true },
  // National Film Board of Canada director identifier
  P6891: { ignore: true },
  // Fundamental.org Baptist Church ID
  P6892: { ignore: true },
  // Offizielle Deutsche Charts artist ID (former scheme)
  P6893: { ignore: true },
  // Beatport artist ID
  P6894: { ignore: true },
  // Bangladesh administrative division code (2017-)
  P6895: { ignore: true },
  // Djshop artist ID
  P6896: { ignore: true },
  // NeoGeoSoft ID
  P6898: { ignore: true },
  // New York City Neighborhood Tabulation area ID
  P6899: { ignore: true },
  // NicoNicoPedia ID
  P6900: { ignore: true },
  // NooSFere edition ID
  P6901: { ignore: true },
  // ArtBrokerage artist ID
  P6903: { ignore: true },
  // ATRF ID
  P6904: { ignore: true },
  // (discontinued) Bebo profile ID
  P6905: { ignore: true },
  // National Library of Aruba ID
  P6906: { ignore: true },
  // BVLarramendi ID
  P6907: { ignore: true },
  // Cameo ID
  P6908: { ignore: true },
  // Charts in France artist ID
  P6909: { ignore: true },
  // CIN ID
  P6910: { ignore: true },
  // Dutch Charts artist ID
  P6911: { ignore: true },
  // Equipboard artist ID
  P6912: { ignore: true },
  // Facebook Gaming game ID
  P6913: { name: "Facebook", icon: "socials/facebook.svg" },
  // Gaana.com artist ID
  P6914: { ignore: true },
  // Gambay ID
  P6915: { ignore: true },
  // Heritage Gazetteer of Cyprus
  P6916: { ignore: true },
  // Historical Archives of the European Union ID
  P6917: { ignore: true },
  // hitparade.ch artist ID
  P6918: { ignore: true },
  // Indian gallantry awardee ID
  P6919: { ignore: true },
  // Juno Download artist ID
  P6920: { ignore: true },
  // MangaSeek person ID
  P6921: { ignore: true },
  // Metro topic ID
  P6922: { ignore: true },
  // Moov artist ID
  P6923: { ignore: true },
  // (discontinued) Murfie artist ID
  P6924: { ignore: true },
  // Musicalics composer ID
  P6925: { ignore: true },
  // Nederlandse Top 40 artist ID
  P6926: { ignore: true },
  // NME artist ID
  P6927: { ignore: true },
  // PCE Daisakusen ID
  P6928: { ignore: true },
  // CUT code
  P6929: { ignore: true },
  // Pro Football Hall of Fame ID
  P6930: { ignore: true },
  // Repology project name
  P6931: { ignore: true },
  // RogerEbert.com film ID
  P6932: { ignore: true },
  // SA Flora ID
  P6933: { ignore: true },
  // Syriac Biographical Dictionary ID
  P6934: { ignore: true },
  // The DJ List artist ID
  P6935: { ignore: true },
  // Who's Who of American Comic Books ID
  P6936: { ignore: true },
  // SNBP ID
  P6937: { ignore: true },
  // FPBR person ID
  P6940: { ignore: true },
  // PHI Latin Texts author ID
  P6941: { ignore: true },
  // VG-lista artist ID
  P6943: { ignore: true },
  // Saxony-Anhalt protected area ID
  P6560: { ignore: true },
  // AiF dossier ID
  P6561: { ignore: true },
  // Google Play Movies & TV ID
  P6562: { name: "Google Play", icon: "socials/google-play.svg" },
  // Brilliant Wiki ID
  P6564: { ignore: true },
  // Musenor artwork ID
  P6565: { ignore: true },
  // Indonesian Cultural Heritage Registration System ID
  P6566: { ignore: true },
  // Florida Historical Marker List ID
  P6567: { ignore: true },
  // ProQuest document ID
  P6572: { ignore: true },
  // Klexikon article ID
  P6573: { ignore: true },
  // Libraries & Information Centers in the Czech Republic ID
  P6574: { ignore: true },
  // Académie de Rouen member ID
  P6575: { ignore: true },
  // Art Fund artwork ID
  P6576: { ignore: true },
  // Cour des comptes report ID
  P6577: { ignore: true },
  // MutualArt artist ID
  P6578: { ignore: true },
  // National Book Foundation author ID
  P6579: { ignore: true },
  // National Book Foundation book ID
  P6580: { ignore: true },
  // Deportation Database transport ID
  P6581: { ignore: true },
  // Dutch Instrument Makers ID
  P6582: { ignore: true },
  // Lucerna person ID
  P6583: { ignore: true },
  // Scripts.com script ID
  P6584: { ignore: true },
  // Directorio Legislativo ID
  P6585: { ignore: true },
  // Guggenheim fellows ID
  P6594: { ignore: true },
  // Paintings by Salvador Dalí ID
  P6595: { ignore: true },
  // a-tremasov.ru biography ID
  P6596: { ignore: true },
  // Digital Dictionary of Surnames in Germany ID
  P6597: { ignore: true },
  // flgr-results.ru athlete ID
  P6598: { ignore: true },
  // HCA Red List of Endangered Crafts ID
  P6599: { ignore: true },
  // Resident Advisor artist ID
  P6600: { ignore: true },
  // Resident Advisor label ID
  P6601: { ignore: true },
  // Rhineland-Palatinate protected area ID
  P6602: { ignore: true },
  // film-documentaire.fr author ID
  P6603: { ignore: true },
  // Plant Illustrations artist ID
  P6605: { ignore: true },
  // Ashmolean museum ID
  P6610: { ignore: true },
  // Semantic Scholar topic ID
  P6611: { ignore: true },
  // FFS athlete ID
  P6612: { ignore: true },
  // CSKA person ID
  P6613: { ignore: true },
  // Libreflix ID
  P6614: { ignore: true },
  // Kicker.de player ID (former scheme)
  P6615: { ignore: true },
  // Library of Parliament of Canada person ID
  P6616: { ignore: true },
  // RoMEO publisher ID
  P6617: { ignore: true },
  // Federal-State Cooperative System ID
  P6618: { ignore: true },
  // XING company ID
  P6619: { ignore: true },
  // L'Express person ID
  P6620: { ignore: true },
  // Le Figaro tag ID
  P6621: { ignore: true },
  // Le Parisien tag ID
  P6622: { ignore: true },
  // Gamepedia article ID
  P6623: { ignore: true },
  // FSkate.ru skater ID
  P6624: { ignore: true },
  // Salvador Dali Museum ID
  P6625: { ignore: true },
  // Index to American Botanical Literature ID
  P6626: { ignore: true },
  // FaroeSoccer player ID
  P6627: { ignore: true },
  // FaroeSoccer coach ID
  P6628: { ignore: true },
  // Artcurial lot ID
  P6629: { ignore: true },
  // SNISB ID
  P6630: { ignore: true },
  // Tainacan MHN ID
  P6631: { ignore: true },
  // 100 bombardirov person ID
  P6632: { ignore: true },
  // Cini Foundation ID
  P6633: { ignore: true },
  // LinkedIn personal profile ID
  P6634: { name: "LinkedIn", icon: "socials/linkedin.svg" },
  // ACA author ID
  P6635: { ignore: true },
  // CDEC ID
  P6636: { ignore: true },
  // AWARE ID
  P6637: { ignore: true },
  // JRC Names id
  P6640: { ignore: true },
  // Zomato ID
  P6641: { ignore: true },
  // TV Spielfilm series ID
  P6643: { ignore: true },
  // Fandango theater ID
  P6644: { ignore: true },
  // Stedelijk Museum Amsterdam ID
  P6645: { ignore: true },
  // JMdictDB ID
  P6646: { ignore: true },
  // Zagat ID
  P6647: { ignore: true },
  // Democracy Club election ID
  P6649: { ignore: true },
  // Martindale-Hubbell profile
  P6650: { ignore: true },
  // Sumo Reference ID
  P6652: { ignore: true },
  // ETS Designated Institution code
  P6653: { ignore: true },
  // Periscope ID
  P6654: { ignore: true },
  // Baden-Württemberg protected area ID
  P6659: { ignore: true },
  // Rxivist author ID
  P6660: { ignore: true },
  // Rxivist preprint ID
  P6661: { ignore: true },
  // Springboks Rugby Player ID
  P6662: { ignore: true },
  // Utpictura18 artwork ID
  P6663: { ignore: true },
  // Le Vif tag ID
  P6664: { ignore: true },
  // Pro-Linux.de DBApp ID
  P6665: { ignore: true },
  // LibreGameWiki ID
  P6666: { ignore: true },
  // MARGS ID
  P6667: { ignore: true },
  // theatre-contemporain.net ID
  P6668: { ignore: true },
  // FIS telemark skier ID
  P6669: { ignore: true },
  // French public service directory ID
  P6671: { ignore: true },
  // Placar UOL Eleições ID
  P6672: { ignore: true },
  // Memórias da Ditadura ID
  P6673: { ignore: true },
  // Desaparecidos Políticos ID
  P6674: { ignore: true },
  // OpenEdition text ID
  P6676: { ignore: true },
  // OpenEdition Books author ID
  P6677: { ignore: true },
  // WoRMS source ID
  P6678: { ignore: true },
  // Encyklopedia Teatru Polskiego play ID
  P6679: { ignore: true },
  // MeSH term ID
  P6680: { ignore: true },
  // EUNIS ID for habitats
  P6681: { ignore: true },
  // Motorsports Hall of Fame of America ID
  P6682: { ignore: true },
  // Alexander Turnbull Library ID
  P6683: { ignore: true },
  // IANA timezone ID
  P6687: { ignore: true },
  // National Wrestling Hall of Fame wrestler ID
  P6688: { ignore: true },
  // MassBank accession ID
  P6689: { ignore: true },
  // CNV-SP ID
  P6690: { ignore: true },
  // GruCultura ID
  P6691: { ignore: true },
  // Bionomia ID
  P6944: { ignore: true },
  // Steam profile ID
  P6945: { name: "Steam", icon: "socials/steam.svg" },
  // Find & Connect ID
  P6946: { ignore: true },
  // Goodreads series ID
  P6947: { name: "Goodreads", icon: "socials/goodreads.png" },
  // Scandipop topic ID
  P6950: { ignore: true },
  // 2014 Commonwealth Games athlete ID
  P6953: { ignore: true },
  // El portal de Música artist ID
  P6955: { ignore: true },
  // Balochistan EMIS code
  P6956: { ignore: true },
  // Khyber Pakhtunkhwa EMIS code
  P6957: { ignore: true },
  // Punjab EMIS code
  P6958: { ignore: true },
  // Sindh EMIS code
  P6959: { ignore: true },
  // IMVDb artist ID
  P6960: { ignore: true },
  // BaFin Institute ID
  P6963: { ignore: true },
  // Musiikkituottajat artist ID (certification)
  P6964: { ignore: true },
  // IFPI Austria artist ID
  P6965: { ignore: true },
  // IFPI Danmark artist ID
  P6966: { ignore: true },
  // SNEP artist ID
  P6967: { ignore: true },
  // hitparade.ch artist (certification) ID
  P6968: { ignore: true },
  // BVMI artist ID
  P6969: { ignore: true },
  // Music Canada artist ID
  P6970: { ignore: true },
  // IFPI Norge artist ID
  P6971: { ignore: true },
  // Napster artist ID
  P6972: { ignore: true },
  // Personnel de l'administration préfectorale ID
  P6973: { ignore: true },
  // RBF professional boxer ID
  P6975: { ignore: true },
  // Retrosheet person ID
  P6976: { ignore: true },
  // SLNSW unpublished item ID
  P6979: { ignore: true },
  // LB.ua dossier ID
  P6980: { ignore: true },
  // ACNP journal ID
  P6981: { ignore: true },
  // Australian Faunal Directory publication ID
  P6982: { ignore: true },
  // Sverigetopplistan artist ID
  P6983: { ignore: true },
  // Rupa Publications author ID
  P6984: { ignore: true },
  // OYO Hotel ID
  P6985: { ignore: true },
  // Hungarian National Namespace place ID
  P6987: { ignore: true },
  // Hungarian National Namespace person ID
  P6988: { ignore: true },
  // Hungarian National Namespace organisation ID
  P6989: { ignore: true },
  // IMFDB ID
  P6992: { ignore: true },
  // Pro Kabaddi League player ID
  P6993: { ignore: true },
  // RBF amateur boxer ID
  P6994: { ignore: true },
  // National Transportation Safety Board report ID
  P6995: { ignore: true },
  // Epitafier.se ID
  P6996: { ignore: true },
  // magazine in BitArkivo.org
  P6997: { ignore: true },
  // iTunes movie collection ID
  P6998: { name: "iTunes", icon: "socials/itunes.svg" },
  // Musisque Deoque author ID
  P6999: { ignore: true },
  // DigitalNZ ID
  P7000: { ignore: true },
  // PharmGKB ID
  P7001: { ignore: true },
  // Handball123 player ID
  P7002: { ignore: true },
  // ACMI web ID
  P7003: { ignore: true },
  // AtlasFor ID
  P7004: { ignore: true },
  // Adventure Gamers video game ID
  P7005: { ignore: true },
  // BIC of the Canary Islands ID
  P7006: { ignore: true },
  // Wolfram Language unit code
  P7007: { ignore: true },
  // Russian organisation number
  P7011: { ignore: true },
  // World Encyclopedia of Puppetry Arts ID
  P7012: { ignore: true },
  // Anime Characters Database character ID
  P7013: { ignore: true },
  // Anime Characters Database anime ID
  P7017: { ignore: true },
  // ANZCTR ID
  P7019: { ignore: true },
  // Arachne collection ID
  P7020: { ignore: true },
  // Arachne object ID
  P7021: { ignore: true },
  // Australian Suppliers Directory ID
  P7022: { ignore: true },
  // Biyografya ID
  P7023: { ignore: true },
  // Flemish Public Libraries ID
  P7024: { ignore: true },
  // HCIS ID
  P7025: { ignore: true },
  // Lebanese National Library ID
  P7026: { ignore: true },
  // MPG ID
  P7027: { ignore: true },
  // National Library of Luxembourg ID
  P7028: { ignore: true },
  // National Library of Russia ID
  P7029: { ignore: true },
  // National Pollutant Inventory ID
  P7030: { ignore: true },
  // Penguin India author ID
  P7031: { ignore: true },
  // Repertorium van ambtsdragers en ambtenaren ID
  P7032: { ignore: true },
  // Australian Educational Vocabulary ID
  P7033: { ignore: true },
  // Syriaca work ID
  P7034: { ignore: true },
  // TuttoCalciatori.net coach ID
  P7035: { ignore: true },
  // TuttoCalciatori.net player ID
  P7036: { ignore: true },
  // COURAGE ID
  P7037: { ignore: true },
  // Documenta Catholica Omnia author ID
  P7038: { ignore: true },
  // National Library of Iceland ID
  P7039: { ignore: true },
  // NosDéputés.fr identifiant
  P7040: { ignore: true },
  // Perseus author ID
  P7041: { ignore: true },
  // The Latin Library author ID
  P7042: { ignore: true },
  // TheTVDB episode ID
  P7043: { ignore: true },
  // Colonial Frontier Massacres ID
  P7044: { ignore: true },
  // HOV-ID
  P7046: { ignore: true },
  // PBS Drug Code
  P7048: { ignore: true },
  // AICS Chemical ID (former scheme)
  P7049: { ignore: true },
  // Album of the Year artist ID
  P7050: { ignore: true },
  // Atlas of Living Australia ID
  P7051: { ignore: true },
  // Jaxsta profile ID
  P7052: { ignore: true },
  // Indian Super League player ID
  P7053: { ignore: true },
  // misas.org Catholic church ID
  P7054: { ignore: true },
  // Jaxsta release ID
  P7055: { ignore: true },
  // Jaxsta recording ID
  P7056: { ignore: true },
  // FEC Campaign Committee ID
  P7057: { ignore: true },
  // BNRM ID
  P7058: { ignore: true },
  // Premier Badminton League player ID
  P7059: { ignore: true },
  // NosSénateurs.fr identifier
  P7060: { ignore: true },
  // U. S. Supreme Court docket number
  P7063: { ignore: true },
  // PBS Manufacturer ID
  P7064: { ignore: true },
  // Kerala state school code
  P7065: { ignore: true },
  // Taxonomicon ID
  P7066: { ignore: true },
  // Album of the Year album ID
  P7067: { ignore: true },
  // Liber Liber author ID
  P7208: { ignore: true },
  // GreatSong artist ID
  P7210: { ignore: true },
  // Line Blog user ID
  P7211: { ignore: true },
  // LyricsTranslate ID
  P7212: { ignore: true },
  // Allcinema person ID
  P7214: { ignore: true },
  // Eiga.com person ID
  P7215: { ignore: true },
  // MTV Polska artist ID
  P7216: { ignore: true },
  // MTV UK artist ID
  P7217: { ignore: true },
  // Vox FM artist ID (discontinued)
  P7218: { ignore: true },
  // Eiga.com movie ID
  P7222: { ignore: true },
  // Transfermarkt team ID
  P7223: { ignore: true },
  // Insects (Insecta) of the World ID
  P7224: { ignore: true },
  // BEACON ID
  P7225: { ignore: true },
  // RPGGeek ID
  P7226: { ignore: true },
  // DIBAVOD ID
  P7227: { ignore: true },
  // Fundación Goya en Aragón ID
  P7229: { ignore: true },
  // AccuRadio artist ID
  P7230: { ignore: true },
  // eSTUDÁNKY ID
  P7231: { ignore: true },
  // LongSwimsDB ID
  P7232: { ignore: true },
  // Washington Trails Association Hiking Guide ID
  P7233: { ignore: true },
  // Scribd item ID
  P7234: { ignore: true },
  // Dove.org work ID
  P7236: { ignore: true },
  // China Engineering Expert Tank ID
  P7237: { ignore: true },
  // Open Science Framework ID
  P7238: { ignore: true },
  // SCTrails trail ID
  P7241: { ignore: true },
  // Laws & Regulations Database of the Republic of China ID
  P7242: { ignore: true },
  // Identification code for Japanese universities and colleges
  P7251: { ignore: true },
  // Pilze Deutschland ID
  P7254: { ignore: true },
  // Moose Deutschland ID
  P7255: { ignore: true },
  // Guia dos Quadrinhos artist ID
  P7257: { ignore: true },
  // Toons Mag ID
  P7258: { ignore: true },
  // Newspapers.com paper ID
  P7259: { ignore: true },
  // Transporter Classification Database ID
  P7260: { ignore: true },
  // ESPN.com college football player ID
  P7262: { name: "ESPN", icon: "socials/espn.svg" },
  // Prime Pages ID
  P7263: { ignore: true },
  // FCC Grantee Code
  P7264: { ignore: true },
  // FNL player ID
  P7265: { ignore: true },
  // Guia dos Quadrinhos comic ID (Brazilian)
  P7266: { ignore: true },
  // Guia dos Quadrinhos publishing house ID (Brazilian)
  P7267: { ignore: true },
  // Guia dos Quadrinhos character ID
  P7268: { ignore: true },
  // Guia dos Quadrinhos comic ID
  P7269: { ignore: true },
  // Guia dos Quadrinhos publishing house ID
  P7270: { ignore: true },
  // Hiking Project area ID
  P7271: { ignore: true },
  // Hiking Project site ID
  P7272: { ignore: true },
  // National Equipment Registration System Supplier Number
  P7273: { ignore: true },
  // Naver VIBE album ID
  P7274: { ignore: true },
  // Naver VIBE artist ID
  P7275: { ignore: true },
  // New Encyclopedic Dictionary of Czech ID
  P7276: { ignore: true },
  // Pandora artist ID
  P7277: { name: "Pandora", icon: "socials/pandora.png" },
  // Peakbagger climber ID
  P7278: { ignore: true },
  // Peakbagger key col ID
  P7279: { ignore: true },
  // PlaymakerStats.com team ID
  P7280: { ignore: true },
  // Radio Equipment List Certification Number
  P7281: { ignore: true },
  // Slovo i Dilo person ID
  P7282: { ignore: true },
  // Spectrum Management System Company Number
  P7283: { ignore: true },
  // The Independent topic ID
  P7284: { ignore: true },
  // Writers Guild of America project ID
  P7285: { ignore: true },
  // Writers Guild of America writer ID
  P7286: { ignore: true },
  // WorldFootball.net team ID
  P7287: { ignore: true },
  // Bursa Malaysia stock code
  P7288: { ignore: true },
  // CPUID
  P7289: { ignore: true },
  // L-number
  P7291: { ignore: true },
  // Arnet Miner publication ID
  P7292: { ignore: true },
  // PLWABN ID
  P7293: { ignore: true },
  // Lower Austrian Museum ID
  P7296: { ignore: true },
  // Auckland Museum ID
  P7298: { ignore: true },
  // MUBI film ID
  P7299: { ignore: true },
  // MUBI person ID
  P7300: { ignore: true },
  // Al-Jazeera topic ID
  P7301: { ignore: true },
  // Digital Giza ID
  P7302: { ignore: true },
  // Grammy Awards artist ID
  P7303: { ignore: true },
  // Highland Historic Environment Record ID
  P7304: { ignore: true },
  // Online PWN Encyclopedia ID
  P7305: { ignore: true },
  // Downdetector ID
  P7306: { ignore: true },
  // TOP500 System ID
  P7307: { ignore: true },
  // National Wildlife Refuge Trails ID
  P7308: { ignore: true },
  // Maine Trail Finder ID
  P7310: { ignore: true },
  // Aozora Bunko author ID
  P7311: { ignore: true },
  // Aozora Bunko work ID
  P7312: { ignore: true },
  // Rate Your Music label ID
  P7313: { ignore: true },
  // TDV İslam Ansiklopedisi ID
  P7314: { ignore: true },
  // iHeart artist ID
  P7317: { name: "iHeartRadio", icon: "socials/iheartradio.svg" },
  // Behind The Voice Actors short ID
  P7318: { ignore: true },
  // ExplorePaTrails ID
  P7319: { ignore: true },
  // Labelcode
  P7320: { ignore: true },
  // Trail Finder ID
  P7321: { ignore: true },
  // Marine Regions Geographic IDentifier (MRGID)
  P7322: { ignore: true },
  // Archnet site ID
  P7323: { ignore: true },
  // iHeartRadio podcast ID
  P7324: { name: "iHeartRadio", icon: "socials/iheartradio.svg" },
  // DANE code
  P7325: { ignore: true },
  // MobyGames genre ID
  P7326: { ignore: true },
  // ID (MMS)
  P7329: { ignore: true },
  // Letteraturaitaliana.net author ID
  P7331: { ignore: true },
  // NMM artist ID
  P7332: { ignore: true },
  // Pathway Ontology ID
  P7333: { ignore: true },
  // Vudu video ID
  P7334: { ignore: true },
  // Mixer game ID (former scheme)
  P7335: { ignore: true },
  // GCF Reference
  P7336: { ignore: true },
  // Wi-Fi Certification ID
  P7337: { ignore: true },
  // Rivals.com ID
  P7339: { ignore: true },
  // Gotlands museum
  P7068: { ignore: true },
  // Musixmatch writer ID
  P7070: { ignore: true },
  // Qobuz artist ID
  P7071: { ignore: true },
  // wiki on WikiApiary
  P7072: { ignore: true },
  // extension on WikiApiary
  P7073: { ignore: true },
  // skin on WikiApiary
  P7074: { ignore: true },
  // Zaragoza public art ID
  P7076: { ignore: true },
  // Paris Foreign Missions Society ID
  P7077: { ignore: true },
  // TikTok username
  P7085: { name: "TikTok", icon: "socials/tiktok.svg" },
  // AFCD PFKID
  P7089: { ignore: true },
  // Australian Marine Algal Name Index ID
  P7090: { ignore: true },
  // Common Sense Media ID
  P7091: { ignore: true },
  // Russian Fencing Federation fencer ID
  P7092: { ignore: true },
  // ABBBS Taxon ID
  P7093: { ignore: true },
  // WaterNSW Rivers and Streams Site No.
  P7094: { ignore: true },
  // Lens ID
  P7100: { ignore: true },
  // Grand Canyon Trust ID
  P7102: { ignore: true },
  // LezWatch.TV actor ID
  P7105: { ignore: true },
  // LezWatch.TV character ID
  P7106: { ignore: true },
  // LezWatch.TV show ID
  P7107: { ignore: true },
  // Acharts.co artist ID
  P7109: { ignore: true },
  // Textile Connect publication ID
  P7110: { ignore: true },
  // 08euro.Ru person ID
  P7111: { ignore: true },
  // CUP2002.RU person ID
  P7112: { ignore: true },
  // Euro04.Ru person ID
  P7113: { ignore: true },
  // Gazeta.Ru Euro 2012 person ID
  P7114: { ignore: true },
  // WorldCup10.Ru person ID
  P7115: { ignore: true },
  // Hiking Project trail ID
  P7116: { ignore: true },
  // Media Arts Database console games ID (former scheme)
  P7117: { ignore: true },
  // AMPAS collections film ID
  P7118: { ignore: true },
  // AMPAS collections person ID
  P7119: { ignore: true },
  // Douyin ID
  P7120: { ignore: true },
  // School code of the Ministry of Education, Taiwan
  P7121: { ignore: true },
  // AllTrails trail ID
  P7127: { ignore: true },
  // Archives Directory for the History of Collecting in America ID
  P7128: { ignore: true },
  // PEPC park ID
  P7129: { ignore: true },
  // Vidwan ID
  P7130: { ignore: true },
  // Bureau des longitudes ID
  P7131: { ignore: true },
  // ComingSoon.it film ID
  P7132: { ignore: true },
  // Cleartrip hotel ID
  P7133: { ignore: true },
  // Mojarto artist ID
  P7134: { ignore: true },
  // Rijksmonument complex ID
  P7135: { ignore: true },
  // Goibibo Hotel ID
  P7136: { ignore: true },
  // Acharts.co chart ID
  P7138: { ignore: true },
  // ONF forest national ID
  P7139: { ignore: true },
  // München Wiki article ID
  P7140: { ignore: true },
  // Poincaré Papers person ID
  P7142: { ignore: true },
  // Acharts.co album ID
  P7143: { ignore: true },
  // NOTAM (FAA)
  P7144: { ignore: true },
  // CHESNO politician ID
  P7145: { ignore: true },
  // Rollerstory.net skater ID
  P7146: { ignore: true },
  // Nauka Ukrainy scientist ID
  P7148: { ignore: true },
  // OhRanger.com ID
  P7149: { ignore: true },
  // Wynk artist ID
  P7151: { ignore: true },
  // Empik author ID
  P7154: { ignore: true },
  // WP Muzyka artist ID
  P7155: { ignore: true },
  // Interia Muzyka artist ID
  P7156: { ignore: true },
  // The Top Tens ID
  P7157: { ignore: true },
  // Plus Music artist ID
  P7159: { ignore: true },
  // Kinsky–Halm Catalogue
  P7161: { ignore: true },
  // Raptekster.dk ID (discontinued)
  P7164: { ignore: true },
  // Acharts.co song ID
  P7166: { ignore: true },
  // FGrHist ID
  P7168: { ignore: true },
  // register of real estate NKP
  P7170: { ignore: true },
  // Hacker News username
  P7171: { ignore: true },
  // shmup.com ID
  P7172: { ignore: true },
  // TA2 ID
  P7173: { ignore: true },
  // Gaana.com album ID
  P7175: { ignore: true },
  // XING profile ID
  P7176: { ignore: true },
  // Cinestaan film ID
  P7177: { ignore: true },
  // Cinestaan person ID
  P7178: { ignore: true },
  // Service d'Information sur les Etudes et les Professions Job ID
  P7179: { ignore: true },
  // Planespotters.net aircraft ID
  P7180: { ignore: true },
  // PLIA ID
  P7181: { ignore: true },
  // IBP 4-letter bird species alpha code
  P7182: { ignore: true },
  // EPW author ID
  P7183: { ignore: true },
  // Awards & Winners artist ID
  P7184: { ignore: true },
  // eska.pl topic ID
  P7185: { ignore: true },
  // Image-Line artist ID
  P7186: { ignore: true },
  // Jango artist ID
  P7187: { ignore: true },
  // LiveXLive artist ID
  P7188: { ignore: true },
  // Mora Artist ID
  P7189: { ignore: true },
  // RMF FM artist ID
  P7190: { ignore: true },
  // Supraphonline artist ID
  P7191: { ignore: true },
  // TuneIn artist ID
  P7192: { ignore: true },
  // YesAsia author ID
  P7193: { ignore: true },
  // AZLyrics.com artist ID
  P7194: { ignore: true },
  // Bandsintown artist ID
  P7195: { ignore: true },
  // musica.com artist ID
  P7196: { ignore: true },
  // OpenWeatherMap city ID
  P7197: { ignore: true },
  // RauteMusik artist ID
  P7198: { ignore: true },
  // Scribd publication ID
  P7199: { ignore: true },
  // SongMeanings artist ID
  P7200: { ignore: true },
  // SoundHound artist ID
  P7201: { ignore: true },
  // Belgian Species List ID
  P7202: { ignore: true },
  // Dizionario biografico dei Friulani ID
  P7203: { ignore: true },
  // Mafab.hu film ID
  P7204: { ignore: true },
  // jog.fm artist ID
  P7205: { ignore: true },
  // Lyrics007 artist ID
  P7206: { ignore: true },
  // Moly.hu book ID
  P7207: { ignore: true },
  // sixpackfilmdata film ID
  P7340: { ignore: true },
  // sixpackfilmdata person ID
  P7341: { ignore: true },
  // Dirección General de Bibliotecas ID
  P7342: { ignore: true },
  // Elitefootball player ID
  P7343: { ignore: true },
  // The Wind Power farm ID
  P7344: { ignore: true },
  // IGNrando' ID
  P7345: { ignore: true },
  // Fossiilid.info ID
  P7346: { ignore: true },
  // Kivid.info ID
  P7348: { ignore: true },
  // Gazetteer for Scotland person ID
  P7349: { ignore: true },
  // Gazetteer for Scotland place ID
  P7350: { ignore: true },
  // FootballDatabase.eu team ID
  P7351: { ignore: true },
  // GENUKI ID
  P7352: { ignore: true },
  // NTS Radio artist ID
  P7353: { ignore: true },
  // Ticketmaster artist ID
  P7354: { ignore: true },
  // See Tickets artist ID
  P7355: { ignore: true },
  // DC Books author ID
  P7356: { ignore: true },
  // Diccionari de la Literatura Catalana ID
  P7357: { ignore: true },
  // FootballFacts.ru team ID
  P7358: { ignore: true },
  // LaPreferente.com player ID
  P7359: { ignore: true },
  // UEFA coach ID
  P7360: { ignore: true },
  // UEFA team ID
  P7361: { ignore: true },
  // Ukrainian Premier League player ID
  P7362: { ignore: true },
  // ISSN-L
  P7363: { ignore: true },
  // FIDAL team ID
  P7364: { ignore: true },
  // China Martyrs ID
  P7365: { ignore: true },
  // FAIMER school ID
  P7366: { ignore: true },
  // JournalBase ID
  P7368: { ignore: true },
  // National Library of Chile ID
  P7369: { ignore: true },
  // PCEngine Catalog Project ID
  P7370: { ignore: true },
  // Beatport label ID
  P7371: { ignore: true },
  // memoriademadrid publication ID
  P7372: { ignore: true },
  // PubPeer article ID
  P7381: { ignore: true },
  // Turkish Football Federation match ID
  P7382: { ignore: true },
  // geograph.org.uk image ID
  P7384: { ignore: true },
  // Q-Codes ID
  P7387: { ignore: true },
  // Great Encyclopedia of Navarre ID
  P7388: { ignore: true },
  // Three Decks people ID
  P7389: { ignore: true },
  // Knesset law ID
  P7390: { ignore: true },
  // DynamoMania.com player ID
  P7395: { ignore: true },
  // Beachsafe Beach Key
  P7396: { ignore: true },
  // 247Sports ID
  P7397: { ignore: true },
  // Internet Off-Broadway Database production ID
  P7398: { ignore: true },
  // Futbolme player ID
  P7399: { ignore: true },
  // LibraryThing author ID
  P7400: { ignore: true },
  // SMHI drainage basin ID
  P7401: { ignore: true },
  // Turkish Football Federation stadium ID
  P7402: { ignore: true },
  // Publons publisher ID
  P7403: { ignore: true },
  // ADL Hate Symbols Database ID
  P7404: { ignore: true },
  // Turkish Football Federation referee ID
  P7405: { ignore: true },
  // EconBiz publication ID
  P7408: { ignore: true },
  // ERIC publication ID
  P7409: { ignore: true },
  // Healthcare Common Procedure Coding System Identifier
  P7410: { ignore: true },
  // Pubs Galore ID
  P7411: { ignore: true },
  // ForaDeJogo.net team ID
  P7412: { ignore: true },
  // Ancient Tree Inventory ID
  P7413: { ignore: true },
  // State Catalogue of the Museum Fund of Russia museum ID
  P7414: { ignore: true },
  // Professional Football League of Ukraine player ID
  P7423: { ignore: true },
  // Rotterdam City Archives actor ID
  P7425: { ignore: true },
  // FreeBSD port
  P7427: { ignore: true },
  // Bluetooth Declaration ID
  P7428: { ignore: true },
  // Bundle ID
  P7429: { ignore: true },
  // Dictionary of Sculptors in Britain ID
  P7430: { ignore: true },
  // Wolfram Language quantity ID
  P7431: { ignore: true },
  // Steam bundle ID
  P7432: { name: "Steam", icon: "socials/steam.svg" },
  // FantLab author ID
  P7433: { ignore: true },
  // NAD place ID
  P7434: { ignore: true },
  // EU-Football.info referee ID
  P7435: { ignore: true },
  // WorldReferee.com referee ID
  P7436: { ignore: true },
  // FantLab award ID
  P7437: { ignore: true },
  // FantLab publisher ID
  P7438: { ignore: true },
  // FantLab work ID
  P7439: { ignore: true },
  // FIG gymnast biography number
  P7440: { ignore: true },
  // WorldFootball.net competition ID
  P7441: { ignore: true },
  // Rijksmuseum Research Library authority ID
  P7444: { ignore: true },
  // Basis Wien person ID
  P7445: { ignore: true },
  // Basis Wien institution ID
  P7446: { ignore: true },
  // Basis Wien event ID
  P7447: { ignore: true },
  // Basis Wien object ID
  P7448: { ignore: true },
  // NARCIS researcher ID
  P7449: { ignore: true },
  // Turkish Football Federation team ID
  P7450: { ignore: true },
  // Czech Fortuna liga player ID
  P7451: { ignore: true },
  // 90minut.pl team ID
  P7453: { ignore: true },
  // Soccerbase team ID
  P7454: { ignore: true },
  // Transfermarkt match ID
  P7455: { ignore: true },
  // AAAS keyword ID
  P7456: { ignore: true },
  // Kinematoscope film ID
  P7458: { ignore: true },
  // CanadaSoccer.com person ID
  P7459: { ignore: true },
  // FlashScore.com match ID
  P7460: { ignore: true },
  // Publons journals/conferences ID
  P7461: { ignore: true },
  // EU-Football.info manager ID
  P7463: { ignore: true },
  // Genetics Home Reference Conditions ID
  P7464: { ignore: true },
  // Soccerbase referee ID
  P7465: { ignore: true },
  // Edvard Munch's correspondance person ID
  P7466: { ignore: true },
  // Broadway Photographs person ID
  P7467: { ignore: true },
  // MOHW HospID
  P7468: { ignore: true },
  // iNaturalist place ID
  P7471: { ignore: true },
  // National Marine Biological Library  ID
  P7472: { ignore: true },
  // Neliti Journal ID
  P7473: { ignore: true },
  // Online Cenotaph ID
  P7474: { ignore: true },
  // dp.ru person ID
  P7475: { ignore: true },
  // iFixit teardown ID
  P7476: { ignore: true },
  // Internet Content Provider Registration Record ID
  P7477: { ignore: true },
  // Brazilian federal deputy ID
  P7480: { ignore: true },
  // CinemaRX person ID
  P7483: { ignore: true },
  // Kinematoscope film director ID
  P7484: { ignore: true },
  // Kinematoscope writer ID
  P7485: { ignore: true },
  // Kinematoscope literary work ID
  P7487: { ignore: true },
  // BDFutbol team ID
  P7488: { ignore: true },
  // Stathletics ID
  P7489: { ignore: true },
  // Teams.by team ID
  P7490: { ignore: true },
  // Austrian Parliament 1848–1918 ID
  P7491: { ignore: true },
  // EU-Football.info match ID
  P7492: { ignore: true },
  // PlaymakerStats.com match ID
  P7493: { ignore: true },
  // Soccerway match ID
  P7494: { ignore: true },
  // Fussballdaten.de team ID
  P7495: { ignore: true },
  // NZPCN ID
  P7496: { ignore: true },
  // Wolfram Language entity type
  P7497: { ignore: true },
  // Women Film Pioneers ID
  P7498: { ignore: true },
  // Van Wijngaarden quarry ID
  P7499: { ignore: true },
  // Golden ID
  P7502: { ignore: true },
  // Ovrtur biography ID
  P7503: { ignore: true },
  // Jeugdliteratuur ID
  P7504: { ignore: true },
  // ACL Anthology article ID
  P7505: { ignore: true },
  // Naver Encyclopedia ID
  P7506: { ignore: true },
  // Ben Yehuda author ID
  P7507: { ignore: true },
  // Estonian biographical database ID
  P7509: { ignore: true },
  // doujinshi.org author ID
  P7511: { ignore: true },
  // startrek.com Database ID
  P7512: { ignore: true },
  // Alfred P. Sloan Foundation grant ID
  P7513: { ignore: true },
  // Chinese Professional Baseball League player ID
  P7515: { ignore: true },
  // Software Preservation Society ID
  P7516: { ignore: true },
  // Sega Retro ID
  P7517: { ignore: true },
  // classicamiga ID
  P7518: { ignore: true },
  // Filmový přehled film ID
  P7519: { ignore: true },
  // Filmový přehled person ID
  P7520: { ignore: true },
  // Gaming-History company ID
  P7521: { ignore: true },
  // SK cinema authority ID
  P7522: { ignore: true },
  // SK cinema film ID
  P7523: { ignore: true },
  // CA PROP 65 ID
  P7524: { ignore: true },
  // ePSD identifier
  P7525: { ignore: true },
  // Czech cadastral area ID
  P7526: { ignore: true },
  // dp.ru company ID
  P7529: { ignore: true },
  // Fortuna liga player ID
  P7530: { ignore: true },
  // MEA Indian Mission ID
  P7531: { ignore: true },
  // AaRC person ID
  P7533: { ignore: true },
  // MIC market code
  P7534: { ignore: true },
  // Birds of India ID
  P7536: { ignore: true },
  // India Biodiversity Portal species ID
  P7537: { ignore: true },
  // Moths of India ID
  P7538: { ignore: true },
  // NBAIR pest ID
  P7539: { ignore: true },
  // Odonata of India ID
  P7540: { ignore: true },
  // Planète Aventure ID
  P7541: { ignore: true },
  // Reptiles of India ID
  P7542: { ignore: true },
  // ZSI author ID
  P7543: { ignore: true },
  // Indian Medicinal Plants Database ID
  P7544: { ignore: true },
  // askArt person ID
  P7545: { ignore: true },
  // Flowers of India ID
  P7546: { ignore: true },
  // National Health Portal hospital ID
  P7547: { ignore: true },
  // UK Lakes Portal ID
  P7548: { ignore: true },
  // Biodiversity of West Bengal species ID
  P7549: { ignore: true },
  // Paralympic.org athlete ID
  P7550: { ignore: true },
  // Plusliga player ID
  P7551: { ignore: true },
  // Finnish Biodiversity Information Facility's Species List ID
  P7552: { ignore: true },
  // Sinemalar person ID
  P7553: { ignore: true },
  // Encyclopedia of Mathematics wiki ID
  P7554: { ignore: true },
  // UVL game ID
  P7555: { ignore: true },
  // UVL platform ID
  P7556: { ignore: true },
  // Inguma database ID
  P7558: { ignore: true },
  // Ahotsak lexeme
  P7559: { ignore: true },
  // UVL company ID
  P7560: { ignore: true },
  // UVL group ID
  P7562: { ignore: true },
  // Home of the Underdogs game ID
  P7563: { ignore: true },
  // OGDB game title ID
  P7564: { ignore: true },
  // CISCE school code
  P7565: { ignore: true },
  // JNAF artist ID
  P7566: { ignore: true },
  // OGDB compilation ID
  P7567: { ignore: true },
  // CBSE affiliation number
  P7568: { ignore: true },
  // OGDB company ID
  P7570: { ignore: true },
  // Memorial Book Bundesarchiv ID
  P7571: { ignore: true },
  // Digital Corpus of Sanskrit ID
  P7572: { ignore: true },
  // Swedish Royal Theater Archive
  P7574: { ignore: true },
  // Sri Granth Punjabi word ID
  P7575: { ignore: true },
  // Broadcast Radio Bearer URI
  P7576: { ignore: true },
  // Czech city district ID
  P7577: { ignore: true },
  // DUC ID
  P7578: { ignore: true },
  // Prague administrative district ID
  P7579: { ignore: true },
  // AboutTheArtists artist ID
  P7580: { ignore: true },
  // fyyd podcast ID
  P7583: { ignore: true },
  // NinDB game ID
  P7585: { ignore: true },
  // Cinepub person ID
  P7586: { ignore: true },
  // eFloraSA ID
  P7587: { ignore: true },
  // eBay username
  P7590: { ignore: true },
  // VideoGameGeek game ID
  P7591: { ignore: true },
  // VideoGameGeek platform ID
  P7592: { ignore: true },
  // CinePT film ID
  P7593: { ignore: true },
  // CinePT person ID
  P7594: { ignore: true },
  // Disney+ movie ID
  P7595: { ignore: true },
  // Disney+ series ID
  P7596: { ignore: true },
  // Lutris game ID
  P7597: { ignore: true },
  // Ratingraph actor ID
  P7602: { ignore: true },
  // Czech municipality ID
  P7606: { ignore: true },
  // WikiTree category or space
  P7607: { ignore: true },
  // Englandstats.com Soccer ID
  P7608: { ignore: true },
  // SHARE Catalogue work ID
  P7609: { ignore: true },
  // Taiwan Cinema company ID
  P7610: { ignore: true },
  // Taiwan Cinema film ID
  P7611: { ignore: true },
  // Taiwan Cinema person ID
  P7612: { ignore: true },
  // Biblioteche dei filosofi ID
  P7613: { ignore: true },
  // Dictionary of Wisconsin History ID
  P7614: { ignore: true },
  // Finnish generals and admirals in the Imperial Russian Army 1809–1917 ID
  P7615: { ignore: true },
  // Lutris genre ID
  P7616: { ignore: true },
  // Lutris platform ID
  P7617: { ignore: true },
  // Virginia Landmarks Register ID
  P7618: { ignore: true },
  // The Cardinals of the Holy Roman Church ID
  P7619: { ignore: true },
  // Treccani's Enciclopedia dei Papi ID
  P7620: { ignore: true },
  // Church Heritage Cymru ID
  P7621: { ignore: true },
  // TheGamesDB game ID
  P7622: { ignore: true },
  // TheGamesDB platform ID
  P7623: { ignore: true },
  // YVNG ID
  P7624: { ignore: true },
  // WPI ID
  P7625: { ignore: true },
  // NVE powerplant ID
  P7626: { ignore: true },
  // Artsdata.ca ID
  P7627: { ignore: true },
  // Dictionary of Scottish Architects building ID
  P7630: { ignore: true },
  // MPPDA Digital Archive film ID
  P7631: { ignore: true },
  // MPPDA Digital Archive organisation ID
  P7632: { ignore: true },
  // MPPDA Digital Archive person ID
  P7633: { ignore: true },
  // TheGamesDB developer ID
  P7634: { ignore: true },
  // administrative district of Czech municipality with authorized municipal office ID
  P7635: { ignore: true },
  // administrative district of Czech municipality with expanded powers ID
  P7636: { ignore: true },
  // IDU theatre ID
  P7637: { ignore: true },
  // OverDrive creator ID
  P7638: { ignore: true },
  // OverDrive publisher ID
  P7639: { ignore: true },
  // MTV Germany artist ID
  P7641: { ignore: true },
  // TheGamesDB publisher ID
  P7642: { ignore: true },
  // Encyclopedia of Cleveland History ID
  P7644: { ignore: true },
  // RomanianActors person ID
  P7645: { ignore: true },
  // IISG ID
  P7646: { ignore: true },
  // Cochrane concept ID
  P7647: { ignore: true },
  // OverDrive series ID
  P7648: { ignore: true },
  // Vectrex Game Database ID
  P7649: { ignore: true },
  // WeChat ID
  P7650: { ignore: true },
  // Hoopla series ID
  P7651: { ignore: true },
  // Germany06.Ru person ID
  P7652: { ignore: true },
  // MovieGe person ID
  P7653: { ignore: true },
  // Ratingraph actress ID
  P7654: { ignore: true },
  // Speiderhistorisk leksikon ID
  P7655: { ignore: true },
  // Arolsen ID
  P7656: { ignore: true },
  // Doctrine court decision ID
  P7657: { ignore: true },
  // Juricaf decision ID
  P7658: { ignore: true },
  // POWiS ID
  P7659: { ignore: true },
  // super-famicom.jp ID
  P7660: { ignore: true },
  // GameFAQs credit ID
  P7661: { ignore: true },
  // Scilit journal ID
  P7662: { ignore: true },
  // Scienza a due voci ID
  P7663: { ignore: true },
  // FMV World ID
  P7665: { ignore: true },
  // Visuotinė lietuvių enciklopedija ID
  P7666: { ignore: true },
  // Hellenic Civil Aviation Authority airport code
  P7667: { ignore: true },
  // NEC Retro ID
  P7669: { ignore: true },
  // Prog Archives artist ID
  P7670: { ignore: true },
  // Semion author ID
  P7671: { ignore: true },
  // Musiikkituottajat artist ID (chart)
  P7672: { ignore: true },
  // Czech district ID
  P7673: { ignore: true },
  // Czech region ID
  P7674: { ignore: true },
  // Vie publique intervention ID
  P7675: { ignore: true },
  // Vie publique person ID
  P7676: { ignore: true },
  // gesetze-im-internet.de ID
  P7677: { ignore: true },
  // Wikimapia ID
  P7678: { ignore: true },
  // Cinépolis KLIC ID
  P7679: { ignore: true },
  // Colorado Encyclopedia ID
  P7680: { ignore: true },
  // Israel Museum Jerusalem artist ID
  P7681: { ignore: true },
  // National Library of New Zealand ID
  P7682: { ignore: true },
  // OpenRetro Game Database ID
  P7683: { ignore: true },
  // Vie publique report ID
  P7684: { ignore: true },
  // CALS Encyclopedia of Arkansas ID
  P7685: { ignore: true },
  // Encyclopedia of the Great Plains ID
  P7686: { ignore: true },
  // Kansaspedia ID
  P7687: { ignore: true },
  // Mississippi Encyclopedia ID
  P7688: { ignore: true },
  // Online Nevada Encyclopedia ID
  P7689: { ignore: true },
  // South Carolina Encyclopedia ID
  P7690: { ignore: true },
  // The Oregon Encyclopedia ID
  P7691: { ignore: true },
  // Utah History Encyclopedia ID
  P7692: { ignore: true },
  // WyoHistory.org Encyclopedia ID
  P7693: { ignore: true },
  // Aberdeenshire HER ID
  P7694: { ignore: true },
  // e-WV: The West Virginia Encyclopedia ID
  P7695: { ignore: true },
  // Français libres ID
  P7696: { ignore: true },
  // Maine: An Encyclopedia ID
  P7697: { ignore: true },
  // Musée de la Résistance ID
  P7698: { ignore: true },
  // National Library of Lithuania ID
  P7699: { ignore: true },
  // Slovak National Library ID (VIAF)
  P7700: { ignore: true },
  // SNESmusic.org game ID
  P7701: { ignore: true },
  // The Sierra Chest ID
  P7702: { ignore: true },
  // Spanish Quora topic ID
  P7703: { name: "Quora", icon: "socials/quora.svg" },
  // Europeana entity
  P7704: { ignore: true },
  // SNESmusic.org company ID
  P7708: { ignore: true },
  // ScienceOpen author ID
  P7709: { ignore: true },
  // ScienceOpen publication ID
  P7710: { ignore: true },
  // Joconde author ID
  P7711: { ignore: true },
  // Joconde domain ID
  P7712: { ignore: true },
  // SNESmusic.org composer ID
  P7713: { ignore: true },
  // tDAR creator ID
  P7714: { ignore: true },
  // World Flora Online ID
  P7715: { ignore: true },
  // ACMA Broadcast Service Licence Number
  P7716: { ignore: true },
  // Vaare falne ID
  P7717: { ignore: true },
  // Complex Portal accession ID
  P7718: { ignore: true },
  // Fossilworks ID for this journal article
  P7720: { ignore: true },
  // Wikispore ID
  P7721: { ignore: true },
  // TLFi ID
  P7722: { ignore: true },
  // The Encyclopedia of Oklahoma History and Culture ID
  P7723: { ignore: true },
  // Littré ID
  P7724: { ignore: true },
  // PlanetMath ID
  P7726: { ignore: true },
  // GUI number
  P7729: { ignore: true },
  // ZX81 Collection publisher ID
  P7730: { ignore: true },
  // ZX81 Collection ID
  P7731: { ignore: true },
  // DAF ID
  P7732: { ignore: true },
  // Computer Emuzone game ID
  P7733: { ignore: true },
  // console music history ID
  P7734: { ignore: true },
  // Czech cohesion region ID
  P7735: { ignore: true },
  // Czech territorial region ID
  P7736: { ignore: true },
  // DeviantArt username
  P7737: { ignore: true },
  // EEPS ID
  P7738: { ignore: true },
  // Garaph game ID
  P7739: { ignore: true },
  // Garaph group ID
  P7740: { ignore: true },
  // IDFA film ID
  P7741: { ignore: true },
  // Lithuanian Football Encyclopedia player ID
  P7742: { ignore: true },
  // Microworld ID
  P7743: { ignore: true },
  // Mille Anni di Scienza in Italia ID
  P7744: { ignore: true },
  // Movie Walker person ID
  P7745: { ignore: true },
  // Natural Product Atlas ID
  P7746: { ignore: true },
  // NES Cart Database ID
  P7747: { ignore: true },
  // NIPS Proceedings author ID
  P7748: { ignore: true },
  // Nomenclature for Museum Cataloging
  P7749: { ignore: true },
  // Nonfiction ID
  P7750: { ignore: true },
  // portable music history ID
  P7751: { ignore: true },
  // Prague municipal district ID
  P7752: { ignore: true },
  // Projekt Gutenberg-DE author ID
  P7753: { ignore: true },
  // PS photographer ID
  P7754: { ignore: true },
  // ScreenScraper company ID
  P7755: { ignore: true },
  // ScreenScraper game ID
  P7756: { ignore: true },
  // ScreenScraper platform ID
  P7757: { ignore: true },
  // SPIE profile ID
  P7758: { ignore: true },
  // The Video Games Museum system ID
  P7759: { ignore: true },
  // Tubi movie ID
  P7760: { ignore: true },
  // Tubi series ID
  P7761: { ignore: true },
  // VBProfiles person ID
  P7762: { ignore: true },
  // Archives Portal Europe ID
  P7764: { ignore: true },
  // DES ID
  P7765: { ignore: true },
  // Bob ID
  P7766: { ignore: true },
  // Australian National Maritime Museum object ID
  P7768: { ignore: true },
  // Australian National Maritime Museum person ID
  P7769: { ignore: true },
  // PersonalData.IO ID
  P7771: { ignore: true },
  // Atlas Obscura identifier
  P7772: { ignore: true },
  // The Digital Local Culture Encyclopedia of Korea ID
  P7773: { ignore: true },
  // The Good Old Days ID
  P7774: { ignore: true },
  // RationalWiki ID
  P7775: { ignore: true },
  // SSNE person ID
  P7776: { ignore: true },
  // AdoroCinema film ID
  P7777: { ignore: true },
  // Museum of Modern Art online exhibition ID
  P7778: { ignore: true },
  // Russian PFL player ID
  P7780: { ignore: true },
  // J-GLOBAL ID
  P7783: { ignore: true },
  // LaunchBox Games Database developer ID
  P7784: { ignore: true },
  // LaunchBox Games Database game ID
  P7785: { ignore: true },
  // Joconde epoch ID
  P7786: { ignore: true },
  // openSUSE package
  P7788: { ignore: true },
  // Ten-Bruggencatenummer
  P7789: { ignore: true },
  // Diccionario de la lengua española ID
  P7790: { ignore: true },
  // NTIS accession number
  P7791: { ignore: true },
  // PubAg ID
  P7792: { ignore: true },
  // Games Database developer ID
  P7794: { ignore: true },
  // National September 11 Memorial ID
  P7795: { ignore: true },
  // BeWeb person ID
  P7796: { ignore: true },
  // BeWeb entity ID
  P7797: { ignore: true },
  // BeWeb family ID
  P7798: { ignore: true },
  // Apple IIGS France ID
  P7799: { ignore: true },
  // bauhaus.community ID
  P7800: { ignore: true },
  // CEEB K-12 school code
  P7801: { ignore: true },
  // D-MSX ID
  P7802: { ignore: true },
  // Decine21 person ID
  P7803: { ignore: true },
  // dovidka.com.ua ID
  P7804: { ignore: true },
  // Games Database publisher ID
  P7805: { ignore: true },
  // Games Database system ID
  P7806: { ignore: true },
  // ICD-11 (foundation)
  P7807: { ignore: true },
  // kino-teatr.ru person ID
  P7808: { ignore: true },
  // LaunchBox Games Database platform ID
  P7809: { ignore: true },
  // LaunchBox Games Database publisher ID
  P7810: { ignore: true },
  // Macintosh Garden game ID
  P7811: { ignore: true },
  // Macintosh Repository ID
  P7812: { ignore: true },
  // Open Churches ID
  P7813: { ignore: true },
  // OpenBibArt ID
  P7814: { ignore: true },
  // textove.com artist ID
  P7815: { ignore: true },
  // textove.com song ID
  P7816: { ignore: true },
  // Electronic library Ukrainica ID
  P7817: { ignore: true },
  // French Vikidia ID
  P7818: { ignore: true },
  // OrthodoxWiki ID (English)
  P7819: { ignore: true },
  // Punjabipedia ID
  P7820: { ignore: true },
  // Sarvavijnanakosam ID
  P7821: { ignore: true },
  // Italian Vikidia ID
  P7822: { ignore: true },
  // BookBrainz work ID
  P7823: { ignore: true },
  // CPCWiki ID
  P7824: { ignore: true },
  // UCUM code
  P7825: { ignore: true },
  // VGMPF ID
  P7826: { ignore: true },
  // Spanish Vikidia ID
  P7827: { ignore: true },
  // What is the Apple IIGS? ID
  P7828: { ignore: true },
  // English Vikidia ID
  P7829: { ignore: true },
  // LiverTox ID
  P7830: { ignore: true },
  // NMVW ID
  P7831: { ignore: true },
  // Basque Vikidia ID
  P7832: { ignore: true },
  // Authenticus ID
  P7834: { ignore: true },
  // Instituto Moreira Salles ID
  P7835: { ignore: true },
  // Livelib.ru person ID
  P7836: { ignore: true },
  // Nederlands Fotomuseum photographer ID
  P7837: { ignore: true },
  // Polish Nationwide Railway Database - station ID
  P7838: { ignore: true },
  // Saregama artist ID
  P7839: { ignore: true },
  // ScummVM wiki ID
  P7840: { ignore: true },
  // Armenian Vikidia ID
  P7841: { ignore: true },
  // Vienna History Wiki ID
  P7842: { ignore: true },
  // German Vikidia ID
  P7843: { ignore: true },
  // Joconde object type ID
  P7844: { ignore: true },
  // MarketScreener business leaders ID
  P7845: { ignore: true },
  // Beta maṣāḥǝft ID
  P7846: { ignore: true },
  // DigitaltMuseum ID
  P7847: { ignore: true },
  // Frick Art Reference Library Artist File ID
  P7848: { ignore: true },
  // Panoptikum podcast episode ID
  P7849: { ignore: true },
  // Joconde location ID
  P7850: { ignore: true },
  // Smithsonian resource ID
  P7851: { ignore: true },
  // C64.COM ID
  P7852: { ignore: true },
  // c64games.de ID
  P7853: { ignore: true },
  // EU-Football.info club ID
  P7854: { ignore: true },
  // Salzburg Museums ID
  P7856: { ignore: true },
  // fyyd podcast episode ID
  P7857: { ignore: true },
  // Upper Austria Museum ID
  P7858: { ignore: true },
  // WorldCat Identities ID
  P7859: { ignore: true },
  // word in DPEJ of RAE ID
  P7860: { ignore: true },
  // HAL article ID
  P7864: { ignore: true },
  // CoBiS author ID
  P7865: { ignore: true },
  // marterl.at ID
  P7866: { ignore: true },
  // NPDRMI record ID
  P7868: { ignore: true },
  // Analysis & Policy Observatory node ID
  P7869: { ignore: true },
  // Analysis & Policy Observatory term ID
  P7870: { ignore: true },
  // PCBdB game ID
  P7871: { ignore: true },
  // Diccionari del cinema a Catalunya ID
  P7872: { ignore: true },
  // EFIS film festival ID
  P7873: { ignore: true },
  // EFIS person ID
  P7874: { ignore: true },
  // Eurogamer ID
  P7875: { ignore: true },
  // FlashScore.com team ID
  P7876: { ignore: true },
  // GameStar ID
  P7877: { ignore: true },
  // Soccerdonna team ID
  P7878: { ignore: true },
  // The Video Games Museum game ID
  P7879: { ignore: true },
  // Voetbal International player ID
  P7880: { ignore: true },
  // Games Database game ID
  P7881: { ignore: true },
  // ft.dk politician identifier
  P7882: { ignore: true },
  // Historical Marker Database ID
  P7883: { ignore: true },
  // Joconde inscription ID
  P7884: { ignore: true },
  // Joconde time period ID
  P7885: { ignore: true },
  // Media Arts Database ID
  P7886: { ignore: true },
  // Cambridge Encyclopedia of Anthropology ID
  P7889: { ignore: true },
  // EFIS filmfirm ID
  P7891: { ignore: true },
  // EFIS film ID
  P7892: { ignore: true },
  // CIÊNCIAVITAE ID
  P7893: { ignore: true },
  // Swedish School Registry ID
  P7894: { ignore: true },
  // Whaling History ID
  P7895: { ignore: true },
  // Academia.edu publication ID
  P7896: { ignore: true },
  // TI-99/4A Videogame House ID
  P7897: { ignore: true },
  // National Aviation Hall of Fame ID
  P7898: { ignore: true },
  // MOCAGH ID
  P7899: { ignore: true },
  // Monument Atlas Objekt-ID
  P7900: { ignore: true },
  // Encyclopedia of Chicago ID
  P7901: { ignore: true },
  // Deutsche Biographie (GND) ID
  P7902: { ignore: true },
  // AnimalBase ID
  P7905: { ignore: true },
  // Canmore maritime-type ID
  P7906: { ignore: true },
  // Canmore object-type ID
  P7907: { ignore: true },
  // Clavis Clavium ID
  P7908: { ignore: true },
  // Can You Run it ID
  P7909: { ignore: true },
  // DANFS ship ID
  P7910: { ignore: true },
  // Gamekult company ID
  P7911: { ignore: true },
  // Gamekult franchise ID
  P7912: { ignore: true },
  // Gamekult game ID
  P7913: { ignore: true },
  // Gamekult platform ID
  P7914: { ignore: true },
  // GBAtemp game ID
  P7915: { ignore: true },
  // Mendeley publication ID
  P7916: { ignore: true },
  // Museums in Austria Code
  P7917: { ignore: true },
  // Médias 19 ID
  P7918: { ignore: true },
  // SerialStation game ID
  P7919: { ignore: true },
  // TheTVDB person ID
  P7920: { ignore: true },
  // TrueAchievements series ID
  P7921: { ignore: true },
  // Canmore monument-type ID
  P7922: { ignore: true },
  // Bollywood Hungama person alphabetic ID
  P7923: { ignore: true },
  // Bibliotheca Hagiographica Latina ID
  P7924: { ignore: true },
  // Jurisdiction List number
  P7925: { ignore: true },
  // Visual AIDS Artist+ Registry ID
  P7926: { ignore: true },
  // Open Food Facts label
  P7927: { ignore: true },
  // BioLexSOE ID
  P7928: { ignore: true },
  // Roglo person ID
  P7929: { ignore: true },
  // Adelsvapen ID
  P7931: { ignore: true },
  // Irish playography play ID
  P7932: { ignore: true },
  // Irish playography person ID
  P7934: { ignore: true },
  // Corpus Corporum author ID
  P7935: { ignore: true },
  // Dansk kvindebiografisk leksikon ID
  P7939: { ignore: true },
  // Adventure Gamers company ID
  P7940: { ignore: true },
  // Biografisch Woordenboek van Nederland: 1880-2000 ID
  P7941: { ignore: true },
  // National Historic Lookout Register ID
  P7942: { ignore: true },
  // The Washington Post contributor ID
  P7943: { ignore: true },
  // DoME artist ID
  P7944: { ignore: true },
  // ArchiWebture ID
  P7945: { ignore: true },
  // Museu de Memes ID
  P7946: { ignore: true },
  // WeChangEd ID
  P7947: { ignore: true },
  // GreatSchools ID
  P7948: { ignore: true },
  // Czech War Graves Register
  P7949: { ignore: true },
  // Marvel Comics creators ID
  P7950: { ignore: true },
  // DC Comics talent ID
  P7951: { ignore: true },
  // The First Amendment Encyclopedia ID
  P7952: { ignore: true },
  // Indiegogo project ID
  P7953: { ignore: true },
  // RealGM basketball coach ID
  P7954: { ignore: true },
  // Global Music Rights work ID
  P7955: { ignore: true },
  // SESAC work number
  P7956: { ignore: true },
  // Directory of Maîtres d'art
  P7957: { ignore: true },
  // Chicago Landmarks ID
  P7958: { ignore: true },
  // Joconde discovery ID
  P7960: { ignore: true },
  // Joconde creation ID
  P7961: { ignore: true },
  // Dictionnaire des femmes de l’ancienne France ID
  P7962: { ignore: true },
  // Cell Ontology ID
  P7963: { ignore: true },
  // Scilit work ID
  P7965: { ignore: true },
  // NetBSD package
  P7966: { ignore: true },
  // OpenBSD port
  P7967: { ignore: true },
  // VR GameCritic ID
  P7968: { ignore: true },
  // DAR ancestor ID
  P7969: { ignore: true },
  // FandangoNow ID
  P7970: { ignore: true },
  // CVR person ID
  P7972: { ignore: true },
  // Faculté des sciences de Nancy ID
  P7974: { ignore: true },
  // Filmfront film ID
  P7975: { ignore: true },
  // stargate-wiki.de article
  P7976: { ignore: true },
  // AncientFaces person ID
  P7977: { ignore: true },
  // Decine21 film ID
  P7978: { ignore: true },
  // ACM conference ID
  P7979: { ignore: true },
  // Clavis Patrum Latinorum ID
  P7980: { ignore: true },
  // ExoticA ID
  P7981: { ignore: true },
  // Hrvatska enciklopedija ID
  P7982: { ignore: true },
  // ACM Journal ID
  P7983: { ignore: true },
  // Kanopy ID
  P7985: { ignore: true },
  // Mirabile author ID
  P7986: { ignore: true },
  // Bibliotheca Hagiographica Graeca ID
  P7987: { ignore: true },
  // Clavis Patrum Graecorum ID
  P7988: { ignore: true },
  // Mirabile manuscript ID
  P7989: { ignore: true },
  // Mirabile saint ID
  P7990: { ignore: true },
  // Mirabile title ID
  P7991: { ignore: true },
  // Poeti d'Italia in lingua latina author ID
  P7992: { ignore: true },
  // Treccani's Dizionario di Filosofia ID
  P7993: { ignore: true },
  // Colecovision Zone ID
  P7994: { ignore: true },
  // NHS Health A to Z ID
  P7995: { ignore: true },
  // EH.Net Encyclopedia of Economic and Business History ID
  P7996: { ignore: true },
  // GRY-Online company ID
  P7997: { ignore: true },
  // Podchaser podcast ID
  P7998: { name: "Podchaser", icon: "socials/podchaser.webp" },
  // Haz-Map ID
  P7999: { ignore: true },
  // Social Security Death Index entry
  P8002: { ignore: true },
  // ColecoVision.dk ID
  P8003: { ignore: true },
  // US Bureau of Prisons Inmate Register Number
  P8007: { ignore: true },
  // Google Scholar case ID
  P8008: { ignore: true },
  // Adventure Gamers series ID
  P8012: { ignore: true },
  // Trakt.tv ID
  P8013: { ignore: true },
  // Compendium heroicum ID
  P8014: { ignore: true },
  // Encyclopedia on Early Childhood Development ID (English)
  P8015: { ignore: true },
  // Encyclopédie sur le développement des jeunes enfants ID
  P8016: { ignore: true },
  // IGCD game ID
  P8018: { ignore: true },
  // Kickstarter project ID
  P8019: { ignore: true },
  // Gram.pl game ID
  P8020: { ignore: true },
  // Kooora/Goalzz player ID
  P8021: { ignore: true },
  // RFI Musique artist ID
  P8022: { ignore: true },
  // VideoGamer.com game ID
  P8023: { ignore: true },
  // Nobel Laureate API ID
  P8024: { ignore: true },
  // VGMRips system ID
  P8025: { ignore: true },
  // VGMRips company ID
  P8027: { ignore: true },
  // GameRevolution game ID
  P8028: { ignore: true },
  // PIV Online ID
  P8029: { ignore: true },
  // Movie Review Query Engine ID
  P8033: { ignore: true },
  // Vatican Library VcBA ID
  P8034: { ignore: true },
  // m3db.com film ID
  P8035: { ignore: true },
  // m3db.com person ID
  P8036: { ignore: true },
  // Filmfront person ID
  P8037: { ignore: true },
  // SIUSA archive conservator ID
  P8038: { ignore: true },
  // National Register of Historic Monuments in Bosnia and Herzegovina ID
  P8039: { ignore: true },
  // RPGamer game ID
  P8040: { ignore: true },
  // DR music artist ID
  P8041: { ignore: true },
  // PC Games Database.de game ID
  P8042: { ignore: true },
  // ELAR ID
  P8043: { ignore: true },
  // Frankfurter Personenlexikon ID
  P8044: { ignore: true },
  // Women of Scotland memorial ID
  P8048: { ignore: true },
  // Women of Scotland subject ID
  P8050: { ignore: true },
  // Geschichtsquellen des deutschen Mittelalters author ID
  P8051: { ignore: true },
  // MusicBrainz genre ID
  P8052: { name: "MusicBrainz", icon: "socials/music-brainz.svg" },
  // Latvian unified registration number
  P8053: { ignore: true },
  // Amazon.com Prime Video ID
  P8055: { name: "Amazon Prime Video", icon: "socials/amazon-video.svg" },
  // VGMRips composer ID
  P8056: { ignore: true },
  // Apache Project ID
  P8057: { ignore: true },
  // coinop.org game ID
  P8059: { ignore: true },
  // Glassdoor company ID
  P8060: { ignore: true },
  // AGROVOC ID
  P8061: { ignore: true },
  // Ameli ID
  P8062: { ignore: true },
  // BookBrainz publisher ID
  P8063: { ignore: true },
  // Chinese Clinical Trial Registry ID
  P8064: { ignore: true },
  // CIRIS author ID
  P8065: { ignore: true },
  // Colecovision Addict ID
  P8066: { ignore: true },
  // Macdonald Dictionary ID
  P8067: { ignore: true },
  // ToposText place ID
  P8068: { ignore: true },
  // ToposText person ID
  P8069: { ignore: true },
  // ToposText work ID
  P8070: { ignore: true },
  // BDSP ID
  P8071: { ignore: true },
  // CAB ID
  P8072: { ignore: true },
  // Cult of Saints in Late Antiquity ID
  P8073: { ignore: true },
  // Geschichtsquellen des deutschen Mittelalters work ID
  P8074: { ignore: true },
  // ScreenScraper group ID
  P8075: { ignore: true },
  // The Cover Project game ID
  P8076: { ignore: true },
  // FHF establishment ID
  P8077: { ignore: true },
  // FHF hospital group ID
  P8078: { ignore: true },
  // elibrary.ru person ID
  P8079: { ignore: true },
  // Ökumenisches Heiligenlexikon ID
  P8080: { ignore: true },
  // WBIS ID
  P8081: { ignore: true },
  // Spanish National Catalog of Hospitals ID
  P8082: { ignore: true },
  // Visit Tuscany ID
  P8083: { ignore: true },
  // Nintendo eShop ID
  P8084: { ignore: true },
  // Curran Index contributor ID
  P8085: { ignore: true },
  // ODMP person ID
  P8086: { ignore: true },
  // GameTDB game ID
  P8087: { ignore: true },
  // Elephind.com ID
  P8088: { ignore: true },
  // EZB ID
  P8089: { ignore: true },
  // GameReactor game ID
  P8090: { ignore: true },
  // Archival Resource Key
  P8091: { ignore: true },
  // EcuRed article
  P8092: { ignore: true },
  // GeneaStar person ID
  P8094: { ignore: true },
  // Encyklopedia Solidarności ID
  P8095: { ignore: true },
  // Pinakes copyist or possessor ID
  P8096: { ignore: true },
  // Biographical Dictionary of Architects in Canada 1800-1950 ID
  P8098: { ignore: true },
  // I-Revues ID
  P8099: { ignore: true },
  // JournalTOCs ID
  P8100: { ignore: true },
  // MUSE article ID
  P8101: { ignore: true },
  // Paperity article ID
  P8103: { ignore: true },
  // Paperity journal ID
  P8104: { ignore: true },
  // SAN archive producer ID
  P8105: { ignore: true },
  // SOCAN work number
  P8106: { ignore: true },
  // Papers Past ID
  P8108: { ignore: true },
  // Pascal et Francis ID
  P8109: { ignore: true },
  // Retronews ID
  P8110: { ignore: true },
  // COTREX trail ID
  P8113: { ignore: true },
  // Wikiparques ID
  P8114: { ignore: true },
  // Encyclopedia of Brno History person ID
  P8116: { ignore: true },
  // FooDB compound ID
  P8117: { ignore: true },
  // Forest Stewardship Council Certificate Code
  P8118: { ignore: true },
  // HASC
  P8119: { ignore: true },
  // ModelSEED compound ID
  P8120: { ignore: true },
  // UM-BBD compound ID
  P8121: { ignore: true },
  // DLL Catalog author ID
  P8122: { ignore: true },
  // DLL Catalog work ID
  P8123: { ignore: true },
  // CPAN author ID
  P8124: { ignore: true },
  // Fandango person ID
  P8125: { ignore: true },
  // Club Netherlands Handball Association ID
  P8126: { ignore: true },
  // Forest Stewardship Council License Code
  P8128: { ignore: true },
  // IDU theatre name unique ID
  P8129: { ignore: true },
  // Internetowy Polski Słownik Biograficzny ID
  P8130: { ignore: true },
  // Texas Historic Sites Atlas ID
  P8132: { ignore: true },
  // Swedish Glaciers ID
  P8133: { ignore: true },
  // Soccerdonna coach ID
  P8134: { ignore: true },
  // Encyclopedia of České Budějovice ID
  P8135: { ignore: true },
  // Il Sole 24 Ore ID
  P8136: { ignore: true },
  // Inventory of Archaic and Classical Poleis ID
  P8137: { ignore: true },
  // Moravian Lives ID
  P8139: { ignore: true },
  // motorsportstats.com driver ID
  P8140: { ignore: true },
  // motorsportstats.com series ID
  P8141: { ignore: true },
  // motorsportstats.com venue ID
  P8142: { ignore: true },
  // SAR ancestor ID
  P8143: { ignore: true },
  // Ternopil Encyclopedia ID
  P8144: { ignore: true },
  // Psocodea Species File ID
  P8145: { ignore: true },
  // SkiMo Stats ID
  P8146: { ignore: true },
  // National-Football-Teams.com club ID
  P8147: { ignore: true },
  // re:publica speaker ID
  P8148: { ignore: true },
  // Provenio ID
  P8149: { ignore: true },
  // COVIDWHO ID
  P8150: { ignore: true },
  // Sicilian Regional Assembly ID
  P8151: { ignore: true },
  // Sicilian Regional Assembly numeric ID
  P8152: { ignore: true },
  // Accademia delle Scienze di Torino ID
  P8153: { ignore: true },
  // Republic of Korea Parliamentarian Society ID
  P8155: { ignore: true },
  // NKAA ID
  P8156: { ignore: true },
  // MémorialGenWeb monument ID
  P8157: { ignore: true },
  // History Colorado ID
  P8158: { ignore: true },
  // SciProfiles ID
  P8159: { ignore: true },
  // Bibliotheca Augustana author ID
  P8160: { ignore: true },
  // CONI honoured ID
  P8161: { ignore: true },
  // DGHS facility code
  P8162: { ignore: true },
  // Diels-Kranz ID
  P8163: { ignore: true },
  // DPVweb ID
  P8164: { ignore: true },
  // Maryland's National Register Properties ID
  P8165: { ignore: true },
  // Encyclopaedia Metallum label ID
  P8166: { ignore: true },
  // WhatDoTheyKnow organisation ID
  P8167: { ignore: true },
  // FactGrid item ID
  P8168: { ignore: true },
  // Heritage Gateway ID
  P8169: { ignore: true },
  // RPPS ID
  P8170: { ignore: true },
  // Priest of Archidiecezja Gdańska ID
  P8171: { ignore: true },
  // Sejm-Wielki.pl profile ID
  P8172: { ignore: true },
  // Extratime.ie player ID
  P8173: { ignore: true },
  // Slovak Registration ID
  P8174: { ignore: true },
  // Infames Romani ID
  P8175: { ignore: true },
  // Itch.io developer profile
  P8176: { ignore: true },
  // Oregon Historic Sites Database ID
  P8177: { ignore: true },
  // motorsportstats.com team ID
  P8178: { ignore: true },
  // Canadiana Name Authority ID
  P8179: { ignore: true },
  // Indian Railways train number
  P8180: { ignore: true },
  // SNCF Station Identifier
  P8181: { ignore: false },
  // South African Company Registration Number
  P8182: { ignore: true },
  // DART-Europe thesis ID
  P8184: { ignore: true },
  // DoME exhibition ID
  P8185: { ignore: true },
  // DPE school code
  P8186: { ignore: true },
  // Epistemonikos ID
  P8187: { ignore: true },
  // Lexikon der Filmbegriffe ID
  P8188: { ignore: true },
  // National Library of Israel J9U ID
  P8189: { ignore: true },
  // UK Modern House Index architect ID
  P8190: { ignore: true },
  // UK Modern House Index building ID
  P8191: { ignore: true },
  // Joconde technique ID
  P8192: { ignore: true },
  // PragerU presenter ID
  P8197: { ignore: true },
  // regional government of Sicily ID
  P8198: { ignore: true },
  // Anagrafe Istituti Culturali Ecclesiastici ID
  P8199: { ignore: true },
  // BeWeb cultural institution ID
  P8200: { ignore: true },
  // ACUM work ID
  P8201: { ignore: true },
  // Reta Vortaro ID
  P8202: { ignore: true },
  // Mozilla Developer Network article
  P8205: { ignore: true },
  // The Conversation author ID
  P8207: { ignore: true },
  // SILL software ID
  P8209: { ignore: true },
  // LombardiaBeniCulturali artwork author ID
  P8210: { ignore: true },
  // Bookogs work ID
  P8211: { ignore: true },
  // Gitabitan.net ID
  P8212: { ignore: true },
  // Arlington Cemetery person ID
  P8213: { ignore: true },
  // CDAPNC author ID
  P8215: { ignore: true },
  // iDAI.chronontology ID
  P8216: { ignore: true },
  // iDAI.gazetteer ID
  P8217: { ignore: true },
  // Archaeology in Greece Online place ID
  P8218: { ignore: true },
  // ASUT ID
  P8219: { ignore: true },
  // NMMA antiquities ID
  P8220: { ignore: true },
  // NMMA built heritage ID
  P8221: { ignore: true },
  // rating.chgk.info ID
  P8222: { ignore: true },
  // K-Scholar ID
  P8223: { ignore: true },
  // Wyoming SHPO ID
  P8226: { ignore: true },
  // Lower Austrian Castle ID
  P8227: { ignore: true },
  // Co-Optimus ID
  P8229: { ignore: true },
  // Bookogs credit ID
  P8230: { ignore: true },
  // Wiener Wohnen ID
  P8231: { ignore: true },
  // Arkansas Register of Historic Places ID
  P8232: { ignore: true },
  // Augustins de l'Assomption ID
  P8233: { ignore: true },
  // LiederNet author ID
  P8234: { ignore: true },
  // LiederNet composer ID
  P8235: { ignore: true },
  // LiederNet song cycle ID
  P8236: { ignore: true },
  // LiederNet text ID
  P8237: { ignore: true },
  // Bibliography of the History of Slovakia ID
  P8238: { ignore: true },
  // MACRIS ID
  P8239: { ignore: true },
  // National Register Database, Louisiana ID
  P8240: { ignore: true },
  // Niden INE
  P8242: { ignore: true },
  // 500 Queer Scientists profile
  P8243: { ignore: true },
  // Mediaqueer.ca artist ID
  P8244: { ignore: true },
  // Mediaqueer.ca movie ID
  P8245: { ignore: true },
  // Natural Atlas ID
  P8246: { ignore: true },
  // Colon Classification
  P8248: { ignore: true },
  // MDAH's HRI ID
  P8249: { ignore: true },
  // RI National Register Search ID
  P8250: { ignore: true },
  // CTHS author ID
  P8251: { ignore: true },
  // OSM Name Suggestion Index identifier
  P8253: { ignore: true },
  // PC Games Database.de company ID
  P8254: { ignore: true },
  // SNES central game ID
  P8255: { ignore: true },
  // Super Mario Wiki ID
  P8256: { ignore: true },
  // Wikilengua article
  P8257: { ignore: true },
  // FlashScore.com player ID
  P8259: { ignore: true },
  // Aberdeen Built Ships ID
  P8260: { ignore: true },
  // Origin ID
  P8261: { ignore: true },
  // npm package
  P8262: { ignore: true },
  // FEMA number
  P8266: { ignore: true },
  // Mod DB mod ID
  P8267: { ignore: true },
  // Ubisoft Store game ID
  P8268: { ignore: true },
  // Norwegian prisoner register person ID
  P8269: { ignore: true },
  // ID natural monuments in Landkreis Oberspreewald-Lausitz
  P8270: { ignore: true },
  // LombardiaBeniCulturali architecture author ID
  P8271: { ignore: true },
  // BaGLAMa GID
  P8272: { ignore: true },
  // GMC registration number
  P8273: { ignore: true },
  // AFL player ID
  P8277: { ignore: true },
  // serial identifier on SerialZone
  P8278: { ignore: true },
  // Absolute Games game ID
  P8279: { ignore: true },
  // Modelhub ID
  P8280: { ignore: true },
  // Liszt Academy Lexikon person ID
  P8281: { ignore: true },
  // Medusa NRHP ID
  P8282: { ignore: true },
  // motorsportstats.com event ID
  P8284: { ignore: true },
  // LGBT Danmark online dictionary ID
  P8285: { ignore: true },
  // Olympedia people ID
  P8286: { ignore: true },
  // Worlds Without End author ID
  P8287: { ignore: true },
  // Archivio Storico Ricordi person ID
  P8290: { ignore: true },
  // AusStage organization ID
  P8291: { ignore: true },
  // AusStage person ID
  P8292: { ignore: true },
  // AusStage venue ID
  P8293: { ignore: true },
  // AusStage work ID
  P8294: { ignore: true },
  // AustLit ID
  P8295: { ignore: true },
  // Cinema Context ID
  P8296: { ignore: true },
  // New York Times contributor ID
  P8297: { name: "New York Times", icon: "socials/new-york-times.svg" },
  // HBO Max ID
  P8298: { ignore: true },
  // Semantic Scholar corpus ID
  P8299: { ignore: true },
  // Montreux Jazz Festival concert ID
  P8300: { ignore: true },
  // Montreux Jazz Festival person ID
  P8301: { ignore: true },
  // Montreux Jazz Festival song ID
  P8302: { ignore: true },
  // ESRB game ID
  P8303: { ignore: true },
  // NexusMods game ID
  P8304: { ignore: true },
  // LongTake person ID
  P8305: { ignore: true },
  // Yle topic ID
  P8309: { ignore: true },
  // digilibLT work ID
  P8310: { ignore: true },
  // PHI Latin Texts work ID
  P8311: { ignore: true },
  // Musisque Deoque work ID
  P8312: { ignore: true },
  // Den Store Danske ID
  P8313: { ignore: true },
  // Noovie person ID
  P8314: { ignore: true },
  // NTB ID
  P8315: { ignore: true },
  // sobory.ru ID
  P8316: { ignore: true },
  // Philadelphia Museum of Art entity ID
  P8317: { ignore: true },
  // WorldFootball.net stadium ID
  P8318: { ignore: true },
  // National Football Teams.com match ID
  P8319: { ignore: true },
  // EU-Football.info stadium ID
  P8320: { ignore: true },
  // Canadian Football League player ID
  P8321: { ignore: true },
  // cadastral municipality ID in Austria
  P8322: { ignore: true },
  // Monasteries in the Netherlands until 1800 ID
  P8323: { ignore: true },
  // Indonesian Intangible Cultural Heritage Registration Number
  P8325: { ignore: true },
  // Australian Classification ID
  P8326: { ignore: true },
  // Dansk litteraturs historie ID
  P8332: { ignore: true },
  // DLive game ID
  P8333: { ignore: true },
  // MuseScore artist ID
  P8334: { ignore: true },
  // Uffizi artwork ID
  P8335: { ignore: true },
  // MNBAQ artist ID
  P8336: { ignore: true },
  // Cemeteries of France ID
  P8337: { ignore: true },
  // Dansk Biografisk Leksikon ID
  P8341: { ignore: true },
  // SIUSA archival fonds ID
  P8342: { ignore: true },
  // Odeon ID
  P8343: { ignore: true },
  // WikiTrek ID
  P8344: { ignore: true },
  // Nomor Pokok Wajib Pajak (organisation or corporation)
  P8346: { ignore: true },
  // Spotify songwriter ID
  P8347: { name: "Spotify", icon: "socials/spotify.svg" },
  // NVE River Network (ELVIS) ID
  P8348: { ignore: true },
  // Proleksis enciklopedija ID
  P8349: { ignore: true },
  // Singapore Infopedia ID
  P8350: { ignore: true },
  // vglist video game ID
  P8351: { ignore: true },
  // Veldkruus ID
  P8352: { ignore: true },
  // BitterDB compound ID
  P8354: { ignore: true },
  // Helsinki persistent building ID Ratu
  P8355: { ignore: true },
  // SIUSA archive producer family ID
  P8356: { ignore: true },
  // SIUSA archive producer organization ID
  P8357: { ignore: true },
  // Lexicon of the Yiddish Theatre ID
  P8358: { ignore: true },
  // Deku Deals ID
  P8364: { ignore: true },
  // Thesaurus Sozialwissenschaften ID
  P8365: { ignore: true },
  // GCatholic person ID
  P8366: { ignore: true },
  // Legacy.com person ID
  P8367: { ignore: true },
  // Econlib entry ID
  P8369: { ignore: true },
  // UNBIS Thesaurus ID
  P8370: { ignore: true },
  // Web of Science ID
  P8372: { ignore: true },
  // Encyclopedia Tatarica (tt) Online ID
  P8373: { ignore: true },
  // Criminological Thesaurus ID
  P8374: { ignore: true },
  // Crossref journal ID
  P8375: { ignore: true },
  // Duden ID
  P8376: { ignore: true },
  // Encyclopedia Tatarica (ru) Online ID
  P8377: { ignore: true },
  // Directory of Afrocubanas ID
  P8380: { ignore: true },
  // Emmys person ID
  P8381: { ignore: true },
  // Finales Rugby ID
  P8382: { ignore: true },
  // Goodreads work ID
  P8383: { name: "Goodreads", icon: "socials/goodreads.png" },
  // locality number in Austria
  P8384: { ignore: true },
  // IDU person ID
  P8385: { ignore: true },
  // Gramophone composer ID
  P8386: { ignore: true },
  // Foreign war churchyards in Norway ID
  P8387: { ignore: true },
  // Swedish Parliament person GUID
  P8388: { ignore: true },
  // GCatholic diocese ID
  P8389: { ignore: true },
  // PMSA ID
  P8390: { ignore: true },
  // BBK (library and bibliographic classification)
  P8391: { ignore: true },
  // Rate Your Music release ID
  P8392: { ignore: true },
  // QUDT quantity kind ID
  P8393: { ignore: true },
  // Unique Property Reference Number
  P8399: { ignore: true },
  // House Divided ID
  P8400: { ignore: true },
  // TheFreeDictionary medical term ID
  P8401: { ignore: true },
  // People's Representative Council of Indonesia ID
  P8405: { ignore: true },
  // Grove Art Online ID
  P8406: { ignore: true },
  // Supreme Court of Sweden case number
  P8407: { ignore: true },
  // KBpedia ID
  P8408: { ignore: true },
  // Swedish Environmental Protection Agency Amenity OBJECTID
  P8409: { ignore: true },
  // Oxford Bibliographies ID
  P8410: { ignore: true },
  // Swiss Timber Bridges ID
  P8412: { ignore: true },
  // AlloCiné theater ID
  P8414: { ignore: true },
  // Maniadb artist ID
  P8415: { ignore: true },
  // Group Properties wiki ID
  P8417: { ignore: true },
  // Oberwolfach mathematician ID
  P8418: { ignore: true },
  // Archive of Our Own tag
  P8419: { ignore: true },
  // GameBanana  game ID
  P8420: { ignore: true },
  // Spanish Olympic Committee athlete ID
  P8421: { ignore: true },
  // EHESS ID of a French commune
  P8422: { ignore: true },
  // OpenHistoricalMap relation ID
  P8424: { ignore: true },
  // IAPH code
  P8425: { ignore: true },
  // Knot Atlas identifier
  P8426: { ignore: true },
  // Knotinfo ID
  P8427: { ignore: true },
  // Swiss Tunnel ID
  P8429: { ignore: true },
  // Wien Kulturgut: Kunstwerke im öffentlichen Raum ID
  P8430: { ignore: true },
  // Österreichisches Musiklexikon Online ID
  P8432: { ignore: true },
  // Swedish Riksdag document ID
  P8433: { ignore: true },
  // Artprice artist ID
  P8434: { ignore: true },
  // AnyDecentMusic album ID
  P8435: { ignore: true },
  // SAH Archipedia architect ID
  P8439: { ignore: true },
  // Personendatenbank Germania Sacra ID
  P8440: { ignore: true },
  // Cistercian Biography Online ID
  P8441: { ignore: true },
  // Digital Library of the Caribbean ID
  P8442: { ignore: true },
  // Homebrew formula name
  P8443: { ignore: true },
  // Our Campaigns candidate ID
  P8445: { ignore: true },
  // Gateway to Research person ID
  P8446: { ignore: true },
  // Unique Street Reference Number
  P8447: { ignore: true },
  // Benerail station ID
  P8448: { ignore: false },
  // Churches in Limburg ID
  P8449: { ignore: true },
  // Vmusic.bg artist ID
  P8454: { ignore: true },
  // US Quaternary Fault ID
  P8455: { ignore: true },
  // ASCRG 2016 ID
  P8456: { ignore: true },
  // ANZSOC 2011 ID
  P8457: { ignore: true },
  // ANZSCO 2013 ID
  P8458: { ignore: true },
  // Political Graveyard politician ID
  P8462: { ignore: true },
  // SAH Archipedia building ID
  P8463: { ignore: true },
  // Wiki-Rennes ID
  P8467: { ignore: true },
  // Queensland Biota ID
  P8468: { ignore: true },
  // Australian Weed ID
  P8469: { ignore: true },
  // Encyclopedie berbere keyword ID
  P8472: { ignore: true },
  // Japanese magazine code
  P8473: { ignore: true },
  // lobbywatch.ch ID of a member of the Swiss parliament
  P8474: { ignore: true },
  // IVS ID
  P8475: { ignore: true },
  // Svenska Akademiens Ordbok main entry ID
  P8478: { ignore: true },
  // National Registry of Exonerations Case ID
  P8479: { ignore: true },
  // Described and Captioned Media Program producer ID
  P8481: { ignore: true },
  // Český hudební slovník osob a institucí ID
  P8482: { ignore: true },
  // PM20 geo code
  P8483: { ignore: true },
  // PM20 subject code
  P8484: { ignore: true },
  // DATAtourisme ID
  P8486: { ignore: true },
  // OpenCritic critic ID
  P8487: { ignore: true },
  // ASCCEG 2019 ID
  P8488: { ignore: true },
  // SmallGroup ID
  P8489: { ignore: true },
  // ANZSIC 2006 ID
  P8490: { ignore: true },
  // AHECC 2017 ID
  P8491: { ignore: true },
  // Tree of Public Interest ID
  P8492: { ignore: true },
  // Denkmaldatenbank Thurgau ID
  P8493: { ignore: true },
  // DSSTOX compound identifier
  P8494: { ignore: true },
  // South Africa EMIS code
  P8495: { ignore: true },
  // Archive Site Trinity College Cambridge ID
  P8496: { ignore: true },
  // WISAARD resource ID
  P8499: { ignore: true },
  // Gateway to Research organisation ID
  P8501: { ignore: true },
  // SÚKL code
  P8502: { ignore: true },
  // Science Fiction Awards Database author ID
  P8504: { ignore: true },
  // power plant operating licence (Turkey)
  P8506: { ignore: true },
  // Legacy.com newspaper ID
  P8507: { ignore: true },
  // ChemSynthesis ID
  P8508: { ignore: true },
  // Dizionario Biografico dei Protestanti in Italia ID
  P8509: { ignore: true },
  // Fototeka person ID
  P8511: { ignore: true },
  // LibraryThing series ID
  P8513: { ignore: true },
  // TOPCMB ID
  P8514: { ignore: true },
  // Swiss Industrial Heritage ID
  P8515: { ignore: true },
  // Library of Congress Medium of Performance Thesaurus ID
  P8516: { ignore: true },
  // Henrik Ibsen writings ID
  P8518: { ignore: true },
  // RKD thesaurus ID
  P8519: { ignore: true },
  // TCLF ID
  P8520: { ignore: true },
  // Sculptures and cities database ID for sculptures
  P8521: { ignore: true },
  // Manioc book ID
  P8522: { ignore: true },
  // Présence Compositrices composer ID
  P8523: { ignore: true },
  // Offizielle Deutsche Charts song ID
  P8524: { ignore: true },
  // ToS;DR service numerical identifier
  P8525: { ignore: true },
  // Have I Been Pwned breach ID
  P8526: { ignore: true },
  // Unsplash user ID
  P8527: { ignore: true },
  // EIB project ID
  P8528: { ignore: true },
  // ANZSRC 2020 FoR ID
  P8529: { ignore: true },
  // Filmstarts title ID
  P8531: { ignore: true },
  // Trismegistos text ID
  P8532: { ignore: true },
  // SPLC individual ID
  P8534: { ignore: true },
  // ERIC Thesaurus ID
  P8539: { ignore: true },
  // American Folklore Society Ethnographic Thesaurus ID
  P8540: { ignore: true },
  // BHF magazine ID
  P8541: { ignore: true },
  // Macedonian cadastral municipality ID
  P8542: { ignore: true },
  // Monumentbrowser ID
  P8543: { ignore: true },
  // Frauen in Bewegung 1848–1938 ID
  P8544: { ignore: true },
  // Nasjonalt skoleregister ID
  P8545: { ignore: true },
  // BHF author ID
  P8547: { ignore: true },
  // Proballers ID
  P8548: { ignore: true },
  // Opera Online work ID
  P8549: { ignore: true },
  // Opera Online composer ID
  P8551: { ignore: true },
  // Opera Online opera house ID
  P8552: { ignore: true },
  // CTHS publication ID
  P8553: { ignore: true },
  // edukado.net Panteono ID
  P8557: { ignore: true },
  // Chrome Webstore extension ID
  P8559: { ignore: true },
  // PARADISEC Catalog
  P8560: { ignore: true },
  // NPR station ID
  P8561: { name: "NPR", icon: "socials/npr.svg" },
  // JSTOR publisher ID
  P8562: { ignore: true },
  // Emporis company ID
  P8563: { ignore: true },
  // Art Bonus ID
  P8564: { ignore: true },
  // British Museum object ID
  P8565: { ignore: true },
  // monumenta.ch ID
  P8566: { ignore: true },
  // The Living New Deal ID
  P8567: { ignore: true },
  // Jewish Virtual Library ID
  P8568: { ignore: true },
  // YIVO Encyclopedia of Jews in Eastern Europe ID
  P8569: { ignore: true },
  // Spanish Artists from the Fourth to the Twentieth Century ID
  P8572: { ignore: true },
  // LSG localbody code
  P8573: { ignore: true },
  // NYARC Discovery ID
  P8574: { ignore: true },
  // Encyclopaedia of Architects, Vienna 1770–1945 ID
  P8575: { ignore: true },
  // Hrvatska tehnička enciklopedija ID
  P8576: { ignore: true },
  // ICP artist ID
  P8577: { ignore: true },
  // TracesOfWar person ID
  P8578: { ignore: true },
  // Firefox Add-ons URL slug
  P8579: { ignore: true },
  // NHK Archives Portal person ID
  P8580: { ignore: true },
  // Hrvatski biografski leksikon ID
  P8581: { ignore: true },
  // InciWeb ID
  P8582: { ignore: true },
  // FIBA Hall of Fame ID
  P8712: { ignore: true },
  // Stadtwiki Dresden article
  P8713: { ignore: true },
  // GADM ID
  P8714: { ignore: true },
  // Lambiek Special pages ID
  P8715: { ignore: true },
  // Mir@bel publisher ID
  P8716: { ignore: true },
  // ILO Thesaurus ID
  P8717: { ignore: true },
  // AVN performer ID
  P8718: { ignore: true },
  // CCFr library ID
  P8719: { ignore: true },
  // xHamster ID
  P8720: { ignore: true },
  // AWMDB performer ID (discontinued)
  P8721: { ignore: true },
  // Normattiva ID
  P8722: { ignore: true },
  // American Heritage place ID
  P8723: { ignore: true },
  // BHL name ID
  P8724: { ignore: true },
  // Hungarian Water Polo Federation player ID
  P8725: { ignore: true },
  // Irish Statute Book ID
  P8726: { ignore: true },
  // Minecraft UUID
  P8727: { ignore: true },
  // Nachlässe in Austria ID
  P8728: { ignore: true },
  // AniList anime ID
  P8729: { ignore: true },
  // National Park Service people ID
  P8730: { ignore: true },
  // AniList manga ID
  P8731: { ignore: true },
  // Archivio Storico Ricordi opera ID
  P8732: { ignore: true },
  // O*NET OnLine code
  P8734: { ignore: true },
  // Opta football competition ID
  P8735: { ignore: true },
  // Opta football player ID
  P8736: { ignore: true },
  // Opta football team ID
  P8737: { ignore: true },
  // The Boardr profile ID
  P8740: { ignore: true },
  // Great Places ID
  P8741: { ignore: true },
  // PIM award ID
  P8742: { ignore: true },
  // Scholars Strategy Network ID
  P8743: { ignore: true },
  // DC Historic Sites place ID
  P8747: { ignore: true },
  // Rheinland-Pfälzische Personendatenbank ID
  P8748: { ignore: true },
  // Dictionary of Portuguese Historians ID
  P8749: { ignore: true },
  // Unione Romana Biblioteche Scientifiche ID
  P8750: { ignore: true },
  // Kramerius of Moravian Library UUID
  P8752: { ignore: true },
  // OpenStreetMap numeric user ID
  P8754: { name: "OSM", icon: "socials/openstreetmap.svg" },
  // VA facility ID
  P8755: { ignore: true },
  // Sports-Reference.com college basketball box score ID
  P8756: { ignore: true },
  // Persée article ID
  P8758: { ignore: true },
  // Polski Słownik Judaistyczny ID
  P8759: { ignore: true },
  // Base constructions bibliothèques ID
  P8760: { ignore: true },
  // Sports-Reference.com college football school ID
  P8761: { ignore: true },
  // NCAA Statistics team season ID
  P8762: { ignore: true },
  // Royal Horticultural Society plant ID
  P8765: { ignore: true },
  // EGAFD ID
  P8767: { ignore: true },
  // Ontology of units of Measure 2.0 unit ID
  P8769: { ignore: true },
  // Vélib' Métropole station ID
  P8771: { ignore: true },
  // Blogger user profile ID
  P8772: { ignore: true },
  // Malmö Museer ID
  P8773: { ignore: true },
  // MTMT journal ID
  P8774: { ignore: true },
  // Soccerway stadium ID
  P8775: { ignore: true },
  // IMVDb music video ID
  P8776: { ignore: true },
  // NCAA Statistics coach ID
  P8777: { ignore: true },
  // Docker Hub repository
  P8778: { ignore: true },
  // USL League One player ID
  P8779: { ignore: true },
  // Portuguese Football Federation ID
  P8780: { ignore: true },
  // ClassInd game ID
  P8782: { ignore: true },
  // AAGM person or institution ID
  P8783: { ignore: true },
  // AAGM site ID
  P8784: { ignore: true },
  // AniDB tag ID
  P8785: { ignore: true },
  // UAF person ID
  P8787: { ignore: true },
  // Dignity Memorial person ID
  P8788: { ignore: true },
  // Opera Online performer ID
  P8790: { ignore: true },
  // Bioweb Ecuador ID
  P8792: { ignore: true },
  // Quirinale ID
  P8793: { ignore: true },
  // BBFC reference
  P8794: { ignore: true },
  // General Diamond Catalogue ID
  P8795: { ignore: true },
  // FilmPolski press collection ID
  P8796: { ignore: true },
  // French Paralympic and Sports Committee athlete ID
  P8797: { ignore: true },
  // Twitch tag ID
  P8799: { name: "Twitch", icon: "socials/twitch.svg" },
  // European Film Awards ID
  P8800: { ignore: true },
  // MSRI institution ID
  P8801: { ignore: true },
  // MSRI person ID
  P8802: { ignore: true },
  // stolpersteine-berlin.de Stolperstein identifier
  P8803: { ignore: true },
  // stolpersteine-hamburg.de Stolperstein identifier
  P8804: { ignore: true },
  // LIMIS person ID
  P8805: { ignore: true },
  // NSDOK Stolperstein identifier
  P8806: { ignore: true },
  // stolpersteine-bremen.de Stolperstein identifier
  P8807: { ignore: true },
  // snublestein.no Stolperstein identifier
  P8808: { ignore: true },
  // AIWARDS ID
  P8809: { ignore: true },
  // Twitch team ID
  P8811: { name: "Twitch", icon: "socials/twitch.svg" },
  // IMMuB artist ID
  P8812: { ignore: true },
  // IMMuB album ID
  P8813: { ignore: true },
  // WordNet 3.1 Synset ID
  P8814: { ignore: true },
  // IAFD film distributor ID
  P8815: { ignore: true },
  // Yandex Zen ID
  P8816: { name: "Yandex Zen", icon: "socials/yandex-zen.svg" },
  // NCAA organization code
  P8817: { ignore: true },
  // Church of Jesus Christ pioneer ID
  P8818: { ignore: true },
  // Pitchfork artist ID
  P8819: { ignore: true },
  // Monuments de mémoire ID
  P8820: { ignore: true },
  // Memorial Book University of Vienna ID
  P8821: { ignore: true },
  // Xfinity Stream ID
  P8823: { ignore: true },
  // Sports-Reference.com college basketball school ID
  P8825: { ignore: true },
  // edition humboldt digital ID
  P8826: { ignore: true },
  // GitLab username
  P8827: { ignore: true },
  // AAA attraction ID
  P8828: { ignore: true },
  // Swiss-Gym Male ID
  P8829: { ignore: true },
  // Swiss-Gym Female ID
  P8830: { ignore: true },
  // Museum Day ID
  P8831: { ignore: true },
  // PAN member
  P8832: { ignore: true },
  // Union Catalog of Armenian Libraries authority ID
  P8833: { ignore: true },
  // Yale University Art Gallery ID
  P8583: { ignore: true },
  // Wikipedia Library partner ID
  P8584: { ignore: true },
  // FIPRESCI person ID
  P8585: { ignore: true },
  // Anais do Museu Paulista article ID
  P8586: { ignore: true },
  // Legacies of British Slave-ownership place ID
  P8587: { ignore: true },
  // Wisconsin National or State Registers Record ID
  P8588: { ignore: true },
  // Carl-Maria-von-Weber-Gesamtausgabe ID
  P8589: { ignore: true },
  // Jewish Encyclopedia ID
  P8590: { ignore: true },
  // Grove Music Online ID
  P8591: { ignore: true },
  // Hikr waypoint ID
  P8593: { ignore: true },
  // DIL ID
  P8595: { ignore: true },
  // Seattle Art Museum ID
  P8598: { ignore: true },
  // Nelson-Atkins Museum of Art artwork ID
  P8599: { ignore: true },
  // TV Maze series ID
  P8600: { ignore: true },
  // Barcelona Public art ID
  P8601: { ignore: true },
  // University of Ghana Digital Collections (UGSpace) ID
  P8602: { ignore: true },
  // Istrapedia ID
  P8603: { ignore: true },
  // OnlyFans ID
  P8604: { name: "OnlyFans", icon: "socials/only-fans.svg" },
  // Linked Open Data Cloud identifier
  P8605: { ignore: true },
  // The Cutting Room Floor ID
  P8607: { ignore: true },
  // Fatcat ID
  P8608: { ignore: true },
  // China Treaty Database ID
  P8609: { ignore: true },
  // e-GOV law ID
  P8610: { ignore: true },
  // Portugal. Dicionário Histórico ID
  P8611: { ignore: true },
  // past Fellow of the Royal Society ID
  P8612: { ignore: true },
  // Regesta Ecclesiastica Salisburgensia ID
  P8613: { ignore: true },
  // Slack organization ID
  P8614: { ignore: true },
  // Kansas Historic Resources Inventory ID
  P8616: { ignore: true },
  // Historic Montana ID
  P8617: { ignore: true },
  // ITF player ID 2020
  P8618: { ignore: true },
  // BD Gest' series ID
  P8619: { ignore: true },
  // American Battlefield Trust battlefield ID
  P8623: { ignore: true },
  // American Battlefield Trust ID (person)
  P8624: { ignore: true },
  // Occupational Outlook Handbook ID
  P8629: { ignore: true },
  // Thomas Jefferson Encyclopedia ID
  P8630: { ignore: true },
  // Canadian Women Artists History Initiative ID
  P8631: { ignore: true },
  // Book Marks ID
  P8632: { ignore: true },
  // Re-Member ID
  P8633: { ignore: true },
  // SPoT skater ID
  P8634: { ignore: true },
  // NDL law ID
  P8635: { ignore: true },
  // McClintock and Strong Biblical Cyclopedia ID
  P8636: { ignore: true },
  // L'Officiel des spectacles ID
  P8637: { ignore: true },
  // British and Irish Furniture Makers Online ID
  P8638: { ignore: true },
  // Cincinnati Art Museum ID
  P8639: { ignore: true },
  // Dallas Museum of Art ID
  P8640: { ignore: true },
  // FBref squad ID
  P8642: { ignore: true },
  // Dostoyevsky and His Entourage ID
  P8643: { ignore: true },
  // Lambiek comic magazines ID
  P8644: { ignore: true },
  // Energy Identification Code
  P8645: { ignore: true },
  // Library of Congress Children's Subject Headings ID
  P8647: { ignore: true },
  // Ministry of the Interior of Italy ID
  P8648: { ignore: true },
  // National Park Service place ID
  P8649: { ignore: true },
  // MnDOT Historic Bridges ID
  P8650: { ignore: true },
  // Open Civic Data Division ID
  P8651: { ignore: true },
  // Museen Dresden article ID
  P8653: { ignore: true },
  // SSYK 2012 The Swedish Standard Classification of Occupations
  P8654: { ignore: true },
  // LoC HABS/HAER/HALS place ID
  P8655: { ignore: true },
  // Symptom Ontology ID
  P8656: { ignore: true },
  // photoLondon ID
  P8657: { ignore: true },
  // Syro-Malabar Catholic Church ID
  P8658: { ignore: true },
  // Native Plants Database ID
  P8660: { ignore: true },
  // Lower Sorbian place name ID
  P8661: { ignore: true },
  // Les Roses cultivées à L'Haÿ en 1902 ID
  P8662: { ignore: true },
  // Maniadb album ID
  P8663: { ignore: true },
  // USA Water Polo Hall of Fame ID
  P8664: { ignore: true },
  // Présence Compositrices work ID
  P8665: { ignore: true },
  // Regional Council of Tuscany ID
  P8666: { ignore: true },
  // Indonesian prison database ID
  P8668: { ignore: true },
  // Encyclopaedia Beliana ID
  P8669: { ignore: true },
  // Deutsche Bahn station code
  P8671: { ignore: true },
  // Twitter topic ID
  P8672: { name: "Twitter", icon: "socials/twitter.svg" },
  // Naver movie ID
  P8673: { ignore: true },
  // Bollywood Hungama movie ID
  P8674: { ignore: true },
  // BoardGameGeek family ID
  P8675: { ignore: true },
  // London Stock Exchange company ID
  P8676: { ignore: true },
  // Région Île-de-France ID
  P8677: { ignore: true },
  // Slovník českých nakladatelství 1848-1949 person ID
  P8678: { ignore: true },
  // Dictionary of Occupational Titles Code (fourth edition, revised)
  P8679: { ignore: true },
  // FVLB work ID
  P8680: { ignore: true },
  // Passion Patrimoine ID
  P8681: { ignore: true },
  // Biographical Dictionary of Fourierism ID
  P8686: { ignore: true },
  // CompositionToday composer ID
  P8688: { ignore: true },
  // ITHL author ID
  P8689: { ignore: true },
  // Quebec Dams Directory ID
  P8690: { ignore: true },
  // SwissLipids identifier
  P8691: { ignore: true },
  // ACER code
  P8692: { ignore: true },
  // Science Museum Group ID
  P8694: { ignore: true },
  // Slovník českých nakladatelství 1848-1949 publishing house ID
  P8695: { ignore: true },
  // Directory of Belgian Photographers ID
  P8696: { ignore: true },
  // RNACentral ID
  P8697: { ignore: true },
  // Turkey's Culture Portal ID
  P8698: { ignore: true },
  // NSW State Archives and Records Authority ID
  P8699: { ignore: true },
  // Scottish Brick History Brick & Tileworks ID
  P8700: { ignore: true },
  // Spotify playlist ID
  P8704: { name: "Spotify", icon: "socials/spotify.svg" },
  // Artist ID of the department of Prints and Drawings of the Louvre
  P8705: { ignore: true },
  // NBIC taxon ID
  P8707: { ignore: true },
  // Danish educational institution number
  P8708: { ignore: true },
  // CTAN package ID
  P8709: { ignore: true },
  // Dresden Street ID
  P8710: { ignore: true },
  // Emojipedia ID
  P8711: { ignore: true },
  // PBA artwork ID
  P8962: { ignore: true },
  // OpenReview.net profile ID
  P8964: { ignore: true },
  // OpenReview.net group ID
  P8965: { ignore: true },
  // OpenReview.net submission ID
  P8968: { ignore: true },
  // CINE21 person ID
  P8969: { ignore: true },
  // Chinese Painting Database ID
  P8970: { ignore: true },
  // Cinémathèque québécoise person ID
  P8971: { ignore: true },
  // Humanitarian OpenStreetMap Tasking Manager project ID
  P8973: { ignore: true },
  // SAPA ID
  P8974: { ignore: true },
  // Manus Online author ID
  P8975: { ignore: true },
  // Lichess username
  P8976: { ignore: true },
  // CITWF person ID
  P8977: { ignore: true },
  // DBLP publication ID
  P8978: { ignore: true },
  // DataTrek ID
  P8979: { ignore: true },
  // KANTO ID
  P8980: { ignore: true },
  // Pontificio Istituto di Archeologia Cristiana ID
  P8982: { ignore: true },
  // CPV Supplementary
  P8984: { ignore: true },
  // Dizionario bio-bibliografico dei bibliotecari italiani del XX secolo ID
  P8985: { ignore: true },
  // ISDS ID
  P8987: { ignore: true },
  // Mapy.cz ID
  P8988: { ignore: true },
  // World Rowing ID (UUID format)
  P8990: { ignore: true },
  // 1914-1918-Online ID
  P8992: { ignore: true },
  // JAD ID
  P8993: { ignore: true },
  // Game UI Database ID
  P8994: { ignore: true },
  // Lumières.Lausanne ID
  P8995: { ignore: true },
  // Swiss Unihockey player ID
  P8996: { ignore: true },
  // IFF player ID
  P8997: { ignore: true },
  // Magyar életrajzi lexikon ID
  P8998: { ignore: true },
  // Lexikon zum Literatur- und Kulturbetrieb im Österreich der Zwischenkriegszeit ID
  P8999: { ignore: true },
  // World History Encyclopedia ID
  P9000: { ignore: true },
  // Literary Encyclopedia ID
  P9001: { ignore: true },
  // Google Podcasts show ID
  P9003: { name: "Google Podcasts", icon: "socials/google-podcast.svg" },
  // Stitcher show ID
  P9004: { ignore: true },
  // Castbox show ID
  P9005: { ignore: true },
  // Pocket Casts show ID
  P9006: { name: "Pocket Casts", icon: "socials/pocket-casts.svg" },
  // Podcast Addict show ID
  P9007: { ignore: true },
  // TuneIn Podcasts show ID
  P9008: { name: "TuneIn", icon: "socials/tune-in.svg" },
  // RadioPublic show ID
  P9009: { ignore: true },
  // Player.fm ID
  P9010: { ignore: true },
  // PodBean show ID
  P9011: { ignore: true },
  // Podtail show ID
  P9012: { ignore: true },
  // Encyclopedia of Saami Culture ID
  P9013: { ignore: true },
  // The Podcast App show ID
  P9014: { ignore: true },
  // Medieval Manuscripts in Oxford Libraries manuscript ID
  P9015: { ignore: true },
  // Medieval Manuscripts in Oxford Libraries work ID
  P9016: { ignore: true },
  // Medieval Manuscripts in Oxford Libraries person ID
  P9017: { ignore: true },
  // Medieval Manuscripts in Oxford Libraries place ID
  P9018: { ignore: true },
  // Medieval Manuscripts in Oxford Libraries organization ID
  P9019: { ignore: true },
  // AV Production person ID
  P9020: { ignore: true },
  // Mediafilm ID
  P9022: { ignore: true },
  // Radio.com Podcasts show ID
  P9023: { ignore: true },
  // Libsyn show ID
  P9024: { ignore: true },
  // Mitre ATT&CK ID
  P9025: { ignore: true },
  // SFLI ID
  P9026: { ignore: true },
  // e-GEDSH ID
  P9027: { ignore: true },
  // Viceversa Letteratura author ID
  P9029: { ignore: true },
  // Barnivore product ID
  P9031: { ignore: true },
  // AVN movie ID
  P9032: { ignore: true },
  // Archivo Histórico de diputados de España ID
  P9033: { ignore: true },
  // BG School ID
  P9034: { ignore: true },
  // Muck Rack media outlet ID
  P9035: { ignore: true },
  // I professori dell'Università di Pavia (1859-1961) ID
  P9036: { ignore: true },
  // BHCL UUID
  P9037: { ignore: true },
  // Calaméo ID
  P9038: { ignore: true },
  // Studium Parisiense ID
  P9039: { ignore: true },
  // viaggiareinpuglia.it ID
  P9040: { ignore: true },
  // DiVo person ID
  P9041: { ignore: true },
  // DiCamillo Database Country House ID
  P9042: { ignore: true },
  // Internet Game Database numeric game ID
  P9043: { ignore: true },
  // GEPRIS-Historisch ID (Person)
  P9044: { ignore: true },
  // Alpine Linux package
  P9045: { ignore: true },
  // A*dS Encyclopedia ID
  P9046: { ignore: true },
  // Biographical Archive of Psychiatry ID
  P9048: { ignore: true },
  // ICCD agent ID
  P9049: { ignore: true },
  // ICCD site ID
  P9050: { ignore: true },
  // ICCD cultural heritage ID
  P9051: { ignore: true },
  // Projecto Vercial author ID
  P9053: { ignore: true },
  // National Historic People ID
  P9054: { ignore: true },
  // Olympedia event ID
  P9055: { ignore: true },
  // TheCocktailDB drink ID
  P9056: { ignore: true },
  // TheCocktailDB ingredient ID
  P9057: { ignore: true },
  // Fichier des personnes décédées ID (matchID)
  P9058: { ignore: true },
  // POSIX locale identifier
  P9060: { ignore: true },
  // National Museum in Warsaw ID
  P9061: { ignore: true },
  // BABEL author ID
  P9062: { ignore: true },
  // Base de Dados de Autores Portugueses ID
  P9063: { ignore: true },
  // Povos Indígenas no Brasil ID
  P9064: { ignore: true },
  // Parabola package
  P9065: { ignore: true },
  // FL number
  P9066: { ignore: true },
  // Hungarian Film Archive ID
  P9067: { ignore: true },
  // IFPI Danmark work ID
  P9068: { ignore: true },
  // International Standard Bible Encyclopedia ID
  P9069: { ignore: true },
  // Internet Encyclopedia of Ukraine ID
  P9070: { ignore: true },
  // NZ Museums ID
  P9074: { ignore: true },
  // StrategyWiki ID
  P9075: { ignore: true },
  // Australian Fungi ID
  P9076: { ignore: true },
  // Discord invite ID
  P9078: { ignore: true },
  // Red Cross FDRS ID
  P9079: { ignore: true },
  // JAANUS ID
  P9080: { ignore: true },
  // SEARCH on line catalogue ID
  P9081: { ignore: true },
  // MetaSat ID
  P8834: { ignore: true },
  // Visages du diocèse d'Autun ID
  P8835: { ignore: true },
  // SPOnG game ID
  P8836: { ignore: true },
  // Prêtres du diocèse de Quimper ID
  P8837: { ignore: true },
  // LibraryThing venue ID
  P8838: { ignore: true },
  // Union des artistes ID
  P8840: { ignore: true },
  // Restaurant Guru restaurant ID
  P8841: { ignore: true },
  // PromoDj ID
  P8842: { ignore: true },
  // Absolute Games person ID
  P8844: { ignore: true },
  // FIS grass skier ID
  P8845: { ignore: true },
  // FISG athlete ID
  P8846: { ignore: true },
  // Kinorium movie ID
  P8847: { ignore: true },
  // CONOR.AL ID
  P8848: { ignore: true },
  // CONOR.BG ID
  P8849: { ignore: true },
  // CONOR.KS ID
  P8850: { ignore: true },
  // CONOR.SR ID
  P8851: { ignore: true },
  // Musica Brasilis composer ID
  P8853: { ignore: true },
  // Salzburgwiki ID
  P8854: { ignore: true },
  // IEV number
  P8855: { ignore: true },
  // British Phonographic Industry ID
  P8856: { ignore: true },
  // CRGPG ID
  P8857: { ignore: true },
  // Drizly product ID
  P8858: { ignore: true },
  // Canada Business Number
  P8860: { ignore: true },
  // FINA Wiki ID
  P8861: { ignore: true },
  // Foodlocate restaurant ID
  P8862: { ignore: true },
  // Qobuz label ID
  P8863: { ignore: true },
  // AAA campground ID
  P8867: { ignore: true },
  // AAA hotel ID
  P8868: { ignore: true },
  // AAA restaurant ID
  P8869: { ignore: true },
  // Hyperion Records person ID
  P8870: { ignore: true },
  // Southwest Harbor Public Library item ID
  P8871: { ignore: true },
  // DriveThruComics numeric publisher identifier
  P8873: { ignore: true },
  // Fellow of the Royal Society of Canada ID
  P8877: { ignore: true },
  // HLTV player ID
  P8878: { ignore: true },
  // Kinorium person ID
  P8879: { ignore: true },
  // AstroGen ID
  P8880: { ignore: true },
  // BBC sound effects asset ID
  P8883: { name: "BBC", icon: "socials/bbc.svg" },
  // Namuwiki ID
  P8885: { ignore: true },
  // CIP data sheet
  P8886: { ignore: true },
  // AniDB episode ID
  P8888: { ignore: true },
  // edition humboldt digital Flora ID
  P8892: { ignore: true },
  // Sistema de Información Legislativa ID
  P8893: { ignore: true },
  // BG EIK
  P8894: { ignore: true },
  // All the Tropes identifier
  P8895: { ignore: true },
  // Concise Literary Encyclopedia ID
  P8896: { ignore: true },
  // Reliwiki page ID
  P8897: { ignore: true },
  // Swedish National Library Arken ID
  P8899: { ignore: true },
  // HuijiWiki wiki ID
  P8900: { ignore: true },
  // Archives at Yale names ID
  P8902: { ignore: true },
  // HAL journal ID
  P8903: { ignore: true },
  // Parler username
  P8904: { name: "Parler", icon: "socials/parler.svg" },
  // Museo del Prado artwork ID
  P8905: { ignore: true },
  // National Gallery of Ireland ID
  P8906: { ignore: true },
  // Auckland Art Gallery artwork ID
  P8907: { ignore: true },
  // CINE21 film ID
  P8908: { ignore: true },
  // National Gallery of Australia ID
  P8909: { ignore: true },
  // Fitzwilliam Museum ID
  P8910: { ignore: true },
  // Sonneveld-index
  P8911: { ignore: true },
  // Kicker.de player ID (actual scheme)
  P8912: { ignore: true },
  // NSSDCA ID
  P8913: { ignore: true },
  // ZOBODAT person ID
  P8914: { ignore: true },
  // ZOBODAT taxon ID
  P8915: { ignore: true },
  // DIA ID
  P8916: { ignore: true },
  // SKD ID
  P8917: { ignore: true },
  // Max Movie film ID
  P8918: { ignore: true },
  // Gab username
  P8919: { ignore: true },
  // Movist film ID
  P8920: { ignore: true },
  // KOBIS ID
  P8921: { ignore: true },
  // Amsterdam Museum ID
  P8922: { ignore: true },
  // SMB-digital ID
  P8923: { ignore: true },
  // State Catalogue of the Museum Fund of Russia artwork ID
  P8924: { ignore: true },
  // CQVIP article ID
  P8925: { ignore: true },
  // DBLP venue ID
  P8926: { ignore: true },
  // Filmstriben film-ID
  P8928: { ignore: true },
  // Church of Jesus Christ missionary ID
  P8930: { ignore: true },
  // Encyklopedie mostů v Čechách, na Moravě a ve Slezsku ID
  P8931: { ignore: true },
  // Czech Gymnastics athlete ID
  P8932: { ignore: true },
  // Encyclopedia of the History of Ukraine ID
  P8935: { ignore: true },
  // CollEx-Persée ID
  P8936: { ignore: true },
  // theses.cz ID
  P8937: { ignore: true },
  // Google Play developer slug
  P8939: { name: "Google Play", icon: "socials/google-play.svg" },
  // AppGallery app ID
  P8940: { icon: "AppGallery", name: "socials/app-gallery.svg" },
  // The Galileo Project ID
  P8941: { ignore: true },
  // Artfacts ID
  P8943: { ignore: true },
  // Archivio dei possessori ID
  P8944: { ignore: true },
  // Museo Galileo biography ID
  P8945: { ignore: true },
  // National Galleries of Scotland ID
  P8946: { ignore: true },
  // Museo Galileo authority ID
  P8947: { ignore: true },
  // Pinakothek artwork ID
  P8948: { ignore: true },
  // Delft municipal monument ID
  P8949: { ignore: true },
  // Dizionario degli artisti ID
  P8950: { ignore: true },
  // Order of Canada recipient ID
  P8951: { ignore: true },
  // Students of Prague Universities ID
  P8953: { ignore: true },
  // vets.cz ID
  P8954: { ignore: true },
  // Chapels of southern Bohemia ID
  P8955: { ignore: true },
  // GS1 GPC code
  P8957: { ignore: true },
  // ClassInd audiovisual work ID
  P8958: { ignore: true },
  // Georgia Museum of Art ID
  P8959: { ignore: true },
  // Kunsthistorisches Museum Wien ID
  P8960: { ignore: true },
  // tribunsdelaplebe.fr ID
  P8961: { ignore: true },
  // Academic Encyclopedia of Czech History ID
  P9082: { ignore: true },
  // 45cat 7" release ID',
  P9083: { ignore: true },
  // ABC News topic ID
  P9084: { ignore: true },
  // Aracne author ID
  P9085: { ignore: true },
  // Econlib person ID
  P9087: { ignore: true },
  // KBR Catalogue ID
  P9088: { ignore: true },
  // Songlexikon ID
  P9089: { ignore: true },
  // Swiss Games Showcase ID
  P9090: { ignore: true },
  // MNBAQ ID
  P9091: { ignore: true },
  // Art in the Christian Tradition ID
  P9092: { ignore: true },
  // Australian Lichen ID
  P9093: { ignore: true },
  // Pantone color ID
  P9094: { ignore: true },
  // Kunstmuseum Basel ID
  P9095: { ignore: true },
  // Malpedia ID
  P9096: { ignore: true },
  // American Academy in Rome ID
  P9097: { ignore: true },
  // BiblioLMC ID
  P9098: { ignore: true },
  // GitHub topic
  P9100: { name: "Github", icon: "socials/github.svg" },
  // Discord username
  P9101: { ignore: true },
  // CineFanRo person ID
  P9102: { ignore: true },
  // Enciclopedia del Museo del Prado ID
  P9103: { ignore: true },
  // Encyclopedia of Brno History object ID
  P9104: { ignore: true },
  // Dictionnaire des journalistes ID
  P9105: { ignore: true },
  // Oxford Classical Dictionary ID
  P9106: { ignore: true },
  // Erudit article ID
  P9108: { ignore: true },
  // Holocaust.cz person ID
  P9109: { ignore: true },
  // Le Lettere di Theodor Mommsen agli Italiani ID
  P9110: { ignore: true },
  // SISSCO ID
  P9111: { ignore: true },
  // IFLA value vocabularies ID
  P9112: { ignore: true },
  // Patrinum ID
  P9113: { ignore: true },
  // Mathematica Italiana person ID
  P9114: { ignore: true },
  // Jewish Museum Berlin object ID
  P9115: { ignore: true },
  // Musica Brasilis score ID
  P9116: { ignore: true },
  // BVFE author ID
  P9117: { ignore: true },
  // Family Video Game Database ID
  P9118: { ignore: true },
  // LexML Brazil ID
  P9119: { ignore: true },
  // Pepys Encylopedia ID
  P9120: { ignore: true },
  // National Museum Norway artwork ID
  P9121: { ignore: true },
  // SportsLogos.net team ID
  P9122: { ignore: true },
  // Catalan Vikidia ID
  P9123: { ignore: true },
  // Russian Vikidia ID
  P9124: { ignore: true },
  // Microsoft MVP profile ID
  P9125: { ignore: true },
  // Debian Package Tracker ID
  P9128: { ignore: true },
  // Data Collection of the Hungarian Peerage ID
  P9129: { ignore: true },
  // CompositionToday composers showcase ID
  P9130: { ignore: true },
  // Royal Museums Greenwich artwork ID
  P9131: { ignore: true },
  // Saint Louis Art Museum artwork ID
  P9132: { ignore: true },
  // AZLyrics.com song ID
  P9133: { ignore: true },
  // Studio di Fonologia Musicale RAI person ID
  P9134: { ignore: true },
  // WreckSite ID
  P9135: { ignore: true },
  // SOUNZ contributor ID
  P9136: { ignore: true },
  // Doktori.hu ID
  P9137: { ignore: true },
  // Portal da Literatura ID
  P9141: { ignore: true },
  // IPHAE ID
  P9142: { ignore: true },
  // Play:Right ID
  P9143: { ignore: true },
  // National Portrait Gallery (London) artwork ID
  P9144: { ignore: true },
  // Xinjiang Data Project identifier
  P9145: { ignore: true },
  // CITWF title ID
  P9146: { ignore: true },
  // Union Catalog of Armenian Continuing Resources ID
  P9147: { ignore: true },
  // Saxony-Anhalt cultural heritage object ID
  P9148: { ignore: true },
  // FloGrappling ID
  P9150: { ignore: true },
  // Can I use feature ID
  P9151: { ignore: true },
  // CollectieGelderland creator ID
  P9152: { ignore: true },
  // VAi building ID
  P9153: { ignore: true },
  // Heritage Information System ID in the database of cultural heritage in Austria
  P9154: { ignore: true },
  // Joods Monument ID
  P9155: { ignore: true },
  // Lumni person ID
  P9156: { ignore: true },
  // Open Tree of Life ID
  P9157: { ignore: true },
  // Wurdboek fan de Fryske taal GTB ID
  P9158: { ignore: true },
  // People Australia ID
  P9159: { ignore: true },
  // Biographical Dictionary of the Czech Lands ID
  P9160: { ignore: true },
  // EMS ID
  P9162: { ignore: true },
  // Obrazi slovenskih pokrajin ID
  P9163: { ignore: true },
  // Svenska Institutet i Rom ID
  P9164: { ignore: true },
  // Lexikon Literatur in Tirol ID
  P9165: { ignore: true },
  // Curling.fi player ID
  P9166: { ignore: true },
  // De Lakenhal artwork ID
  P9167: { ignore: true },
  // Hauts-de-France Inventory identifier
  P9168: { ignore: true },
  // Tree of Life contributor ID
  P9169: { ignore: true },
  // Taiwan River Code
  P9170: { ignore: true },
  // RILM ID
  P9171: { ignore: true },
  // playDB artist ID
  P9172: { ignore: true },
  // Rate Your Music genre ID
  P9173: { ignore: true },
  // XXXBios transgender performer ID
  P9174: { ignore: true },
  // Centre-Val de Loire Inventory identifier
  P9175: { ignore: true },
  // Occitanie Inventory identifier
  P9176: { ignore: true },
  // playDB play ID
  P9177: { ignore: true },
  // Biblioteca Franco Serantini ID
  P9178: { ignore: true },
  // Biblioteca Iglesia Nacional Española en Roma ID
  P9179: { ignore: true },
  // Germanistenverzeichnis ID
  P9181: { ignore: true },
  // uta-net.com song ID
  P9182: { ignore: true },
  // uta-net.com artist ID
  P9183: { ignore: true },
  // AllMusic genre/style ID
  P9185: { name: "AllMusic", icon: "socials/all-music.svg" },
  // DicoPolHiS ID
  P9186: { ignore: true },
  // EuroBabeIndex.com ID
  P9187: { ignore: true },
  // Sauvons nos tombes cemetery ID
  P9189: { ignore: true },
  // LombardiaBeniCulturali archive producer person ID
  P9193: { ignore: true },
  // LombardiaBeniCulturali archive producer organization ID
  P9194: { ignore: true },
  // LombardiaBeniCulturali archive producer family ID
  P9195: { ignore: true },
  // BookBub author ID
  P9196: { ignore: true },
  // TlF artist ID
  P9197: { ignore: true },
  // Encyclopédie berbère article ID
  P9198: { ignore: true },
  // Protagonisti della storia delle scienze della mente ID
  P9199: { ignore: true },
  // English Placenames MADS ID
  P9200: { ignore: true },
  // Norwegian State Administration Database ID
  P9201: { ignore: true },
  // teatral.ro ID
  P9202: { ignore: true },
  // CineFAN.ro title ID
  P9203: { ignore: true },
  // CinemaRX title ID
  P9204: { ignore: true },
  // Sinemalar title ID
  P9205: { ignore: true },
  // Swissvote ID
  P9206: { ignore: true },
  // Bourgogne-Franche-Comté inventory identifier
  P9207: { ignore: true },
  // Île-de-France inventory identifier
  P9208: { ignore: true },
  // Normandie inventory identifier
  P9209: { ignore: true },
  // Pays de la Loire inventory identifier
  P9210: { ignore: true },
  // Wisconsin Architecture and History Inventory ID
  P9211: { ignore: true },
  // Dizionario biografico online degli anarchici italiani ID
  P9212: { ignore: true },
  // Swedish Literature Bank place ID
  P9213: { ignore: true },
  // Opera Online conductor ID
  P9216: { ignore: true },
  // Discogs genre ID
  P9218: { ignore: true },
  // Discogs style ID
  P9219: { ignore: true },
  // Danmarks Adresseregister named street ID
  P9221: { ignore: true },
  // bashenc.online ID
  P9222: { ignore: true },
  // Provenio UUID
  P9223: { ignore: true },
  // JedeSchule.de ID
  P9224: { ignore: true },
  // ARAE ID
  P9226: { ignore: true },
  // Encyclopedia Titanica ID
  P9227: { ignore: true },
  // U.S. Masters Swimming ID
  P9228: { ignore: true },
  // DzygaMDB person ID
  P9229: { ignore: true },
  // NLS place type ID
  P9230: { ignore: true },
  // Archivo Linz de la Transición Española ID
  P9231: { ignore: true },
  // Obituaries Australia ID
  P9232: { ignore: true },
  // XXXBios female performer ID
  P9233: { ignore: true },
  // RDA value vocabularies ID
  P9236: { ignore: true },
  // Encyclopedia of Seventh-day Adventists ID
  P9240: { ignore: true },
  // Whiskybase distillery ID
  P9242: { ignore: true },
  // NParks Flora & Fauna Web ID
  P9243: { ignore: true },
  // Women Australia ID
  P9244: { ignore: true },
  // Labour Australia ID
  P9245: { ignore: true },
  // Indigenous Australia ID
  P9246: { ignore: true },
  // Pontifical University of Salamanca ID
  P9247: { ignore: true },
  // EEVA author ID
  P9248: { ignore: true },
  // Nauvoo Community Project ID
  P9249: { ignore: true },
  // Cyprus Library ID
  P9250: { ignore: true },
  // Cyprus University of Technology ID
  P9251: { ignore: true },
  // Amathus ID
  P9252: { ignore: true },
  // European University Cyprus ID
  P9253: { ignore: true },
  // Museo Nacional de la Estampa ID
  P9254: { ignore: true },
  // Resident Advisor club ID
  P9255: { ignore: true },
  // Diccionari de la traducció catalana ID
  P9256: { ignore: true },
  // CPC-PR ID
  P9257: { ignore: true },
  // Austrian Newspapers Online ID
  P9258: { ignore: true },
  // Oklahoma's NRHP ID
  P9261: { ignore: true },
  // ChemRxiv ID
  P9262: { ignore: true },
  // Provence-Alpes-Côte d'Azur Inventory ID
  P9263: { ignore: true },
  // FFF player ID
  P9264: { ignore: true },
  // Physics Magazine author ID
  P9265: { ignore: true },
  // Ligue 1 player ID
  P9266: { ignore: true },
  // ANPI person numeric ID
  P9267: { ignore: true },
  // Science Magazine author ID
  P9268: { ignore: true },
  // Odnoklassniki user numeric ID
  P9269: { ignore: true },
  // ANSI/NISO standard ID
  P9270: { ignore: false },
  // Kickstarter username
  P9271: { ignore: true },
  // DeCS ID
  P9272: { ignore: true },
  // RePEc EconPapers ID
  P9273: { ignore: true },
  // Encyclopedia of Ostrava History person ID
  P9276: { ignore: true },
  // LFChistory.net player ID
  P9277: { ignore: true },
  // Pandektis ID
  P9278: { ignore: true },
  // Museum of the Jewish People at Beit Hatfutsot ID
  P9280: { ignore: true },
  // Encyclopedia of Greater Philadelphia ID
  P9281: { ignore: true },
  // Catalogue of the Capitular Library of Verona author ID
  P9282: { ignore: true },
  // AaRC title ID
  P9283: { ignore: true },
  // GB1900 ID
  P9284: { ignore: true },
  // Stadtlexikon Karlsruhe ID
  P9285: { ignore: true },
  // Encyclopaedia Herder concept ID
  P9286: { ignore: true },
  // Cyprus Bibliography ID
  P9287: { ignore: true },
  // EncyclopediaPR ID
  P9288: { ignore: true },
  // Filmitalia person ID
  P9289: { ignore: true },
  // TikTok music ID
  P9290: { name: "TikTok", icon: "socials/tiktok.svg" },
  // Eesti entsüklopeedia ID
  P9291: { ignore: true },
  // Encyclopédie du patrimoine culturel de l'Amérique française ID (French)
  P9292: { ignore: true },
  // AIATSIS Place Thesaurus ID
  P9293: { ignore: true },
  // AIATSIS Subject Thesaurus ID
  P9294: { ignore: true },
  // Astro Awani topic ID
  P9296: { ignore: true },
  // TapTap application ID
  P9297: { ignore: true },
  // Encyclopedia of Plzeň person ID
  P9298: { ignore: true },
  // OsobnostiRegionu.cz ID
  P9299: { ignore: true },
  // Terezín Memorial Database ID
  P9300: { ignore: true },
  // National Gallery of Art Library Bibliographic ID
  P9301: { ignore: true },
  // svoyak.info player ID
  P9303: { ignore: true },
  // Encyclopedia of Melbourne ID
  P9304: { ignore: true },
  // Max Movie person ID
  P9305: { ignore: true },
  // EudraCT trial ID
  P9306: { ignore: true },
  // Fancyclopedia 3 ID
  P9307: { ignore: true },
  // operator licence number
  P9308: { ignore: true },
  // TaDiRAH ID
  P9309: { ignore: true },
  // AWB lemma ID
  P9312: { ignore: true },
  // Latin Place Names ID
  P9314: { ignore: true },
  // Enslaved.org person ID
  P9315: { ignore: true },
  // MyMusic artist ID
  P9316: { ignore: true },
  // Ávvir topic ID
  P9318: { ignore: true },
  // Dark Horse creator ID
  P9319: { ignore: true },
  // ComiXology publisher ID
  P9320: { ignore: true },
  // Inforegister ID
  P9321: { ignore: true },
  // SVKKL authority ID
  P9322: { ignore: true },
  // BiographySampo person ID
  P9324: { ignore: true },
  // PatER ID
  P9326: { ignore: true },
  // Cartigli di Bologna ID
  P9327: { ignore: true },
  // Universal Music France artist ID
  P9328: { ignore: true },
  // Svoya Igra television player ID
  P9329: { ignore: true },
  // Washington Place Names ID
  P9330: { ignore: true },
  // Storiaememoriadibologna ID
  P9331: { ignore: true },
  // Oxford African American Studies Center ID
  P9332: { ignore: true },
  // LFH staff ID
  P9333: { ignore: true },
  // Cephalopod Ontology ID
  P9334: { ignore: true },
  // Archives West finding aid ID
  P9335: { ignore: true },
  // Das wissenschaftliche Bibellexikon im Internet ID
  P9336: { ignore: true },
  // Keratsini-Drapetsona libraries' catalogue authority ID
  P9337: { ignore: true },
  // NFL.com ID (new scheme)
  P9338: { ignore: true },
  // Bavarian Monument Map object ID (architectural monument)
  P9339: { ignore: true },
  // MeSH descriptor/qualifier ID
  P9340: { ignore: true },
  // MeSH qualifier ID
  P9341: { ignore: true },
  // Bavarian Monument Map object ID (ground monument)
  P9342: { ignore: true },
  // temples.ru ID
  P9343: { ignore: true },
  // Discord server numeric ID
  P9345: { ignore: true },
  // France24 topic ID (French)
  P9346: { ignore: true },
  // France24 topic ID (English)
  P9347: { ignore: true },
  // France24 topic ID (Spanish)
  P9348: { ignore: true },
  // France24 topic ID (Arabic)
  P9349: { ignore: true },
  // PeriodO period ID
  P9350: { ignore: true },
  // MHDBDB lemma ID
  P9351: { ignore: true },
  // Portrait Archive ID
  P9352: { ignore: true },
  // Porcelana Brasil ID
  P9354: { ignore: true },
  // Slovník českých filosofů ID
  P9355: { ignore: true },
  // Hymenoptera Anatomy Ontology ID
  P9356: { ignore: true },
  // Encyclopedia of French Cultural Heritage in North America ID (English)
  P9357: { ignore: true },
  // MWB lemma ID
  P9358: { ignore: true },
  // Encyclopedia of Migration ID
  P9359: { ignore: true },
  // Ministry of Education New Zealand school ID
  P9360: { ignore: true },
  // Encyklopedie migrace ID
  P9362: { ignore: true },
  // Tacoma-Pierce County Obituary Index ID
  P9363: { ignore: true },
  // Encyclopedia of Mediterranean Humanism ID
  P9364: { ignore: true },
  // Modernist Commons ID
  P9365: { ignore: true },
  // Rombase ID (English)
  P9366: { ignore: true },
  // Filmitalia film ID
  P9367: { ignore: true },
  // CNA topic ID
  P9368: { ignore: true },
  // Fortalezas.org ID
  P9369: { ignore: true },
  // Place Names NI ID
  P9370: { ignore: true },
  // FranceArchives agent ID
  P9371: { ignore: true },
  // NHS Organisation Data Service ID
  P9372: { ignore: true },
  // ODLIS ID
  P9374: { ignore: true },
  // Sociologická encyklopedie ID
  P9375: { ignore: true },
  // BMZ lemma ID
  P9377: { ignore: true },
  // FindeB lemma ID
  P9378: { ignore: true },
  // Lexer lemma ID
  P9379: { ignore: true },
  // LexerN lemma ID
  P9380: { ignore: true },
  // Enslaved.org place ID
  P9381: { ignore: true },
  // The Mountaineers Routes & Places ID
  P9383: { ignore: true },
  // Adelung lemma ID
  P9384: { ignore: true },
  // DWB lemma ID
  P9385: { ignore: true },
  // DWB2 lemma ID
  P9386: { ignore: true },
  // GWB lemma ID
  P9387: { ignore: true },
  // Meyers lemma ID
  P9388: { ignore: true },
  // RDWB1 lemma ID
  P9389: { ignore: true },
  // Wander lemma ID
  P9390: { ignore: true },
  // Česká divadelní encyklopedie ID
  P9391: { ignore: true },
  // Tschechische Theaterenzyklopädie ID
  P9392: { ignore: true },
  // Tacoma-Pierce County Buildings Index ID
  P9393: { ignore: true },
  // Louvre Museum ARK ID
  P9394: { ignore: true },
  // Lëtzebuerger Online Dictionnaire ID
  P9397: { ignore: true },
  // Armenian Book ID
  P9398: { ignore: true },
  // athletics.lv athlete ID
  P9399: { ignore: true },
  // Government of Canada Core Subject Thesaurus ID
  P9400: { ignore: true },
  // Thésaurus des sujets de base du gouvernement du Canada ID
  P9401: { ignore: true },
  // GameSpot developer ID
  P9402: { ignore: true },
  // Musée national de la Marine ID
  P9403: { ignore: true },
  // OFDb person ID
  P9404: { ignore: true },
  // NMRShiftDB structure ID
  P9405: { ignore: true },
  // Tacoma Local History & Biography Index ID
  P9406: { ignore: true },
  // Polignosi ID
  P9407: { ignore: true },
  // Washington Flora Checklist ID
  P9408: { ignore: true },
  // American University of Beirut's Libraries title ID
  P9409: { ignore: true },
  // USCG MIC
  P9411: { ignore: true },
  // Arca author ID
  P9412: { ignore: true },
  // Viasona ID
  P9414: { ignore: true },
  // ÖCV Biolex ID
  P9415: { ignore: true },
  // Camptocamp ID
  P9417: { ignore: true },
  // Biblio.com ID
  P9418: { ignore: true },
  // CNN contributor ID
  P9420: { ignore: true },
  // IFVPF ID
  P9421: { ignore: true },
  // Musikasten ID
  P9422: { ignore: true },
  // OregonFlora taxon ID
  P9423: { ignore: true },
  // Demozoo group ID
  P9424: { ignore: true },
  // Image Comics creator ID
  P9425: { ignore: true },
  // Generals of World War II ID
  P9426: { ignore: true },
  // La Réunion des Livres ID
  P9427: { ignore: true },
  // Humanitāro zinātņu virtuālā enciklopēdija concept ID
  P9428: { ignore: true },
  // Humanitāro zinātņu virtuālā enciklopēdija person ID
  P9429: { ignore: true },
  // Encyclopedia of Jewish Women ID
  P9430: { ignore: true },
  // Urban Archive ID
  P9431: { ignore: true },
  // GCD publisher ID
  P9432: { ignore: true },
  // Letecká badatelna accident ID
  P9433: { ignore: true },
  // Proveana ID
  P9434: { ignore: true },
  // KATOTTH ID
  P9435: { ignore: true },
  // La Fenice Theatre in Venice person ID
  P9436: { ignore: true },
  // Politiklexikon ID
  P9437: { ignore: true },
  // Europalexikon ID
  P9438: { ignore: true },
  // National Inventory of Dams ID
  P9439: { ignore: true },
  // Wissens-Aggregator Mittelalter und Frühe Neuzeit ID
  P9441: { ignore: true },
  // Indigenous Lands in Brazil ID
  P9442: { ignore: true },
  // Virginia House of Delegates ID
  P9443: { ignore: true },
  // CAOI person ID
  P9444: { ignore: true },
  // Encyklopedie antropologie ID
  P9445: { ignore: true },
  // Our Campaigns race ID
  P9446: { ignore: true },
  // Olympedia affiliations ID
  P9447: { ignore: true },
  // ANPI place numeric ID
  P9449: { ignore: true },
  // National Provider Identifier
  P9450: { ignore: true },
  // Dicionário Histórico-Biográfico Brasileiro ID
  P9451: { ignore: true },
  // Brapci author ID
  P9452: { ignore: true },
  // WikiRoutes ID
  P9454: { ignore: true },
  // Biographia Benedictina ID
  P9455: { ignore: true },
  // Periodical ID in a database of the Ministry of Culture of the Czech Republic
  P9456: { ignore: true },
  // National Database of Laws and Regulations ID
  P9457: { ignore: true },
  // Russians of Latvia ID
  P9458: { ignore: true },
  // Rekhta author ID
  P9459: { ignore: true },
  // Washington Rare Plant Field Guide ID (PDF version)
  P9460: { ignore: true },
  // DzygaMDB film ID
  P9461: { ignore: true },
  // Bioguiden movie theater ID
  P9462: { ignore: true },
  // MovieMeter person ID
  P9463: { ignore: true },
  // Biblioteca Digital Curt Nimuendajú ID
  P9464: { ignore: true },
  // SonyLIV show ID
  P9465: { ignore: true },
  // Gyldendals Teaterleksikon ID
  P9466: { ignore: true },
  // IAU member ID
  P9467: { ignore: true },
  // LIMA media artist ID
  P9468: { ignore: true },
  // Singers.com ID
  P9469: { ignore: true },
  // HistoryLink essay number
  P9470: { ignore: true },
  // Art for the City inventory number
  P9471: { ignore: true },
  // Cimiterium ID
  P9472: { ignore: true },
  // Smithsonian ARK ID
  P9473: { ignore: true },
  // Oregon Poetic Voices poet ID
  P9474: { ignore: true },
  // Encyclopedia of Korean Culture ID
  P9475: { ignore: true },
  // Malaysian school code
  P9476: { ignore: true },
  // Trap Danmark ID
  P9477: { ignore: true },
  // Finna ID
  P9478: { ignore: true },
  // Berliner Bezirkslexikon: Mitte ID
  P9479: { ignore: true },
  // Berliner Bezirkslexikon: Charlottenburg-Wilmersdorf ID
  P9480: { ignore: true },
  // Berliner Bezirkslexikon: Friedrichshain-Kreuzberg ID
  P9481: { ignore: true },
  // Catalogue of the General State Archives ID
  P9482: { ignore: true },
  // CofE archives catalogue ID
  P9483: { ignore: true },
  // J! Archive player ID
  P9484: { ignore: true },
  // CofE archives name ID
  P9485: { ignore: true },
  // HERO ID
  P9486: { ignore: true },
  // GLEIF registration authority code
  P9487: { ignore: true },
  // Archdiocese of Liverpool parish ID
  P9489: { ignore: true },
  // Yukon Archives authority record ID
  P9490: { ignore: true },
  // CofE archives place ID
  P9491: { ignore: true },
  // NC Highway Historical Marker Program ID
  P9492: { ignore: true },
  // National Historical Museums of Sweden agent ID
  P9495: { ignore: true },
  // Australian Thesaurus of Education Descriptors ID
  P9497: { ignore: true },
  // Enzyklopädie des europäischen Ostens ID
  P9498: { ignore: true },
  // Reallexikon zur Deutschen Kunstgeschichte ID
  P9500: { ignore: true },
  // Oregon Flora Image Project ID
  P9501: { ignore: true },
  // Digital DISCI ID
  P9502: { ignore: true },
  // MyBIS species ID
  P9503: { ignore: true },
  // Beirut Arab University's Libraries title ID
  P9504: { ignore: true },
  // Gardens of the Roman Empire ID
  P9505: { ignore: true },
  // Ultime lettere di condannati a morte e di deportati della Resistenza italiana person ID
  P9506: { ignore: true },
  // NBM authority ID
  P9507: { ignore: true },
  // MileSplit ID
  P9508: { ignore: true },
  // Mixcloud ID
  P9509: { ignore: true },
  // Forbes Russia profile ID
  P9510: { ignore: true },
  // am.hayazg.info ID
  P9511: { ignore: true },
  // bridgesport.ru player ID
  P9512: { ignore: true },
  // APA Dictionary of Psychology entry
  P9513: { ignore: true },
  // The Draft Review ID
  P9514: { ignore: true },
  // Nevada SHPO marker ID
  P9515: { ignore: true },
  // IUCN Green List ID
  P9516: { ignore: true },
  // National Association of Teachers of Singing member ID
  P9517: { ignore: true },
  // Danmarks Tekniske Kulturarv book ID
  P9518: { ignore: true },
  // Auschwitz Prisoners Database ID
  P9520: { ignore: true },
  // Biology Online Biology Dictionary entry
  P9521: { ignore: true },
  // Biblioteca di Santa Sabina ID
  P9522: { ignore: true },
  // Senate of Romania person ID
  P9523: { ignore: true },
  // Chamber of Deputies of Romania person ID
  P9524: { ignore: true },
  // LMIC musician ID
  P9525: { ignore: true },
  // Scholarpedia article ID
  P9526: { ignore: true },
  // Historic Hawai‘i Foundation place ID
  P9527: { ignore: true },
  // Digital Library of Armenian Literature author ID
  P9528: { ignore: true },
  // Den Danske Ordbog article ID
  P9529: { ignore: true },
  // Den Danske Ordbog idiom ID
  P9530: { ignore: true },
  // OpenCorporates register ID
  P9532: { ignore: true },
  // Biblioteche della Custodia di Terra Santa a Gerusalemme ID
  P9534: { ignore: true },
  // IBSF competition ID
  P9535: { ignore: true },
  // SAIA authority ID
  P9536: { ignore: true },
  // NFF club ID
  P9537: { ignore: true },
  // music austria ID
  P9538: { ignore: true },
  // Secondary Archive artist ID
  P9539: { ignore: true },
  // Editorial Freelancers Association member ID
  P9540: { ignore: true },
  // MacArthur Fellows Program ID
  P9541: { ignore: true },
  // representatives1821.gr ID
  P9542: { ignore: true },
  // Memento Vienna person ID
  P9543: { ignore: true },
  // universal equine life number
  P9544: { ignore: true },
  // Encyclopedia of China Online Database ID (Second Edition)
  P9545: { ignore: true },
  // Indiana State Historical Marker Program ID
  P9546: { ignore: true },
  // Apple Music label ID
  P9550: { name: "Apple Music", icon: "socials/apple-music.svg" },
  // bio.se movie theater ID
  P9551: { ignore: true },
  // MyBIS protected area ID
  P9552: { ignore: true },
  // Dialnet thesis ID
  P9553: { ignore: true },
  // hPSCreg cell line ID
  P9554: { ignore: true },
  // Michigan State University Library Comic Art Collection Record Number
  P9555: { ignore: true },
  // LTit person ID
  P9556: { ignore: true },
  // JECFA number
  P9557: { ignore: true },
  // Badok ID
  P9558: { ignore: true },
  // Sigla ID
  P9559: { ignore: true },
  // DCinemaToday company ID
  P9560: { ignore: true },
  // CEV coach ID
  P9561: { ignore: true },
  // CEV team ID
  P9562: { ignore: true },
  // Encyclopedia of Renaissance Philosophy ID
  P9563: { ignore: true },
  // Biographical Dictionary of Chinese Christianity ID
  P9564: { ignore: true },
  // AdServio ID
  P9565: { ignore: true },
  // PeakVisor peak ID
  P9568: { ignore: true },
  // PeakVisor range ID
  P9569: { ignore: true },
  // PeakVisor area ID
  P9571: { ignore: true },
  // PeakVisor park ID
  P9572: { ignore: true },
  // Anime Filler List show ID
  P9573: { ignore: true },
  // Anime Filler List episode slug
  P9574: { ignore: true },
  // Australian Music Centre artist ID
  P9575: { ignore: true },
  // Danish 2010 redlist identifier
  P9576: { ignore: true },
  // synonymer.se ID
  P9577: { ignore: true },
  // SOUNZ work ID
  P9578: { ignore: true },
  // vedidk ID
  P9579: { ignore: true },
  // Microlepidoptera.nl ID
  P9580: { ignore: true },
  // UNITER Award person ID
  P9581: { ignore: true },
  // sense on DHLE
  P9583: { ignore: true },
  // The Criterion Collection film ID
  P9584: { ignore: true },
  // Lexikon der österreichischen Provenienzforschung ID
  P9585: { ignore: true },
  // Apple TV movie ID
  P9586: { ignore: true },
  // Canadian Music Centre Composer Showcase ID
  P9587: { ignore: true },
  // causesanti.va ID
  P9588: { ignore: true },
  // Muziekencyclopedie ID
  P9589: { ignore: true },
  // North Carolina session law
  P9590: { ignore: true },
  // #SOSBrutalism ID
  P9591: { ignore: true },
  // Online Archive of California finding aid ID
  P9592: { ignore: true },
  // Museums in Styria ID
  P9593: { ignore: true },
  // Bodleian Archives & Manuscripts person ID
  P9594: { ignore: true },
  // SOR bird ID
  P9595: { ignore: true },
  // ToateAnimalele ID
  P9596: { ignore: true },
  // Polo bibliografico della ricerca title ID
  P9598: { ignore: true },
  // Polo bibliografico della ricerca author ID
  P9599: { ignore: true },
  // OSDN project
  P9602: { ignore: true },
  // Scholasticon person ID
  P9603: { ignore: true },
  // DiVA authority-person
  P9604: { ignore: true },
  // CDep.Ro NGO ID
  P9605: { ignore: true },
  // WUA author ID
  P9606: { ignore: true },
  // hush.am person ID
  P9607: { ignore: true },
  // Moths and Butterflies of Europe and North Africa ID
  P9608: { ignore: true },
  // What Works Clearinghouse study ID
  P9609: { ignore: true },
  // PoetsGate poet ID
  P9610: { ignore: true },
  // Repositório da Produção da USP person ID
  P9612: { ignore: true },
  // ctext data entity ID
  P9613: { ignore: true },
  // Australian Music Centre work ID
  P9614: { ignore: true },
  // Badkartan.se ID
  P9615: { ignore: true },
  // Eionet bathingWaterIdentifier
  P9616: { ignore: true },
  // ifixit device ID
  P9617: { ignore: true },
  // AlternativeTo software ID
  P9618: { ignore: true },
  // Price One Penny author ID
  P9619: { ignore: true },
  // Nevada Women's History Project ID
  P9620: { ignore: true },
  // Treccani's Enciclopedia della Matematica ID
  P9621: { ignore: true },
  // Price One Penny work ID
  P9622: { ignore: true },
  // Price One Penny library ID
  P9623: { ignore: true },
  // Price One Penny publisher ID
  P9624: { ignore: true },
  // Dizionario Biografico dell'Educazione (1800–2000) ID
  P9625: { ignore: true },
  // Biographical Encyclopedia of Astronomers ID
  P9626: { ignore: true },
  // Romanistenlexikon ID
  P9627: { ignore: true },
  // composers.am person ID
  P9628: { ignore: true },
  // Armeniapedia ID
  P9629: { ignore: true },
  // OpenCorporates register jurisdiction
  P9630: { ignore: true },
  // armradioarchive.am person ID
  P9631: { ignore: true },
  // PANGO lineage code
  P9632: { ignore: true },
  // AZGS Document Repository ID
  P9633: { ignore: true },
  // AADFI member ID
  P9634: { ignore: true },
  // electronic Essential Medicines List medicine ID
  P9635: { ignore: true },
  // Japan PlayStation Software Database ID
  P9636: { ignore: true },
  // Erfgoedkaart ID
  P9637: { ignore: true },
  // Romanian diplomatic mission ID
  P9638: { ignore: true },
  // Foreign diplomatic mission in Romania ID
  P9639: { ignore: true },
  // PAS member ID
  P9640: { ignore: true },
  // fondoambiente.it ID
  P9641: { ignore: true },
  // Olschki author ID
  P9642: { ignore: true },
  // French Etalab parcel visualization code
  P9643: { ignore: true },
  // Geneanet family name ID
  P9644: { ignore: true },
  // Online Coins of the Roman Empire ID
  P9645: { ignore: true },
  // senato.archivioluce.it person ID
  P9646: { ignore: true },
  // DIP ID
  P9647: { ignore: true },
  // Newspaper Genre List ID
  P9648: { ignore: true },
  // Dutch Caribbean Species Register ID
  P9649: { ignore: true },
  // Internet Game Database company ID
  P9650: { ignore: true },
  // Book Owners Online person ID
  P9651: { ignore: true },
  // Bod-Inc Online author ID
  P9653: { ignore: true },
  // Burke Herbarium Image Collection ID
  P9654: { ignore: true },
  // Ropiky.net pillbox ID
  P9655: { ignore: true },
  // Istituto Veneto di Scienze, Lettere ed Arti member ID
  P9656: { ignore: true },
  // Memobase ID
  P9657: { ignore: true },
  // Standard Citation Forms for Rare Materials Cataloging ID
  P9658: { ignore: true },
  // Skipsrevyen ID
  P9659: { ignore: true },
  // EBAF authority ID
  P9661: { ignore: true },
  // LdiF person ID
  P9662: { ignore: true },
  // Musica Baltica person ID
  P9663: { ignore: true },
  // EGID
  P9665: { ignore: true },
  // RBF event ID
  P9666: { ignore: true },
  // cirkev.cz Catholic services ID
  P9668: { ignore: true },
  // Olympic Committee of Israel athlete ID
  P9669: { ignore: true },
  // ZKM person ID
  P9670: { ignore: true },
  // Bundesstiftung Aufarbeitung person ID
  P9671: { ignore: true },
  // Fotodok ID
  P9672: { ignore: true },
  // museumPASSmusées ID
  P9673: { ignore: true },
  // Burke Herbarium Image Collection contributor ID
  P9674: { ignore: true },
  // Vindskyddskartan.se ID
  P9676: { ignore: true },
  // Hokej.cz player ID
  P9677: { ignore: true },
  // Franciscan Center of Christian Oriental Studies ID
  P9678: { ignore: true },
  // Companies Registration Office (Ireland) Registration Number
  P9679: { ignore: true },
  // Gutenberg Biographics ID
  P9682: { ignore: true },
  // Idaho Species ID
  P9684: { ignore: true },
  // Montana Field Guide species ID
  P9685: { ignore: true },
  // Classical Archives composer ID
  P9686: { ignore: true },
  // Crosscut author ID
  P9689: { ignore: true },
  // E-Fauna BC species ID
  P9690: { ignore: true },
  // E-Flora BC species ID
  P9691: { ignore: true },
  // LexM ID
  P9692: { ignore: true },
  // BES-Net user ID
  P9693: { ignore: true },
  // VK Music artist ID
  P9694: { ignore: true },
  // Legie 100 legionary ID
  P9695: { ignore: true },
  // Buzer.de law identification
  P9696: { ignore: true },
  // Games@Mail.ru ID
  P9697: { ignore: true },
  // World Curling Federation Championship ID
  P9698: { ignore: true },
  // FOIH themes ID
  P9699: { ignore: true },
  // African Film Database ID
  P9701: { ignore: true },
  // Gameblog.fr game ID
  P9702: { ignore: true },
  // CCC in Idaho Collection ID
  P9703: { ignore: true },
  // Monumental Trees ID
  P9704: { ignore: true },
  // Bauforschung Baden-Württemberg Objekt-ID
  P9705: { ignore: true },
  // Director Identification Number
  P9706: { ignore: true },
  // GCD creator ID
  P9707: { ignore: true },
  // Handzone player ID
  P9708: { ignore: true },
  // Games und Erinnerungskultur Datenbank ID
  P9709: { ignore: true },
  // Lexikon Westfälischer Autorinnen und Autoren person ID
  P9710: { ignore: true },
  // cIMeC.Ro museum ID
  P9711: { ignore: true },
  // Research Resource Identifier
  P9712: { ignore: true },
  // Swedish National Archive agent ID
  P9713: { ignore: true },
  // Room of Names ID
  P9715: { ignore: true },
  // Native Land territory ID
  P9716: { ignore: true },
  // Native Land language ID
  P9717: { ignore: true },
  // eishockey.info player ID
  P9718: { ignore: true },
  // HockeyLive player ID
  P9719: { ignore: true },
  // fotoCH photographer ID
  P9720: { ignore: true },
  // UFC athlete ID
  P9722: { ignore: true },
  // 20th Century Chinese Biographical Database ID
  P9723: { ignore: true },
  // FightMatrix fighter ID
  P9724: { ignore: true },
  // EBIDAT ID
  P9725: { ignore: true },
  // Bellator fighter ID
  P9726: { ignore: true },
  // WTA-Trainer-ID
  P9727: { ignore: true },
  // Tapology fighter ID
  P9728: { ignore: true },
  // Chidlovski.Com USSR national ice hockey team player ID
  P9730: { ignore: true },
  // Treccani's Enciclopedia Dantesca ID
  P9734: { ignore: true },
  // Città e Cattedrali ID
  P9735: { ignore: true },
  // MANTO ID
  P9736: { ignore: true },
  // WMO code
  P9737: { ignore: true },
  // IFPNI author ID
  P9738: { ignore: true },
  // Landshuth ID
  P9739: { ignore: true },
  // Pladias ID
  P9741: { ignore: true },
  // Central records of collections ID
  P9742: { ignore: true },
  // Podchaser creator ID
  P9743: { name: "Podchaser", icon: "socials/podchaser.webp" },
  // Steam Greenlight game ID
  P9744: { name: "Steam", icon: "socials/steam.svg" },
  // CEICE school code
  P9746: { ignore: true },
  // Adventure Corner video game ID
  P9747: { ignore: true },
  // FRB person ID
  P9749: { ignore: true },
  // Apple TV episode ID
  P9750: { ignore: true },
  // Apple TV show ID
  P9751: { ignore: true },
  // FRB event ID
  P9752: { ignore: true },
  // Wikidata language code
  P9753: { ignore: true },
  // Raakvlak inventory number
  P9754: { ignore: true },
  // Scenic Washington scenic drives and road trips ID
  P9755: { ignore: true },
  // Schoenberg Database of Manuscripts name ID
  P9756: { ignore: true },
  // Schoenberg Database of Manuscripts place ID
  P9757: { ignore: true },
  // Treccani's Enciclopedia del Cinema ID
  P9760: { ignore: true },
  // IRIS SNS author ID
  P9761: { ignore: true },
  // U.S. Ski & Snowboard athlete ID
  P9762: { ignore: true },
  // Great Ukrainian Encyclopedia Online ID
  P9765: { ignore: true },
  // FIBA 3x3 player ID
  P9766: { ignore: true },
  // Women Also Know History ID
  P9768: { ignore: true },
  // Marmiton ID
  P9769: { ignore: true },
  // Knesset member ID
  P9770: { ignore: true },
  // The New Yorker contributor ID
  P9772: { ignore: true },
  // Kielitoimiston sanakirja ID
  P9773: { ignore: true },
  // BNM bibliographic record ID
  P9774: { ignore: true },
  // Treccani's Lessico del XXI Secolo ID
  P9775: { ignore: true },
  // e-Rad researcher number
  P9776: { ignore: true },
  // Rock Paper Shotgun game ID
  P9777: { ignore: true },
  // Looted Cultural Assets Database ID
  P9778: { ignore: true },
  // abART term ID
  P9779: { ignore: true },
  // The Women's Print History Project person ID
  P9780: { ignore: true },
  // FANZA AV actress ID
  P9781: { ignore: true },
  // Tax Identification Number (Belarus)
  P9782: { ignore: true },
  // IFFR filmmaker ID
  P9783: { ignore: true },
  // Index Theologicus publication ID
  P9784: { ignore: true },
  // IrishTheatre.ie company ID
  P9785: { ignore: true },
  // Joods Biografisch Woordenboek ID
  P9786: { ignore: true },
  // Smartify artwork ID
  P9787: { ignore: true },
  // Yale Center for British Art artwork Lido ID
  P9789: { ignore: true },
  // ASE person ID
  P9791: { ignore: true },
  // Alsharek Archive author ID
  P9792: { ignore: true },
  // UCLA Space Inventory LocID
  P9794: { ignore: true },
  // ARPI author ID
  P9795: { ignore: true },
  // IRIS SSSUP author ID
  P9796: { ignore: true },
  // Royal Ontario Museum ID
  P9797: { ignore: true },
  // Palynodata taxa ID
  P9799: { ignore: true },
  // CDDA designationTypeCode
  P9800: { ignore: true },
  // PsycNET ID
  P9801: { ignore: true },
  // Penguin Random House author ID
  P9802: { ignore: true },
  // Palynodata publications ID
  P9804: { ignore: true },
  // Mapping the Lives ID
  P9805: { ignore: true },
  // WiiG game ID
  P9806: { ignore: true },
  // SNK ID
  P9807: { ignore: true },
  // arheologi.ro ID
  P9808: { ignore: true },
  // Enciclopedia dell'Arte Antica ID
  P9809: { ignore: true },
  // Asian Historical Architecture structure ID
  P9811: { ignore: true },
  // Likee username
  P9812: { name: "Likee", icon: "socials/likee.svg" },
  // Team Deutschland Paralympics ID
  P9814: { ignore: true },
  // BMC ID
  P9815: { ignore: true },
  // Kartridge game ID
  P9816: { ignore: true },
  // ISL ID
  P9817: { ignore: true },
  // Penguin Random House book ID
  P9818: { ignore: true },
  // Daum Cafe ID
  P9819: { ignore: true },
  // Freeview show ID
  P9820: { ignore: true },
  // Unconsenting Media ID
  P9821: { ignore: true },
  // TeamNL athlete ID
  P9822: { ignore: true },
  // Volleybox ID
  P9823: { ignore: true },
  // COD ID
  P9824: { ignore: true },
  // allabolag.se person ID
  P9825: { ignore: true },
  // Great Encyclopedia of Cyril and Methodius entry ID
  P9826: { ignore: true },
  // GSSO ID
  P9827: { ignore: true },
  // Fontaines de France ID
  P9828: { ignore: true },
  // KNHB ID
  P9829: { ignore: true },
  // DC Books book ID
  P9830: { ignore: true },
  // Igromania developer/publisher ID
  P9832: { ignore: true },
  // Deutsche Sporthilfe ID
  P9833: { ignore: true },
  // Finnish National Gallery artwork ID
  P9834: { ignore: true },
  // Igromania series ID
  P9835: { ignore: true },
  // National Diet Library persistent work ID
  P9836: { ignore: true },
  // Svensk ordbok ID
  P9837: { ignore: true },
  // ECO code
  P9838: { ignore: true },
  // izeltlabuak.hu ID
  P9839: { ignore: true },
  // Food.com ID
  P9840: { ignore: true },
  // Jornal do Vôlei ID
  P9841: { ignore: true },
  // MART catalog person ID
  P9842: { ignore: true },
  // IRIS UNINA author ID
  P9843: { ignore: true },
  // IRIS UNIPV author ID
  P9844: { ignore: true },
  // Overnia ID
  P9845: { ignore: true },
  // HandiSport Équipes de France ID
  P9846: { ignore: true },
  // Cinemaitaliano person ID
  P9847: { ignore: true },
  // Cinemaitaliano film ID
  P9848: { ignore: true },
  // Mozilla extension ID
  P9849: { ignore: true },
  // Enciclopedia dell'Arte Medievale ID
  P9850: { ignore: true },
  // DC character ID
  P9851: { ignore: true },
  // Media Bias/Fact Check ID
  P9852: { ignore: true },
  // Australian Medical Pioneers Index ID
  P9853: { ignore: true },
  // eAmbrosia ID
  P9854: { ignore: true },
  // Edizioni Ares author ID
  P9855: { ignore: true },
  // Al-Jazeera author ID
  P9856: { ignore: true },
  // Turkish Cinema Archive Database film ID
  P9857: { ignore: true },
  // Civilisti Italiani member ID
  P9858: { ignore: true },
  // Government Publications Number (Taiwan)
  P9859: { ignore: true },
  // Global Location Number
  P9860: { ignore: true },
  // Iași Central University Library ID
  P9861: { ignore: true },
  // Encyclopaedia of Islam (second edition) ID
  P9862: { ignore: true },
  // Gujarati Vishwakosh entry
  P9863: { ignore: true },
  // Télé-Loisirs ID
  P9864: { ignore: true },
  // Anagrafe degli studiosi ID
  P9865: { ignore: true },
  // e-Maapõu stratigraphy ID
  P9867: { ignore: true },
  // INAPP Thesaurus ID
  P9868: { ignore: true },
  // Douyin video ID
  P9869: { ignore: true },
  // IndieMag game ID
  P9870: { ignore: true },
  // INAPP author ID
  P9871: { ignore: true },
  // TBDB ID
  P9872: { ignore: true },
  // Enciclopedia dello Sport ID
  P9873: { ignore: true },
  // INAPP work ID
  P9874: { ignore: true },
  // Fondation du patrimoine ID
  P9875: { ignore: true },
  // Endemia.nc animal taxon ID
  P9876: { ignore: true },
  // Gry-Online game ID
  P9877: { ignore: true },
  // Encyclopaedia of Islam (first edition) ID
  P9878: { ignore: true },
  // Encyclopaedia of Islam (third edition) ID
  P9879: { ignore: true },
  // Festivaletteratura person ID
  P9880: { ignore: true },
  // Every Noise at Once ID
  P9881: { ignore: true },
  // Spotify show episode ID
  P9882: { name: "Spotify", icon: "socials/spotify.svg" },
  // Online Begraafplaatsen cemetery ID
  P9884: { ignore: true },
  // Bing entity ID
  P9885: { ignore: true },
  // TermCymru ID
  P9886: { ignore: true },
  // NZTCS ID
  P9889: { ignore: true },
  // Online Begraafplaatsen person ID
  P9890: { ignore: true },
  // UK Renewable Energy Planning Database ID
  P9891: { ignore: true },
  // ICCD ID - Santuari Cristiani
  P9892: { ignore: true },
  // Naver Post member ID
  P9893: { ignore: true },
  // Swedish Food Agency food ID
  P9894: { ignore: true },
  // Dictionary of Old Norse Prose ID
  P9896: { ignore: true },
  // Australian Research Council Grant ID
  P9898: { ignore: true },
  // Grand dictionnaire terminologique ID
  P9900: { ignore: true },
  // Materials Project material ID
  P9902: { ignore: true },
  // All.Rugby player ID
  P9903: { ignore: true },
  // swisscovery edition ID
  P9907: { ignore: true },
  // e-Maapõu locality ID
  P9909: { ignore: true },
  // Online Begraafplaatsen memorial ID
  P9910: { ignore: true },
  // PoetsGate poem ID
  P9911: { ignore: true },
  // NVE reservoir ID
  P9912: { ignore: true },
  // FLORE author ID
  P9913: { ignore: true },
  // USiena air author ID
  P9914: { ignore: true },
  // IRIS IMT author ID
  P9915: { ignore: true },
  // Journées européennes du patrimoine ID
  P9916: { ignore: true },
  // Peoples.ru person ID
  P9917: { ignore: true },
  // Kallías ID
  P9918: { ignore: true },
  // Convict Records of Australia ID
  P9919: { ignore: true },
  // Croatian Language Portal identifier
  P9920: { ignore: true },
  // Issuu ID
  P9921: { ignore: true },
  // Flipboard ID
  P9922: { name: "Flipboard", icon: "socials/flipboard.svg" },
  // Umění pro město ID
  P9923: { ignore: true },
  // BBC Food ID
  P9925: { name: "BBC", icon: "socials/bbc.svg" },
  // Baijiahao ID
  P9928: { ignore: true },
  // Inventory of Heritage Artefacts institution ID
  P9930: { ignore: true },
  // Inventory of Heritage Artefacts object ID
  P9931: { ignore: true },
  // Vietherb species ID
  P9932: { ignore: true },
  // Vietherb metabolite ID
  P9933: { ignore: true },
  // Zenodo communities ID
  P9934: { ignore: true },
  // XXI Secolo ID
  P9935: { ignore: true },
  // Indonesian Museum National Registration System ID
  P9936: { ignore: true },
  // Postimees topic ID
  P9937: { ignore: true },
  // Densho Encyclopedia ID
  P9938: { ignore: true },
  // Institut de recherche pour le développement (IRD) identifier
  P9939: { ignore: true },
  // DWDS lemma ID
  P9940: { ignore: true },
  // Dizionario di Economia e Finanza ID
  P9941: { ignore: true },
  // National Gallery Prague work ID
  P9942: { ignore: true },
  // Hill Museum & Manuscript Library ID
  P9943: { ignore: true },
  // Database of Czech Amateur Theater person ID
  P9944: { ignore: true },
  // WDG lemma ID
  P9947: { ignore: true },
  // The World Factbook country ID
  P9948: { ignore: true },
  // AFNIL publisher ID
  P9949: { ignore: true },
  // RICS company code
  P9950: { ignore: true },
  // Greek Castles ID
  P9951: { ignore: true },
  // Gente di Tuscia ID
  P9952: { ignore: true },
  // Lexicon of Medieval Nordic Law ID
  P9953: { ignore: true },
  // Product and Service Code
  P9954: { ignore: true },
  // SAM ID
  P9955: { ignore: true },
  // IRIS Sapienza author ID
  P9956: { ignore: true },
  // museum-digital place ID
  P9957: { ignore: true },
  // Det Norske Akademis Ordbok ID
  P9958: { ignore: true },
  // PDDikti higher education institution ID
  P9959: { ignore: true },
  // VI.BE platform ID
  P9960: { ignore: true },
  // Owler company ID
  P9961: { ignore: true },
  // Ordbog over det danske sprog ID
  P9962: { ignore: true },
  // Svenska Akademins Ordbok-section ID
  P9963: { ignore: true },
  // Kalliope-Verbund ID
  P9964: { ignore: true },
  // Musik-Sammler.de artist ID
  P9965: { ignore: true },
  // United Nations Treaty Collection object ID
  P9966: { ignore: true },
  // Washington Rare Plant Field Guide ID (Web version)
  P9967: { ignore: true },
  // RAWG game ID
  P9968: { ignore: true },
  // TMOK ID
  P9973: { ignore: true },
  // Vokrug sveta article
  P9975: { ignore: true },
  // copyright registration
  P9976: { ignore: true },
  // Eneström Number
  P9978: { ignore: true },
  // NRK TV ID
  P9979: { ignore: true },
  // NLI Archive (bibliographic) ID
  P9980: { ignore: true },
  // L'Unificazione ID
  P9981: { ignore: true },
  // IGI Global Dictionary ID
  P9982: { ignore: true },
  // Enciclopedia dei ragazzi ID
  P9983: { ignore: true },
  // CANTIC ID
  P9984: { ignore: true },
  // EMBO member ID
  P9985: { ignore: true },
  // NDL earlier law ID
  P9986: { ignore: true },
  // AbandonSocios ID
  P9987: { ignore: true },
  // Bat Sheva Archive ID
  P9988: { ignore: true },
  // Literature.com book ID
  P9990: { ignore: true },
  // Literature.com ebook ID
  P9991: { ignore: true },
  // CantoDict word ID
  P9992: { ignore: true },
  // CantoDict character ID
  P9993: { ignore: true },
  // MYmovies person ID
  P9995: { ignore: true },
  // Chi era Costui plaque ID
  P9996: { ignore: true },
  // Bowers acronym
  P9997: { ignore: true },
  // Turkish Cinema Archive Database person ID
  P9999: { ignore: true },
  // Research Vocabularies Australia ID
  P10000: { ignore: true },
  // Austrian Football Association player ID
  P10001: { ignore: true },
  // Dewan Negara ID
  P10002: { ignore: true },
  // Arachne.org.au ID
  P10003: { ignore: true },
  // Dewan Rakyat ID
  P10004: { ignore: true },
  // Remontees-mecaniques.net ID
  P10005: { ignore: true },
  // AllSides ID
  P10006: { ignore: true },
  // Birdata ID
  P10007: { ignore: true },
  // Geographical Names Board of NSW geoname ID
  P10008: { ignore: true },
  // IRIS GSSI author ID
  P10009: { ignore: true },
  // IRIS IUSS author ID
  P10010: { ignore: true },
  // SISSA Digital Library author ID
  P10011: { ignore: true },
  // NSW Parliament member ID
  P10012: { ignore: true },
  // SNSF person ID
  P10013: { ignore: true },
  // FFCAM ID
  P10014: { ignore: true },
  // NatureScot Sitelink ID
  P10015: { ignore: true },
  // Refuges.info ID
  P10016: { ignore: true },
  // Dizionario delle Scienze Fisiche ID
  P10017: { ignore: true },
  // George Eastman Museum people ID
  P10018: { ignore: true },
  // Parliament of Australia MP ID
  P10020: { ignore: true },
  // UAE University Libraries ID
  P10021: { ignore: true },
  // Dizionario di Medicina ID
  P10022: { ignore: true },
  // Museu da Pessoa person ID
  P10023: { ignore: true },
  // Indigenous Corporation Number
  P10024: { ignore: true },
  // Toolhub ID
  P10025: { ignore: true },
  // Research Data Australia ID
  P10026: { ignore: true },
  // Tennis Abstract player ID
  P10028: { ignore: true },
  // Women in the Legislature ID
  P10029: { ignore: true },
  // StopGame ID
  P10030: { ignore: true },
  // Enciclopedia di Roma person ID
  P10031: { ignore: true },
  // Biografija.ru ID
  P10033: { ignore: true },
  // Derrieux agency person ID
  P10034: { ignore: true },
  // Kola Encyclopedia ID
  P10035: { ignore: true },
  // Penza Encyclopedia ID
  P10036: { ignore: true },
  // Enciclopedia della Scienza e della Tecnica ID
  P10037: { ignore: true },
  // Musées Nationaux Recuperation ID
  P10039: { ignore: true },
  // Lithuanian Heritage Registry code
  P10040: { ignore: true },
  // Nynorskordboka-ID
  P10041: { ignore: true },
  // Bokmålsordboka-ID
  P10042: { ignore: true },
  // Indonesian parliament candidate ID 2019
  P10043: { ignore: true },
  // Trove work ID
  P10044: { ignore: true },
  // Vokrug.tv show ID
  P10045: { ignore: true },
  // Apple maps ID
  P10046: { ignore: true },
  // Federation Council person ID
  P10047: { ignore: true },
  // Meetup group id
  P10048: { ignore: true },
  // Glitchwave genre ID
  P10049: { ignore: true },
  // Nederlandse Voornamenbank ID
  P10050: { ignore: true },
  // Standing Waters Database ID
  P10051: { ignore: true },
  // Vokrug.tv person ID
  P10052: { ignore: true },
  // Atlas Project of Roman Aqueducts ID
  P10053: { ignore: true },
  // IRIS UNIURB author ID
  P10054: { ignore: true },
  // IRIS Verona author ID
  P10055: { ignore: true },
  // IRIS UNISA author ID
  P10056: { ignore: true },
  // IRIS UNIMI author ID
  P10057: { ignore: true },
  // IRIS UNIBO author ID
  P10058: { ignore: true },
  // Philosophica ID
  P10059: { ignore: true },
  // Castforward ID
  P10060: { ignore: true },
  // Baidu Scholar journal ID
  P10061: { ignore: true },
  // Academy of Russian Television person ID
  P10062: { ignore: true },
  // SEKO ID
  P10063: { ignore: true },
  // NWT Species ID
  P10064: { ignore: true },
  // IJF competition ID
  P10065: { ignore: true },
  // JudoInside competition ID
  P10066: { ignore: true },
  // SEEK company ID
  P10068: { ignore: true },
  // Tabakalera ID
  P10069: { ignore: true },
  // IRIS UNIPG author ID
  P10070: { ignore: true },
  // EXQUIRITE author ID
  P10071: { ignore: true },
  // State Duma person ID
  P10072: { ignore: true },
  // ESPN MMA fighter ID
  P10073: { name: "ESPN", icon: "socials/espn.svg" },
  // Dr. Duke's Phytochemical and Ethnobotanical Databases chemical ID
  P10074: { ignore: true },
  // CREPČ institution ID
  P10075: { ignore: true },
  // CREPČ person ID
  P10076: { ignore: true },
  // Spanish Cultural Heritage thesauri ID
  P10077: { ignore: true },
  // Maritime Business Directory ID
  P10078: { ignore: true },
  // FAOLEX No
  P10079: { ignore: true },
  // EJU competition ID
  P10080: { ignore: true },
  // Australian Charities and Not‑for‑profits Register Charity ID
  P10081: { ignore: true },
  // CJFD journal ID
  P10082: { ignore: true },
  // Offshore Leaks Database ID
  P10083: { ignore: true },
  // Osmose Agency person ID
  P10084: { ignore: true },
  // biografiA ID
  P10085: { ignore: true },
  // Australian Prints + Printmaking artist ID
  P10086: { ignore: true },
  // Australian Prints + Printmaking work ID
  P10087: { ignore: true },
  // Dissernet institution ID
  P10088: { ignore: true },
  // DHAC ID
  P10090: { ignore: true },
  // Bildatlas-Künstler-ID
  P10092: { ignore: true },
  // AHPRA registration number
  P10094: { ignore: true },
  // FRACS Find a Surgeon profile ID
  P10095: { ignore: true },
  // Databáze her ID
  P10096: { ignore: true },
  // 7 Days person ID
  P10097: { ignore: true },
  // Oùvoir.ça film ID
  P10098: { ignore: true },
  // Australian Institute for Disaster Resilience Knowledge Hub ID
  P10099: { ignore: true },
  // SensCritique work ID
  P10100: { ignore: true },
  // Snob.ru author ID
  P10101: { ignore: true },
  // IRIS POLIBA author ID
  P10102: { ignore: true },
  // Re.Public@Polimi author ID
  P10103: { ignore: true },
  // PORTO@Iris author ID
  P10104: { ignore: true },
  // IRIS UNIVPM author ID
  P10105: { ignore: true },
  // Sceneweb organization ID
  P10106: { ignore: true },
  // Web Encyclopedia of Kyiv ID
  P10108: { ignore: true },
  // allplayers.in.ua player ID
  P10109: { ignore: true },
  // Apple Music track ID
  P10110: { name: "Apple Music", icon: "socials/apple-music.svg" },
  // AbeBooks ID
  P10111: { ignore: true },
  // Australian Statistical Geography 2021 ID
  P10112: { ignore: true },
  // Natural History Museum (London) person ID
  P10114: { ignore: true },
  // Indonesian Hospital ID
  P10115: { ignore: true },
  // Music of Armenia ID
  P10116: { ignore: true },
  // New Index of Middle English Verse ID
  P10117: { ignore: true },
  // World of Shakespeare ID
  P10118: { ignore: true },
  // AllHomes research location ID
  P10119: { ignore: true },
  // Australian Trade Mark Number
  P10120: { ignore: true },
  // Harvard Art Museums ID
  P10121: { ignore: true },
  // BookDepository publisher ID
  P10122: { ignore: true },
  // Catalog of arthistoricum.net ID
  P10123: { ignore: true },
  // Database of Czech librarians ID
  P10124: { ignore: true },
  // German Newspaper Portal ID
  P10125: { ignore: true },
  // Enciclopedia d'arte italiana ID
  P10126: { ignore: true },
  // Dissernet journal ID
  P10127: { ignore: true },
  // Dissernet person ID
  P10128: { ignore: true },
  // centrasia.org person ID
  P10130: { ignore: true },
  // The Parliamentary Newspaper ID
  P10131: { ignore: true },
  // Saint Petersburg Encyclopedia ID
  P10132: { ignore: true },
  // Russian Academy of Sciences person ID
  P10133: { ignore: true },
  // Place Names of New Brunswick ID
  P10134: { ignore: true },
  // Pandora track ID
  P10136: { name: "Pandora", icon: "socials/pandora.png" },
  // Nintendo64EVER ID
  P10137: { ignore: true },
  // Pandora album ID
  P10138: { name: "Pandora", icon: "socials/pandora.png" },
  // Indonesian College Code
  P10139: { ignore: true },
  // Institute of History of Ukraine ID
  P10140: { ignore: true },
  // Academy of Athens authority ID
  P10141: { ignore: true },
  // ThENC@ ID
  P10142: { ignore: true },
  // CDAEM person ID
  P10143: { ignore: true },
  // Famitsu game ID
  P10144: { ignore: true },
  // EPA Facility Registry Service ID
  P10145: { ignore: true },
  // Levels.fyi company ID
  P10146: { ignore: true },
  // U-PAD author ID
  P10147: { ignore: true },
  // CAMPUS author ID
  P10148: { ignore: true },
  // Original Esperanto Literature author ID
  P10149: { ignore: true },
  // iTunes genre ID
  P10151: { name: "iTunes", icon: "socials/itunes.svg" },
  // Rutube channel ID
  P10152: { ignore: true },
  // Nasha Versia ID
  P10153: { ignore: true },
  // Irkipedia ID
  P10154: { ignore: true },
  // Babesdirectory ID
  P10155: { ignore: true },
  // Numelyo ID
  P10156: { ignore: true },
  // ua-football.com player ID
  P10157: { ignore: true },
  // soccerpunter.com player ID
  P10158: { ignore: true },
  // pfl.uz player ID
  P10159: { ignore: true },
  // PGM author ID
  P10160: { ignore: true },
  // Irish Times profile ID
  P10161: { ignore: true },
  // politika-crimea.ru person ID
  P10162: { ignore: true },
  // Kinomania.ru actor ID
  P10163: { ignore: true },
  // Kinomania.ru film ID
  P10164: { ignore: true },
  // bards.ru person ID
  P10165: { ignore: true },
  // kinobaza.com.ua actor ID
  P10166: { ignore: true },
  // Kinobaza.com.ua film ID
  P10167: { ignore: true },
  // Zürich Herbaria collector ID
  P10168: { ignore: true },
  // N64-Database ID
  P10169: { ignore: true },
  // Channel One Russia show ID
  P10170: { ignore: true },
  // Kanobu ID
  P10171: { ignore: true },
  // Lambic.Info ID
  P10172: { ignore: true },
  // Smotrim.ru film ID
  P10173: { ignore: true },
  // CH district ID
  P10174: { ignore: true },
  // Digital Index of Middle English Verse ID
  P10175: { ignore: true },
  // Genie album ID
  P10178: { ignore: true },
  // Genie song ID
  P10179: { ignore: true },
  // Genie artist ID
  P10180: { ignore: true },
  // Austrian school ID
  P10181: { ignore: true },
  // DFIH business ID
  P10182: { ignore: true },
  // Corporate Identification Number (CIN) in India
  P10183: { ignore: true },
  // Ruskino actor ID
  P10184: { ignore: true },
  // Ruskino film ID
  P10185: { ignore: true },
  // Joconde use ID
  P10186: { ignore: true },
  // JSTOR artwork ID
  P10187: { ignore: true },
  // Dicionario da Real Academia Galega ID
  P10188: { ignore: true },
  // Bloomsbury Fashion Central ID
  P10189: { ignore: true },
  // MTB Data ID
  P10190: { ignore: true },
  // All About Birds ID
  P10191: { ignore: true },
  // Homosaurus ID (V3)
  P10192: { ignore: true },
  // GISAID identifier
  P10193: { ignore: true },
  // oKino.ua actor ID
  P10194: { ignore: true },
  // Library of Congress providers ID
  P10195: { ignore: true },
  // Norgeshistorie ID
  P10196: { ignore: true },
  // Numista mint ID
  P10197: { ignore: true },
  // Austrian Street ID
  P10198: { ignore: true },
  // F6S ID
  P10199: { ignore: true },
  // EU Whoiswho ID
  P10200: { ignore: true },
  // DFIH financier ID
  P10201: { ignore: true },
  // Express Gazeta ID
  P10202: { ignore: true },
  // All-Science Journal Classification Codes
  P10203: { ignore: true },
  // Repertorium Biblicum Medii Aevi ID
  P10204: { ignore: true },
  // Numista ID
  P10205: { ignore: true },
  // Comparably company ID
  P10206: { ignore: true },
  // Folketinget actor ID
  P10207: { ignore: true },
  // Coub channel ID
  P10208: { ignore: true },
  // Sachsens-Schlösser-Kennung
  P10210: { ignore: true },
  // Index of Middle English Verse ID
  P10211: { ignore: true },
  // Stack Exchange user ID
  P10212: { ignore: true },
  // Listen Notes podcast ID
  P10213: { ignore: true },
  // Casefile ID
  P10215: { ignore: true },
  // ILAB ID
  P10216: { ignore: true },
  // Oslo Byleksikon ID
  P10217: { ignore: true },
  // Slovak Theatre Virtual Database ID
  P10218: { ignore: true },
  // CNSflora ID
  P10219: { ignore: true },
  // Baseball Prospectus ID
  P10220: { ignore: true },
  // UNESCO ICH ID
  P10221: { ignore: true },
  // Artland artist ID
  P10222: { ignore: true },
  // Genie media ID
  P10223: { ignore: true },
  // Regroupement québécois de la danse (RQD) ID
  P10224: { ignore: true },
  // Archivio Storico dell'Università degli Studi di Cagliari person ID
  P10226: { ignore: true },
  // National Library of Ireland ID
  P10227: { ignore: true },
  // Viber group ID
  P10230: { ignore: true },
  // WikiStrinda ID
  P10231: { ignore: true },
  // Volgograd Oblast address register
  P10232: { ignore: true },
  // NER portfolio ID
  P10233: { ignore: true },
  // Der Spiegel topic ID
  P10234: { ignore: true },
  // LocalWiki ID
  P10235: { ignore: true },
  // Initiale ID
  P10236: { ignore: true },
  // Joconde representation ID
  P10237: { ignore: true },
  // Biografisches Handbuch – Todesopfer der Grenzregime am Eisernen Vorhang ID
  P10238: { ignore: true },
  // Filmovamista.cz film ID
  P10239: { ignore: true },
  // Arthive person ID
  P10240: { ignore: true },
  // Lur Encyclopedic Dictionary ID
  P10242: { ignore: true },
  // NatureServe Explorer ID
  P10243: { ignore: true },
  // NT Place Names Register ID
  P10244: { ignore: true },
  // MedlinePlus drug identifier
  P10245: { ignore: true },
  // MedlinePlus supplement identifier
  P10246: { ignore: true },
  // eurasian-defence.ru person ID
  P10247: { ignore: true },
  // everyeye.it ID
  P10248: { ignore: true },
  // Triple J Unearthed artist ID
  P10249: { ignore: true },
  // Parque de la Memoria ID
  P10250: { ignore: true },
  // Bokselskap.no ID
  P10251: { ignore: true },
  // Digital Mechanism and Gear Library ID
  P10252: { ignore: true },
  // oKino.ua film ID
  P10255: { ignore: true },
  // AMPAS collections item ID
  P10256: { ignore: true },
  // Pipe Organ Database organ ID
  P10257: { ignore: true },
  // UNICA IRIS author ID
  P10258: { ignore: true },
  // IRIS UNISS author ID
  P10259: { ignore: true },
  // AMS Glossary of Meteorology ID
  P10260: { ignore: true },
  // EtymWb lemma ID
  P10261: { ignore: true },
  // Offizielle Deutsche Charts album ID
  P10262: { ignore: true },
  // ARCHER ID
  P10264: { ignore: true },
  // Senators of Spain (1834-1923) ID
  P10265: { ignore: true },
  // AdoroCinema person ID
  P10266: { ignore: true },
  // Kinofilms.ua film ID
  P10267: { ignore: true },
  // Kinofilms.ua actor ID
  P10268: { ignore: true },
  // kino-teatr.ru film ID
  P10269: { ignore: true },
  // Hermitage Museum work ID
  P10270: { ignore: true },
  // Engineer's Line Reference
  P10271: { ignore: true },
  // Archive ouverte UNIGE ID
  P10272: { ignore: true },
  // Union of Bulgarian Composers ID
  P10274: { ignore: true },
  // AsianWiki ID
  P10275: { ignore: true },
  // ENEA-IRIS Open Archive author ID
  P10276: { ignore: true },
  // METRICA author ID
  P10277: { ignore: true },
  // Encyclopedia of Russian Jewry ID
  P10278: { ignore: true },
  // TVFPlay series ID
  P10279: { ignore: true },
  // Orthodoxie.com topic ID
  P10281: { ignore: true },
  // Slangopedia ID
  P10282: { ignore: true },
  // OpenAlex ID
  P10283: { ignore: true },
  // iCSO ID
  P10284: { ignore: true },
  // Indeed company ID
  P10285: { ignore: true },
  // DFG Science Classification
  P10287: { ignore: true },
  // Muz-TV ID
  P10288: { ignore: true },
  // Podchaser numeric ID
  P10289: { name: "Podchaser", icon: "socials/podchaser.webp" },
  // Wikisimpsons ID
  P10291: { ignore: true },
  // Wörterbuch der Präpositionen ID
  P10292: { ignore: true },
  // Tretyakov Gallery work ID
  P10293: { ignore: true },
  // Grand Duchy of Lithuania encyclopedia ID
  P10294: { ignore: true },
  // Amazon podcast ID
  P10295: { name: "Amazon", icon: "socials/amazon.svg" },
  // Habr company ID
  P10296: { ignore: true },
  // Google Arts & Culture entity ID
  P10297: { ignore: true },
  // Sceneweb artist ID
  P10298: { ignore: true },
  // Leopoldina member ID (new)
  P10299: { ignore: true },
  // German Lobbyregister ID
  P10301: { ignore: true },
  // Film.ru actor ID
  P10302: { ignore: true },
  // Film.ru film ID
  P10303: { ignore: true },
  // Apple Podcasts podcast episode ID
  P10304: { name: "Apple Podcasts", icon: "socials/apple-podcast.svg" },
  // StarHit ID
  P10305: { ignore: true },
  // North Data ID
  P10306: { ignore: true },
  // CYT/CCS
  P10307: { ignore: true },
  // LKI ID
  P10309: { ignore: true },
  // Unified book number
  P10310: { ignore: true },
  // AAGM artwork ID
  P10312: { ignore: true },
  // Domain suburb profile ID
  P10313: { ignore: true },
  // Archivio Biografico Comunale (Palermo) ID
  P10314: { ignore: true },
  // Artland fair ID
  P10315: { ignore: true },
  // Artland gallery ID
  P10317: { ignore: true },
  // Douban book series ID
  P10318: { ignore: true },
  // Douban book works ID
  P10319: { ignore: true },
  // Les Archives du spectacle organization ID
  P10320: { ignore: true },
  // Urban Electric Transit city ID
  P10321: { ignore: true },
  // Bergen byleksikon ID
  P10323: { ignore: true },
  // Ezeri.lv lake ID
  P10324: { ignore: true },
  // Japanese Canadian Artists Directory ID
  P10325: { ignore: true },
  // ICPSR Geographic Names Thesaurus ID
  P10326: { ignore: true },
  // ICPSR Organization Names Authority List ID
  P10327: { ignore: true },
  // ICPSR Personal Names Authority List ID
  P10328: { ignore: true },
  // ICPSR Subject Thesaurus ID
  P10329: { ignore: true },
  // Bugs! music video ID
  P10330: { ignore: true },
  // Washington Native Plant Society Plant Directory ID
  P10331: { ignore: true },
  // Kaspersky Encyclopedia ID
  P10332: { ignore: true },
  // New York Flora Atlas ID
  P10333: { ignore: true },
  // doollee.com literary agent ID
  P10334: { ignore: true },
  // doollee.com play ID
  P10335: { ignore: true },
  // doollee.com play publisher ID
  P10336: { ignore: true },
  // doollee.com playwright ID
  P10337: { ignore: true },
  // Dico en ligne Le Robert ID
  P10338: { ignore: true },
  // Inventaire national du Patrimoine culturel immatériel ID
  P10340: { ignore: true },
  // Réseau documents d'artistes ID
  P10341: { ignore: true },
  // Linguistic Atlas of Late Mediaeval English ID
  P10342: { ignore: true },
  // Key Biodiversity Areas factsheet ID
  P10343: { ignore: true },
  // Viki ID
  P10344: { ignore: true },
  // Clavis Apocryphorum Novi Testamenti ID
  P10345: { ignore: true },
  // Clavis Apocryphorum Veteris Testamenti ID
  P10346: { ignore: true },
  // World Economic Forum ID
  P10347: { ignore: true },
  // USgamer ID
  P10348: { ignore: true },
  // Podvig Naroda ID
  P10349: { ignore: true },
  // Vesti.ru dossier ID
  P10350: { ignore: true },
  // Turin University student ID
  P10351: { ignore: true },
  // Naver TV ID
  P10352: { ignore: true },
  // AusGamers ID
  P10353: { ignore: true },
  // PlayGround.ru ID
  P10354: { ignore: true },
  // Maritimt Magasin ship ID
  P10355: { ignore: true },
  // TV3 show ID
  P10356: { ignore: true },
  // TV3 video ID
  P10357: { ignore: true },
  // IRIS UNIGE author ID
  P10359: { ignore: true },
  // nzs.si player ID
  P10360: { ignore: true },
  // UKÄ classification of science topics 2016
  P10361: { ignore: true },
  // Lib.ru author ID
  P10362: { ignore: true },
  // Hessian Literature Council author ID
  P10363: { ignore: true },
  // Finnish real property ID
  P10364: { ignore: true },
  // GoodGame.ru ID
  P10365: { ignore: true },
  // Gardens Navigator ID
  P10366: { ignore: true },
  // Tagoo video game ID
  P10368: { ignore: true },
  // Lingua Libre ID
  P10369: { ignore: true },
  // Labyrinth database ID
  P10370: { ignore: true },
  // A9VG game ID
  P10371: { ignore: true },
  // Offizielle Deutsche Charts composer ID
  P10372: { ignore: true },
  // Mnemosine ID
  P10373: { ignore: true },
  // Boris Yeltsin Presidential Library ID
  P10375: { ignore: true },
  // ScienceDirect topic ID
  P10376: { ignore: true },
  // Irish Registered Charity Number (RCN)
  P10377: { ignore: true },
  // CHY Number
  P10378: { ignore: true },
  // dailytelefrag.ru ID
  P10379: { ignore: true },
  // Springer Nature Subjects Taxonomy ID
  P10380: { ignore: true },
  // VerbaAlpina ID
  P10381: { ignore: true },
  // Prosopographia Imperii Romani online ID
  P10382: { ignore: true },
  // Game World Navigator ID
  P10383: { ignore: true },
  // Bugs! track ID
  P10384: { ignore: true },
  // Vsemirnaya Istoriya Encyclopedia ID
  P10385: { ignore: true },
  // Databazeknih.cz work ID
  P10386: { ignore: true },
  // Databazeknih.cz author ID
  P10387: { ignore: true },
  // MakeMyTrip hotel ID
  P10388: { ignore: true },
  // Urban Electric Transit model ID
  P10389: { ignore: true },
  // GameGuru ID
  P10390: { ignore: true },
  // 100-Year Guide to Hebrew Theatre person ID
  P10391: { ignore: true },
  // INPA park ID
  P10392: { ignore: true },
  // Riot Pixels game ID
  P10393: { ignore: true },
  // Old-Games.RU ID
  P10394: { ignore: true },
  // Strongman Archives athlete ID
  P10395: { ignore: true },
  // SBN work ID
  P10396: { ignore: true },
  // SBN place ID
  P10397: { ignore: true },
  // Kanobu numeric game ID
  P10398: { ignore: true },
  // St. Sergius Institute authority ID
  P10399: { ignore: true },
  // CBDB.cz author ID
  P10400: { ignore: true },
  // CBDB.cz book ID
  P10401: { ignore: true },
  // ULI ID
  P10402: { ignore: true },
  // NLC Bibliography ID (Chinese language)
  P10403: { ignore: true },
  // LMHL author ID
  P10404: { ignore: true },
  // Biographisches Portal der Rabbiner ID
  P10405: { ignore: true },
  // Latvia water body classification code
  P10406: { ignore: true },
  // Encyclopedia of Database Systems ID
  P10407: { ignore: true },
  // UKÄ standard classification of Swedish science topics 2011
  P10409: { ignore: true },
  // QQ Music singer ID
  P10410: { ignore: true },
  // PubCRIS product number
  P10411: { ignore: true },
  // PKULaw CLI Code
  P10412: { ignore: true },
  // NVE glacier ID
  P10413: { ignore: true },
  // iXBT Games ID
  P10414: { ignore: true },
  // TVSA actor ID
  P10415: { ignore: true },
  // Künstlerdatenbank ID
  P10416: { ignore: true },
  // Culture.ru person ID
  P10417: { ignore: true },
  // Naver VIBE track ID
  P10418: { ignore: true },
  // LastDodo-area-identifier
  P10419: { ignore: true },
  // Index to Organism Names ID
  P10420: { ignore: true },
  // ELF code
  P10421: { ignore: true },
  // Historical Topography of Cultural Heritage object ID
  P10423: { ignore: true },
  // Refuge.tokyo video game ID
  P10424: { ignore: true },
  // Trip.com hotel ID
  P10425: { ignore: true },
  // tiket.com hotel ID
  P10426: { ignore: true },
  // PegiPegi Hotel ID
  P10427: { ignore: true },
  // parliament.uk member ID
  P10428: { ignore: true },
  // RODI-DB player ID
  P10429: { ignore: true },
  // HockeySlovakia.sk player ID
  P10430: { ignore: true },
  // Portable Antiquities Scheme object type identifier
  P10431: { ignore: true },
  // MovieMeter series ID
  P10432: { ignore: true },
  // Gesher Theatre Archive person ID
  P10433: { ignore: true },
  // Gesher Theatre Archive play ID
  P10434: { ignore: true },
  // Euro NCAP ID
  P10435: { ignore: true },
  // Drammen city encyclopedia ID
  P10436: { ignore: true },
  // GoHa.ru ID
  P10437: { ignore: true },
  // Norwegian thesaurus on genre and form identifier
  P10438: { ignore: true },
  // Qichacha firm ID
  P10439: { ignore: true },
  // WorldFootball.net match ID
  P10440: { ignore: true },
  // Michigan Legislative Bio ID
  P10441: { ignore: true },
  // hostelworld hostel ID
  P10442: { ignore: true },
  // Viciebsk Encyclopedia ID
  P10443: { ignore: true },
  // Encyclopedia of Russian avant-garde ID
  P10444: { ignore: true },
  // NetEase Music artist ID
  P10445: { ignore: true },
  // Chgk person ID
  P10446: { ignore: true },
  // Pamyat Naroda ID
  P10447: { ignore: true },
  // Traveloka hotel ID
  P10448: { ignore: true },
  // police zone ID (Belgium)
  P10450: { ignore: true },
  // Berlin Street ID
  P10451: { ignore: true },
  // Renacyt ID
  P10452: { ignore: true },
  // VGTimes ID
  P10453: { ignore: true },
  // CineCartaz film ID
  P10454: { ignore: true },
  // JeuxActu ID
  P10455: { ignore: true },
  // Urban Electric Transit country ID
  P10456: { ignore: true },
  // Change.org decision maker ID
  P10457: { ignore: true },
  // Podchaser episode ID
  P10458: { name: "Podchaser", icon: "socials/podchaser.webp" },
  // Rusactors actor ID
  P10459: { ignore: true },
  // Rusactors film ID
  P10460: { ignore: true },
  // Dumbarton Oaks object ID
  P10461: { ignore: true },
  // Encyclopedia of Russian America ID
  P10462: { ignore: true },
  // Dansk Navneleksikon ID
  P10463: { ignore: true },
  // CiteSeerX person ID
  P10465: { ignore: true },
  // CNKI author ID
  P10466: { ignore: true },
  // naturkartan.se ID
  P10467: { ignore: true },
  // HaBima Archive play ID
  P10468: { ignore: true },
  // HaBima Archive person ID
  P10469: { ignore: true },
  // Vedomosti company ID
  P10470: { ignore: true },
  // GrabFood restaurant ID
  P10471: { ignore: true },
  // Chinese School Identifier
  P10472: { ignore: true },
  // Drevo Encyclopedia ID
  P10473: { ignore: true },
  // svpressa.ru person ID
  P10474: { ignore: true },
  // GameMAG ID
  P10475: { ignore: true },
  // ICQ user ID
  P10477: { ignore: true },
  // Scottish Built Ships ID
  P10478: { ignore: true },
  // histrf.ru person ID
  P10479: { ignore: true },
  // symogih.org ID
  P10480: { ignore: true },
  // Mapping Manuscript Migrations manuscript ID
  P10481: { ignore: true },
  // US trademark serial number
  P10482: { ignore: true },
  // NLC Bibliography ID (foreign-language)
  P10483: { ignore: true },
  // GoFood restaurant ID
  P10484: { ignore: true },
  // Official Internet Portal of Legal Information ID
  P10485: { ignore: true },
  // Bavarian Monument Map Object-ID (building ensemble)
  P10486: { ignore: true },
  // skyscanner hotel ID
  P10487: { ignore: true },
  // NGO Darpan ID
  P10488: { ignore: true },
  // LDT @ Library Name Authority ID
  P10489: { ignore: true },
  // LDT @ Library Subject Terms Authority ID
  P10490: { ignore: true },
  // LDT @ Library Classification Authority ID
  P10491: { ignore: true },
  // USP Production Repository ID
  P10492: { ignore: true },
  // Transilien ID
  P10493: { ignore: true },
  // United Russia member ID
  P10494: { ignore: true },
  // MovieMeter TV season ID
  P10495: { ignore: true },
  // Joshua Project people group ID
  P10496: { ignore: true },
  // Moscow Street ID
  P10497: { ignore: true },
  // Moscow area ID
  P10498: { ignore: true },
  // vc.ru company ID
  P10499: { ignore: true },
  // Repetti on-line ID
  P10500: { ignore: true },
  // Cybersport.ru ID
  P10501: { ignore: true },
  // Québec Enterprise Number
  P10503: { ignore: true },
  // Discover Moscow ID
  P10504: { ignore: true },
  // ArTS author ID
  P10505: { ignore: true },
  // IRIS UNIUD author ID
  P10506: { ignore: true },
  // Game Informer ID
  P10507: { ignore: true },
  // Ligue 2 player ID
  P10508: { ignore: true },
  // Femiwiki ID
  P10509: { ignore: true },
  // Arachne entity ID
  P10510: { ignore: true },
  // VideoGameGeek developer ID
  P10511: { ignore: true },
  // Encyclopedia of Krasnoyarsk Krai ID
  P10512: { ignore: true },
  // Oregon State Parks ID
  P10513: { ignore: true },
  // Washington State Parks ID
  P10514: { ignore: true },
  // Sport24.ru person ID
  P10515: { ignore: true },
  // SINGULART artist ID
  P10516: { ignore: true },
  // eBru ID
  P10517: { ignore: true },
  // ICCROM authority ID
  P10518: { ignore: true },
  // Legal entity registered by the Ministry of Culture of the Czech Republic ID
  P10519: { ignore: true },
  // Rekhta book ID
  P10520: { ignore: true },
  // ILO code
  P10521: { ignore: true },
  // RedDoorz hotel ID
  P10522: { ignore: true },
  // Naver VIBE video ID
  P10523: { ignore: true },
  // Zvuk artist ID
  P10524: { ignore: true },
  // Italian Women Writers ID
  P10525: { ignore: true },
  // RBC company ID
  P10526: { ignore: true },
  // Madrean Discovery Expeditions Flora Database ID
  P10528: { ignore: true },
  // Madrean Discovery Expeditions Fauna Database ID
  P10529: { ignore: true },
  // Encyclopedia of Transbaikalia ID
  P10530: { ignore: true },
  // Encyclopedia of Transbaikalia person ID
  P10531: { ignore: true },
  // Booking.com numeric ID
  P10532: { ignore: true },
  // Agoda hotel numeric ID
  P10533: { ignore: true },
  // Australian Reptile Online Database ID
  P10534: { ignore: true },
  // RSPA modern authors ID
  P10535: { ignore: true },
  // RSPA ancient authors ID
  P10536: { ignore: true },
  // 1905.com film ID
  P10537: { ignore: true },
  // Leafsnap ID
  P10538: { ignore: true },
  // ImagesDéfense ID
  P10539: { ignore: true },
  // TASS Encyclopedia person ID
  P10540: { ignore: true },
  // TASS Encyclopedia country ID
  P10541: { ignore: true },
  // TASS Encyclopedia tag ID
  P10542: { ignore: true },
  // WIPO Pearl term ID
  P10543: { ignore: true },
  // Arizona State Legislators: Then & Now ID
  P10545: { ignore: true },
  // db.narb.by ID
  P10546: { ignore: true },
  // Kayak hotel ID
  P10547: { ignore: true },
  // Melon music video ID
  P10548: { ignore: true },
  // Evil Angel movie ID
  P10549: { ignore: true },
  // ACE Repertory publisher ID
  P10550: { ignore: true },
  // World of Waterfalls ID
  P10552: { ignore: true },
  // IxTheo authority ID
  P10553: { ignore: true },
  // BillionGraves grave ID
  P10554: { ignore: true },
  // eSbírky institution ID
  P10555: { ignore: true },
  // Enciclopedia del Novecento ID
  P10556: { ignore: true },
  // Zotero ID
  P10557: { ignore: true },
  // My World@Mail.Ru ID
  P10558: { ignore: true },
  // KSH code (historical)
  P10559: { ignore: true },
  // traveloka activities ID
  P10560: { ignore: true },
  // Virginia Tech Dendrology Factsheets ID
  P10561: { ignore: true },
  // SPLC group ID
  P10562: { ignore: true },
  // Invasive.org species ID
  P10711: { ignore: true },
  // EIA utility ID
  P10712: { ignore: true },
  // Biografiskt Lexikon för Finland ID (urn.fi)
  P10713: { ignore: true },
  // GuideStar India Organisations ID
  P10563: { ignore: true },
  // Encyclopedia of China ID (Third Edition)
  P10565: { ignore: true },
  // tiket to-do ID
  P10566: { ignore: true },
  // Speleologi del passato ID
  P10567: { ignore: true },
  // L'Humanité journalist ID
  P10569: { ignore: true },
  // L'Opinion journalist ID
  P10570: { ignore: true },
  // Le Monde journalist ID
  P10571: { ignore: true },
  // Le Figaro journalist ID
  P10572: { ignore: true },
  // Le Parisien journalist ID
  P10573: { ignore: true },
  // Les Échos journalist ID
  P10574: { ignore: true },
  // Libération journalist ID
  P10575: { ignore: true },
  // Intesa Sanpaolo Historical Archive Map ID
  P10576: { ignore: true },
  // Monoskop article ID
  P10577: { ignore: true },
  // IDU foreign theatre ID
  P10578: { ignore: true },
  // IDU theatre building ID
  P10579: { ignore: true },
  // IDU theatrical ensemble ID
  P10580: { ignore: true },
  // Cameroun COG
  P10581: { ignore: true },
  // Author ID from the Modern Discussion website
  P10582: { ignore: true },
  // SRSLY person ID
  P10583: { ignore: true },
  // FAOTERM ID
  P10584: { ignore: true },
  // Catalogue of Life ID
  P10585: { ignore: true },
  // Trovo ID
  P10586: { ignore: true },
  // IFPI GTIN
  P10587: { ignore: true },
  // MangaDex title ID
  P10589: { ignore: true },
  // All.Rugby club ID
  P10590: { ignore: true },
  // traveloka restaurant ID
  P10591: { ignore: true },
  // maPZS trails/locations ID
  P10592: { ignore: true },
  // Kinowiki ID
  P10593: { ignore: true },
  // Marriott hotel ID
  P10595: { ignore: true },
  // Chuvash Encyclopedia person ID
  P10596: { ignore: true },
  // Chuvash Encyclopedia place ID
  P10597: { ignore: true },
  // Chuvash Encyclopedia topic ID
  P10598: { ignore: true },
  // HarperCollins product ID
  P10599: { ignore: true },
  // Atlas of Cultural Heritage Calabria cultural place ID
  P10600: { ignore: true },
  // XJustiz registration court ID
  P10603: { ignore: true },
  // Atlante Beni Culturali Calabria item ID
  P10605: { ignore: true },
  // FID performing arts ID
  P10608: { ignore: true },
  // PLOS Thesaurus ID
  P10609: { ignore: true },
  // QQ Music album ID
  P10615: { ignore: true },
  // QQ Music song ID
  P10616: { ignore: true },
  // Beatport track ID
  P10617: { ignore: true },
  // Salzburger Literatur Netz ID
  P10618: { ignore: true },
  // Kramerius of Regional Library in Pardubice UUID
  P10619: { ignore: true },
  // Literatur Netz Oberösterreich ID
  P10620: { ignore: true },
  // 1905.com star ID
  P10621: { ignore: true },
  // OpaqueNamespace ID
  P10625: { ignore: true },
  // deckenmalerei.eu ID
  P10626: { ignore: true },
  // ODOT county code
  P10631: { ignore: true },
  // OpenSanctions ID
  P10632: { ignore: true },
  // CNGAL entry ID
  P10633: { ignore: true },
  // USA Track & Field athlete ID (www.usatf.org)
  P10634: { ignore: true },
  // National Associations Register Number Spain
  P10635: { ignore: true },
  // AperTO author ID
  P10638: { ignore: true },
  // IRIS UNIUPO author ID
  P10639: { ignore: true },
  // AlloCiné TV season ID
  P10641: { ignore: true },
  // Library of Parliament of Canada riding ID
  P10644: { ignore: true },
  // ARTEINFORMADO person ID
  P10646: { ignore: true },
  // Slovak Olympic athlete ID
  P10647: { ignore: true },
  // International Jewish Cemetery Project ID
  P10652: { ignore: true },
  // Via Rail station code
  P10653: { ignore: true },
  // WikiApiary farm
  P10656: { ignore: true },
  // DTB artistic gymnast ID
  P10657: { ignore: true },
  // Basketball Bundesliga UUID
  P10658: { ignore: true },
  // C-SPAN person numeric ID
  P10660: { ignore: true },
  // IndexCat ID
  P10662: { ignore: true },
  // lieferando restaurant ID
  P10665: { ignore: true },
  // IPU chamber ID
  P10666: { ignore: true },
  // ACNP library ID
  P10667: { ignore: true },
  // HuijiWiki article ID
  P10668: { ignore: true },
  // TV Maze season ID
  P10669: { ignore: true },
  // Musik und Gender im Internet ID
  P10670: { ignore: true },
  // MINEDEX project ID
  P10671: { ignore: true },
  // FISH Archaeological Objects Thesaurus ID
  P10674: { ignore: true },
  // Winterthur Glossar ID
  P10677: { ignore: true },
  // 100 Years of Alaska's Legislature bio ID
  P10678: { ignore: true },
  // Aldiwan poet ID
  P10679: { ignore: true },
  // EIA plant ID
  P10682: { ignore: true },
  // Uber Eats store ID
  P10683: { ignore: true },
  // Aldiwan poem ID
  P10684: { ignore: true },
  // Library of the Haskala person ID
  P10686: { ignore: true },
  // Google Fonts ID
  P10687: { ignore: true },
  // Personality Database work ID
  P10688: { ignore: true },
  // OpenStreetMap object
  P10689: { name: "OSM", icon: "socials/openstreetmap.svg" },
  // GEMET ID
  P10690: { ignore: true },
  // Enciclopedia Colchagüina ID
  P10691: { ignore: true },
  // DBLP event ID
  P10692: { ignore: true },
  // CNKI institute ID
  P10693: { ignore: true },
  // Woolworths product ID
  P10697: { ignore: true },
  // TEİS ID
  P10698: { ignore: true },
  // FamousFix topic ID
  P10699: { ignore: true },
  // Parcours de vies dans la Royale ID
  P10700: { ignore: true },
  // Reflora ID
  P10701: { ignore: true },
  // Hrono.ru article ID
  P10702: { ignore: true },
  // Biographical Memoirs of Fellows of the Royal Society ID
  P10704: { ignore: true },
  // Historic Oregon Newspapers ID
  P10705: { ignore: true },
  // DACS ID (2022)
  P10706: { ignore: true },
  // AccessScience ID
  P10707: { ignore: true },
  // settlement area code in Sweden
  P10708: { ignore: false },
  // North Carolina Extension Gardener Plant Toolbox ID
  P10709: { ignore: true },
  // Galaxy Store app ID
  P10710: { ignore: true },
};
