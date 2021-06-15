<template>
  <section class="kb-summary p-3 mx-2 mt-3">
    <a :href="getPath" class="no-decoration">
      <div class="space-between">
        <div class="text-x-small text-lightest">
          <span>Created:&nbsp;</span>
          <span class="text-primary">{{data.lastUpdatedTime}}</span>
        </div>
        <div class="text-x-small text-lightest">
          <span><i class="fa fa-eye"></i>&nbsp;</span>
          <span class="text-primary">{{data.docViewCount}}</span>
        </div>
      </div>
      <p class="heading-4 text-lightest my-2">{{data.question}}</p>
      <div class="tag-container text-small mt-4">
        <tag  v-for="tag in data.tagNames" :key="tag.id" :name="tag" base="kb" class="mr-3 mt-2 text-small">
          {{tag}}
        </tag>
      </div>
      <div class="text-x-small text-lightest mt-4">
          <span>Version:&nbsp;</span>
          <span class="text-primary">{{data.version}}</span>
      </div>
      <div v-if="data.outdated" class="kb-outdated px-3 py-2 mt-4">
        <i class="fa fa-exclamation-triangle"></i>
        <span class="text-small text-lightest ml-1">{{data.outdatedMessage}} </span>
      </div>
    </a>
  </section>
</template>

<script>
import { PATH } from '@/config/constant.js'
export default {
  name: 'SummaryCard',
  components: {
    tag: () => import('../common/tag')
  },
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

<style lang="scss">
.kb-summary {
  border: 1px solid rgba(#000000, 0.05);
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(#000000, 0.05);
}
.kb-outdated {
  background-color: rgba($warning-color,0.25);
  border-radius: 8px;
  i {
    font-size: 14px;
    color: $warning-color
  }
}
</style>