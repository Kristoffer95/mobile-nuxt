<template>
  <div class="wrapper w-screen flex flex-col justify-between">
    <div class="ellipse"></div>


    <div>
      <div class="flex flex-col px-2" style="margin-left: 28%;">
        <span class="texts">Test</span>
        <span class="texts">Mobile</span>
        <span class="texts">Index</span>
        <span class="texts">All</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'empty',
})
</script>

<style lang="scss">
.wrapper {
  overflow: hidden;
  height: 100vh;

  .ellipse {
    margin-top: -37px;
    margin-left: -37px;
    width: 168px;
    height: 168px;
    background-color: #FF0000;
    border: 1px solid #707070;
    border-radius: 50%;
  }

  .texts {
    font-size: calc(100vw / 5);
    letter-spacing: 2.25px;
    line-height: calc(100vw / 4);
    color: #319795;
  }

}
</style>
