import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SITE_URL = "https://monuke-f472b.web.app";
const DEFAULT_IMAGE = `${SITE_URL}/monuke.png`;

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
  content: string,
) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let canonical = document.head.querySelector(
    "link[rel='canonical']",
  ) as HTMLLinkElement | null;

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
}

function upsertJsonLd(jsonLd: SeoProps["jsonLd"]) {
  const existing = document.getElementById("seo-json-ld");
  existing?.remove();

  if (!jsonLd) {
    return;
  }

  const script = document.createElement("script");
  script.id = "seo-json-ld";
  script.type = "application/ld+json";
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

const Seo = ({
  title,
  description,
  canonicalPath,
  keywords,
  jsonLd,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = title;

    upsertMeta("meta[name='description']", { name: "description" }, description);
    upsertMeta(
      "meta[name='keywords']",
      { name: "keywords" },
      keywords ?? "monuke, Vocaloid, ボカロP, 作曲, 編曲, ドラム",
    );
    upsertMeta("meta[name='robots']", { name: "robots" }, "index,follow");

    upsertMeta("meta[property='og:title']", { property: "og:title" }, title);
    upsertMeta(
      "meta[property='og:description']",
      { property: "og:description" },
      description,
    );
    upsertMeta(
      "meta[property='og:type']",
      { property: "og:type" },
      "website",
    );
    upsertMeta("meta[property='og:url']", { property: "og:url" }, canonicalUrl);
    upsertMeta(
      "meta[property='og:image']",
      { property: "og:image" },
      DEFAULT_IMAGE,
    );
    upsertMeta(
      "meta[property='og:site_name']",
      { property: "og:site_name" },
      "monuke",
    );

    upsertMeta("meta[name='twitter:card']", { name: "twitter:card" }, "summary_large_image");
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title" }, title);
    upsertMeta(
      "meta[name='twitter:description']",
      { name: "twitter:description" },
      description,
    );
    upsertMeta(
      "meta[name='twitter:image']",
      { name: "twitter:image" },
      DEFAULT_IMAGE,
    );

    upsertCanonical(canonicalUrl);
    upsertJsonLd(jsonLd);

    return () => {
      document.getElementById("seo-json-ld")?.remove();
    };
  }, [canonicalPath, description, jsonLd, keywords, title]);

  return null;
};

export default Seo;
