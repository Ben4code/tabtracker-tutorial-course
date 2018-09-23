<template>
    <div>
        <h1>{{msg}}</h1>
        <input type="Name" name="Name" placeholder="Name" v-model="name">
        <input type="password" name="passowrd" placeholder="Password" v-model="password">
        <input type="email" name="email" placeholder="Email" v-model="email">
        <input type="submit" value="Register" @click="register">
        <br>
        Name: {{name}}
        <br>
        Email: {{email}}
        <br>
        <!-- Password: {{passowrd}} -->
    </div>
</template>

<script>
import ApiService from '../service/AuthenticationService.js';

export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register',
      name: '',
      email: '',
      password: ''
    }
  },
  
  methods:{
     async register(){
          const response = await ApiService.register({
              name: this.name,
              email: this.email,
              password: this.password
          })
          console.log('register button was clicked', this.name, this.email, this.password);
          console.log(response.data);
      }
  }
}
</script>

<style scoped>
</style>
