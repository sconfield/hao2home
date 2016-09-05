<template lang="html">
  <nav class="top-nav">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">www.hao2home.com</a>
      <ul class="left hide-on-med-and-down">
        <li class="active"><a v-link="{path: '/'}">首页</a></li>
        <li><a v-link="{path: '/acd'}">AutoCAD</a></li>
        <li><a v-link="{path: '/wall'}">瓷砖墙</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>

</script>

<style lang="css" scoped>
.nav-wrapper {
  z-index: 998;
  background-color: #27546F;
}
.top-nav {
  background-color: #27546F;
}
</style>
