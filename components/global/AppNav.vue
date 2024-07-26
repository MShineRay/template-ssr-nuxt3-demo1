<template>
  <div class="app-nav">
    <el-row>
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple" />
        公共顶部导航
      </el-col>
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple-light" />
        <el-dropdown @command="layoutChange">
          <span class="el-dropdown-link">
            Layout {{ layout.type }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="default">default</el-dropdown-item>
              <el-dropdown-item command="custom-first">custom-first</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
const layout = useLayout()
function layoutChange(command) {
  console.log('layoutChange command: ', command)
  layout.value.type = command
  // setPageLayout(command)
}
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
