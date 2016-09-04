<template>
  <div class="wall blue lighten-3">
    <tile-paper v-for="(index, tile) in tileList"
      v-bind:paper="tile"
      v-bind:idx="index"
      v-bind:wall="wall"
      v-on:click="putCenter(tile)"></tile-paper>
    <tile-nav v-bind:navbar="tileList"
      v-bind:wall="wall"></tile-nav>
  </div>
</template>

<script>
import TilePaper from './components/TilePaper'
import TileNav from './components/TileNav'
import tileData from './data/Tile'
import {putCurrentPaperCenter, putAll} from './tools/PaperTools'

export default {
  data: function(){
    return {
      tileList: tileData.slice(0, 10)
    };
  },
  methods: {
    putCenter: function(tile){
      putCurrentPaperCenter(tile, this.tileList, this.wall);
    }
  },
  computed: {
    wall: function(){
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      };
    }
  },
  ready: function(){
    var self = this;
    setTimeout(function(){
      putAll(self.tileList, self.wall);
    }, 800);
  },
  components: {
    TilePaper,
    TileNav
  }
}
</script>

<style>
.wall {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
