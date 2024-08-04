// Generate Battles Screenshot

const targets = [
  ...document.querySelectorAll(".BattleTile_BattleTile_target__cFrfn"),
].sort((a, b) => {
  const aHref = a.href.split("/").at(-1);
  const bHref = b.href.split("/").at(-1);

  return +aHref - +bHref;
});

targets.forEach((i) => $0.appendChild(i));

// Generate Daily Battle Screenshot

[...document.querySelectorAll(".target-tile__info")].forEach((i) =>
  i.nextElementSibling.parentNode.removeChild(i.nextElementSibling)
);

// Extract img sources

let image_urls = [...abc.matchAll(/src=(.*)>/g)].map((o) => o[1]);

image_urls
  .map(
    (src, index) =>
      `<div class=target-primary><div style=display:flex;gap:1rem;align-items:center;justify-content:flex-start;flex-direction:column><div class="target-tile target-tile--daily"><a class=shadow-link href=/play/PqqlAnluzHIKMOtlzVyM title="Play target for 3 May 2024"></a> <img alt=""class=target-tile__image loading=lazy src=${src}><div class=target-tile__info><div class=target-top-info><p class=target-top-info__pill><svg color=white fill=white height=1em style=color:#fff;vertical-align:middle;margin-right:.5rem;margin-left:0 viewBox="0 0 24 24"width=1em xmlns=http://www.w3.org/2000/svg><path clip-rule=evenodd d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM6.366 13.1931C5.69036 12.5298 5.68031 11.4444 6.34356 10.7688C7.00681 10.0932 8.09219 10.0831 8.76782 10.7464L11.2143 13.148L16.0178 8.25473C16.681 7.57909 17.7664 7.56905 18.442 8.23229C19.1177 8.89554 19.1277 9.98092 18.4645 10.6566L12.4839 16.7488C12.4762 16.7571 12.4683 16.7652 12.4603 16.7734C12.0652 17.1759 11.5202 17.3422 11.0013 17.2706C10.6491 17.222 10.3089 17.0639 10.0356 16.7957C10.0287 16.7889 10.0218 16.782 10.0149 16.7751L6.366 13.1931Z"fill=currentColor fill-rule=evenodd></path></svg> Jul ${
        1 + index
      }</div></div></div></div></div>`
  )
  .join("");
