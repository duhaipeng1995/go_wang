<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in imgUrlList" :key="index"><img class="img" :src="item.imgUrl" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgUrlList: [
        {
          id: '0001',
          imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7c24629cca2bbf4b6292f57569617793.jpg'
        }, {
          id: '0002',
          imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/ccc7532c18717399917be27d7783362f.jpg'
        }, {
          id: '0003',
          imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/2bdfaa2ee8b3524ebe1bf43dc90fe283.jpg'
        }
      ]
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
    padding-bottom: 51.25%;
    background: #ccc;
}
.img {
    width: 100%;
}
</style>
