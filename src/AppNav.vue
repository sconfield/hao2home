<template lang="html">
  <nav class="top-nav z-depth-3">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">www.hao2home.com</a>
      <ul class="left hide-on-med-and-down">
        <li class="active"><a v-link="{path: '/'}">首页</a></li>
        <li><a v-link="{path: '/cad'}">AutoCAD</a></li>
        <li><a v-link="{path: '/wall'}">瓷砖墙</a></li>
        <li><a v-link="{path: '/about'}">关于我们</a></li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>

</script>

<style lang="css" scoped>
.nav-wrapper {
  z-index: 999;
  background-color: #27546F;
}
.top-nav {
  background-color: #27546F;
}
</style>
