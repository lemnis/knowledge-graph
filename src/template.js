import { factHtml } from "./components/fact/fact.js";
import { profileList } from "./components/profile/profile.js";

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

const websiteLink = (website) => /*html*/ `<a
href="${website}"
class="card__website"
title="Website"
>${website?.replace(/^http(s)?:\/\//, "")}</a
>`;

/**
 * @param {{
 *  facts?: [string, string][],
 * [key: string]: any
 * }} options
 * @returns
 */
export const html = ({
  heading,
  body,
  website,
  facts,
  profiles,
  source,
  ...data
}) => {
  const { factList, factMore } = (facts && factHtml(facts)) || {};

  return /*html*/ `<div class="card__wrapper">
  <section class="card">
    ${data.images.length ? image(body.source, body.link, data.images) : ""}
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
