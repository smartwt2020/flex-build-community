<template>
  <div class="avatar text center" :style="getStyle">
    <img v-if="validImg" :src="src" :alt="name" :title="name" @error="invalidImageUrl">
    <span v-else-if="userSortName">{{userSortName}}</span>
    <i v-else class="fa fa-user"></i>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: String,
    name: String,
    size: String,
    color: String
  },
  data: () => ({
    validImg: true
  }),
  computed: {
    getStyle () {
      return {
        fontSize: this.size || '16px',
        height: this.size || '16px',
        width: this.size || '16px',
        backgroundColor: this.color || '#F6F4F5'
      }
    },
    userSortName () {
      console.log('sadcsad')
      if(this.name) {
        const userNameArray = this.name.trim().toLocaleUpperCase().split(' ')
        if(userNameArray.length === 1) {
          return userNameArray[0][0] || false
        } else {
          return (userNameArray[0][0] + userNameArray[1][0])
        }
      } else {
        return false
      }
    }
  },
  methods: {
    invalidImageUrl () {
      this.validImg = false
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  span {
    font-size: 0.5em;
    font-weight: bold;
  }
}
</style>