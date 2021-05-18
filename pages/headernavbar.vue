<template>
  <div>
    <b-navbar toggleable="lg" type="light" style="background-color:#e77a35">
      <b-navbar-brand router-link :to="'/'">
        <img src="@/images/OTRAG_Logo.png" alt="OnTheRoadAGameLogo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if='!this.$store.state.user.isConnected'>
          <b-nav-item router-link :to="'/'">Acceuil</b-nav-item>
          <b-nav-item router-link :to="'Demo'">Demo</b-nav-item>
          <b-nav-item router-link :to="'Session'">Session</b-nav-item>
          <b-nav-item router-link :to="'Classement'">Classement</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/notre-equipe-de-voya-joueurs/" target="_blank">A Propos</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/goodies/" target="_blank">Goodies</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-if='this.$store.state.user.isConnected && this.$store.state.user.user.isParticipant==0'>
          <b-nav-item router-link :to="'/'">Acceuil</b-nav-item>
          <b-nav-item router-link :to="'Demo'">Demo</b-nav-item>
          <b-nav-item router-link :to="'Session'">Session</b-nav-item>
          <b-nav-item router-link :to="'Classement'">Classement</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/notre-equipe-de-voya-joueurs/" target="_blank">A Propos</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/goodies/" target="_blank">Goodies</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-if='this.$store.state.user.isConnected && this.$store.state.user.user.isParticipant==1'>
          <b-nav-item router-link :to="'/'">Acceuil</b-nav-item>
          <b-nav-item router-link :to="'Demo'">Demo</b-nav-item>
          <b-nav-item router-link :to="'Session'">Session</b-nav-item>
          <b-nav-item router-link :to="'Defi'">Défi</b-nav-item>
          <b-nav-item router-link :to="'Classement'">Classement</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/notre-equipe-de-voya-joueurs/" target="_blank">A Propos</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/goodies/" target="_blank">Goodies</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-if='this.$store.state.user.isConnected && this.$store.state.user.user.isParticipant==2 && this.$store.state.user.user.Admin==1'>
          <b-nav-item router-link :to="'/'">Acceuil</b-nav-item>
          <b-nav-item router-link :to="'Demo'">Demo</b-nav-item>
          <b-nav-item router-link :to="'Session'">Session</b-nav-item>
          <b-nav-item router-link :to="'Defiadmin'">Défi</b-nav-item>
          <b-nav-item router-link :to="'Classement'">Classement</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/notre-equipe-de-voya-joueurs/" target="_blank">A Propos</b-nav-item>
          <b-nav-item href="https://www.ontheroadagame.fr/goodies/" target="_blank">Goodies</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if='!this.$store.state.user.isConnected'>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Utilisateur</em>
            </template>
            <b-dropdown-item router-link :to="'Connexion'">Connexion</b-dropdown-item>
            <b-dropdown-item router-link :to="'Inscription'">Inscription</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if='this.$store.state.user.isConnected'>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em id='1'>Prenom</em>
            </template>
            <b-dropdown-item router-link :to="'Profile'">Mon Profile</b-dropdown-item>
            <b-dropdown-item v-on:click="logout()">Deconnexion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
</style>

<script>
 export default {
    methods: {
      async logout(){
          this.$store.commit('user/logout')
          this.$router.push({name: 'connexion'})
      }
    },
    mounted:function(){
      if(this.$store.state.user.isConnected){
        document.getElementById("1").innerHTML=this.$store.state.user.user.Prenom
      }
    }
    
  }
</script>