<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>使用插件显示内容：{{ $currentYear('enjoying') }}</div>
    <ClientOnly>
      <Teleport to="body"> ~/pages/plugin/base.vue的内容，通过Teleport传送到body。 </Teleport>
    </ClientOnly>
  </div>
</template>
<script setup>
const { $currentYear } = useNuxtApp()
</script>
