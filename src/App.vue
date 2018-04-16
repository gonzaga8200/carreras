<template>
  <div class="container-fluid">
    <app-header></app-header>
    <app-carreras></app-carreras>
    <app-contact></app-contact>
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Carreras from './components/Carreras.vue'
import Contact from './components/Contact.vue'
export default {
  name: 'app',
  components: {
      appHeader: Header,
      appCarreras: Carreras,
      appContact: Contact
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  $font-M : 16px;

</style>
