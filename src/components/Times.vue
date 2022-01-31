<template>
  <div class="pa-3">
    <div>
      <v-data-table
        fixed-header
        height="72vh"
        :headers="headers"
        :items="timesApi"
        :page.sync="page"
        :items-per-page="12"
        hide-default-footer
        @page-count="pageCount = $event"
      >
        <template v-slot:item.team.logos[0].href="{ item }">
          <v-img
            class="ml-5"
            max-height="40"
            max-width="40"
            :src="item.team.logos[0].href"
          ></v-img>
        </template>
      </v-data-table>
      <div class="text-center mt-3">
        <v-pagination
          color="green"
          v-model="page"
          :length="pageCount"
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </div>
    <!--  <v-simple-table fixed-header height="77vh">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left text-h6">Clube</th>
            <th class="text-left">Pts</th>
            <th class="text-left">Vit</th>
            <th class="text-left">Der</th>
            <th class="text-left text-h6">Ultimos jogos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(time, index) in timesApi" :key="index" to="/partidas">
            <td>
              <v-img
                :src="time.team.logos[0].href"
                class="ma-1"
                max-height="35"
                max-width="35"
              ></v-img>
            </td>
            <td>{{ time.team.name }}</td>
            <td>{{ time.stats[6].value }}</td>
            <td>{{ time.stats[0].value }}</td>
            <td>{{ time.stats[1].value }}</td>
            <td><v-icon color="red" large></v-icon></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table> -->
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
          value: "team.logos[0].href",
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
        .get(`/leagues/${this.leagueURL}/standings?season=2021`)
        .then((response) => {
          this.timesApi = response.data.data.standings;
          console.log(response.data.data.standings.team);
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
      this.getApi();
    },
  },

  created() {
    this.getApi();
  },
};
</script>

<style>
</style>