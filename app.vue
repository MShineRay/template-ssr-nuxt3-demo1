<template>
  <div class="app">
    <NuxtLayout :name="layoutName"></NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import 'normalize.css'
const layoutState = useLayout()
const layoutName = computed(() => {
  return layoutState.value.type
})
watchEffect(() => console.error('app.vue layoutName:', layoutName))
</script>

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
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
