---
title: "Setup"
description: ""
position: 2
category: "Getting started"
---

## Install

Add `nuxt-social-tags` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt-social-tags
```

  </code-block>
  <code-block label="NPM">

```bash
npm install nuxt-social-tags
```

  </code-block>
</code-group>

Then add it to the `modules` section in your `nuxt.config.js`:

```js{}[nuxt.config.js]
export default {
	modules: ["nuxt-social-tags"],
	socialtags: {}
};
```

<alert type="success">

That's it! You can now [configure](/options) the socical meta tags of your Nuxt app ✨

</alert>
