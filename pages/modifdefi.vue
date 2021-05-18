<template>
  <div>
    <Navbar/>
    
    <div>
      <b-form @submit="onSubmit" v-if="show">

        <select ref="selected" v-model="selected" name="selecttitledefi" id="selecttitledefi" required=""></select>

        <b-form-group id="input-group-1" label="Titre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            placeholder="Entrez le titre du défi"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Description:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.desc"
            placeholder="Entrez la description du défi"
          ></b-form-input>
        </b-form-group>

        <div class="text-center">
          <b-button type="submit" class="btn-color">Valider</b-button>
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
      let sessions = await ses.getDefinames()
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
          selecttitledefi: '',
          title: '',
          desc: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.modifyDefi()
        this.$router.push({name: 'defi'})
      },

      async modifyDefi(){
        await ses.modifyDefi({
          selecttitledefi:this.$refs.selected.value,
          titredefi:this.form.title,
          descriptiondefi:this.form.desc
        }).then(response => {console.log(response)})
      }
    }
  }
</script>