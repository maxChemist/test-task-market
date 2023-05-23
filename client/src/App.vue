<template>
    <header-nav />

    <router-view class="main-content" />
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.main-content {
  position: relative;
  width: 100%;
  height: inherit;
  margin-top: 50px;
}
</style>
