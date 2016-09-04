<template>
  <div class="wall">
    <tile-paper v-for="(index, tile) in tileList"
      v-bind:paper="tile"
      v-bind:idx="index"
      v-bind:wallWidth="wallWidth"></tile-paper>
    <tile-nav v-bind:navbar="tileList"></tile-nav>
  </div>
</template>

<script>
import TilePaper from './components/TilePaper'
import TileNav from './components/TileNav'
import tileData from './data/Tile'

export default {
  data: function(){
    return {
      tileList: tileData
    };
  },
  computed: {
    wallWidth: function(){
      return document.body.clientWidth;
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
</style>
