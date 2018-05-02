<template>
<v-toolbar fixed class="blue-grey darken-3" dark dense>
    <v-toolbar-title class="mr-4">
       <span class="logo" dark @click="navigateTo({name: 'root'})">Tab Tracker</span>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat dark>Browse</v-btn>     
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items >
        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'login'})">
            Login
            </v-btn>

        <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'register'})">
            Sign up
            </v-btn>     
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods:{
      navigateTo(route){
          this.$router.push(route)
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
    cursor: pointer;
}
</style>
