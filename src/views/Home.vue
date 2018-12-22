<template>
  <div class="Home">
    <Banner></Banner>
    <div class="layout">
      <SpecPrice></SpecPrice>
      <Intro></Intro>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/BackgroundBanner.vue'
import SpecPrice from '@/components/SpecPrice.vue'
import Intro from '@/components/Intro.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Banner,
    SpecPrice,
    Intro
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/layout.scss';
@import '@/assets/styles/home.scss';
</style>

