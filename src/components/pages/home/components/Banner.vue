<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key="index"><img class="img" :src="item.imgUrl" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style scoped>
.banner >>> .swiper-pagination-bullet-active {
    background-color: #fff;
}
.banner {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #ccc;
}
.img {
    width: 100%;
}
</style>
