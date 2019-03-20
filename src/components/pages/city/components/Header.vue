<template>
    <div class="city-header">
        城市选择
        <router-link to="/">
            <div class="header-back">&lt;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'City-Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.city-header {
    position: relative;
    width: 100%;
    height: .86rem;
    line-height: .86rem;
    overflow: hidden;
    text-align: center;
    background-color: #00bcd4;
    color: #fff;
    font-size: .32rem;
}
.header-back {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
}
</style>
