<template>
  <div>
    <Navbar/>

    <div class="spacing">
      <h1 class="text-center"> Liste de toute les Sessions </h1>

      <div v-if='!this.$store.state.user.isConnected'>
        <div>
          <b-table striped hover :items="sessions"></b-table>
        </div>
        <div class="sesbutton-position">
          <b-button pill class="btn-color" size="lg" router-link :to="'Connexion'">Veuillez vous connectez</b-button>
        </div>
      </div>
      
      <div v-if='this.$store.state.user.isConnected && this.$store.state.user.user.Admin==0 && this.$store.state.user.user.isParticipant==0'>
        <div>
          <b-table striped hover :items="sessions"></b-table>
        </div>
        <div class="sesbutton-position">
          <b-button pill class="btn-color" size="lg" @click='registerSubmit()'>S'inscrire a la session active</b-button>
        </div>
      </div>

      <div v-if='this.$store.state.user.isConnected && this.$store.state.user.user.Admin==1'>
        <div>
          <b-table striped hover :items="sessions"></b-table>
        </div>
        <div class="sesbutton-position">
          <b-button pill class="btn-color" size="lg" router-link :to="'Creationsession'">Créer une session</b-button>
          <b-button pill class="btn-color" size="lg" router-link :to="'Modifsession'">Modifier les sessions</b-button>
        </div>
      </div>

      <div v-if='this.$store.state.user.isConnected && this.$store.state.user.user.Admin==0 && this.$store.state.user.user.isParticipant==1'>
        <div>
          <b-table striped hover :items="sessions"></b-table>
        </div>
        <div class="sesbutton-position">
          <b-button pill class="btn-color" size="lg" disabled>Vous etes deja inscrit a la session active</b-button>
          <b-button pill class="btn-color" size="lg" router-link :to="'Defi'">Voire les Défis</b-button>
        </div>
      </div>

    </div>
    <Footer/>  
  </div>
</template>

<style>
.sesbutton-position {
  text-align: center;
  margin-bottom: 2em;
}

.spacing {
  margin-top: 10em;
}

.btn-color{
  background-color: #e77a35 !important;
  border: 4px solid #e77a35  !important;
}

</style>

<script>

  import Navbar from './headernavbar.vue'

  import Footer from './footer.vue'

  import ses from '../services/ses'

  import auth from '../services/auth'

  export default {
    beforeMount(){
      this.getSession()
    },

    data() {
        return {
          sessions: [],

          participation: {
            participating: '1'
          }
        }
      },

    components: { Navbar, Footer },

    methods: {

      registerSubmit() {
        this.addUsersession()
        this.$router.push({name: 'session'})
      },

        async getSession(){
          let response = await ses.getSession()
          this.sessions = response.data
        },

        async addUsersession(){
          try {
            await auth.addUsersession({
              ID:this.$store.state.user.user.ID,
              isParticipant: this.participation.participating
            })

            let response = await auth.refreshVueX({
              ID:this.$store.state.user.user.ID,
              isParticipant: this.participation.participating
            })

            this.$store.commit('user/logout')
            this.$store.commit('user/add', response.data)
            document.location.reload()
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>