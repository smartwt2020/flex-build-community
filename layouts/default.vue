<template>
  <div>
    <Navbar />
    <section class="main-container">
      <Nuxt />
    </section>
    <Footbar />
  </div>
</template>
<script>
export default {
  name: 'layout',
  components: {
    Navbar: () => import('./component/navbar'),
    Footbar: () => import('./component/footbar')
  }
}
</script>
<style>
@import '~assets/style/main.scss';

.main-container {
  margin-top: 60px;
  min-height: calc(100vh - 100px);
}
</style>
