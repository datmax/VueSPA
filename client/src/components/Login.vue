<template>
<v-container>
<v-layout row wrap>
  <v-flex md6 offset-md3 xs12>
    <panel title="Login" class="form">
      <div class="pl-4 pr-4 pt-1 pb-1 mt-2">
      <v-text-field v-model="email" label="email"/>
      <br>
      <v-text-field v-model="password" type="password" name="password" label="password"/>
      <br>
      <div v-html="error" class="body-2"></div>
      <br>
      <v-btn class="blue-grey darken-3 subheading" @click="login" dark>Login</v-btn>
      <p v-html="token"></p>
      </div>
    </panel>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
import Panel from "@/components/Panel"

export default {
  name: 'Login',
  data(){
      return{
          email: "",
          password: "",
          error: null,
          token: ""
      }
  },
  methods:{
    async login(){
      try{ 
        const response = await AuthenticationService.login({
        email: this.email,
        password: this.password,
      })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        
      } catch(error){
        this.error = error.response.data.error
        console.log(error)
      }
    }
  },
  components:{
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
  margin-top: 20px;
}
</style>
