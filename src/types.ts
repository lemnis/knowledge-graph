enum Types {
  Person,
  Article,
  Disambiguation,
  Categor,
  Name,
  Exclusive,
  // Type: response category, i.e. A (article), D (disambiguation), C (category), N (name), E (exclusive), or nothing.
}

interface Schema {
  heading: string;
  website: string;
  image: {
    link: string;
    width?: number;
    height?: number;
  };
  body: {
    text: string;
    source: string;
    link: string;
  };
  facts: Record<string, string>;
  profiles: {
    name: string,
    link: string,
    thumbnail: string,
  }[];
  type?: Types;
}

interface Topic {
  FirstURL: string;
  Icon: {
    Height: number;
    /** Relative path */
    URL: string;
    Width: number;
  };
  /** Html */
  Result: string;
  Text: string;
}

interface DuckDuckGoInstantAnswer {
  Abstract: string;
  AbstractText: string;
  AbstractSource: string;
  AbstractURL: string;
  Image: string;
  ImageHeight: number;
  ImageWidth: number;
  ImageIsLogo: 0 | 1;
  Heading: string;
  Answer: string;
  /**  */
  Redirect: string;
  AnswerType: string;
  Definition: string;
  DefinitionSource: string;
  DefinitionURL: string;
  InfoBox: {
    content: {
      data_type: "string" | "youtube_channel" | "imdb_id" | string;
      label: string;
      value: string;
      wiki_order: number;
    }[];
    meta: {
      data_type: "string" | "youtube_channel" | "imdb_id" | string;
      label: string;
      value: string;
      wiki_order: number;
    }[];
  };
  RelatedTopics: Topic[];
  Results: Topic[];
  Type: "A";
}

const map = (data: DuckDuckGoInstantAnswer): Schema => ({
  heading: data.Heading,
  image: {
    link: `https://duckduckgo.com/${data.Image}`,
    width: data.ImageWidth,
    height: data.ImageHeight,
  },
  body: {
    text: data.Abstract,
    source: data.AbstractSource,
    link: data.AbstractURL,
  },
  facts: data.InfoBox.content
    .filter(({ data_type }) => data_type === "string")
    .reduce((acc, item) => {
      acc[item.label] = item.value;
      return acc;
    }, {}),
  profiles: data.InfoBox.content
  .filter(({ data_type }) => data_type === "string").map(item => ({
    name: item.label,
    value: item.value,
    thumbnail: `https://duckduckgo.com/assets/icons/thirdparty/wikipedia.svg`,
    link: `https://duckduckgo.com/assets/icons/thirdparty/wikipedia.svg`
  })),
  type: Types.Person,
});
