type gtagOptions = {
  url: string;
  action: string;
  params: string;
};

export const pageview = (props: gtagOptions) => {
  const { url } = props;

  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export const event = (options: gtagOptions) => {
  const { action, params } = options;

  window.gtag("event", action, params);
};
