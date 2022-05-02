const fact = (key, value) => /*html*/ `
  <div class="card__fact">
    <dd>${key}:</dd>
    <dt>${value}</dt>
  </div>`;

const profile = (name, icon, link) => /*html*/ `
  <li class="card-profile">
    <a class="card-profile__link" href="${link}" title="${name}">
      <img src="${icon}" />
      ${name}
    </a>
  </li>`;

const image = (source, link, images) => /*html*/ `
  <div class="card-image__wrapper ${images.length === 1 ? 'card-image__wrapper--single' : ''}">
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

export const html = ({
  heading,
  body,
  website,
  facts,
  profiles,
  source,
  ...data
}) => /*html*/ `<div class="card__wrapper">
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
<div style="margin-top: 1em; clear: both;">
  ${
    facts
      ? Object.entries(facts)
          .map(([key, value]) => fact(key, value))
          .join(" ")
      : ""
  }
</div>
${
  profiles
    ? /*html*/ `<ul class="card-profile__list">${profiles
        .map((item) => profile(item.name, item.icon, item.link))
        .join(" ")}</ul>`
    : ""
}
</section>
<a class="card__source" href="${source.link}" target="_blank">${source.text}</a>
</div>`;
