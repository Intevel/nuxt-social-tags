---
title: "useSocialTags"
description: "Easily meta-tag generation for Nuxt 3"
position: 8
category: "Usage"
---

### `updateSocialTags`

Merges the provided module [`options`](/options) with the given data, generates the meta tags and updates them on the page.

- **Arguments:**

  - data: [`options`](/options)

```ts
<script setup>
const { updateSocialTags } = useSocialTags();

updateSocialTags({ title: "New Title for meta" });
</script>
```

<alert type="warning">

`updateSocialTags` only works during `setup` or [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle.html#composition-api-lifecycle-hooks).

</alert>
