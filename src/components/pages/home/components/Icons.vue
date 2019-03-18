<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide
            v-for="(page, index) in pages"
            :key="index">
                <div class="icon"
                v-for="(item,index) in page"
                :key="index"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-text">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  props: {
    iconsListL: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsListL.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
.icons >>>.swiper-container {
    width: 100%;
    height: 0;;
    padding-bottom: 50%;
    margin-top: .2rem;
}
.icon {
    position: relative;
    width: 25%;
    overflow: hidden;
    float: left;
    height: 0;
    padding-bottom: 25%;
}
.icon-img-content {
    display: block;
    margin: auto;
    height: 100%;
    border: 0px;
}
.icon-img {
    box-sizing: border-box;
    padding: .1rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .65rem;
}
.icon-text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
}
</style>
