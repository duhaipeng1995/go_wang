<template>
    <div class="name">
      <home-header></home-header>
      <home-banner></home-banner>
      <home-icons></home-icons>
      <home-content></home-content>
      <!-- 周末游 -->
      <home-weekend></home-weekend>
    </div>
</template>

<script>
import Header from '@/components/pages/home/components/Header'
import Banner from '@/components/pages/home/components/Banner'
import Icons from '@/components/pages/home/components/Icons'
import Content from '@/components/pages/home/components/Content'
// 周末游
import Weekend from '@/components/pages/home/components/Weekend'
export default {
  data () {
    return {
    }
  },
  components: {
    'home-header': Header,
    'home-banner': Banner,
    'home-icons': Icons,
    'home-content': Content,
    'home-weekend': Weekend
  }
}
</script>

<style scoped>

</style>
