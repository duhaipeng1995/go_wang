<template>
    <div class="name">
      <home-header></home-header>
      <home-banner></home-banner>
      <div>test</div>
    </div>
</template>

<script>
import Header from '@/components/pages/home/components/Header'
import Banner from '@/components/pages/home/components/Banner'
export default {
  data () {
    return {
    }
  },
  components: {
    'home-header': Header,
    'home-banner': Banner
  }
}
</script>

<style scoped>

</style>
