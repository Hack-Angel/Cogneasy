<template>
  <div class="footer">
    <div class="container">
        <div class="row">
          <div class="col-md-3 main_content">
            <img src='~@/assets/img_4/Frame.png' style="width: 140px;">
            <p>
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
            <p>
              <span>50, Ogbomoso-Ilorin Rd, </span>
              <span>General Area, Ogbomoso</span>
            </p>
            <div class="container social">
              <div class="row">
                <div class="col">
                  <img src='~@/assets/img_3/facebook.png' style="width: 50px;">
                </div>
                <div class="col">
                  <img src='~@/assets/img_3/IG.png' style="width: 50px;">
                </div>
                <div class="col">
                  <img src='~@/assets/img_3/linkedin.png' style="width: 50px;">
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
.social{
  padding-left: 0rem;
}
</style>
