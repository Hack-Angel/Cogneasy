<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light nav_shadow">
            <div class="container main_container">
                 <a class="navbar-brand" href="#">
                    <router-link to="/"><img src='~@/assets/img_1/favicon.png' alt="HTML5 Icon" width='160px'></router-link>
                </a>
                <button class="navbar-toggler toggle_bar border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="my-1 mx-2 close">
                        x
                    </span>
                    <span class="navbar-toggler-icon">

                    </span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">        
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
                    </div>
            </div>
        </nav>
</template>

<script>

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
  /* padding-left: 0.5rem; */
  padding-right: 0.5rem;
}
a:hover {
    color: #FF9E01;
}

.navbar-toggle {
    border: none;
    background: transparent !important;
}
.navbar-toggler>.close {
    display:inline;
}
.navbar-toggler.collapsed>.close, .navbar-toggler:not(.collapsed)>.navbar-toggler-icon {
    display:none;
}
</style>
