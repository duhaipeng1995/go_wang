<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import Header from '@/components/pages/city/components/Header'
import Search from '@/components/pages/city/components/Search'
export default {
  name: 'City',
  data () {
    return {
    }
  },
  components: {
    'city-header': Header,
    'city-search': Search
  }
}
</script>

<style scoped>
</style>
