<template>
    <div class="find">
        <div class="container">
            <Navbar />
            <Guide />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Guide from '@/components/Guide.vue'

export default{
    name: 'Find',
    components: {
       Navbar,
       Guide,
    },
}
</script>

<style scoped>
.find{
  background-color: white;
  box-shadow: 0px 3px 10px 0px #0640b41a;
}
</style>
