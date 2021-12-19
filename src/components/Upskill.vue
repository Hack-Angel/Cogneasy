<template>
  <div class="upskill">
    <div class="container">
        <div class="main_text">
            <h1>UPSKILL</h1>
            <h2>
                <span>Give yourself a clear edge</span> 
                <span>in the world of work.</span>
            </h2>
        </div>
        <div class="row">
            <div class="col">
                <div class="card main_content sub_img" style="width: 20rem;">
                    <img src="~@/assets/img_2/skill_img1.jpg" class="card-img-top" alt="...">
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
            <div class="col">
                <div class="card main_content" style="width: 20rem;">
                    <img src="~@/assets/img_2/skill_img2.jpg" class="card-img-top" alt="...">
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
            <div class="col">
                <div class="card main_content" style="width: 20rem;">
                    <img src="~@/assets/img_2/skill_img3.jpg" class="card-img-top" alt="...">
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
        <div class="sub_content">
            <button type="button" class="sub_btn btn-primary">View All</button>
        </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Upskill',
  components: {
    
  }
}
</script>

<style scoped>
.upskill{
    padding-top: 2rem;
    padding-bottom: 5rem;
}
.sub_img img{
     border-radius: 0px 30px 30px 30px;
}
.main_content{
    border-radius: 0 30px 30px 30px;
    box-shadow: 0px 3px 10px 10px #0640b41a;
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
.sub_btn {
  border: none;
  color: #0640B4;
  padding: 1rem 3rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.sub_btn {
  background-color: #0640B4; 
  color: white; 
  border: 2px solid #0640B4;
  border-radius:0 30px;
}
.sub_btn:hover {
  background-color: white;
  color: #0640B4;
  /* box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); */
}
.sub_content{
  padding-top: 8rem;
  text-align: center;
}
</style>
