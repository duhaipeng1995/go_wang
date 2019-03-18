<template>
    <div class="content">
        <div class="content-title">周末去哪</div>
        <ul class="content-item-box">
            <li
            class="content-item border-button"
            v-for="(list, index) in weekendList"
            :key="index"
            >
                <!-- 图片 -->
                <div class="content-item-img">
                    <img :src="list.imgUrl" alt="">
                </div>
                <!-- info -->
                <div class="item-info">
                    <p class="item-title">{{list.title}}</p>
                    <p class="item-content">{{list.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    weekendList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.content-title {
    line-height: .4rem;
    background: #eee;
    text-indent: .2rem;
}
.content-item-img {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.9%;
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
