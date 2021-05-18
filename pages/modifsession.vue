<template>
  <div>
    <Navbar/>
    
    <div>

      <div class="text-center">
        <h1 class="header-spacing"> Modifier une Session </h1>
      </div>
      <b-form @submit="onSubmit" v-if="show">
        <p> Selectioner une session a modifier: <select ref="selected" v-model="selected" name="selecttitle" id="selecttitle" required=""></select> </p>

        <b-form-group id="input-group-1" label="Titre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            placeholder="Entrez le titre de la session"
          ></b-form-input>
        </b-form-group>

          <b-form-group id="input-group-2" label="Date de Debut:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.datestart"
              type="date"
              placeholder="Entrez la date de debut de session"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Date de Fin:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.dateend"
              type="date"
              placeholder="Entrez la date de fin de session"
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

  import ses from '../services/ses'
  import Navbar from './headernavbar.vue'
  import Footer from './footer.vue'

  export default {
    mounted: async function(){
      let sessions = await ses.getSessionnames()
      sessions = sessions.data
      let select = document.getElementsByTagName('select')[0]
      sessions.forEach(session => {
        let option = document.createElement('option')
        option.append(session.Titre)
        select.append(option)
      })
    },

    components: { Navbar, Footer },

    data() {
      return {
        form: {
          selecttitle: '',
          title: '',
          datestart: '',
          dateend: '',
          desc: '',
          act: null,
        },
        active: [{ text: 'Selectionez un statut', value: null}, 'Session Actif', 'Non Actif'],
        show: true
      }
    },

    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.modifySes()
        this.$router.push({name: 'session'})
      },

      async modifySes(){
        await ses.modifySes({
          selecttitle:this.$refs.selected.value,
          titre:this.form.title,
          datedebut:this.form.datestart,
          datefin:this.form.dateend,
          sessionactive:this.form.act
        }).then(response => {console.log(response)})
      }
    }
  }
</script>