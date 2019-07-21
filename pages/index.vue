<template>
  <div class="home">
    <v-snackbar
      v-model="registersnackbar"
      top
      color="success"
      :timeout="10000"
    >
      <span>Registration Sent</span>
      <v-btn
        flat
        color="white"
        @click="registersnackbar = false"
      >close</v-btn>
    </v-snackbar>
    <section>
      <Carousel />
    </section>

    <v-container>
      <section>
        <v-flex
          xs12
          class="text-xs-center my-3"
        >
          <h3>Find out About upcoming events and News at your finger tips.</h3>
        </v-flex>

        <v-flex xs12>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non delectus accusantium libero, tempora nobis excepturi inventore dicta corporis minima harum eum fugit! Accusamus assumenda sed sapiente inventore, eum libero modi minus quia. Eos dolor ullam magnam tempore odit debitis quas enim. Quia, expedita dolores! Quam, iure ipsum quia cupiditate iste illo deserunt recusandae. Magnam laudantium itaque ipsa commodi atque dolor sint, necessitatibus aliquam fuga expedita nisi aspernatur pariatur cumque reprehenderit impedit rem quis soluta sit ea quisquam adipisci mollitia! Aut aspernatur molestiae, illo ullam aliquid exercitationem ratione ipsa quas aperiam tempore nulla natus debitis explicabo iste excepturi deserunt? Blanditiis?</p>
        </v-flex>
        <v-flex
          xs12
          class="text-xs-center my-3"
        >
          <h3>What do we do?</h3>
        </v-flex>
        <v-flex xs12>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non delectus accusantium libero, tempora nobis excepturi inventore dicta corporis minima harum eum fugit! Accusamus assumenda sed sapiente inventore, eum libero modi minus quia. Eos dolor ullam magnam tempore odit debitis quas enim. Quia, expedita dolores! Quam, iure ipsum quia cupiditate iste illo deserunt recusandae. Magnam laudantium itaque ipsa commodi atque dolor sint, necessitatibus aliquam fuga expedita nisi aspernatur pariatur cumque reprehenderit impedit rem quis soluta sit ea quisquam adipisci mollitia! Aut aspernatur molestiae, illo ullam aliquid exercitationem ratione ipsa quas aperiam tempore nulla natus debitis explicabo iste excepturi deserunt? Blanditiis?</p>
        </v-flex>
      </section>
    </v-container>

    <section>
      <v-parallax
        src="https://www.visitkohrong.com/wp-content/uploads/2017/05/Sunset-on-Long-Beach-Koh-Rong-Island-in-Cambodia-4.jpg"
        height="380"
      >
        <v-layout
          column
          align-center
          justify-center
        >
          <div class="headline mb-3 text-xs-center">Join us to Build a brighter future together.</div>
          <em>Kick-start your application today</em>
          <TheRegistrationPopUp @registrationSent="registersnackbar = true" />
        </v-layout>
      </v-parallax>
    </section>

    <v-container>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex
            xs12
            sm4
            class="my-3"
          >
            <div class="text-xs-center">
              <h2 class="headline">Some of the Benefits of bing a member</h2>
              <span class="subheading">Cras facilisis mi vitae nunc</span>
            </div>
          </v-flex>
          <div xs12>
            <v-container grid-list-xl>
              <v-layout
                row
                wrap
                align-center
              >
                <v-flex
                  xs12
                  md4
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >color_lens</v-icon>
                    </v-card-text>
                    <v-card-title
                      primary-title
                      class="layout justify-center"
                    >
                      <div class="headline text-xs-center">Great Colorfull Events</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center">
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >flash_on</v-icon>
                    </v-card-text>
                    <v-card-title
                      primary-title
                      class="layout justify-center"
                    >
                      <div class="headline">Fast Growth</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center">
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon
                        x-large
                        class="blue--text text--lighten-2"
                      >build</v-icon>
                    </v-card-text>
                    <v-card-title
                      primary-title
                      class="layout justify-center"
                    >
                      <div class="headline text-xs-center">We Build together</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center">
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-layout>
      </section>
    </v-container>
  </div>
</template>

<script>
import Carousel from "@/components/carousel2.vue";
import TheRegistrationPopUp from "@/components/TheRegistrationPopUp";
// import db from "@/fb";
export default {
  name: "Home",
  metaInfo: {
    title: "Nugs-Ternopil",
    titleTemplate: "%s - Home",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "National Union Of Ghana Students Ternopil comprises of Ghanaian students, with the primary aim of protecting and safeguarding the rights and interests of Ghanaian students in Ternopil."
      },
      {
        name: "Keywords",
        content:
          "Nugs-Ternopil, nugs-ternopil, Nugs Ternopil, Nugs ternopil Ukraine, National Union Of Ghana Students Ternopil, National Union Of Ghana Students Ternopil Ukraine, nugs ternopil, nugsternopil, nugs ternopil"
      }
    ]
  },

  components: {
    Carousel,
    TheRegistrationPopUp
  },
  data () {
    return {
      projects: [],
      registersnackbar: false
    };
  },
  // created () {
  //   db.collection("projects").onSnapshot(res => {
  //     const changes = res.docChanges();

  //     changes.forEach(change => {
  //       if (change.type === "added") {
  //         this.projects.push({
  //           ...change.doc.data(),
  //           id: change.doc.id
  //         });
  //       }
  //     });
  //   });
  // },
  methods: {
    sortBy (prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  &.complete {
    border-left: 4px solid #3cd1c2;
  }
  &.ongoing {
    border-left: 4px solid orange;
  }
  &.overdue {
    border-left: 4px solid tomato;
  }
}

.v-chip {
  &.complete {
    background-color: #3cd1c2;
  }
  &.ongoing {
    background-color: orange;
  }
  &.overdue {
    background-color: tomato;
  }
}
</style>

