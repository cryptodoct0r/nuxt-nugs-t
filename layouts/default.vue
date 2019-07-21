<template>
  <v-app :dark="dark">
    <TheNavbar />
    <v-content class="mb-4">
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            fixed
            right
            small
            fab
            v-model="dark"
            @click="dark = !dark"
            primary
            class="mt-4"
            label="Dark"
          >
            <v-icon>fas fa-lightbulb</v-icon>
          </v-btn>
        </template>
        <span>Toggle DarkMode</span>
      </v-tooltip>
      <nuxt />
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";
export default {
  name: "App",
  components: { TheNavbar, TheFooter },
  data () {
    return {
      dark: false
    };
  }
};
</script>
