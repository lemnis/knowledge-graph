// Incomplete JS version based off https://github.com/openstreetmap/openstreetmap-website/blob/master/app/helpers/browse_tags_helper.rb

const urlRegex =
  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
const phoneNumberRegex =
  /^\s*\+[\d\s()\/.-]{6,25}\s*(;\s*\+[\d\s()\/.-]{6,25}\s*)*$/g;
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;

/** @param {string} text */
export function linkify(text) {
  return text
    .replace(
      urlRegex,
      (url) => `<a href="${url}" target="_blank" nofollow>${url}</a>`
    )
    .replace(
      phoneNumberRegex,
      (url) => `<a href="tel:${url}" target="_blank">${url}</a>`
    )
    .replace(
      emailRegex,
      (url) => `<a href="mailto:${url}" target="_blank">${url}</a>`
    )
}