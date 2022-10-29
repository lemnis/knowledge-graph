let idIndex = 0;

/**
 * @param {string} key
 * @param {string} value HTML string to dispay
 * @param {boolean} hidden
 */
const fact = (key, value, hidden = false) => /*html*/ `
 <div class="card__fact ${hidden ? "toggleable" : ""}">
   <dd>${key}:</dd>
   <dt>${value}</dt>
 </div>`;

/**
 * @param {[string, string][]} facts
 * @param {number} defaultShownFacts
 */
export const factHtml = (facts, defaultShownFacts = 5) => ({
  factList: /*html*/ `<input type="checkbox" class="card__fact-toggle" id="card__fact-toggle-${++idIndex}" />
    <div class="card__fact-wrapper">
      ${facts
        .map((item, index) => fact(...item, index > defaultShownFacts - 1))
        .join(" ")}
    </div>`,
  factMore:
    facts?.length > defaultShownFacts - 1
      ? /*html*/ `<label class="card__fact-toggle-button" for="card__fact-toggle-${idIndex}">
      <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
      </svg>
    </label>`
      : undefined,
});
