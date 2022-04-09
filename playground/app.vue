<template>
  <div>Nuxt module playground!</div>
</template>

<script setup>
const { updateSocialTags } = useSocialTags();

updateSocialTags({ title: "New Title for meta" });
</script>
