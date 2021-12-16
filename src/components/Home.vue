<template>
  <div class="home">
    <div class="container">
        <Navbar /> 
    </div>
   <Banner />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
