<template>
    <div class="courses">
        <div class="container">
            <div class="main_text">
                <h1>OUR COURSES</h1>
                <h2>
                    <span>Created by the</span> 
                    <span>brightest faculty</span>
                </h2>
            </div>
            <div class="row justify-content-evenly">
                <div class="col-md-3 courses_main">
                    <div class="card main_content sub_img">
                        <img src="~@/assets/img_2/skill_img1.jpg" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <a class="btn">Available</a>
                            <h5 class="card-title sub_text">
                                <span>Communicate Like</span>
                                <span> A Pro </span>
                            </h5>
                            <a href="/">Start Now!</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 courses_main">
                    <div class="card main_content">
                        <img src="~@/assets/img_2/skill_img2.jpg" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <a class="btn">Available</a>
                            <h5 class="card-title sub_text">
                                <span>Breaking the</span>
                                <span> Einstein Code </span>
                            </h5>
                            <a href="/">Start Now!</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3  courses_main">
                    <div class="card main_content">
                        <img src="~@/assets/img_2/skill_img3.jpg" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <a class="btn">Available</a>
                            <h5 class="card-title sub_text">
                                <span>Mapping Your</span>
                                <span> Business Idea </span>
                            </h5>
                            <a href="/">Start Now!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-evenly">
            <div class="col-md-3  courses_main">
                <div class="card main_content sub_img">
                    <img src="~@/assets/img_2/skill_img1.jpg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <a class="btn">Available</a>
                        <h5 class="card-title sub_text">
                            <span>Mapping Your</span>
                            <span> Business Idea </span>
                        </h5>
                        <a href="/">Start Now!</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3  courses_main">
                <div class="card main_content">
                    <img src="~@/assets/img_2/skill_img2.jpg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <a class="btn">Available</a>
                        <h5 class="card-title sub_text">
                            <span>Breaking the</span>
                            <span> Einstein Code </span>
                        </h5>
                        <a href="/">Start Now!</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3  courses_main">
                <div class="card main_content">
                    <img src="~@/assets/img_2/skill_img3.jpg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <a class="btn">Available</a>
                        <h5 class="card-title sub_text">
                            <span>Mapping Your</span>
                            <span> Business Idea </span>
                        </h5>
                        <a href="/">Start Now!</a>
                    </div>
                </div>
            </div>
            </div>
            <div class="row justify-content-evenly">
            <div class="col-md-3  courses_main">
                <div class="card main_content sub_img">
                    <img src="~@/assets/img_2/skill_img1.jpg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <a class="btn">Available</a>
                        <h5 class="card-title sub_text">
                            <span>Communicate Like</span>
                            <span> A Pro </span>
                        </h5>
                        <a href="/">Start Now!</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3  courses_main">
                <div class="card main_content">
                    <img src="~@/assets/img_2/skill_img2.jpg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <a class="btn">Available</a>
                        <h5 class="card-title sub_text">
                            <span>Breaking the</span>
                            <span> Einstein Code </span>
                        </h5>
                        <a href="/">Start Now!</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3  courses_main">
                <div class="card main_content">
                    <img src="~@/assets/img_2/skill_img3.jpg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <a class="btn">Available</a>
                        <h5 class="card-title sub_text">
                            <span>Mapping Your</span>
                            <span> Business Idea </span>
                        </h5>
                        <a href="/">Start Now!</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'Courses',
    components: {
        
    },
}
</script>

<style scoped>
.courses{
  background-color: white;
  padding-top: 5rem;
  padding-bottom: 10rem;
}
/* .courses_main{
    padding: 0.5rem;
} */
/* .sub_img img{
     border-radius: 0px 30px 30px 30px;
} */
.courses_main .main_content {
    border-top-left-radius: 50px;
    border-top-right-radius: 0px;
}
img{
    border-top-left-radius: 50px;
    border-top-right-radius: 0px;
}
.main_content{
    border-radius: 0 30px 30px 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.main_text{
    padding-bottom: 5rem;
    text-align: center;
}
h1{
    padding-bottom: 1rem;
    font-size: 20px;
    font-weight: bold;
    color: #FF9E01;
}
.main_text h2{
    font-weight: bold;
    font-size: 40px;
}
span{
    display: block;
}
.btn{
    font-weight: normal;
    padding: 0.3rem 1rem;
    border-radius:0 30px;
    color: white;
    background-color: #FF9E01;
}
.sub_text{
    padding-top: 1rem;
    padding-bottom: 0.3rem;
    font-weight: bold;
    font-size: 24px;
}
a{
    font-weight: bold;
}
img{
    padding-bottom: 0.5rem;
}
.courses_main{
    padding-bottom: 2rem;
}
</style>
