<template>
  <v-footer
    class="footer"
    height="auto"
  >
    <v-container
      grid-list-md
      text-xs-center
    >
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <v-btn
            :title="icon.title"
            v-for="icon in icons"
            :key="icon.icon"
            color="grey"
            class="mx-3"
            fab
            router
            :href="icon.route"
            target="_blank"
            rel="noreferrer"
          >
            <v-icon
              size="24px"
              style="margin-top: 32px;"
            >{{ icon.icon }}</v-icon>
          </v-btn>
        </v-flex>
        <v-flex
          xs12
          sm10
          offset-sm1
          md8
          offset-md2
        >
          <div class="pt-0">
            Slogan :
            <q class="font-weight-bold">Aluta Continua , Victoria Ascerta.</q>
            <br />We are a Democratic, Nonpartisan and Progressive mass movement comprising of Ghanaian students in Ternopil, Ukraine with the primary aim of protecting and safeguarding the rights and interests of Ghanaian students in ternopil.
            <br />We also advocate to inculcate in them high sense of responsibility, patriotism,discipline and for that matter Nationalism with the ultimate aim of integrating them and ensuring their maximum participation in all activities relating to National development.
            <br />Motto:
            <q class="font-weight-bold">UNITY AND INTEGRATION WITHIN TERNOPIL.</q>
          </div>
        </v-flex>
        <v-flex
          xs12
          sm10
          offset-sm1
          md8
          offset-md2
        >
          <div>
            &copy;2018 - {{ new Date().getFullYear() }} —
            <strong>Nugs-Ternopil</strong>
          </div>
        </v-flex>
        <v-flex
          xs12
          sm10
          offset-sm1
          md8
          offset-md2
        >
          <v-divider></v-divider>
        </v-flex>

        <v-flex
          xs12
          sm10
          offset-sm1
        >
          <h4 class="grey--text">
            Proudly Created By
            <a
              class="font-weight-bold"
              target="_blank"
              rel="noreferrer"
              href="https://neniemsu.com"
            >NeniEmsu</a>
          </h4>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        title: "Facebook",
        route: "https://www.facebook.com/NUGSTOFFICAL/",
        icon: "fab fa-facebook"
      },
      {
        title: "Old Site",
        route: "https://nugsternopil.neniemsu.com/",
        icon: "fas fa-link"
      },
      {
        title: "Instagram",
        route: "https://www.instagram.com/nugsternopil/?hl=en",
        icon: "fab fa-instagram"
      }
    ]
  })
};
</script>

<style>
</style>
