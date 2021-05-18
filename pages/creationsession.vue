<template>
  <div>
    <Navbar/>
    
    <div>
      <div class="text-center">
        <h1 class="header-spacing"> Créer une Session </h1>
      </div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="input-group-1" label="Titre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            placeholder="Entrez le titre de la session"
            required
          ></b-form-input>
        </b-form-group>

          <b-form-group id="input-group-2" label="Date de Debut:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.datestart"
              type="date"
              placeholder="Entrez la date de debut de session"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Date de Fin:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.dateend"
              type="date"
              placeholder="Entrez la date de fin de session"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Session Actif:" label-for="input-4">
            <b-form-select
              id="input-4"
              v-model="form.act"
              :options="active"
              required
            ></b-form-select>
          </b-form-group>

        <div class="text-center">
          <b-button type="submit" class="btn-color">Valider</b-button>
          <b-button type="reset" class="btn-color">Réinitialiser</b-button>
          <br>
          <br>
          <br>
        </div>
      </b-form>
    </div>

    <Footer/>

  </div>
</template>

<style>
.header-spacing{
  margin-top: 2em;
  margin-bottom: 2em;
}

.btn-color{
  background-color: #e77a35 !important;
  border: 4px solid #e77a35  !important;
}
</style>

<script>

  import ses from '../services/ses'
  import Navbar from './headernavbar.vue'
  import Footer from './footer.vue'

  export default {
    components: { Navbar, Footer },

    data() {
      return {
        form: {
          title: '',
          datestart: '',
          dateend: '',
          act: null
        },
        active: [{ text: 'Selectionez un statut', value: null}, 'Session Actif', 'Non Actif'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.registerSes()
        this.$router.push({name: 'session'})
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.datestart = null
        this.form.dateend = null
        this.form.act = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async registerSes(){
        await ses.registerSes({
          titre:this.form.title,
          datedebut:this.form.datestart,
          datefin:this.form.dateend,
          sessionactive:this.form.act
        }).then(response => {console.log(response)})
      }
    }
  }
</script>