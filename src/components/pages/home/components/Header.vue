<template>
    <div class="header">
        <div class="header-left">
            <a href="#">返回</a>
        </div>
        <div class="header-input">
            内容
        </div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是header'
    }
  }
}
</script>

<style scoped>
.header {
    height: .86rem;
    line-height: .86rem;
    display: flex;
    color: #fff;
    background: #00bcd4;
}
.header .header-left {
    width: 0.86rem;
    float: left;
}
.header .header-input {
    flex: 1;
    background-color: #fff;
    border-radius: .1rem;
}
.header .header-right {
    width: 1.34rem;
    float: right;
    text-align: center;
}
</style>
