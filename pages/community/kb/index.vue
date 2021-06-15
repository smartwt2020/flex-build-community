<template>
  <section class="container">
    <DesktopNavbar v-if="isDesktop" :tagList="tagList" />
    <MobileNavbar v-else />
    <div class="flex kb-view">
      <div v-if="isDesktop" class="col-3 trending-container">
        <div class="heading-4 trending">Treanding</div>
        <TrendingCard v-for="card in mostViewedKB" :key="card.id" :data="card"/>
        <!-- <button class="outline-s-2 ">More...</button> -->
      </div>
      <div :class="isDesktop ? 'col-9' : 'col-12'">
        <SummaryCard v-for="card in KBList" :key="card.id" :data="card"/>
        <div class="my-5 v-center text-small text-light kb-pagination">
          <button class="mr-2" @click="changePage(-1)" :disabled="!page">
            <i class="fa fa-arrow-left"></i>
            Prev
          </button>
          {{this.page}}
          <button class="ml-2" @click="changePage(1)">
            Next
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import device from '@/mixins/device.js'
import { fetchMostViewedKB, fetchRecentKB, fetchKBbyTag } from '@/api/kb.js'
import { fetchAllTag } from '@/api/common.js'
import { PATH } from '@/config/constant'
export default {
  name: 'KB',
  mixins: [device],
  async fetch() {
    const query = this.$nuxt.$route.query
    const search = query.search || ''
    const pageNumber = query.page || 0
    this.page = isNaN(pageNumber) ? 0 : parseInt(pageNumber)
    this.search = search
    this.tagList = await fetchAllTag()
    this.mostViewedKB = await fetchMostViewedKB()
    if (!search) {
      this.KBList = await fetchRecentKB(pageNumber, 5)
    } else {
      this.KBList = await fetchKBbyTag(search, pageNumber, 5)
    }
  },
  components: {
    DesktopNavbar: () => import('@/components/kb/desktop-navbar.vue'),
    MobileNavbar: () => import('@/components/kb/mobile-navbar.vue'),
    TrendingCard: () => import('@/components/kb/trending-card.vue'),
    SummaryCard: () => import('@/components/kb/summary-card.vue'),
  },
  data: () => ({
    mostViewedKB: '',
    KBList: '',
    page: 0,
    search: '',
    tagList: []
  }),
  methods: {
    changePage (dir) {
      if (this.page < 0) {
        this.page = 0
      }
      window.location.href = PATH.kb_blog_search(this.search, this.page + dir)
    }
  },
  mounted () {
    console.log(' sdfvgdsg ')
    if (this.page < 0) {
      window.location.href = PATH.kb_blog_search(this.search, 0)
    }
    if (this.KBList.length === 0 && this.page !== 0) {
      window.location.href = PATH.kb_blog_search(this.search, --this.page)
    }
  }
}
</script>

<style lang="scss" scoped>
.kb-view {
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
  .kb-pagination {
    justify-content: flex-end;
    button {
      background: transparent;
      border: 0px;
      padding: 4px 8px;
      border-radius: 2em;
      &:hover {
        background: rgba($p-color-0, 0.1);
      }
    }
  }
}
</style>