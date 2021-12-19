<template>
  <div class="banner">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container banner_content">
            <div class="row justify-content-center1 ">
              <div class="col-md-7 sub_text">
                <div class="col">
                <h1>
                  <span>Get mentored; </span>
                  <span>Get upskilled. </span>
                  <button type="button" class="btn btn-primary">Learn More</button>
                </h1>
                </div>
                <div class="pagination">
                  <a href="#">❮</a>
                  <a href="#">❯</a>
                </div>
              </div>
              <div class="col-md-5">
                <img src='~@/assets/img_1/banner_img.jpg' class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container banner_content">
            <div class="row justify-content-center">
              <div class="col-md-7 sub_text">
                <h2>
                  <span>Explore and connect </span>
                  <span> with mentors across</span>
                  <span> the world</span>
                </h2>
                <button type="button" class="btn btn-primary">Find a Mentor</button>
                <div class="pagination">
                  <a href="#">❮</a>
                  <a href="#">❯</a>
                </div>
              </div>
              <div class="col-md-5">
                <img src='~@/assets/img_1/banner_2.jpg' class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container banner_content">
            <div class="row justify-content-center">
              <div class="col-md-7 sub_text">
                <h3>
                  <span>Acquire cutting-edge</span>
                  <span> skills that gives you</span>
                  <span> an advantage. </span>
                </h3>
                <button type="button" class="btn btn-primary">Start Learning</button>
                <div class="pagination">
                  <a href="#">❮</a>
                  <a href="#">❯</a>
                </div>
              </div>
              <div class="col-md-5">
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
.banner_content{
  padding-top: 5rem;
  padding-bottom: 5rem;
}
span{
  display: block;
}
h1{
  font-size: 70px;
  font-weight: bold;
}
.sub_text h1{
  padding-bottom: 7rem;
}
h2{
  font-size: 70px;
  font-weight: bold;
}
h3{
  font-size: 70px;
  font-weight: bold;
}
.sub_text h2, .sub_text h3 {
  padding-bottom: 3rem;
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
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  border-radius: 30px 30px;
}
</style>
