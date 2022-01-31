<template>
  <div v-if="leagueURL" class="pa-3">
    <div>
      <v-data-table
        fixed-header
        :headers="headers"
        :items="timesApi"
        :items-per-page="100"
        hide-default-footer
      >
        <template v-slot:item.logo="{ item }">
          <v-img
            class="ml-5"
            max-height="40"
            max-width="40"
            :src="item.team.logos[0].href"
          ></v-img>
        </template>
      </v-data-table>
      <div class="text-center mt-3"></div>
    </div>
  </div>
</template>

<script>
import { api } from "../services.js";

export default {
  name: "Times",
  data() {
    return {
      page: 1,
      pageCount: 0,
      headers: [
        {
          text: "Clube",
          value: "logo",
        },
        { text: "", value: "team.name" },
        { text: "Pts", value: "stats[6].value" },
        { text: "Vit", value: "stats[0].value" },
        { text: "Der", value: "stats[1].value" },
        { text: "Ultimos jogos", value: "jogos" },
      ],
      timesApi: [],
    };
  },
  methods: {
    getApi() {
      api
        .get(`/leagues/${this.leagueURL}/standings?season=${this.ano}`)
        .then((response) => {
          this.timesApi = response.data.data.standings;
        });
    },
  },
  computed: {
    leagueURL() {
      return this.$store.state.league;
    },
    ano() {
      return this.$store.state.ano;
    },
  },
  watch: {
    leagueURL() {
      this.getApi();
    },
    ano() {
      this.getApi();
    },
  },

  created() {
    this.getApi();
  },
};
</script>

<style>
tbody tr:nth-child(-n + 4) {
  background: rgba(0, 255, 106, 0.05);
}
tbody tr:nth-last-child(-n + 3) {
  background-color: rgba(255, 0, 0, 0.05);
}
</style>