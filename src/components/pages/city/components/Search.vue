<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="请输入城市或拼音">
    </div>
</template>

<script>
export default {
  name: 'City-Search',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.search {
    height: .72rem;
    padding: 0 .1rem;
    background-color: #00bcd4;
}
.search-input {
    width: 100%;
    height: .62rem;
    line-height: .62rem;
    padding: 0 .1rem;
    text-align: center;
    box-sizing: border-box;
    border-radius: .2rem;
}
</style>
