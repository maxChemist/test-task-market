<template>
  <div class="header c-line c-line--stretch padd padd--hrsnt_big">
    <router-link class="ref-style" :to="{ name: 'home' }">
      <div class="font-xxl">
        <span class="pointer pointer--hover_gold heavy">Market</span>
      </div>
    </router-link>

    <router-link class="ref-style" :to="{ name: 'basket' }">
      <div class="font-xxl">
        <span class="pointer pointer--hover_gold heavy">Basket</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HeaderNav",
};
</script>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 50px;
  background-color: aqua;
}
</style>
