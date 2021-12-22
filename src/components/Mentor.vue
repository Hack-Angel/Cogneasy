<template>
    <div class="mentor">
        <div class="container">
            <div class="row justify-content-evenly">
                <div class="col-md-4">
                    <img src='~@/assets/img_2/mentor_img.jpg'  class="img-fluid" style="width: 30rem;">
                </div>
                <div class="col-md-4 sub_content">
                    <h1> Get Mentored </h1>
                    <h2> 
                        <span>Find mentors who are</span>
                        <span> the best in your field. </span>
                    </h2>
                    <p>
                        <span> Our mentors are carefully selected from some of </span>
                        <span> the brightest and most accomplished Africans in </span>
                        <span> the Diaspora. git </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'Mentor',
  components: {
    
  }
}
</script>

<style scoped>
.mentor{
    background-color: peach;
    padding-top: 5rem;
    padding-bottom: 5rem;
}
span{
    display: block;
}
.sub_content{
    padding-top: 10rem;
}
h1{
    font-size: 18px;
    color: #FF9E01;
}
h2{
    font-size: 40px;
}
.sub_content p{
    font-size: 16px;
}
</style>