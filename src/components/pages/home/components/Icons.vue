<template>
    <div class="icons">
        <swiper>
            <swiper-slide
            v-for="(page, index) in pages"
            :key="index">
                <div class="icon"
                v-for="(item,index) in page"
                :key="index"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" src="//s.qunarzz.com/vacation_react/outbround/cruise.png">
                    </div>
                    <p class="icon-text">{{item.iconContent}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '热门景点'
        }, {
          id: '0002',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '景点门票'
        }, {
          id: '0003',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '滑雪季'
        }, {
          id: '0004',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '泡温泉'
        }, {
          id: '0005',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '动植物公园'
        }, {
          id: '0006',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '一日游'
        }, {
          id: '0007',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '自然风光'
        }, {
          id: '0008',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '全部'
        }, {
          id: '0008',
          imgList: '//s.qunarzz.com/vacation_react/outbround/cruise.png',
          iconContent: '热门景点'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
