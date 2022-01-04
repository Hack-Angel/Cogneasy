<template>
    <div class="meet">
        <div class="container">
            <div class="meet_text">
                <h1>Meet Some of Our Mentors</h1>
            </div>   
            <div class="row justify-content-evenly">
                <div class="col-md-3 main_body">
                    <div class="card main-content">
                        <div class="card-body text-center sub_content">
                            <img src="~@/assets/img_3/meet_img3.jpg" class="img-fluid" alt="...">
                            <h5 class="card-title">Dare Oduale</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                <span>Agile/Scrum Master,</span>
                                <span> Great Britain </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 main_body">
                    <div class="card main-content">
                        <div class="card-body text-center sub_cont">
                            <img src="~@/assets/img_3/meet_img2.jpg" class="img-fluid" alt="...">
                            <h5 class="card-title">John Ohakim</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Data Analyst, USA.</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 main_body">
                    <div class="card main-content">
                        <div class="card-body text-center sub_content">
                            <img src="~@/assets/img_3/meet_img1.jpg" class="img-fluid" alt="...">
                            <h5 class="card-title">Sam Osho</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                <span> Corporate</span>
                                <span> Communications, Canada </span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main_btn">
                <button type="button" class="sub_btn btn-primary">Discover More</button>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'Meet',
  components: {
    
  }
}
</script>

<style scoped>
.meet{
    background-color: peach;
    padding-top: 5rem;
    padding-bottom: 5rem;
}
span{
    display: block;
}
h5{
    text-align: center;
    padding-top: 2rem;
}
h6{
    text-align: center;
}
img {
  border-radius: 50%;
  width:30%;
}
.main-content{
    border-radius:0 30px 30px 30px;
    box-shadow: 0px 3px 10px 10px #0640b41a;
}
.main_body{
    padding: 2rem;
}
.sub_content{
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.sub_content h5{
    padding-top: 1rem;
    color: #FF9E01;
}
.sub_content h6{
    padding-top: 0.5rem;
}
.sub_cont{
    padding-top: 2rem;
    padding-bottom: 3rem;
}
.sub_cont h5{
    padding-top: 1rem;
     color: #FF9E01;
}
.sub_cont h6{
    padding-top: 0.5rem;
}
.main_btn{
  padding-top: 3rem;
  text-align: center;
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
.meet_text{
    font-size: 40px;
    text-align: center;
    padding-bottom: 5rem;
}
</style>