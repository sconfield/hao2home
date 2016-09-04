<template lang="html">
  <div class="nav-bar">
    <span v-for="btn in navbar"
          v-on:click="turnCurrentPaper(btn)"
          v-bind:class="{'current': btn.center}"
          title="{{btn.name}}">&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    navbar: Array
  },
  methods: {
    turnCurrentPaper: function(paper){
      var beforePaper = {};
      // clear center
      for (var i = 0; i < this.navbar.length; i++) {
        var item = this.navbar[i];
        if (item.center) {
          beforePaper = item;
        }
        item.center = false;
      }
      // set center and putWhere
      paper.center = true;
      paper.putWhere = {};
      // set before paper putWhere
      if (paper !== beforePaper) {
        beforePaper.putWhere = {
          top: 100 * Math.random() + '%',
          left: 100 * Math.random() + '%',
          '-webkit-transform': 'rotate(' + Math.random()*360 + 'deg)'
        }
      }
    }
  }
};
</script>

<style lang="css" scoped>
.nav-bar {
  position: absolute;
  bottom: 0;
  z-index: 101;
  width: 40%;
  left: 30%;
  text-align: center;
}
.nav-bar span {
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  background-color: silver;
  text-align: center;
  border-radius: 50%;
  -webkit-transform: scale(.52);
}
.nav-bar span:hover {
  -webkit-transform: scale(.88);
}
.nav-bar .current {
  background-color: #42a5f5;
  -webkit-transform: scale(.99);
}
</style>
