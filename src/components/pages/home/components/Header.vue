<template>
    <div class="header">
        <div class="header-left">
            <a href="#">返回</a>
        </div>
        <div class="header-input">
            内容
        </div>
        <router-link to="/city">
            <div class="header-right">{{this.city}}&gt;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  props: {
    city: String
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
    color: #fff;
}
</style>
