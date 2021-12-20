<template>
    <div class="acquire">
        <div class="container">
           <Navbar />
           <Build />
           <Courses />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Build from '@/components/Build.vue'
import Courses from '@/components/Courses.vue'
import Footer from '@/components/Footer.vue'

export default{
    name: 'Acquire',
    components: {
        Navbar,
        Build,
        Courses,
        Footer
    },
}
</script>

<style scoped>
.acquire{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
</style>
