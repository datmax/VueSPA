<template>
<v-container>
<v-layout row wrap>
  <v-flex md6 offset-md3 xs12>
    <panel title="Register" class="form">
      <div class="pl-4 pr-4 pt-1 pb-1 mt-2">
      <form name="register" autocomplete="off">
      <v-text-field v-model="email" label="email"/>
      <br>
      <v-text-field v-model="password" type="password" name="password" label="password" autocomplete="new-password"/>
      <br>
      </form>
      <div v-html="error" class="body-2"></div>
      <br>
      <v-btn class="blue-grey darken-3 subheading" @click="register" dark>Register</v-btn>
      </div>
    </panel>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
import Panel from "@/components/Panel"
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
      })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
       }
      catch(error){
        this.error = error.response.data.error
      }
      console.log(response.data)
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
