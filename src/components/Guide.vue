<template>
    <div class="guide">
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
                    <span>Need a guide to </span>
                    <span> facilitate your  </span>
                    <span> career progress? </span>
                  </h1>
                </div>
              </div>
              <div class="col-md-5">
                <img src='~@/assets/img_4/guide_img.jpg' class="img-fluid">
              </div>
            </div>
            </div>
        </div>
      </div>
      
    </div>
    </div>
</template>

<script>


export default{
    name: 'Guide',
    components: {
      
    },
}
</script>

<style scoped>
.guide{
  background-color: white;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
span{
  display: block;
}
h1{
  font-size: 70px;
  font-weight: bold;
  padding-top: 3rem;
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


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width:600px) {
span{
  display: inline
}
.sub_text h1{
  padding-top: 2rem;
  text-align: center;
  font-size: 3rem;
}
h2{
  font-size: 40px;
  text-align: center;
}
h3{
  font-size: 35px;
  text-align: center;
}
}
</style>
