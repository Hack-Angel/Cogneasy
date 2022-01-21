<template>
    <div class="find">
        <Navbar />
        <div class="container">
            <Guide />
            <Catalogue />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Guide from '@/components/Guide.vue'
import Catalogue from '@/components/Catalogue.vue'
import Footer from '@/components/Footer.vue'

export default{
    name: 'Find',
    components: {
       Navbar,
       Guide,
       Catalogue,
       Footer,
    },
}
</script>

<style scoped>
.nav_shadow{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
.find{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
</style>
