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
        <v-row>
          <v-col cols="2">
            <v-sheet min-height="85vh" rounded="lg"> <Leagues /></v-sheet>
          </v-col>
          <v-col>
            <v-sheet min-height="85vh" rounded="lg">
              <router-view />
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
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
