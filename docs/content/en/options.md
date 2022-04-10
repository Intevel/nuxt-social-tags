---
title: "Options"
description: "Discover the available options to configure"
position: 4
category: "Getting started"
---

All options are optional, the module will generate meta tags from the provided options.

### `enabled`

The module is enabled if `true`, if `false` then the module is disabled.

### `url`

The url of your website

### `title`

The title of your website

### `author`

The author of your website

### `site_name`

The name of your website

### `description`

The description of your website

### `theme_color`

Set a theme color for your website

### `img`

Link to an image for your website preview

### `locale`

The locale of your website

### `twitter`

The module generates twitter meta tags if `true`

### `opengraph`

The module generates opengraph meta tags for facebook, linkedin etc. if `true`

### `twitter_user`

A twitter username for the twitter meta tags

### `twitter_card`

Twitter card property
https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#started

### Example configuration

```ts
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  modules: ["nuxt-social-tags"],
  socialtags: {
    enabled: true,
    title: "My Title",
    theme_color: "#2222",
    opengraph: true,
    twitter: true,
    twitter_user: "heyconnery",
  },
});
```
