<template>
    <div class="mentor">
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-md-4">
                    <img src='~@/assets/img_2/mentor_img.jpg'  class="img-fluid">
                </div>
                <div class="col-md-6 sub_content">
                    <h1> Get Mentored </h1>
                    <h2> 
                        <span>Find mentors who are the </span>
                        <span> best in your field. </span>
                    </h2>
                    <p>
                        <span> Our mentors are carefully selected from some of the brightest and </span>
                        <span> most accomplished Africans in the Diaspora.</span>
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
    padding-top: 8rem;
}
h1{
    font-size: 20px;
    color: #FF9E01;
}
h2{
    font-size: 45px;
    font-weight: bold;
}
.sub_content p{
    font-size: 18px;
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width:600px) {

span{
    display: inline;
   /* font-size: 35px; */
}
.sub_content {
    padding-top: 2rem;
    text-align: center;
}
h2{
    font-size: 35px;
}

}
</style>