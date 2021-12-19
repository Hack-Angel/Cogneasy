<template>
    <div class="about">
        <div class="container">
            <Navbar />
            <Platform />
            <Diaspora />
            <Team />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Platform from '@/components/Platform.vue'
import Diaspora from '@/components/Diaspora.vue'
import Team from '@/components/Team.vue'


export default{
    name: 'About',
    components: {
        Navbar,
        Platform,
        Diaspora,
        Team,
    },
}
</script>

<style scoped>
.about{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
</style>
