<template>
  <v-container class="pastExecutives">
    <h1 class="heading grey--text">Past Presidents</h1>
    <v-container grid-list-xs>
      <v-card>
        <v-layout
          row
          wrap
        >
          <v-flex
            xs9
            sm11
          >
            <v-card-text>2018/2019 Zach and Mbea</v-card-text>
          </v-flex>
          <v-flex
            xs3
            sm1
          >
            <v-card-actions>
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    small
                    flat
                    fab
                    v-on="on"
                    router
                    to="/Execs_2018_2019"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'link']"
                      class="fa-lg"
                    />
                  </v-btn>
                </template>
                <span>Executives 2018-2019</span>
              </v-tooltip>
            </v-card-actions>
          </v-flex>
        </v-layout>

        <v-container
          fluid
          grid-list-lg
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              sm6
            >
              <v-card>
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                    xs12
                    sm8
                  >
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Zachariah Gyetuah</div>
                        <div>President</div>
                        <div>"God gave us the gift of life; it is up to us to give ourselves the gift of living well."</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex
                    xs12
                    sm4
                  >
                    <img
                      src="~assets/images/zackEdited.jpg"
                      height="125px"
                      contain
                    >
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Contact Details
                  <v-spacer></v-spacer>
                  <v-btn
                    fab
                    small
                    router
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-lg"
                    />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              sm6
            >
              <v-card>
                <v-layout
                  wrap
                  row
                >
                  <v-flex
                    xs12
                    sm4
                  >
                    <img
                      src="~assets/images/nana.jpeg"
                      height="125px"
                      contain
                    >
                  </v-flex>
                  <v-flex
                    xs12
                    sm8
                  >
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Nana Mbeah Otoo</div>
                        <div>Vice President</div>
                        <div>“Our prime purpose in life is to help others. And if you can’t, don’t hurt them.”</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Contact Details
                  <v-spacer></v-spacer>
                  <v-btn
                    fab
                    small
                    router
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-lg"
                    />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
    <v-container grid-list-xs>
      <v-card>
        <v-layout
          row
          wrap
        >
          <v-flex
            xs9
            sm11
          >
            <v-card-text>2017/2018 Christian and Ella</v-card-text>
          </v-flex>
          <v-flex
            xs3
            sm1
          >
            <v-card-actions>
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    small
                    flat
                    fab
                    v-on="on"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'link']"
                      class="fa-lg"
                    />
                  </v-btn>
                </template>
                <span>Executives 2017-2018 Under Construction</span>
              </v-tooltip>
            </v-card-actions>
          </v-flex>
        </v-layout>

        <v-container
          fluid
          grid-list-lg
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              sm6
            >
              <v-card>
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                    xs12
                    sm8
                  >
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Acquah Christian Fosu</div>
                        <div>President</div>
                        <div>"A proverb is a short sentence based on long experience."</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex
                    xs12
                    sm4
                  >
                    <img
                      src="~assets/images/chris.jpeg"
                      height="125px"
                      contain
                    >
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Contact Details
                  <v-spacer></v-spacer>
                  <v-btn
                    fab
                    small
                    router
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-lg"
                    />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              sm6
            >
              <v-card>
                <v-layout
                  wrap
                  row
                >
                  <v-flex
                    xs12
                    sm4
                  >
                    <img
                      src="~assets/images/ella.jpeg"
                      height="125px"
                      contain
                    >
                  </v-flex>
                  <v-flex
                    xs12
                    sm8
                  >
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Poku Emmanuella Adusei</div>
                        <div>Vice President</div>
                        <div>“A new broom sweeps clean but an old broom knows the corners.”</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Contact Details
                  <v-spacer></v-spacer>
                  <v-btn
                    fab
                    small
                    router
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-lg"
                    />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
    <v-container grid-list-xs>
      <v-card>
        <v-layout
          row
          wrap
        >
          <v-flex
            xs9
            sm11
          >
            <v-card-text>2015/2016 and 2016/2017 Juliet and Samuel</v-card-text>
          </v-flex>
          <v-flex
            xs3
            sm1
          >
            <v-card-actions>
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    small
                    flat
                    fab
                    v-on="on"
                  >

                    <font-awesome-icon
                      :icon="['fas', 'link']"
                      class="fa-lg"
                    />
                  </v-btn>
                </template>
                <span>Executives 2015/2016 and 2016/2017 Under Construction</span>
              </v-tooltip>
            </v-card-actions>
          </v-flex>
        </v-layout>

        <v-container
          fluid
          grid-list-lg
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              sm6
            >
              <v-card>
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                    xs12
                    sm8
                  >
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Julliet Kusi Boahen</div>
                        <div>President</div>
                        <div>"Lost time is never found again."</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                  <v-flex
                    xs12
                    sm4
                  >
                    <img
                      src="~assets/images/juliet.jpeg"
                      lazy-src="~assets/images/juliet.jpeg"
                      height="125px"
                      contain
                    >
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Contact Details
                  <v-spacer></v-spacer>
                  <v-btn
                    fab
                    small
                    router
                    href="https://twitter.com"
                    target="_blank"
                  >

                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-lg"
                    />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              sm6
            >
              <v-card>
                <v-layout
                  wrap
                  row
                >
                  <v-flex
                    xs12
                    sm4
                  >
                    <img
                      src="~assets/images/samuel.jpeg"
                      height="125px"
                      contain
                    >
                  </v-flex>
                  <v-flex
                    xs12
                    sm8
                  >
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Samuel Asare Boahen</div>
                        <div>Vice President</div>
                        <div>“Life is a journey, not a destination.”</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Contact Details
                  <v-spacer></v-spacer>
                  <v-btn
                    fab
                    small
                    router
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="fa-lg"
                    />
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Nugs-Ternopil",
    titleTemplate: "%s - Past Executives",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "The men and women who have been in charge of Nugs-Ternopil since it's inception till date."
      },
      {
        name: "Keywords",
        content:
          "Nugs-Ternopil past executives, executives, president, vice-presidents, nugsternopil executives in history"
      }
    ]
  },
  data () {
    return {};
  }
};
</script>


<style lang="scss" scoped>
.v-card,
img {
  border-radius: 10px;
}
</style>
