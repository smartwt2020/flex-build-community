<template>
  <nav :class="isDesktop ? 'space-between' : null">
    <div
      v-if="isMobile"
      class="nav-drawer fixed"
      :class="openDrawer? 'open-drawer': null"
      tabindex="0"
      ref="drawer"
      @blur="closeDrawer"
      @mouseleave="closeDrawer">
      <div class="v-center brand m-4" v-if="isLoggedIn">
        <Avatar v-if="isLoggedIn" name="shubham maurya" src="" size="40px"/>
        <h1 class="brand-title heading-4 ml-3">Shubham Maurya</h1>
      </div>
      <div class="v-center brand" v-else>
        <img :src="logUrl" alt="we build Logo" class="ml-5 brand-logo">
        <h1 class="brand-title heading-4 ml-3">WBuild Community Portal</h1>
      </div>
      <div class="links links-mobile  m-5">
        <a v-if="isLoggedIn" class="mx-1 px-2 py-3 mt-3 mb-2 text-normal" href="#">Profile</a>
        <a class="mx-1 px-2 py-3 mt-3 mb-2 text-normal" :href="homePath">Home</a>
        <a class="mx-1 px-2 py-3 text-normal" :href="communityPath">Community Portal</a>
        <a class="mx-1 px-2 py-3 text-normal" :href="kbPath">Knowladge Base</a>
        <a v-if="isLoggedIn" class="mx-1 px-2 py-3 text-normal" href="#">Logout</a>
      </div>
      <div class="mx-5" v-if="!isLoggedIn">
        <button class="heading-4 my-5 block outline-white">SignUp</button>
        <button class="heading-4 block outline-white ">Login</button>
      </div>
    </div>
    <div class="h-100p v-center brand">
      <img v-if="isDesktop" :src="logUrl" alt="we build Logo" class="desktop-only ml-5 brand-logo">
      <i v-else class="fa fa-bars  ml-5 text-white" @click="openDrawer = true"></i>
      <h1 class="brand-title heading-4 ml-3">WBuild Community Portal</h1>
      <div class="links v-center mx-5" v-if="isDesktop">
        <a :class="!pathName ? 'active' : null" class="mx-1 px-2 py-3 mt-3 mb-2 text-normal" :href="homePath">Home</a>
        <a :class="pathName === 'questions' ? 'active' : null" class="mx-1 px-2 py-3 text-normal" :href="communityPath">Community Portal</a>
        <a :class="pathName === 'kb' ? 'active' : null" class="mx-1 px-2 py-3 text-normal" :href="kbPath">Knowladge Base</a>
      </div>
    </div>
    <div class="user v-center mx-5" v-if="isDesktop">
      <Avatar v-if="isLoggedIn" name="shubham maurya" src="" size="40px"/>
      <div v-else>
        <button class="heading-4 outline-white mx-2 ">SignUp</button>
        <button class="heading-4 outline-white ">Login</button>
      </div>
    </div>

  </nav>
</template>

<script>
import { WE_BUILD_LOGO_URL, PATH } from '@/config/constant'
import device from '@/mixins/device.js'
import clickOutside from '@/directive/click-out-side.js'
export default {
  name: 'Navbar',
  mixins: [device],
  directives: {
    'click-outside': clickOutside
  },
  components: {
    Avatar: () => import('@/components/common/avatar.vue')
  },
  data: () => ({
    logUrl: WE_BUILD_LOGO_URL,
    homePath: PATH.home,
    kbPath: PATH.kb_blog,
    communityPath: PATH.community_question,
    isLoggedIn: false,
    openDrawer: false
  }),
  computed: {
    pathName () {
      return this.$nuxt.$route.path.split('/')[2]
    }
  },
  methods: {
    closeDrawer () {
      this.openDrawer = false
      this.$refs.drawer.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background: $p-color-0;
  height: 60px;
  z-index: 1;
  .brand{
    &-logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    i {
      font-size: 24px;
    }
    &-title {
      color: $s-color-0;
    }
  }
  .links {
    a {
      color: $white-color;
      text-decoration: none;
      &:hover {
        background: rgba($white-color, 0.15);
      }
      &.active {
        background: rgba($white-color, 0.05);
        &:hover {
          background: rgba($white-color, 0.15);
        }
      }
    }
    &-mobile {
      a {
        display: block;
      }
    }
  }
  .nav-drawer {
    left: -100vw;
    width: 75vw;
    height: 100vh;
    z-index: 100;

    background-color: $p-color-0;
    box-shadow: 4px 0px 8px 0px #494949;

    transition: left 600ms;

    &.open-drawer {
      left: 0px;
    }
  }
}
</style>
