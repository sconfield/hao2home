<template>
  <div class="paper"
    v-bind:class="{'paper-center': paper.center, 'stage-front': paper.front, 'stage-back': !paper.front}"
    v-bind:style="paper.putWhere">
    <div class="stage-box z-depth-2" v-on:click="turnPaper">
      <div class="stage paper-front light-blue lighten-5">
        <p>
          <img v-bind:src="paper.path" alt="{{paper.name}}" />
        </p>
        <p class="center-align flow-text">
          {{paper.title}}
        </p>
      </div>
      <div class="stage paper-back blue-grey lighten-4">
        <p class="">
          {{paper.desc}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {putAnyWhere, getCenterAddr} from '../tools/PaperTools'

export default {
  props: {
    paper: Object,
    idx: Number,
    wall: Object
  },
  methods: {
    turnPaper: function(){
      if (this.paper.center) {
        this.paper.front = !this.paper.front;
      }
    }
  },
  created: function(){
    this.paper.putWhere = getCenterAddr(this.wall);
  },
  ready: function(){
    var self = this;
    setTimeout(function(){
      putAnyWhere(self.paper, self.wall, self.idx);
    }, 800);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paper {
  width: 260px;
  height: 400px;
  position: absolute;
  z-index: 1;
  -webkit-perspective: 800px;
  -webkit-transition: all .8s;
  -moz-perspective: 800px;
  -moz-transition: all .8s;
}
.paper .stage {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
}
.paper .paper-front img {
  width: 100%;
}
.paper-center {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  z-index: 999;
}
.stage-box {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -webkit-transition: all .6s;
  -moz-transform-style: preserve-3d;
  -moz-transition: all .6s;

}
.stage-box .paper-front {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
}
.stage-box .paper-back {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
}
.stage-box .stage {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}
.stage-front .stage-box {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
}
.stage-back .stage-box {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
}
</style>
