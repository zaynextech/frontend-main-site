import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  path: string;

  /*
    MAIN SHARE IMAGE

    USED FOR:
    - WhatsApp preview
    - Facebook preview
    - LinkedIn preview
    - Discord preview
    - Telegram preview
    - Twitter/X preview

    RECOMMENDED SIZE:
    1200x630

    BEST FORMAT:
    PNG or JPG

    EXAMPLE:
    /og-image.jpg

    OR FULL URL:
    https://cdn.site.com/image.jpg
  */
  image?: string;

  /*
    SMALL ICON / LOGO

    USED FOR:
    - Browser tab
    - Bookmark icon
    - Mobile app icon

    RECOMMENDED SIZE:
    32x32
    64x64
    180x180

    FILES:
    /favicon.ico
    /apple-touch-icon.png
  */
  favicon?: string;
};

const SEO = ({
  title,
  description,
  path,

  // DEFAULT MAIN SHARE IMAGE
  image = "/og-image.jpg",

  // DEFAULT FAVICON
  favicon = "/favicon.ico",
}: SEOProps) => {
  const baseUrl = "https://www.zaynex.tech";

  const url = `${baseUrl}${path}`;

  /*
    SUPPORTS:
    - LOCAL IMAGES
    - FULL EXTERNAL URLS
  */
  const imageUrl = image.startsWith("http")
    ? image
    : `${baseUrl}${image}`;

  const faviconUrl = favicon.startsWith("http")
    ? favicon
    : `${baseUrl}${favicon}`;

  return (
    
    <Helmet>
      {/* ================================================= */}
      {/* BASIC SEO */}
      {/* ================================================= */}

      {/* PAGE TITLE IN GOOGLE */}
      <title>{title}</title>

      {/* GOOGLE DESCRIPTION */}
      <meta
        name="description"
        content={description}
      />

      {/* SEO KEYWORDS */}
      <meta
        name="keywords"
        content="
          Zaynex,
          Web Development,
          Digital Solutions,
          Business Websites,
          UI UX,
          SEO,
          Web Applications,
          LMS Development,
          E-commerce,
          Branding
        "
      />

      {/* MOBILE RESPONSIVE */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/* BROWSER THEME COLOR */}
      <meta
        name="theme-color"
        content="#030303"
      />

      {/* ================================================= */}
      {/* OPEN GRAPH - SOCIAL MEDIA */}
      {/* ================================================= */}

      {/* MAIN TITLE ON WHATSAPP/FACEBOOK */}
      <meta
        property="og:title"
        content={title}
      />

      {/* DESCRIPTION ON SHARE */}
      <meta
        property="og:description"
        content={description}
      />

      {/* PAGE URL */}
      <meta
        property="og:url"
        content={url}
      />

      {/* WEBSITE NAME */}
      <meta
        property="og:site_name"
        content="Zaynex"
      />

      {/* SHARE IMAGE */}
      <meta
        property="og:image"
        content={imageUrl}
      />

      {/* IMAGE WIDTH */}
      <meta
        property="og:image:width"
        content="1200"
      />

      {/* IMAGE HEIGHT */}
      <meta
        property="og:image:height"
        content="630"
      />

      {/* IMAGE TYPE */}
      <meta
        property="og:image:type"
        content="image/jpeg"
      />

      {/* WEBSITE TYPE */}
      <meta
        property="og:type"
        content="website"
      />

      {/* ================================================= */}
      {/* TWITTER / X */}
      {/* ================================================= */}

      {/* LARGE IMAGE CARD */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      {/* TWITTER TITLE */}
      <meta
        name="twitter:title"
        content={title}
      />

      {/* TWITTER DESCRIPTION */}
      <meta
        name="twitter:description"
        content={description}
      />

      {/* TWITTER IMAGE */}
      <meta
        name="twitter:image"
        content={imageUrl}
      />

      {/* ================================================= */}
      {/* FAVICON */}
      {/* ================================================= */}

      {/* BROWSER TAB ICON */}
      <link
        rel="icon"
        href={faviconUrl}
      />

      {/* APPLE DEVICES ICON */}
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
      />

      {/* ================================================= */}
      {/* CANONICAL URL */}
      {/* ================================================= */}

      {/* PREVENTS DUPLICATE SEO */}
      <link
        rel="canonical"
        href={url}
      />

      {/* ================================================= */}
      {/* SEARCH ENGINE ROBOTS */}
      {/* ================================================= */}

      {/* ALLOW GOOGLE INDEXING */}
      <meta
        name="robots"
        content="index, follow"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",

          name: "Zaynex",

          url: "https://www.zaynex.tech",

          logo: "https://www.zaynex.tech/og-image.jpg",

          description,

          sameAs: [
            "https://www.instagram.com/zaynex.tech?igsh=aW1vdGxsaW4waHQy",
            "https://www.facebook.com/share/17NpuxU2px/?mibextid=wwXIfr",
            "https://www.linkedin.com/company/zaynextech/",
          ],

          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            availableLanguage: "English",
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;