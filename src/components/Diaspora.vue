<template>
    <div class="diaspora">
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-md-6">
                    <div class="row justify-content-center">
                        <div class="col-md-4 new_img">
                            <img src='~@/assets/img_5/diaspora_img1.jpg' style="width: 15rem;">
                        </div>
                        <div class="col-md-2">
                            <img src='~@/assets/img_5/diaspora_img2.jpg' style="width: 15rem;">
                            <img src='~@/assets/img_5/diaspora_img3.jpg' style="width: 15rem;">
                        </div>
                    </div>     
                </div>
                <div class="col-md-6 sub_content">
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
    font-size: 18px;
    color: #FF9E01;
}
h2{
    font-size: 40px;
}
.sub_content p{
    font-size: 16px;
}
.new_img{
   padding-top: 10rem;
}
</style>
