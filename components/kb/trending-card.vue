<template>
  <article>
    <a :href="getPath" class="no-decoration">
      <p class="text-normal text-lightest my-2">{{data.question}}</p>
    </a>
    <div class="text-x-small text-lightest ">
      <span >Views:&nbsp;</span>
      <span class="value">{{data.docViewCount}}</span>
    </div>
    <div class="text-x-small text-lightest">
      <span>Created:&nbsp;</span>
      <span class="value">{{data.lastUpdatedTime}}</span>
    </div>
  </article>
</template>

<script>
import { PATH } from '@/config/constant'
export default {
  name: 'KbTrendingCard',
  props: {
    data: Object
  },
  computed: {
    getPath () {
      return PATH.kb_full_blog(this.data.id, this.data.question)
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid $s1-color-0;
  p:hover {
    color: $s-color-2
  }
}
.value {
  color: $p-color-0;
}
</style>