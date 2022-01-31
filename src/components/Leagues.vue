<template>
  <v-sheet max-height="80vh" rounded="lg">
    <div
      class="d-flex align-center justify-center pa-4 mx-auto text-h6"
      outlined
    >
      Leagues
    </div>
    <v-divider class="mx-6"></v-divider>
    <!-- pedir ajuda -->
    <v-list
      color="transparent"
      max-height="70vh"
      class="scrolStyle pa-3 overflow-auto"
    >
      <v-list-item v-for="league in leagues.data" :key="league.id">
        <v-list-item-content class="d-flex justify-center flex-column">
          <v-card
            :color="leagueURL == league.id ? 'green lighten-2' : ''"
            class="d-flex align-center justify-center pa-3"
            @click="changeUser(league.id)"
          >
            <v-img height="90" width="90" :src="league.logos.light"></v-img
          ></v-card>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";

import { api } from "../services.js";

export default {
  name: "leagues",
  data() {
    return {
      leagues: [],
    };
  },
  methods: {
    ...mapActions(["changeUser"]),
    getApi() {
      api.get("/leagues").then((response) => {
        this.leagues = response.data;
      });
    },
  },
  computed: {
    leagueURL() {
      return this.$store.state.league;
    },
  },
  created() {
    this.getApi();
  },
};
</script>
<style>
.scrolStyle::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
</style>