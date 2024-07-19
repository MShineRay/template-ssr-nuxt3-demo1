<template>
  <div>
    <BaseFooLink :box="true">
      点我回到目录
      <template #extend>组件的第二个插槽内容</template>
    </BaseFooLink>
    使用组件只在客户端渲染组件。/clientonly
    <ClientOnly>
      <!-- ... -->
      <p>ddd</p>
      <template #fallback>
        <!-- 这将在服务器端渲染 -->
        <p>加载评论中...</p>
      </template>
    </ClientOnly>

    <ClientOnly fallback-tag="span" fallback="加载评论中...">
      <p>eee</p>
    </ClientOnly>
  </div>
</template>
<script setup></script>
