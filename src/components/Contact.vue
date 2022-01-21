<template>
    <div class="contact">
         <Navbar />
        <div class="container">
           <Visit />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Visit from '@/components/Visit.vue'
import Footer from '@/components/Footer.vue'

export default{
    name: 'Contact',
    components: {
        Navbar,
        Visit,      
        Footer,
    },
}
</script>

<style scoped>
.nav_shadow{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
.contact{
  background-color: white;
}
</style>
