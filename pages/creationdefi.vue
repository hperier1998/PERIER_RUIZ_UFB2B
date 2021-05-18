<template>
  <div>
    <Navbar/>
    
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Titre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            placeholder="Entrez le titre du défi"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Description:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.desc"
            placeholder="Entrez la description du défi"
            required
          ></b-form-input>
        </b-form-group>

        <div class="text-center">
          <b-button type="submit" class="btn-color">Valider</b-button>
          <b-button type="reset" class="btn-color">Réinitialiser</b-button>
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
    components: { Navbar, Footer },

    data() {
      return {
        form: {
          title: '',
          desc: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.registerDefi()
        this.$router.push({name: 'defi'})
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.desc = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async registerDefi(){
        await ses.registerDefi({
          titredefi:this.form.title,
          descriptiondefi:this.form.desc
        }).then(response => {console.log(response)})
      }
    }
  }
</script>