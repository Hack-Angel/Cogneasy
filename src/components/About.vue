<template>
    <div class="about">
        <div class="container">
            <Navbar />
            <Platform />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Platform from '@/components/Platform.vue'


export default{
    name: 'About',
    components: {
        Navbar,
        Platform,
    },
}
</script>

<style scoped>
.about{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
</style>
