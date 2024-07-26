<template>
  <div class="layout-default">
    <client-only>
      <el-header>
        <AppNav></AppNav>
      </el-header>
    </client-only>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main class="app-box">
        <Main></Main>
      </el-main>
      <el-backtop :right="100" :bottom="100" />
    </el-container>
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
