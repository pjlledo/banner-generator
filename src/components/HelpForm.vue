<template>
  <div>
    <h2>Més dubtes?</h2>
    <form
      v-if="!formSubmitted"
      name="ask-question"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="submit">
      <input type="hidden" name="form-name" value="ask-question" />
      <b-field label="E-mail">
        <b-input placeholder="joan@compromis.net" v-model="form.email"></b-input>
      </b-field>
      <b-field label="Dubte o suggeriment">
        <b-input type="textarea" placeholder="Un tren descarrila..." v-model="form.text"></b-input>
      </b-field>
      <b-button native-type="submit" type="is-primary">Enviar</b-button>
    </form>
    <div v-else>
      SUccess
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'help-form',

    data() {
      return {
        form: {
          email: '',
          text: ''
        },
        formSubmitted: false
      }
    },

    methods: {
      encode (data) {
      return Object.keys(data)
        .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&")
      },
      submit () {
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        }
        axios.post(
          "/",
          this.encode({
            "form-name": "ask-question",
            ...this.form
          }),
          axiosConfig
        ).then(() => {
          this.formSubmitted = true
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
