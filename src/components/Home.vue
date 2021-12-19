<template>
  <div class="home">
    <Navbar /> 
    <Banner />
    <Card />
    <Upskill />
    <Mentor />
    <Meet />
    <Creator />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Card from '@/components/Card.vue'
import Upskill from '@/components/Upskill.vue'
import Mentor from '@/components/Mentor.vue'
import Meet from '@/components/Meet.vue'
import Creator from '@/components/Creator.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    Card,
    Upskill,
    Mentor,
    Meet,
    Creator,
    Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home .nav_shadow{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
</style>
