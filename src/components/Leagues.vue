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
            class="d-flex align-center justify-center pa-3"
            link
            to="/partidas"
          >
            <v-img height="90" width="90" :src="league.logos.light"></v-img
          ></v-card>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
import { api } from "../services.js";

export default {
  name: "leagues",
  data() {
    return {
      leagues: [],
    };
  },
  methods: {
    getApi() {
      api
        .get("https://api-football-standings.azharimm.site/leagues")
        .then((response) => {
          this.leagues = response.data;
        });
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