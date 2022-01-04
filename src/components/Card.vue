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
    box-shadow: 0px 3px 10px 8px #0640b41a;
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
</style>