<template>
  <div>
    <Navbar/>
    
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Prénom:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.firstname"
            placeholder="Entrez votre prénom"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nom:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.lastname"
            placeholder="Entrez votre nom"
            required
          ></b-form-input>
        </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Email:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.email"
              type="email"
              placeholder="Entrez votre e-mail"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Telephone:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.tel"
              type="tel"
              placeholder="Entrez votre numero de telephone"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Mot de passe:" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.password"
              type="password"
              placeholder="Entrez votre mot de passe"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Date de naissance:" label-for="input-6">
            <b-form-input
              id="input-6"
              v-model="form.dob"
              type="date"
              placeholder="Entrez votre date de naissance"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="Adresse:" label-for="input-7">
            <b-form-input
              id="input-7"
              v-model="form.address"
              type="text"
              placeholder="Entrez votre adresse"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-8" label="Ville:" label-for="input-8">
            <b-form-input
              id="input-8"
              v-model="form.city"
              type="text"
              placeholder="Entrez votre ville"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-9" label="Code Postal:" label-for="input-9">
            <b-form-input
              id="input-9"
              v-model="form.postal"
              type="text"
              placeholder="Entrez votre code postal"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-10" label="Pays:" label-for="input-10">
            <b-form-select
              id="input-10"
              v-model="form.country"
              :options="countries"
              required
            ></b-form-select>
          </b-form-group>

        <div class="text-center">
          <b-button type="submit" class="btn-color">Valider</b-button>
          <b-button type="reset" class="btn-color">Réinitialiser</b-button>
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
          firstname: '',
          lastname: '',
          email: '',
          tel: '',
          password: '',
          dob: '',
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
        this.register()
        this.$router.push({name: 'connexion'})
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.email = null
        this.form.tel = null
        this.form.password = null
        this.form.dob = null
        this.form.address = ''
        this.form.city = ''
        this.form.postal = ''
        this.form.country = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async register(){
        await auth.register({
          prenom:this.form.firstname,
          nom:this.form.lastname,
          email:this.form.email,
          tel:this.form.tel,
          password:this.form.password,
          datenaissance:this.form.dob,
          adresse:this.form.address,
          ville:this.form.city,
          codepostal:this.form.postal,
          pays:this.form.country,
        }).then(response => {console.log(response)})
      }
    }
  }
</script>