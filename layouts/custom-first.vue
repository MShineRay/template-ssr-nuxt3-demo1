<template>
  <div class="layout-custom-first">
    <el-header>
      <AppNav></AppNav>
    </el-header>
    <el-container>
      <el-main class="app-box">
        <Main></Main>
      </el-main>
      <el-backtop :right="100" :bottom="100" />
    </el-container>
  </div>
</template>
<script setup lang="ts">
// definePageMeta({
//   layout: 'custom-first'
// })
</script>
