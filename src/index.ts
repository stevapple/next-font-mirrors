import { URL } from "node:url";
import * as path from "path";
import fetch from "sync-fetch";

const mirror = process.env.NEXT_FONT_GOOGLE_MIRROR_URL;

type FontProxy = {
  [key: string]: string;
};

const fontProxy = new Proxy({} as FontProxy, {
  get: (_target, font: string | symbol): string => {
    if (typeof font !== "string") {
      throw new Error("Font URL must be a string");
    }

    const url = new URL(font);
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
});

export = fontProxy;
