import { defineNuxtConfig } from "nuxt";
import MetaTagsModule from "..";

export default defineNuxtConfig({
  modules: [MetaTagsModule],
  socialtags: {
    enabled: true,
    title: "My Title",
    theme_color: "#2222",
    opengraph: true,
    twitter: true,
    twitter_user: "heyconnery",
  },
});
