const path = require("path");
const fetch = require("sync-fetch");

const mirror = process.env.NEXT_FONT_GOOGLE_MIRROR_URL;

module.exports = new Proxy(
  {},
  {
    get: (target, font) => {
      var url = new URL(font);
      switch (url.host) {
        case "fonts.googleapis.com":
          if (mirror) {
            const mirrorUrl = new URL(mirror);
            if (mirrorUrl.protocol) {
              url.protocol = mirrorUrl.protocol;
            }
            url.host = mirrorUrl.host;
            url.pathname = path.join(mirrorUrl.pathname, url.pathname);
          }
          break;
      }
      const response = fetch(url.href);
      return response.text();
    },
  },
);