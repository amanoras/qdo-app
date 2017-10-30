<template>
<div class="form">
  <div class="row">
      <div class="col-12">
        <q-field 
          label="To do"
          helper="Enter the description of what you need to do"
          :error="errors.has('name')"
          errorLabel="You have to enter some text">
        
          <q-input name="name" clearable v-model="form.name" v-validate="'required'"/>
        </q-field>
      </div>
  </div>
  <div class="row justify-end">
    <div class="col-12 col-md-2">
      <q-btn icon="create" color="primary" class="full-width" @click="addTodo()">Add</q-btn>
    </div>
    
  </div>
  
</div>
</template>

<script>
import {
  QBtn,
  QField,
  QInput
} from 'quasar'

export default {
  components: {
    QBtn,
    QField,
    QInput
  },
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    addTodo () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('addTodo', { name: this.form.name })
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.form
  margin-top: 20px
  margin-bottom: 20px
  margin-left: 10px
  margin-right: 10px
</style>

