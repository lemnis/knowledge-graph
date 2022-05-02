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
    if(!this.key || !this.source) return;
    const shadow = this.shadow !== undefined;
    const root = shadow ? this.attachShadow({ mode: "open" }) : this;
    try {
      const data = this.source === "wikidata"
        ? wikidataTransform(await wikidata(this.key), this.key)
        : duckduckgoTransform(await duckduckgo(this.key));
        const componentHtml = html(data);
        if (shadow) {
          root.innerHTML = /*html*/ `
            <link rel="stylesheet" href="./style.css" />
            ${componentHtml}`;
        } else {
          root.innerHTML = componentHtml;
        }
    } catch (error) {
      root.innerHTML =  /*html*/ `<h1 style="text-align: center; font-weight: 400; margin: 1em;">Failed to load data</h1>`;
    }
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ["source", "key", "shadow"];
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("knowledge-graph", KnowledgeGraph);
