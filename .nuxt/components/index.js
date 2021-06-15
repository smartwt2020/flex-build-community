export { default as Logo } from '../../components/Logo.vue'
export { default as Blog } from '../../components/kb/blog.vue'
export { default as DesktopNavbar } from '../../components/kb/desktop-navbar.vue'
export { default as MobileNavbar } from '../../components/kb/mobile-navbar.vue'
export { default as SummaryCard } from '../../components/kb/summary-card.vue'
export { default as TrendingCard } from '../../components/kb/trending-card.vue'
export { default as Avatar } from '../../components/common/avatar.vue'
export { default as Tag } from '../../components/common/tag.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyBlog = import('../../components/kb/blog.vue' /* webpackChunkName: "components/blog" */).then(c => c.default || c)
export const LazyDesktopNavbar = import('../../components/kb/desktop-navbar.vue' /* webpackChunkName: "components/desktop-navbar" */).then(c => c.default || c)
export const LazyMobileNavbar = import('../../components/kb/mobile-navbar.vue' /* webpackChunkName: "components/mobile-navbar" */).then(c => c.default || c)
export const LazySummaryCard = import('../../components/kb/summary-card.vue' /* webpackChunkName: "components/summary-card" */).then(c => c.default || c)
export const LazyTrendingCard = import('../../components/kb/trending-card.vue' /* webpackChunkName: "components/trending-card" */).then(c => c.default || c)
export const LazyAvatar = import('../../components/common/avatar.vue' /* webpackChunkName: "components/avatar" */).then(c => c.default || c)
export const LazyTag = import('../../components/common/tag.vue' /* webpackChunkName: "components/tag" */).then(c => c.default || c)
