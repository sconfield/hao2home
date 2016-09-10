<template lang="html">
  <div class="nav-bar">
    <span v-for="btn in navbar"
          v-on:click="putCenter(btn)"
          v-bind:class="{'current': btn.center}"
          title="{{btn.name}}">&nbsp;</span>
  </div>
</template>

<script>
import {putCurrentPaperCenter} from '../tools/PaperTools'

export default {
  props: {
    navbar: Array,
    wall: Object
  },
  methods: {
    putCenter: function(btn){
      putCurrentPaperCenter(btn, this.navbar, this.wall);
    }
  }
};
</script>

<style lang="css" scoped>
.nav-bar {
  position: absolute;
  bottom: 36px;
  z-index: 999;
  width: 40%;
  left: 30%;
  text-align: center;
}
.nav-bar span {
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  background-color: #90a4ae;
  text-align: center;
  border-radius: 50%;
  -webkit-transform: scale(.52);
  -moz-transform: scale(.52);
}
.nav-bar span:hover {
  -webkit-transform: scale(.88);
  -webkit-transition: all .5s;
  -moz-transform: scale(.88);
  -moz-transition: all .5s;
  background-color: #64b5f6;
}
.nav-bar .current {
  background-color: #42a5f5;
  -webkit-transform: scale(.99);
  -moz-transform: scale(.99);
}
</style>
