<template>
  <nav>
    <v-snackbar
      v-model="extentionSnackbar"
      top
      color="success"
      :timeout="10000"
    >
      <span>That's Awesome your application is Being processed, an executive will contact you shortly.</span>
      <v-btn
        flat
        color="white"
        @click="extentionSnackbar = false"
      >close</v-btn>
    </v-snackbar>
    <v-snackbar
      v-model="contactSnackbar"
      top
      color="success"
      :timeout="4000"
    >
      <span>Message Sent!</span>
      <v-btn
        flat
        color="white"
        @click="contactSnackbar = false"
      >close</v-btn>
    </v-snackbar>
    <v-toolbar
      clipped-left
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase ml-2">
        <nuxt-link to="/">
          <span class="font-weight-bold hidden-sm-and-up">Nugs-T</span>
          <span class="hidden-xs-only">Nugs-</span>
          <Span class="font-weight-light hidden-xs-only">Ternopil</Span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu
        offset-y
        class="hidden-xs-only"
        transition="scale-transition"
        origin="center center"
      >
        <v-btn
          flat
          slot="activator"
          color="grey"
        >
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <TheExtentionPopUp @applicationSent="extentionsnackbar = true" />
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
      <v-layout
        column
        align-center
      >
        <v-flex class="mt-5">
          <v-avatar
            size="100"
            class="gray lighten-2"
          >
            <img
              src="~/assets/images/nugst-new-logo.png"
              alt="nugs-ternopil logo"
            />
          </v-avatar>
          <p class="subheading my-2 font-weight-black">Nugs-Ternopil</p>
        </v-flex>
        <v-divider></v-divider>
        <v-flex class="my-1">
          <TheContactPopUp @messageSent="contactSnackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import TheExtentionPopUp from "./TheExtentionPopUp";
import TheContactPopUp from "./TheContactPopUp";
export default {
  components: { TheExtentionPopUp, TheContactPopUp },
  data () {
    return {
      drawer: false,
      links: [
        {
          icon: "home",
          text: "Home",
          route: "/"
        },
        {
          icon: "folder",
          text: "Online Libs",
          route: "/Library"
        },
        {
          icon: "supervisor_account",
          text: "Executives",
          route: "/Executives"
        },
        {
          icon: "collections",
          text: "Gallery",
          route: "/Gallery"
        },
        {
          icon: "info",
          text: "News & Events",
          route: "/News&Events"
        }
      ],
      extentionSnackbar: false,
      contactSnackbar: false
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
