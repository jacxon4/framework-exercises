<template>
  <form>
    <v-layout column justify-center>
      <v-text-field
        label="Name"
        :value="login.name"
        @input="(name) => updateLogin(name,login.password)"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        :value="login.password"
        @input="(password) => updateLogin(login.name,password)"
      ></v-text-field>
      <v-btn to="/recipe" type="submit" color="info" @click.prevent="loginRequest">Login</v-btn>
    </v-layout>
  </form>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Login } from "../viewModel";

export default Vue.extend({
  name: "FormComponent",
  props: {
    login: {} as PropOptions<Login>,
    updateLogin: Function,
    loginRequest: Function,
  }
});
</script>
