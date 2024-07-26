<template>
  <div class="app-footer">
    这里是页脚组件。页面传递参数值：{{ props.pdate }}
    <h1>公共页脚</h1>
    <Comments />
  </div>
</template>
<script setup>
const props = defineProps(['pdate'])
</script>
