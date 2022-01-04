<template>
    <div class="diaspora">
        <div class="diaspora_bg">
            <img src='~@/assets/img_1/Vector.png' class="img-fluid">
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 main_body">
                    <div class="row justify-content-center">
                        <div class="col-md-5 new_img">
                            <img src='~@/assets/img_5/diaspora_img1.jpg' class="img-fluid">
                        </div>
                        <div class="col-md-5">
                            <img src='~@/assets/img_5/diaspora_img2.jpg' class="img-fluid">
                            <img src='~@/assets/img_5/diaspora_img3.jpg' class="img-fluid">
                        </div>
                    </div>     
                </div>
                <div class="col-md-5 main_body sub_content">
                    <h1> ABOUT US </h1>
                    <h2> 
                        <span>For Diasporan</span>
                        <span> Africans and Africans </span>
                        <span> on the continent. </span>
                    </h2>
                    <p>
                        <span> We enable Africans in the diaspora to seamlessly </span>
                        <span> remit productive knowledge to Africans on the </span>
                        <span> continent and we help young African professionals </span>
                        <span> access the best mentors and course content for </span>
                        <span> upskilling and reskilling.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default{
    name: 'diaspora',
    components: {
        
    },
}
</script>

<style scoped>
.diaspora{
  background-color: white;
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
    font-size: 20px;
    color: #FF9E01;
}
h2{
    font-size: 40px;
}
/* .main_body{
    padding-top: 0.5rem;
} */
.sub_content p{
    font-size: 18px;
}
.new_img{
   padding-top: 10rem;
}
.diaspora_bg{
  position: absolute;
  left: 5px;
  bottom: 15px;
  z-index: -5; 
}
</style>
