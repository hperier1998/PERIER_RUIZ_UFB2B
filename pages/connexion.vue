<template>
  <div>
    <Navbar/>

    <div class="connection-container">
      <div class="text-center">
        <h2> Connectez vous </h2>
      </div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Entrez votre e-mail"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Mot de Pass:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Entrez votre mot de passe"
            required
          ></b-form-input>
        </b-form-group>

        <div class="text-center">
          <b-button type="submit" class="btn-color">Se Connecter</b-button>
          <b-button class="btn-color" to="/profile">Mot de Passe Oublier</b-button>
        </div>
      </b-form>
    </div>

    <Footer/>

  </div>
</template>

<style>
.connection-container {
  margin-top: 11em;
  margin-bottom: 12em;
}

.btn-color{
  background-color: #e77a35 !important;
  border: 4px solid #e77a35  !important;
}

</style>

<script>
  import auth from '../services/auth'

  import Navbar from './headernavbar.vue'

  import Footer from './footer.vue'


  export default {
    components: { Navbar, Footer },

    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.login()
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = null
        this.form.password = null

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async login(){
        let response = await auth.login({
          email:this.form.email,
          password:this.form.password,
        })
        if(response.status == 200){
          this.$store.commit('user/add', response.data)
          console.log(response.data)
          this.$router.push({name: 'index'})
        }
      }
    }
  }
</script>