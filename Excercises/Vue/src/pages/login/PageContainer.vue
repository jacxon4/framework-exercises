<template>
  <login-page :login="login" :update-login="updateLogin" :login-request="loginRequest"/>
</template>

<script lang="ts">
import Vue from "vue";
import LoginPage from "./Page.vue";
import { createEmptyLogin } from "./viewModel";
import { mapLoginVmToModel } from "./mapper";
import { loginRequest } from "../../rest-api/api/login";

export default Vue.extend({
  name: "LoginPageContainer",
  components: { LoginPage },
  data: () => ({
    login: createEmptyLogin()
  }),
  methods: {
    updateLogin: function(name, password) {
      this.login = {
        name,
        password
      };
    },
    loginRequest: function() {
      const loginModel = mapLoginVmToModel(this.login);
      loginRequest(loginModel)
        .then(() => {
          this.$router.push("/recipe");
        })
        .catch(error => console.log(error));
    }
  }
});
</script>
