<template>
  <div>
    <h1>首页/pages/index</h1>
    <div v-for="(item, index) in links" :key="index">
      <NuxtLink :to="item.url.replaceAll('${baseURL}', baseURL)" :external="!!item.external">
        <span v-html="item.text"></span>
      </NuxtLink>
      <span class="app-margin-left-s app-color-grey">{{ item.description }}</span>
    </div>
    <!--    <Comments/>-->
  </div>
</template>
<script setup>
import pageLinks from '~/assets/data/pages'
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

const searchKey = ref()
const links = computed(() => {
  if (!searchKey.value) return pageLinks
  const filterLinks = []
  pageLinks.forEach((item) => {
    if (item.url.indexOf(searchKey.value) !== -1 || item.text.indexOf(searchKey.value) !== -1)
      filterLinks.push(item)
  })
  return filterLinks
})
</script>
