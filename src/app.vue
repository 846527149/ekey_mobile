<template>
  <div id="app" >
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="less">
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/close.less";
@import "../src/assets/less/base.less";

</style>
