import * as options from "#social-meta-options";
import { useHead } from "#imports";

export const useSocialTags = () => {
  const updateSocialTags = async (data: {}): Promise<void> => {
    const metaOptions = mergeDeep({ ...options }, { ...data });
    var metaTags = [];

    metaTags.push(
      { name: "title", content: metaOptions.title },
      { name: "author", content: metaOptions.author },
      { name: "publisher", content: metaOptions.author },
      { name: "apple-mobile-web-app-title", content: metaOptions.title },
      { name: "theme-color", content: metaOptions.theme_color }
    );

    if (metaOptions.opengraph) {
      metaTags.push(
        { property: "og:title", content: metaOptions.title },
        { property: "og:description", content: metaOptions.description },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: options.locale },
        { property: "og:url", content: options.url },
        { property: "og:image", content: options.img },
        { property: "og:site_name", content: options.site_name }
      );
    }

    if (metaOptions.twitter) {
      metaTags.push(
        { name: "twitter:site", content: metaOptions.twitter_user },
        { name: "twitter:creator", content: metaOptions.twitter_user },
        { name: "twitter:title", content: metaOptions.title },
        { name: "twitter:description", content: metaOptions.description },
        { name: "twitter:image", content: metaOptions.img },
		{ name: "twitter:card", content: metaOptions.twitter_card }
      );
    }

    metaTags = metaTags.filter((x) => x.content);
    useHead({ meta: metaTags });
    console.log("[nuxt-social-tags] Updated social meta tags.");
  };

  const isObject = (item) => {
    return item && typeof item === "object" && !Array.isArray(item);
  };

  const mergeDeep = (target, ...sources) => {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key])
            Object.assign(target, {
              [key]: {},
            });
          mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, {
            [key]: source[key],
          });
        }
      }
    }

    return mergeDeep(target, ...sources);
  };

  return { updateSocialTags };
};
