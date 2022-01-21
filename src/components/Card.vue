<template>
    <div class="card_text">
        <div class="card_bg">
            <img src='~@/assets/img_1/Vector.png' class="img-fluid" style="width: 40rem;">
        </div>
        <div class="container">
            <div class="row justify-content-evenly">
                <div class="col-md-3 main_body">
                    <div class="card text-center main_content">
                        <div class="card-body">
                            <h1 class="card-title">3500+</h1>
                            <p class="card-text">Students</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 main_body">
                    <div class="card text-center main_content">
                        <div class="card-body">
                            <h1 class="card-title">10+</h1>
                            <p class="card-text">Courses</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 main_body">
                    <div class="card text-center main_content">
                        <div class="card-body">
                            <h1 class="card-title">5+</h1>
                            <p class="card-text">Mentors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    
}
</script>

<style scoped>
.card_text{
    padding-top: 3rem;
    padding-bottom: 4rem;
}
.card_bg{
    background-image: url('~@/assets/img_1/Vector.png');
    height: 200px;
    /* background-position:center right; */
    background-size:cover;   
}
h1{
    padding-top: 1rem;
    font-weight:bold;
}
.main_content{
    background-color: white;
    border-radius: 0 30px 0 30px;
    height: 10rem;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.main_content:hover {
    background-color: #FF9E01;
    color: white;
}
.main_body{
    padding: 2rem;
}
.card_bg{
  position: absolute;
  left: 0px;
  bottom: 15px;
  z-index: -5; 
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width:600px) {
.card_bg{
  display: none;
}
.main_body{
  padding: 1rem 5rem 1rem 5rem;
} 

}
</style>