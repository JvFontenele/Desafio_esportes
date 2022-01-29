<template>
  <v-sheet rounded="lg">
    <v-list
      color="transparent"
      max-height="88vh"
      class="scrolStyle pa-3 overflow-auto"
    >
      <v-list-item v-for="league in leagues.data" :key="league.id">
        <v-list-item-content class="mx-auto d-flex justify-center">
          <v-card max-height="100" max-width="100" class="pa-1" link>
            <v-img
              max-height="80"
              max-width="80"
              :src="league.logos.light"
              class="mx-auto"
            ></v-img
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