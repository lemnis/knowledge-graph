interface Schema {
  heading: string;
  website?: string;
  images: {
    link: string;
    width?: number;
    height?: number;
  }[];
  body?: {
    text?: string;
    source?: string;
    link?: string;
  };
  facts: [string, string][];
  profiles: {
    name: string,
    link: string,
    icon: string,
  }[];
  source: {
    link: string,
    text: string
  }
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
