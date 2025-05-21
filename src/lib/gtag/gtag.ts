type gtagOptions = {
  url: string;
  action: string;
  params: string;
};

import env from "~/utils/env";

export const pageview = (props: gtagOptions) => {
  const { url } = props;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", env.GOOGLE_ANALYTICS_ID, {
      page_path: url,
    });
  }
};

export const event = (options: gtagOptions) => {
  const { action, params } = options;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
};
