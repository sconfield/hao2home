<template lang="html">
  <nav class="top-nav z-depth-3">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">my-vue-demo</a>
      <ul class="left hide-on-med-and-down">
        <li v-for="item in menu"
          v-bind:class="{'active': item.active}"
          v-on:click="menuHandler(item)">
          <a v-link="{path: item.path}">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
  export default {
    data: function(){
      return {
        menu: [
          {name: '首页',path: '/', active: true},
          {name: 'AutoCAD',path: '/cad', active: false},
          {name: '瓷砖墙',path: '/wall', active: false},
          {name: '关于我们',path: '/about', active: false}
        ]
      };
    },
    methods: {
      menuHandler: function(m){
        for (var i = 0; i < this.menu.length; i++) {
          this.menu[i].active = false;
        }

        m.active = true;
      }
    }
  }
</script>

<style lang="css" scoped>
.nav-wrapper {
  z-index: 999;
  background-color: #799AAE;
}
.top-nav {
  background-color: #799AAE;
}
</style>
