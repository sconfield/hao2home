<template>
  <div class="paper"
    v-bind:class="{'paper-center': paper.center, 'stage-front': paper.front, 'stage-back': !paper.front}"
    v-bind:style="putWhere">
    <div class="stage-box"
      v-on:click="turnPaper">
      <div class="stage paper-front">
        <p class="image">
          <img v-bind:src="paper.path" alt="{{paper.name}}" />
        </p>
        <p class="title">
          {{paper.title}}
        </p>
      </div>
      <div class="stage paper-back">
        <p class="desc">
          {{paper.desc}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      putWhere: {
        top: '50%',
        left: '50%',
        '-webkit-transform': 'rotate(0deg)'
      }
    }
  },
  props: {
    paper: Object,
    idx: Number
  },
  methods: {
    turnPaper: function(){
      this.paper.front = !this.paper.front;
    }
  },
  ready: function(){
    if (this.paper.center) {
      return;
    }

    this.putWhere['-webkit-transform'] = 'rotate(' + Math.random()*360 + 'deg)';

    var _x = 0, _y = 0;
    switch (this.idx%4) {
      case 0:
        this.putWhere.left = (50 * Math.random() - 13) + '%';
        this.putWhere.top = (50 * Math.random() - 13) + '%';
        break;
      case 1:
        this.putWhere.left = 50 * Math.random() + 36 + '%';
        this.putWhere.top = (50 * Math.random() - 13) + '%';
        break;
      case 2:
        this.putWhere.left = (50 * Math.random() - 13) + '%';
        this.putWhere.top = 50 * Math.random() + 36 + '%';
        break;
      case 3:
        this.putWhere.left = 50 * Math.random() + 36 + '%';
        this.putWhere.top = 50 * Math.random() + 36 + '%';
        break;
      default:
        console.log('vivijin');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paper {
  width: 260px;
  height: 400px;
  margin-left: -130px;
  margin-top: -200px;
  position: absolute;
  z-index: 1;
  box-shadow: 0 0 1px rgba(0, 0, 0, .01);
  -webkit-perspective: 800px;
}
.paper .stage {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #eee;
  top: 0;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
}
.paper .paper-front .image {
  width: 100%;
  height: 100%;
  line-height: 250px;
  overflow: hidden;
}
.paper .paper-front .image img {
  width: 100%;
}
.paper .paper-front .title {
  text-align: center;
  font-size: 16px;
  line-height: 50px;
  margin-top: -70px;
}
.paper .paper-back .desc {
  color: #666;
  font-size: 14px;
  line-height: 1.5em;
}
.paper-center {
  /*
  width: 520px;
  height: 800px;
  margin-left: -260px;
  margin-top: -400px;
  */
  z-index: 999;
}
.stage-box {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -webkit-transition: all .6s;
}
.stage-box .paper-front {
  -webkit-transform: rotateY(0deg);
}
.stage-box .paper-back {
  -webkit-transform: rotateY(180deg);
}
.stage-box .stage {
  -webkit-backface-visibility: hidden;
}
.stage-front .stage-box {
  -webkit-transform: rotateY(0deg);
}
.stage-back .stage-box {
  -webkit-transform: rotateY(180deg);
}
</style>
