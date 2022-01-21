<template>
    <div class="about">
         <Navbar />
        <div class="container">
            <Platform />
            <Diaspora />
            <Team />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Platform from '@/components/Platform.vue'
import Diaspora from '@/components/Diaspora.vue'
import Team from '@/components/Team.vue'
import Footer from '@/components/Footer.vue'


export default{
    name: 'About',
    components: {
        Navbar,
        Platform,
        Diaspora,
        Team,
        Footer,
    },
}
</script>

<style scoped>
.nav_shadow{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
.about {
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
</style>
