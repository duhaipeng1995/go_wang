<template>
    <div class="content">
        <div class="content-title">周末去哪</div>
        <ul class="content-item-box">
            <li
            class="content-item border-button"
            v-for="(list, index) in listData"
            :key="index"
            >
                <!-- 图片 -->
                <div class="content-item-img">
                    <img :src="list.imgUrl" alt="">
                </div>
                <!-- info -->
                <div class="item-info">
                    <p class="item-title">{{list.title}}</p>
                    <p class="item-content">{{list.content}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return { listData: [
      {
        imgUrl: 'https://imgs.qunarzz.com/p/p15/1809/19/494898a39defb102.jpg_256x160_cc948293.jpg',
        title: '含往返飞机票(含税)+5晚住宿',
        content: '【其他】邸曼公寓(北京金茂府店)'
      }, {
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
        title: '含往返飞机票(含税)+5晚住宿',
        content: '【其他】邸曼公寓(北京金茂府店)'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '含往返飞机票(含税)+5晚住宿',
        content: '【其他】邸曼公寓(北京金茂府店)'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/p60/1809/f4/d19e9608d2d1a002.jpg_256x160_539f2e86.jpg',
        title: '含往返飞机票(含税)+5晚住宿',
        content: '【其他】邸曼公寓(北京金茂府店)'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '含往返飞机票(含税)+5晚住宿',
        content: '【其他】邸曼公寓(北京金茂府店)'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
        title: '含往返飞机票(含税)+5晚住宿',
        content: '【其他】邸曼公寓(北京金茂府店)'
      }
    ]
    }
  }
}
</script>

<style scoped>
.content-title {
    margin-top: .2rem;
    line-height: .4rem;
    background: #eee;
    text-indent: .2rem;
}
.content-item-img {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
}
.content-item-img img {
    width: 100%;
}
.border-button {
    border-bottom: 1px solid #ccc;
}
.item-title {
    line-height: .54rem;
    font-size: .32rem;
}
.item-content {
    line-height: .4rem;
    color: #ccc;
}
.item-button {
    background-color: #ff9300;
    border-radius: .06rem;
    line-height: .44rem;
    margin-top: .16rem;
    color: #fff;
}
</style>
