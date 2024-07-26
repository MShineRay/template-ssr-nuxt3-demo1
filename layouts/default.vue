<template>
  <div class="app-box layout-default">
    <AppNav></AppNav>
    <Main></Main>
  </div>
</template>
<script setup>
import headConfig from '~/assets/data/head.js'
import AppNav from '~/components/global/AppNav.vue'
import Hello from '~/components/Hello.vue'

const route = useRoute()
const head = route.meta.head || {}
const heads = {
  titleTemplate: (appTitle) => {
    if (!head.title) return appTitle
    return `${head.title}-${appTitle}`
  },
  meta: [],
}
heads.meta.push(
  ...headConfig.buildMeta({
    title: head.title,
    keywords: head.keywords,
    description: head.description,
  }),
)
useHead(heads)
</script>
