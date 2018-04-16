<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light text-primary">
      <button class="navbar-toggler text-primary" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto text text-primary">
          <li class="nav-item active px-5">
            <!--<a class="nav-link text-primary"  >Home <span class="sr-only">(current)</span></a>-->
            <router-link to="/" class="">Home</router-link>
          </li>
          <li class="nav-item px-5">
            <!--<a class="nav-link text-primary" >Carreras</a>-->
            <router-link to="/carreras">Carreras</router-link>
          </li>
          <li class="nav-item px-5">
            <!--<a class="nav-link disabled text-primary" >Contacto</a>-->
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script>

</script>
<style lang="scss" scoped>
$font-M : 16px;
$white : #fff;
li:hover {
  border-bottom: 3px solid red;
}
li > a {
  font-size: $font-M;
}



</style>
