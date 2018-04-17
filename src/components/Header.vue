<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light text-primary">
      <button class="navbar-toggler text-primary" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto text text-primary">
          <router-link to="/" class="" active-class="active" class="nav-item active px-5" tag="li" exact><a class="nav-link text-primary"  >Home <span class="sr-only">(current)</span></a></router-link>
          <router-link to="/carreras" active-class="active" class="nav-item px-5" tag="li"><a class="nav-link text-primary" >Carreras</a></router-link>
          <router-link to="/contact" active-class="active" tag="li" class="nav-item px-5"><a class="nav-link disabled text-primary" >Contacto</a></router-link>

        </ul>
      </div>
    </nav>
</template>
<script>

</script>25px
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
