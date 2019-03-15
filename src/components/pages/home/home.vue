<template>
    <div class="name">
      <home-header></home-header>
      <home-banner></home-banner>
      <home-icons></home-icons>
    </div>
</template>

<script>
import Header from '@/components/pages/home/components/Header'
import Banner from '@/components/pages/home/components/Banner'
import Icons from '@/components/pages/home/components/Icons'
export default {
  data () {
    return {
    }
  },
  components: {
    'home-header': Header,
    'home-banner': Banner,
    'home-icons': Icons
  }
}
</script>

<style scoped>

</style>
