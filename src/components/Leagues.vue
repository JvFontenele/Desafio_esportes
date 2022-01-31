<template>
  <v-sheet rounded="lg" class="mb-3">
    <v-container fluid>
      <v-row align="center" class="px-5">
        <v-col class="d-flex" cols="2" sm="9">
          <v-select
            v-model="value"
            :items="leagues.data"
            item-text="name"
            item-value="id"
            label="Select League"
            :click="changeUser(value)"
          >
          </v-select
        ></v-col>
        <v-col class="d-flex" cols="2" sm="3">
          <v-select
            v-model="ano"
            :items="anos"
            item-text="year"
            item-value="year"
            label="Select ano"
            value="2021"
            :click="changeAno(ano)"
          >
          </v-select
        ></v-col>
      </v-row>
    </v-container>
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
      value: "bra.1",
      anos: ["2021", "2020", "2019"],
      ano: "2021",
    };
  },
  methods: {
    ...mapActions(["changeUser", "changeAno"]),
    getAno() {
      api.get(`/leagues/${this.value}/seasons`).then((response) => {
        this.anos = response.data.data.seasons;
        console.log("mudou");
        this.ano = "2021";
      });
    },
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
  watch: {
    leagueURL() {
      this.getAno();
    },
  },
  created() {
    this.getApi();
    this.getAno();
  },
};
</script>
<style>
</style>