import { base } from "../../constants.js";

/** @type {(name: string, icon: string, link: string) => string} */
export const profile = (name, icon, link) => /*html*/ `
  <li class="card-profile">
    <a class="card-profile__link" href="${link}" title="${name}">
      <img src="${new URL(icon, base)}" />
      ${name}
    </a>
  </li>`;

/** @type {(profiles: { name: string, link: string, icon: string}[]) => string} */
export const profileList = (
  profiles
) => /*html*/ `<ul class="card-profile__list">
    ${profiles
      .map((item) => profile(item.name, item.icon, item.link))
      .join(" ")}
  </ul>`;
