<template>
  <div class="home">
    <div class="container">
        <Navbar /> 
    </div>
   <Banner />
   <Card />
   <Upskill />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Card from '@/components/Card.vue'
import Upskill from '@/components/Upskill.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    Card,
    Upskill
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
