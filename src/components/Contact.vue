<template>
    <div class="contact">
        <div class="container">
           <Navbar />
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
.contact{
  background-color: white;
}
</style>
