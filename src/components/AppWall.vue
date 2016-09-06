<template>
  <div class="wall">
    <tile-paper v-for="(index, tile) in tileList | filterBy tileName in 'name'"
      v-bind:paper="tile"
      v-bind:idx="index"
      v-bind:wall="wall"
      v-on:click="putCenter(tile)"></tile-paper>
    <tile-nav v-bind:navbar="tileList | filterBy tileName in 'name'"
      v-bind:wall="wall"></tile-nav>
    <div class="tile-filter">
      <div class="input-field">
        <input id="nameFilter" type="text" v-model="tileName">
        <label for="nameFilter">搜索编号</label>
      </div>
    </div>
  </div>
</template>

<script>
import TilePaper from './TilePaper'
import TileNav from './TileNav'
import tileData from '../data/Tile'
import {putCurrentPaperCenter} from '../tools/PaperTools'

export default {
  data: function(){
    return {
      tileList: tileData.slice(0, 6),
      tileName: ''
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
  components: {
    TilePaper,
    TileNav
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wall {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.tile-filter {
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
}
.tile-filter label {
  color: white;
}
.tile-filter input:focus:not([readonly])+label {
  color: white;
}
.tile-filter input:focus:not([readonly]) {
  border-bottom: 1px solid white;
}
</style>
