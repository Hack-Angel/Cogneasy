<template>
    <div class="card_text card_bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-3">
                    <div class="card text-center main_content" style="width: 18rem;">
                        <div class="card-body">
                            <h1 class="card-title">3500K+</h1>
                            <p class="card-text">Students</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card text-center main_content" style="width: 18rem;">
                        <div class="card-body">
                            <h1 class="card-title">10K+</h1>
                            <p class="card-text">Students</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card text-center main_content" style="width: 18rem;">
                        <div class="card-body">
                            <h1 class="card-title">5K+</h1>
                            <p class="card-text">Students</p>
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
/* .card_bg{
    background-image: url('~@/assets/img_1/Vector.png');
    height: 700px;
    background-position:center right;
    background-size:cover;   
} */
.main_content{
    background-color: white;
    border-radius:30px 0 30px 0;
    height: 10rem;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.main_content:hover {
    background-color: #FF9E01;
    color: white;
}
</style>