<template>
  <div class="app">
    <NuxtLayout>
      <div class="app-box">
        <NuxtPage />
        <h1>全局的？？？</h1>
        <Comments />

        <!-- 这将在服务器端渲染 "span" 元素 -->
        <ClientOnly fallbackTag="span">
          <!-- 此组件仅在客户端渲染 -->
          <Comments />
          <template #fallback>
            <!-- 这将在服务器端渲染 -->
            <p>Loading comments...</p>
          </template>
        </ClientOnly>
      </div>
      <!-- 此组件将在客户端渲染 -->
      <NuxtClientFallback fallback-tag="span">
        <Comments />
        <p>
          Nuxt 提供了 NuxtClientFallback 组件，如果其任何子组件在 SSR
          中触发错误，则在客户端渲染其内容。 您可以指定
          fallbackTag，以便在服务器端无法渲染时渲染特定的标记。
        </p>
      </NuxtClientFallback>

      <Hello></Hello>
    </NuxtLayout>
  </div>
</template>
<style lang="css">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
<script setup lang="ts">
import Hello from '~/components/Hello.vue'
</script>
