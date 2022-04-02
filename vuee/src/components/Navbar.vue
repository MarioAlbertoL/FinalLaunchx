<template>
<div class="navegation">
    <header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark  bg-opacity-20 fixed-top" style="background-color: #680e4b;">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
       <i class="fa fa-cutlery"></i>
      </a>  

          <li class="nav-item active">
            <router-link to="/" class="nav-link active">Pasteleria Maral</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ClientArea" class="nav-link active">Client Area</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AdminArea" class="nav-link">Selector</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin">Admin Area</a>
          </li>
        </ul>
        <!-- Notifications -->
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
         

        </ul>
      </div>
  <!-- Navbar -->        
      </div>
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    
    <!-- Right elements -->

      
    </div>
  </nav>


  <!-- Background image -->
  
  

  <!-- Background image -->
</header>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

   .nav-item{
  color: #ffffff;
}
 
</style>