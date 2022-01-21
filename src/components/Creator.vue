<template>
  <div class="creator">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 main_content text-center">
          <h1>
            <span>Become a Mentor or</span>
            <span>Course Creator</span>
          </h1>
          <p>Join us in preparing Africans for the futue of work</p>
          <button type="button" class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Creator',
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.creator{
  background-color: white;
  padding-top: 5rem;
  padding-bottom: 10rem;
}
.main_content{
  background-image: url('~@/assets/img_4/create_img.jpg');
  width: 900px;
  height: 300px;
  background-position:center right;
  background-size:cover; 
}
span{
  display: block;
}
h1{
  padding-top: 2rem;
  color: white;
}
p{
  padding-bottom: 1rem;
  color: white;
}
.btn {
  border: none;
  color: white;
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
  background-color: white; 
  color: #0640B4; 
  border-radius:30px 0;
}
.btn:hover {
  background-color: #FF9E01;
  color: white;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width:600px) {
.creator{
  padding-top: 3rem;
  padding-bottom: 5rem;
}
.main_content{
  width: 400px;
}
.btn{
  padding: 1rem 2rem;
  font-size: 14px;
}
h1{
  font-size: 30px;
}
p{
  font-size: 15px;
}
}
</style>
