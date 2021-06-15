<template>
  <div class="tag_filter">
    <div class="text-light m-3" @click="$router.go(-1)">
      <i class="fa fa-arrow-left"></i>
      <span>Back</span>
    </div>
    <div class="search-box text-lightest">
      <i class="fa fa-search"></i>
      <input type="text" @focus="openFilter" @blur="closeFilter" v-model="searchKey"/>
      <ul v-show="open" class="search-filter">
        <div>
          <li v-for="tag in getFilterResult" :key="tag.id" class="text-small">
            <a class="no-decoration text-normal text-light py-3" :href="getPath(tag.key)">{{tag.key}}</a>
          </li>
          <div v-if="getFilterResult.length === 0" class="text-small" >
            Can't find any search result for tag named <b>"{{this.searchKey}}"</b> 
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchAllTag } from '@/api/common.js'
import { PATH } from '@/config/constant.js'
export default {
  name: 'MFilter',
  async fetch() {
    this.tagList = await fetchAllTag()
  },
  data: () => ({
    tagList: {},
    open: true,
    searchKey: ''
  }),
  computed: {
    getFilterResult () {
      const result = []
      this.tagList.forEach(e => {
        const str = e.key
        if(str.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase())) {
          result.push(e)
        }
      })
      return result
    }
  },
  methods: {
    getPath (tag) {
      return PATH.kb_blog_search(tag)
    },
    openFilter () {
      this.open = true
    },
    closeFilter () {
      setTimeout(() => {
        // this.open = false
      }, 200)
    }
  },
  mounted () {
    this.open = false
  }
}
</script>

<style lang="scss" scoped>
.tag_filter {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background: $white-color;
  z-index: 10000;
  .search-box {
    position: relative;
    padding: 15px;
    padding-top: 0px;
    i {
      position: absolute;
      top: 50%;
      left: 25px;
      top: 10px;
    }
    input {
      height: 35px;
      width: 300px;
      display: block;
      padding-left: 35px;
      border-radius: 2em;
      width: 100%;
      border: 1px solid $s1-color-2;
      background: $white-color;
    }
    .search-filter {
      padding: 0px;
      list-style: none;
      margin: 0px;
      padding: 15px;
      border: 1px solid $s1-color-2;
      border-top: 0px;
      margin-top: -12px;
      padding-top: 20px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      overflow: hidden;
      & > div {
        max-height: calc( 100vh - 250px);
        overflow: auto;
      }
      li {
        display: block;
        a {
          display: block;
          border-bottom: 1px solid $s1-color-2;
        }
      }
    }
  }
}
</style>