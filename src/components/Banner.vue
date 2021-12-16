<template>
  <div class="about">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container about_content">
            <div class="row justify-content-between">
              <div class="col-6">
                <h1>
                  <span>Get mentored; </span>
                  <span>Get upskilled. </span>
                  <button type="button" class="btn btn-primary">Learn More</button>
                </h1>
              </div>
              <div class="col-5">
                <img src='~@/assets/img_1/banner_img.jpg' class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container about_content">
            <div class="row justify-content-between">
              <div class="col-6">
                <h2>
                  <span>Explore and connect </span>
                  <span>with mentors across</span>
                  <span>the world</span>
                </h2>
                <button type="button" class="btn btn-primary">Learn More</button>
              </div>
              <div class="col-5">
                <img src='~@/assets/img_1/banner_2.jpg' class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container about_content">
            <div class="row justify-content-between">
              <div class="col-6">
                <h3>
                  <span>Acquire cutting-edge</span>
                  <span> skills that gives you</span>
                  <span> an advantage. </span>
                </h3>
                <button type="button" class="btn btn-primary">Learn More</button>
              </div>
              <div class="col-5">
                <img src='~@/assets/img_1/banner_3.jpg' class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about_content{
  padding-top: 5rem;
}
h1 span{
  display: block;
}
h1{
  font-size: 80px;
  font-weight: bold;
}
h2 span{
  display: block;
}
h2{
  font-size: 80px;
  font-weight: bold;
}
h3{
  font-size: 80px;
  font-weight: bold;
}
.btn {
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
.btn {
  background-color: #0640B4; 
  color: white; 
  border: 2px solid #0640B4;
  border-radius:0 30px;
}
.btn:hover {
  background-color: white;
  color: #0640B4;
  /* box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); */
}
/* .about_bg{
    background-image: url('~@/assets/img_1/Vector.png');
    height: 700px;
    background-position:center right;
    background-size:cover; 
} */

</style>
