<template>
  <div>
    <Navbar/>
    
    <div class="text-center">
      <h1 class="header-spacing"> Vos Informations </h1>
      <h2> Prenom: </h2>
      <h2> Nom: </h2>
      <h2> Date de Naissance: </h2>
      <h2> E-mail: </h2>
      <h2> Numero de telephone: </h2>
      <h2> Adresse: </h2>
      <h2> Ville: </h2>
      <h2> Code Postal: </h2>
      <h2> Pays: </h2>
      <div class="sesbutton-position">
        <b-button pill class="btn-color" size="lg" router-link :to="'Modifyprofile'">Modifier votre profil</b-button>
      </div>
    </div>


    <Footer/>

  </div>
</template>

<style>
.header-spacing{
  margin-top: 1em;
  margin-bottom: 1em;
}

.btn-color{
  background-color: #e77a35 !important;
  border: 4px solid #e77a35  !important;
}
</style>

<script>
  import Navbar from './headernavbar.vue'
  import Footer from './footer.vue'

  export default {
    components: { Navbar, Footer },

    mounted:function(){
      document.getElementsByTagName("h2")[0].innerHTML+=this.$store.state.user.user.Prenom
      document.getElementsByTagName("h2")[1].innerHTML+=this.$store.state.user.user.Nom
      document.getElementsByTagName("h2")[2].innerHTML+=this.$store.state.user.user.DateNaissance.substring(0,10)
      document.getElementsByTagName("h2")[3].innerHTML+=this.$store.state.user.user.Email
      document.getElementsByTagName("h2")[4].innerHTML+=this.$store.state.user.user.Tel
      document.getElementsByTagName("h2")[5].innerHTML+=this.$store.state.user.user.Adresse
      document.getElementsByTagName("h2")[6].innerHTML+=this.$store.state.user.user.Ville
      document.getElementsByTagName("h2")[7].innerHTML+=this.$store.state.user.user.CodePostal
      document.getElementsByTagName("h2")[8].innerHTML+=this.$store.state.user.user.Pays
    }
  }
</script>