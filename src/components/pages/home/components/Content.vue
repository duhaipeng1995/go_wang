<template>
    <div class="content">
        <div class="content-title">热销推荐</div>
        <ul class="content-item-box">
            <li
            class="content-item border-button"
            v-for="(list, index) in recommendList"
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
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    recommendList: Array
  },
  data () {
    return {
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
.content-item {
    display: flex;
    height: 1.9rem;;
    overflow: hidden;
}
.content-item-img img {
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
}
.item-info {
    flex: 1;
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
