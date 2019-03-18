<template>
    <div class="name">
      <home-header :city="city"></home-header>
      <home-banner :swiperList="swiperList"></home-banner>
      <home-icons :iconsListL="iconsListL"></home-icons>
      <home-content :recommendList="recommendList"></home-content>
      <!-- 周末游 -->
      <home-weekend :weekendList="weekendList"></home-weekend>
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
      city: '',
      swiperList: [],
      iconsListL: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    'home-header': Header,
    'home-banner': Banner,
    'home-icons': Icons,
    'home-content': Content,
    'home-weekend': Weekend
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        console.log(res)
        const data = res.data
        // city
        this.city = data.city
        // banner轮播图
        this.swiperList = data.swiperList
        // icon
        this.iconsListL = data.iconList
        // 热销推荐
        this.recommendList = data.recommendList
        // 周末去哪
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style scoped>

</style>
