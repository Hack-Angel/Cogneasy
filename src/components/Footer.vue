<template>
  <div class="footer">
    <div class="container">
        <div class="row">
          <div class="col-md-3 main_content">
            <img src='~@/assets/img_4/Frame.png' style="width: 140px;">
            <p class="main_text">
              <span>Remitting Productive Knowledge to</span>
              <span> Africans on the Continent.</span>
            </p>
          </div>
          <div class="col-md-3 main_content">
            <h1> Quick Links </h1>
            <p>About Us</p>
            <p>Find a Mentor</p>
            <p>Acquire a Skill</p>
          </div>
          <div class="col-md-3 main_content">
            <h1>Courses</h1>
            <p>Communicate Like A Pro</p>
            <p>Breaking the Einstein Code</p>
            <p>Mapping Your Business Idea</p>
          </div>
          <div class="col-md-3 main_content">
            <h1>Contact Us</h1>
            <p class="sub_text">
              <span>50, Ogbomoso-Ilorin Rd, </span>
              <span>General Area, Ogbomoso</span>
            </p>
            <div class="container social">
              <div class="row justify-content-center">
                <div class="col facebook">
                  <img src='~@/assets/img_3/facebook.png' class="img-fluid">
                </div>
                <div class="col insta">
                  <img src='~@/assets/img_3/IG.png' class="img-fluid">
                </div>
                <div class="col linkedin">
                  <img src='~@/assets/img_3/linkedin.png' class="img-fluid">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Footer',
  components: {
    
  }
}
</script>

<style scoped>
.footer{
    background-color: #010610;
    padding-top: 6rem;
    padding-bottom: 8rem;
}
h1{
  color: white;
  font-size: 18px;
  padding-bottom: 2rem;
}
.main_content p{
  color: white;
}
.main_content img{
  padding-bottom: 2rem;
}
.social .insta, .social .facebook, .social .linkedin{
  padding-left: 0rem;
  padding-right: 0rem;
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width:600px) {
.footer{
  text-align: center;
}
h1{
  padding-top: 4rem;
  padding-bottom: 0rem;
}
.main_text span{
  display: block;
}
.sub_text span{
  display: block;
}
span{
  display: inline;
}
.social{
  padding: 1rem 5rem 1rem 5rem;
}
}
</style>
