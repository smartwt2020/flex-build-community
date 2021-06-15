<template>
  <nav class="space-between v-center">
    <h3 class="title heading-2">WeBuild Knowladge Base</h3>
    <div class="search-box text-lightest">
      <i class="fa fa-search"></i>
      <input type="text" @focus="openFilter" @blur="closeFilter" v-model="searchKey"/>
      <ul v-show="open" class="search-filter">
        <li v-for="tag in getFilterResult" :key="tag.id" class="text-small">
          <tag base="kb" :name="tag.key" class="mr-2 mt-2">{{tag.key}}</tag>
        </li>
        <div v-if="getFilterResult.length === 0" class="text-small" >
            Can't find any search result for tag named  <b>"{{this.searchKey}}"</b> 
          </div>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    tagList: [Object, Array]
  },
  components: {
    tag: () => import('../common/tag')
  },
  data: () => ({
    open: false,
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
    openFilter () {
      this.open = true
    },
    closeFilter () {
      setTimeout(() => {
        this.open = false
      }, 200)
    }
  },
  mounted () {
    this.open = false
  }
}
</script>

<style lang="scss" scoped>
nav {
  .title {
    color: $p-color-0
  }
  .search-box {
    position: relative;
    i {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }
    input {
      height: 35px;
      width: 300px;
      display: block;
      padding-left: 35px;
      border-radius: 8px;
      border: 1px solid $s1-color-2;
      &:focus {
        border: 1px solid $s-color-0;
        box-shadow: 0px 4px 4px $s1-color-2;
      }
    }
    .search-filter {
      position: absolute;
      width: 100%;
      padding: 0px;
      list-style: none;
      max-height: 250px;
      margin: 0px;
      display: flex;
      flex-wrap: wrap;
      border: 1px solid $s-color-0;
      border-top: 0px;
      top: 88%;
      background: white;
      padding: 5px 10px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      box-shadow: 0px 4px 4px $s1-color-2;
      overflow: auto;
    }
  }
}

</style>
