<template>
  <main class="container">
    <DesktopNavbar v-if="isDesktop" :tagList="tagList" />
    <MobileNavbar v-else />
    <div class="flex kb-view">
      <div v-if="isDesktop" class="col-3 trending-container">
        <div class="heading-4 trending">Treanding</div>
        <TrendingCard v-for="card in mostViewedKB" :key="card.id" :data="card"/>
        <button class="outline-s-2 ">More...</button>
      </div>
      <div :class="isDesktop ? 'col-9' : 'col-12'">
        <KbBlogCard :data="kbBlog" />
      </div>
    </div>
  </main>
</template>

<script>
import device from '@/mixins/device.js'
import { fetchMostViewedKB, fetchKbBlog } from '@/api/kb.js'
import { fetchAllTag } from '@/api/common.js'

export default {
  name: 'KbBlog',
  mixins: [device],
  async fetch() {
    const query = this.$nuxt.$route.params
    this.id = query.id
    this.name = query.name
    this.tagList = await fetchAllTag()
    this.mostViewedKB = await fetchMostViewedKB()
    this.kbBlog = await fetchKbBlog(this.id)
  },
  components: {
    DesktopNavbar: () => import('@/components/kb/desktop-navbar.vue'),
    MobileNavbar: () => import('@/components/kb/mobile-navbar.vue'),
    TrendingCard: () => import('@/components/kb/trending-card.vue'),
    KbBlogCard: () => import('@/components/kb/blog.vue')
  },
  data: () => ({
    name: '',
    id: '',
    mostViewedKB: [],
    tagList: [],
    kbBlog: {}
  }),
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.trending-container {
    padding-right: 15px;
    border-right: 1px solid $s1-color-0;
    button {
      font-size: 18px;
    }
  }
  .trending {
    color: $p-color-0;
    margin-bottom: 15px;
  }
</style>