<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    /* 全局样式表 */
    html,body,#app{
        height: 100%;
        margin: 0%;
        padding: 0%;
    }
</style>