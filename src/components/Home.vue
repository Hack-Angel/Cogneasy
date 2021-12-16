<template>
  <div class="home">
    <div class="container">
        <Navbar /> 
    </div>
   <Banner />
   <Card />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    Card,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
