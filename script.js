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
    (src, index) => `<div class="target-primary">
  <div
    class=""
    style="
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
    "
  >
    <div class="">
      <div class="target-tile--daily target-tile">
        <a
          class="shadow-link"
          title="Play target for 3 Nov 2023"
          href="/play/Wu3QnyC0Fh2okPAZRzjq"
        ></a
        ><img src=${src} alt="" loading="lazy" class="target-tile__image" />
        <div class="target-tile__info">
          <div class="target-top-info">
            <p class="target-top-info__pill">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="white"
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                style="
                  color: white;
                  vertical-align: middle;
                  margin-right: 0.5rem;
                  margin-left: 0px;
                "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.1947 7.19467C16.7876 6.60178 17.7124 6.60178 18.3053 7.19467C18.8982 7.78756 18.8982 8.71244 18.3053 9.30533L10.8053 16.8053C10.6861 16.9246 10.537 17.0439 10.3452 17.1291C10.1502 17.2158 9.95001 17.25 9.75 17.25C9.54999 17.25 9.34978 17.2158 9.15477 17.1291C8.96302 17.0439 8.81395 16.9246 8.69467 16.8053L5.69467 13.8053C5.10178 13.2124 5.10178 12.2876 5.69467 11.6947C6.28756 11.1018 7.21244 11.1018 7.80533 11.6947L9.75 13.6393L16.1947 7.19467Z"
                  fill="white"
                ></path>
              </svg>
              Sep ${1 + index}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
  )
  .join("");
