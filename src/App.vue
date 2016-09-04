<template>
  <div class="wall blue lighten-3">
    <tile-paper v-for="(index, tile) in tileList | filterBy tileName in 'name'"
      v-bind:paper="tile"
      v-bind:idx="index"
      v-bind:wall="wall"
      v-on:click="putCenter(tile)"></tile-paper>
    <tile-nav v-bind:navbar="tileList | filterBy tileName in 'name'"
      v-bind:wall="wall"></tile-nav>
    <div class="row tile-filter">
      <div class="input-field col s2 offset-s10">
        <input id="nameFilter" type="text" v-model="tileName">
        <label class="active" for="nameFilter">search name</label>
      </div>
    </div>
  </div>
</template>

<script>
import TilePaper from './components/TilePaper'
import TileNav from './components/TileNav'
import tileData from './data/Tile'
import {putCurrentPaperCenter} from './tools/PaperTools'

export default {
  data: function(){
    return {
      tileList: tileData,
      tileName: ''
    };
  },
  methods: {
    putCenter: function(tile){
      putCurrentPaperCenter(tile, this.tileList, this.wall);
    },
    nameFilter: function(){

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
.wall {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.tile-filter {
  position: absolute;
  z-index: 999;
  width: 100%;
}
</style>
