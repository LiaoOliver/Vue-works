<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="App">
      <PageHead></PageHead>
      <router-view/>
    </div>
    <PageFootr></PageFootr>
  </div>
</template>

<script>
import PageHead from '@/components/Page_Head.vue'
import PageFootr from '@/components/Page_Footer.vue'
export default {
  components: {
    PageHead,
    PageFootr
  }
}
</script>


<style lang="scss">
@import '@/assets/styles/reset.scss';
</style>
