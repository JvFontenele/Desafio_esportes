<template>
  <v-app id="inspire">
    <v-app-bar app color="red lighten-1" flat>
      <v-container class="py-0 fill-height">
        <v-img
          link
          src="./assets/LogoPowerLeagues.png"
          max-height="50"
          max-width="50"
          class="ml-12 mr-12"
        ></v-img>

        <v-btn v-for="link in links" :key="link" text class="mr-2">
          <div class="white--text">{{ link }}</div>
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <v-col cols="2"> <Leagues /> </v-col>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
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
    links: ["Times", "Listas"],
  }),
  components: {
    Leagues,
  },
};
</script>
