import { factHtml } from "./components/fact/fact.js";
import { profileList } from "./components/profile/profile.js";

/**
 * @param {string} source
 * @param {string} link
 * @param {Schema['images']} images
 */
const image = (source, link, images) => /*html*/ `
  <div class="card-image__wrapper ${
    images.length === 1 ? "card-image__wrapper--single" : ""
  }">
    ${images
      .map(
        ({ link: imageLink, width, height }) => /*html*/ `
        <a class="card-image__link" href="${link}" title="More at ${source}">
          <img src="${imageLink}" class="card-image" width="${width}" height="${height}" />
        </a>`
      )
      .join(" ")}
  </div>`;

/** @param {string} website */
const websiteLink = (website) => /*html*/ `<a
href="${website}"
class="card__website"
title="Website"
>${website?.replace(/^http(s)?:\/\//, "")}</a
>`;

/**
 * @param {Schema & { defaultShownFacts : number}} options
 * @returns
 */
export const html = ({
  heading,
  body = {},
  website,
  facts = [],
  profiles = [],
  source,
  defaultShownFacts,
  images = [],
}) => {
  const { factList, factMore } =
    (facts && factHtml(facts, defaultShownFacts)) || {};

  return /*html*/ `<div class="card__wrapper">
  <section class="card">
    ${images.length ? image(body.source, body.link, images) : ""}
    <h1>${heading}</h1>
    ${website ? websiteLink(website) : ""}
    <div class="card__body">  
      ${body.text ? /*html*/ `<p>${body.text}</p>` : ""}
      ${
        website
          ? /*html*/ `<a href="${body.link}" title="${body.source}" >${body.source}</a>`
          : ""
      }
    </div>
    ${factList || ""}
    ${profiles && profiles.length ? profileList(profiles) : ""}
    ${factMore || ""}
  </section>
  <a class="card__source" href="${source.link}" target="_blank">${
    source.text
  }</a>
</div>`;
};

export const loading = () => {
  return /*html*/ `<div class="card__wrapper" aria-busy="true">
  <section class="card">
    <h1 class="loading"></h1>
    <div class="loading card__body"></div>
    <div class="card__fact-wrapper">
      <div class="card__fact">
        <dd class="loading" style="width: 30%"></dd>
        <dt class="loading"  style="width: 50%"></dt>
      </div>
      <div class="card__fact">
        <dd class="loading" style="width: 40%"></dd>
        <dt class="loading"  style="width: 50%"></dt>
      </div>
      <div class="card__fact">
        <dd class="loading" style="width: 20%"></dd>
        <dt class="loading"  style="width: 60%"></dt>
      </div>
      <div class="card__fact">
        <dd class="loading" style="width: 50%"></dd>
        <dt class="loading"  style="width: 40%"></dt>
      </div>
      <div class="card__fact">
        <dd class="loading" style="width: 30%"></dd>
        <dt class="loading"  style="width: 40%"></dt>
      </div>
    </div>
  </section>
  <div class="card__source loading" style="width: 30%"></div>
</div>`;
};
