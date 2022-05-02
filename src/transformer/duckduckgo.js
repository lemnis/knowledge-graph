export const SocialDataTypes = {
  IMDB: "imdb_id",
  TwitterProfile: "twitter_profile",
  InstagramProfile: "instagram_profile",
  FacebookProfile: "facebook_profile",
  YoutubeChannel: "youtube_channel",
};

export const DataTypes = {
  OfficalWebsite: "official_website",
  Instance: "instance",
  String: "string",
  WikiMapsTrigger: "wiki_maps_trigger",
};

export const transform = (data) => ({
  heading: data.Heading,
  website: data.Infobox?.content?.find(
    ({ data_type }) => data_type === DataTypes.OfficalWebsite
  )?.value,
  images: [
    {
      link: `https://duckduckgo.com/${data.Image}`,
      width: data.ImageWidth,
      height: data.ImageHeight,
    },
  ],
  body: {
    text: data.Abstract,
    source: data.AbstractSource,
    link: data.AbstractURL,
  },
  facts: data.Infobox?.content
    ?.filter(({ data_type }) => data_type === DataTypes.String)
    .reduce((acc, item) => {
      acc[item.label] = item.value;
      return acc;
    }, {}),
  profiles: data.Infobox?.content
    ?.filter(({ data_type }) =>
      Object.values(SocialDataTypes).includes(data_type)
    )
    .map((item) => ({
      name: item.label,
      value: item.value,
      thumbnail: `https://duckduckgo.com/assets/icons/thirdparty/wikipedia.svg`,
      link: `https://duckduckgo.com/assets/icons/thirdparty/wikipedia.svg`,
    })),
  source: {
    link: data.RelatedTopics?.[0]?.FirstUrl,
    text: /*html*/ `Powered by DuckDuckGo <img src="./assets/duckduckgo.png" width="16" height="16" />`,
  },
});

export const duckduckgo = (query) =>
  fetch(`http://api.duckduckgo.com/?q=${query}&format=json&pretty=1`, {
    header: { "Access-Control-Allow-Origin": "*" },
  }).then((r) => r.json());
