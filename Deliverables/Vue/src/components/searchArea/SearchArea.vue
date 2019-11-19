<template>
    <div>
        <v-text-field
                :class="$style.searchBox"
                label="Company name"
                placeholder="Input company name"
                :value="searchText"
                @input="onChangeText"
        ></v-text-field>
        <v-btn color="info" @click="onSearch">Search</v-btn>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'SearchArea',
    props: {
      searchText: String,
      onChangeText: Function,
      onSearch: Function,
    },
  });
</script>


<style module>
    .searchBox {
        margin-left: 10px;
        width: auto;
    }

</style>
