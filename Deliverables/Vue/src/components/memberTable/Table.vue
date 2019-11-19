<template>
    <div>
        <search-area :searchText="searchText" :on-change-text="updateCompany" :on-search="loadMembers"/>
        <h2>Company's member List</h2>
        <div v-if="members.length >0">
            <table :class="$style.table">
                <thead>
                <member-head/>
                </thead>
                <tbody>

                <template v-for="member in members">
                    <member-row :key="member.id" :member="member"/>
                </template>

                </tbody>
            </table>
        </div>
        <div v-else>Not Found</div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import MemberHead from './Head.vue';
  import MemberRow from './Row.vue';
  import { Member } from '../../model/member';
  import { getAllMembers } from '../../api/memberAPI';
  import { SearchArea } from '../searchArea';

  export default Vue.extend({
    name: 'MemberTable',
    components: { MemberHead, MemberRow, SearchArea },
    data: () => ({
      members: [] as Member[],
      searchText: 'Lemoncode',

    }),
    props: {},
    methods: {
      loadMembers: function() {
        getAllMembers(this.searchText).then(members => {
          this.members = members;
        }).catch((err) => this.members = []);
      },
      updateCompany: function(company) {
        this.searchText = company;
      },
    },
  });
</script>

<style module>
    .table {
        border-collapse: collapse;
        width: 100%;
    }

    .table tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }
</style>
