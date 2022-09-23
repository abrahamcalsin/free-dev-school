import Head from "next/head";

interface MetaProps {
  title?: string;
  notRobots?: boolean;
}

export default function Meta(props: MetaProps) {
  const { notRobots = false } = props;

  const {
    description,
    titlePage,
    defaultTitle,
    twitterUsername,
    websiteUrl,
    socialBannerImage,
  } = {
    description: "Discover the best free programming courses and tutorials.",
    titlePage: "%s - Free Dev School",
    defaultTitle: "Free Dev School",
    twitterUsername: "@abraham_calsin",
    websiteUrl: "https://free-dev-school.vercel.app",
    socialBannerImage:
      "https://camo.githubusercontent.com/c48715b4e8cc7c37ed9e21166db0ee6296d4bce28f5cc81efe597f2733f289c8/68747470733a2f2f6269742e6c792f33536e656c466d",
  };

  const schemaOrgJSONLD = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: websiteUrl,
      name: defaultTitle,
      alternateName: defaultTitle,
    },
  ];

  return (
    <Head>
      <meta
        name="robots"
        content={
          notRobots
            ? "noindex, nofollow, noimageindex, indexifembedded"
            : "index, follow"
        }
      />
      <meta
        name="googlebot"
        content={
          notRobots
            ? "noindex, nofollow, noimageindex, indexifembedded"
            : "index, follow"
        }
      />

      <meta name="description" content={description} />
      <meta name="image" content={socialBannerImage} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:url" content={websiteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialBannerImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialBannerImage} />

      <title>
        {props.title ? titlePage.replace("%s", props.title) : defaultTitle}
      </title>
    </Head>
  );
}
