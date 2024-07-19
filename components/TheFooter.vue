<template>
  <div class="app-box">
    这里是页脚组件。页面传递参数值：{{ props.pdate }}
    <h1>页脚</h1>
  </div>
</template>
<script setup>
const props = defineProps(['pdate'])
</script>
