<template>
    <input :value="message" @input="onChange"> 
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  //<-- No need for new as is not the root
  name: "Hello",
    //<-- Data is not an object as is not the root, instead is a function that return an object or props
    props:{
        message: String, //<-- Typings on execution types, do not confuse with ts
        onChange:  Function,   
    },
});
</script>
