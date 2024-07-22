<template>
  <div class="app-box">
    <AppNav></AppNav>
    <div>默认布局。</div>
    <NuxtLink to="/">返回首页</NuxtLink>
    <slot />
  </div>
</template>
<script setup>
import headConfig from '~/assets/data/head.js'
import AppNav from '~/components/global/AppNav.vue'

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
