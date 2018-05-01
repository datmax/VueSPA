<template>
<v-layout row wrap>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field v-model="email" type="email" name="email" placeholder="email" />
      <br>
      <v-text-field v-model="password" type="password" name="password" placeholder="password" />
      <br>
      <p v-html="error" class="error body-2"></p>
      <br>
      <v-btn class="cyan subheading" @click="register">Register</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods:{
    async register(){
      try{ 
        const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      }) }
      catch(error){
        this.error = error.response.data.error
      }
      console.log(response.data)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
