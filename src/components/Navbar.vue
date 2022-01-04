<template>
    <div class="nav_shadow">
        <div class="container">
            <div class="navbar-nav navbar-expand-lg">
                <nav class="navbar">
                    <a class="navbar-brand" href="#">
                        <router-link to="/"><img src='~@/assets/img_1/favicon.png' alt="HTML5 Icon" width='160px'></router-link>
                    </a>  
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" ><router-link to="/about"> About Us </router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><router-link to="/find"> Find a Mentor </router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><router-link to="/acquire"> Acquire a Skill </router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><router-link to="/contact"> Contact Us </router-link></a>
                        </li>
                    </ul>
                </nav> 
            </div> 
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
a{
  text-decoration:none;
  color:black;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
a:hover {
    color: #FF9E01;
}

</style>
