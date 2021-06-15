import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fb0911b = () => interopDefault(import('../pages/community/index.vue' /* webpackChunkName: "pages/community/index" */))
const _b8b8893e = () => interopDefault(import('../pages/community/kb/index.vue' /* webpackChunkName: "pages/community/kb/index" */))
const _c3e79cce = () => interopDefault(import('../pages/community/questions/index.vue' /* webpackChunkName: "pages/community/questions/index" */))
const _2586dda6 = () => interopDefault(import('../pages/community/kb/blog/index.vue' /* webpackChunkName: "pages/community/kb/blog/index" */))
const _41515574 = () => interopDefault(import('../pages/community/kb/mfilter.vue' /* webpackChunkName: "pages/community/kb/mfilter" */))
const _c66694de = () => interopDefault(import('../pages/community/kb/blog/_id/index.vue' /* webpackChunkName: "pages/community/kb/blog/_id/index" */))
const _4008b429 = () => interopDefault(import('../pages/community/kb/blog/_id/_name.vue' /* webpackChunkName: "pages/community/kb/blog/_id/_name" */))
const _dbc7c6fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/community",
    component: _0fb0911b,
    name: "community"
  }, {
    path: "/community/kb",
    component: _b8b8893e,
    name: "community-kb"
  }, {
    path: "/community/questions",
    component: _c3e79cce,
    name: "community-questions"
  }, {
    path: "/community/kb/blog",
    component: _2586dda6,
    name: "community-kb-blog"
  }, {
    path: "/community/kb/mfilter",
    component: _41515574,
    name: "community-kb-mfilter"
  }, {
    path: "/community/kb/blog/:id",
    component: _c66694de,
    name: "community-kb-blog-id"
  }, {
    path: "/community/kb/blog/:id/:name",
    component: _4008b429,
    name: "community-kb-blog-id-name"
  }, {
    path: "/",
    component: _dbc7c6fe,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
