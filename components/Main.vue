<template>
  <div class="app-main">
    <div>默认布局。</div>
    <NuxtLink to="/">返回首页</NuxtLink>
    <slot />

    <!--在页面导航之间显示一个进度条。-->
    <NuxtLoadingIndicator color="red" />
    <NuxtPage />
    <h1>全局的？？？</h1>
    <Comments />

    <!-- 这将在服务器端渲染 "span" 元素 -->
    <!--    <ClientOnly fallbackTag="span">-->
    <!-- 此组件仅在客户端渲染 -->
    <Comments />
    <!--      <template #fallback>-->
    <!--        &lt;!&ndash; 这将在服务器端渲染 &ndash;&gt;-->
    <!--        <p>Loading comments...</p>-->
    <!--      </template>-->
    <!--    </ClientOnly>-->

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

    <button @click="open = true">打开模态框</button>

    <ClientOnly>
      <!--ClientOnly包括Teleport 避免切换布局报错-->
      <Teleport to="body">
        <div v-if="open" class="modal">
          <p>来自模态框的问候！</p>
          <button @click="open = false">关闭</button>
        </div>
      </Teleport>
    </ClientOnly>

    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>
<script setup>
const open = ref(false)
</script>
