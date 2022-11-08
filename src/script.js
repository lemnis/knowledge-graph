import {
  wikidata,
  transform as wikidataTransform,
} from "./transformer/wikidata.js";
import {
  duckduckgo,
  transform as duckduckgoTransform,
} from "./transformer/duckduckgo.js";
import {
  openstreetmap,
  transform as openstreetmapTransform,
} from "./transformer/openstreetmap/index.js";

import { html, loading } from "./template.js";

const transformers = {
  wikidata: { transform: wikidataTransform, getData: wikidata },
  duckduckgo: { transform: duckduckgoTransform, getData: duckduckgo },
  openstreetmap: { transform: openstreetmapTransform, getData: openstreetmap },
};

const errorHtml = /*html*/ `<h1 style="text-align: center; font-weight: 400; margin: 1em;">Failed to load data</h1>`;;

class KnowledgeGraph extends HTMLElement {
  async render() {
    if ((!this.key || !this.source) && !this.data) {
      root.innerHTML = errorHtml;
      return
    };

    const shadow = this.shadow !== undefined;
    const root = shadow ? this.attachShadow({ mode: "open" }) : this;

    root.innerHTML = loading();

    try {
      console.log(this.data);
      const data = this.data
        ? JSON.parse(this.data)
        : transformers[this.source].transform(
            await transformers[this.source].getData(this.key),
            this.key
          );
      console.log(data);

      if (this.topFacts?.length && data.facts) {
        const topFacts = [];
        const facts = [];

        data.facts.forEach((item) => {
          if (this.topFacts.includes(item[0])) {
            topFacts.push(item);
          } else {
            facts.push(item);
          }
        });

        data.facts = [...topFacts, ...facts];
      }

      const componentHtml = html({
        ...data,
        defaultShownFacts: this.defaultShownFacts || 5,
      });
      if (shadow) {
        root.innerHTML = /*html*/ `
            <link rel="stylesheet" href="./style.css" />
            ${componentHtml}`;
      } else {
        root.innerHTML = componentHtml;
      }
    } catch (error) {
      console.error(error);
      root.innerHTML = errorHtml;
    }
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (property === "top-facts") this.topFacts = newValue.split(",");
    else if (property === "shown-facts")
      this.defaultShownFacts = parseFloat(newValue);
    else this[property] = newValue;
    console.log(property, this[property]);
    this.render();
  }

  static get observedAttributes() {
    return ["source", "key", "shadow", "top-facts", "shown-facts", "data"];
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("knowledge-graph", KnowledgeGraph);
