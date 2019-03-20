<template>
    <div class="city">
        <city-header></city-header>
    </div>
</template>

<script>
import Header from '@/components/pages/city/components/Header'
export default {
  name: 'City',
  data () {
    return {
    }
  },
  components: {
    'city-header': Header
  }
}
</script>

<style scoped>
</style>
