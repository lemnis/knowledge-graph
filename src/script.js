import {
  wikidata,
  transform as wikidataTransform,
} from "./transformer/wikidata.js";
import {
  duckduckgo,
  transform as duckduckgoTransform,
} from "./transformer/duckduckgo.js";
import { html } from "./template.js";

class KnowledgeGraph extends HTMLElement {
  async render() {
    if (!this.key || !this.source) return;
    const shadow = this.shadow !== undefined;
    const root = shadow ? this.attachShadow({ mode: "open" }) : this;
    try {
      const data =
        this.source === "wikidata"
          ? wikidataTransform(await wikidata(this.key, "en"), this.key)
          : duckduckgoTransform(await duckduckgo(this.key));

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

      const componentHtml = html({ ...data, defaultShownFacts: this.defaultShownFacts || 5 });
      if (shadow) {
        root.innerHTML = /*html*/ `
            <link rel="stylesheet" href="./style.css" />
            ${componentHtml}`;
      } else {
        root.innerHTML = componentHtml;
      }
    } catch (error) {
      console.error(error);
      root.innerHTML = /*html*/ `<h1 style="text-align: center; font-weight: 400; margin: 1em;">Failed to load data</h1>`;
    }
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (property === "top-facts") this.topFacts = newValue.split(",");
    else if (property === "shown-facts") this.defaultShownFacts = parseFloat(newValue);
    else this[property] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ["source", "key", "shadow", "top-facts", "shown-facts"];
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("knowledge-graph", KnowledgeGraph);
