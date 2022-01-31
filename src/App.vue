<template>
  <v-app id="inspire">
    <v-app-bar app flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link.text" :to="link.link">
          {{ link.text }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container>
        <v-sheet rounded="lg"> <Leagues /></v-sheet>

        <v-sheet rounded="lg">
          <router-view />
          <!--  -->
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Leagues from "@/components/Leagues.vue";
export default {
  data: () => ({
    links: [
      { text: "Clasificação", link: "/" },
      { text: "Partidas", link: "/partidas" },
    ],
  }),
  components: {
    Leagues,
  },
};
</script>
