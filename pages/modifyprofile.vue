<template>
  <div>
    <Navbar/>
    
    <div>
      <div class="text-center">
        <br>
        <h1> Modifiez votre profile </h1>
      </div>

      <b-form @submit="onSubmit" v-if="show">

          <b-form-group
            id="input-group-1"
            label="Email:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Entrez votre e-mail"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Telephone:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.tel"
              type="tel"
              placeholder="Entrez votre numero de telephone"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Mot de passe:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.password"
              type="password"
              placeholder="Entrez votre mot de passe"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Adresse:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.address"
              type="text"
              placeholder="Entrez votre adresse"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Ville:" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.city"
              type="text"
              placeholder="Entrez votre ville"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Code Postal:" label-for="input-6">
            <b-form-input
              id="input-6"
              v-model="form.postal"
              type="text"
              placeholder="Entrez votre code postal"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="Pays:" label-for="input-7">
            <b-form-select
              id="input-7"
              v-model="form.country"
              :options="countries"
            ></b-form-select>
          </b-form-group>

        <div class="text-center">
          <b-button type="submit" class="btn-color">Valider</b-button>
          <br>
          <br>
        </div>
      </b-form>
    </div>

    <Footer/>

  </div>
</template>

<style>
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
          tel: '',
          password: '',
          address: '',
          city: '',
          postal: '',
          country: null,
        },
        countries: [{ text: 'Selectionez un pays', value: null }, 'France', 'Royaume Uni', 'Etat-Unis', 'Australie', 'Autre'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.modify()
        this.$router.push({name: 'profile'})
      },

      async modify(){
        try {
          await auth.modify({
            email:this.form.email,
            tel:this.form.tel,
            password:this.form.password,
            adresse:this.form.address,
            ville:this.form.city,
            codepostal:this.form.postal,
            pays:this.form.country,
            ID:this.$store.state.user.user.ID
          })
          let response = await auth.refreshVueX({
              email:this.form.email,
              tel:this.form.tel,
              password:this.form.password,
              adresse:this.form.address,
              ville:this.form.city,
              codepostal:this.form.postal,
              pays:this.form.country,
              ID:this.$store.state.user.user.ID
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