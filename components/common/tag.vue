<template>
  <a :href="getPath" class="tag">
    <slot/>
  </a>
</template>

<script>
import { PATH } from '@/config/constant.js'
export default {
  name: 'Tag',
  props: {
    name: String,
    base: String
  },
  computed: {
    getPath () {
      if(this.base ==='kb') {
        return PATH.kb_blog_search(this.name)
      } else if (this.base = 'community') {
        return PATH.community_search(this.name)
      } else {
        return '#'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a.tag {
  color: $s-color-2;
  box-shadow: -2px -2px 2px 0px #FBFBFB, 2px 2px 4px 0px #CDCDCD;
  background-color: $s1-color-0;
  border: 1px solid $s1-color-2;
  display: inline-block;
  padding: 0.3em 1.2em;
  font-size: 1em;
  border-radius: 2em;
  text-decoration: none;
  &:hover {
    background-color: $s1-color-2;
  }
}
</style>