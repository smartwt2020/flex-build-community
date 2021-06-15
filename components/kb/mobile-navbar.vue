<template>
  <nav class="space-between v-center">
    <h3 class="title heading-4 ml-1">WeBuild Knowladge Base</h3>
    <div class="search-box text-lightest">
      <a class="text-normal text-lightest no-decoration" :href="PATH.kb_mw_filter">
        <i class="fa fa-search"></i>
        Search
      </a>
    </div>
  </nav>
</template>

<script>
import { PATH } from '@/config/constant'
export default {
  name: 'KbMobNav',
  data: () => ({
    PATH
  })
}
</script>

<style lang="scss" scoped>
.search-box {
  a {
    border: 1px solid $s1-color-2;
    margin: 0px 5px;
    display: block;
    border-radius: 2em;
    padding: 5px 15px;
  }
}
</style>