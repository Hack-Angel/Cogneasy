<template>
    <div class="team">
        <div class="container">
            <h1>OUR TEAM</h1>
           <div class="row text-center">
               <div class="col">
                   <img src='~@/assets/img_5/Oval_1.jpg' style="width: 12rem;">
                   <h2>Jesudamilare Adesegun-David</h2>
                   <p>Content and Partnerships</p>
               </div>
               <div class="col">
                   <img src='~@/assets/img_5/Oval_3.jpg' style="width: 12rem;">
                   <h2>Funto Adesola</h2>
                   <p>Business Development</p>
               </div>
               <div class="col">
                   <img src='~@/assets/img_5/Oval_2.jpg' style="width: 12rem;">
                   <h2>Nathaniel Oboh</h2>
                   <p>Product Development</p>
               </div>
           </div>
        </div>
    </div>
</template>

<script>



export default{
    name: 'team',
    components: {
        
    },
}
</script>

<style scoped>
.team{
  background-color: white;
  padding-top: 7rem;
  padding-bottom: 12rem;
}
h1{
    font-size: 20px;
    text-align: center;
    padding-bottom: 5rem;
    color: #FF9E01;
}
h2{
    font-size: 20px;
}
</style>
