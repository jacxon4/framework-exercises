

<template>
  <div>
    <h1>{{message}}</h1>
    <hello :message="message" :on-change="onChange"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "./Hello.vue";
export default Vue.extend({
  //<-- No need for new as is not the root
  name: "App",
  data: () => ({
    //<-- Data is not an object as is not the root, instead is a function that return an object
    message: "Hello from App"
  }),
  methods: {
    onChange: function(event) {
      this.message = event.target.value;
    }
  },
  components: {
    Hello
  }
});
</script>
