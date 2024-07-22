<script setup lang="ts">
// 或者，你也可以在这里使用它
const { $hello } = useNuxtApp()
</script>

<template>
  <div>
    {{ $hello('世界') }}
  </div>
</template>
