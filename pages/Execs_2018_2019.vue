<template>
  <v-container class="Executives-2018-2019">
    <h1 class="heading grey--text">Executives 2018-2019</h1>

    <v-container grid-list-xs>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="person in team"
          :key="person.name"
        >
          <v-card
            class="text-xs-center mx-auto my-3"
            max-width="250"
            style="border-radius: 20px;"
          >
            <v-responsive class="pt-2">
              <v-avatar
                size="120"
                :class="`pin lighten-2 ${person.color}`"
              >
                <v-img
                  max-width="114"
                  max-height="114"
                  contain
                  :src="require(`~/assets/images/${person.avatar + '.jpeg'}`)"
                  :lazy-src="require(`~/assets/images/${person.avatar + '.jpeg'}`)"
                  :alt="`${person.name} ${person.role}`"
                  class="pin-inner"
                ></v-img>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions justify-space-around>
              <v-tooltip top>
                <v-btn
                  fab
                  color="grey"
                  small
                  slot="activator"
                >
                  <v-icon small>message</v-icon>
                </v-btn>
                <span>Send a Message</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          fixed
          right
          bottom
          small
          fab
          class="mb-4"
          @click="onLoadPastExecutives()"
          router
          to="/pastExecs"
        >

          <font-awesome-icon
            :icon="['fas', 'history']"
            class="fa-lg"
          />
        </v-btn>
      </template>
      <span>Past Presidents And Vices.</span>
    </v-tooltip>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Nugs-Ternopil",
    titleTemplate: "%s - Executives",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "The men and women who are in charge of Nugs-Ternopil for the year 2019/2020"
      },
      {
        name: "Keywords",
        content:
          "Nugs-Ternopil executives, executives 2019/2020 year, nugsternopil executives 2019/2020"
      }
    ]
  },
  data () {
    return {
      team: [
        {
          name: "Zachariah Gyetuah",
          role: "President",
          color: "primary",
          avatar: "nana"
        },
        {
          name: "Nana Mbeah Otoo",
          color: "black",
          role: "Vice President",
          avatar: "nana"
        },
        {
          name: "Gertrude Boakye",
          color: "error",
          role: "General Secretery",
          avatar: "gettyEdited"
        },
        {
          name: "Samuel Tuni",
          color: "black",
          role: "Financial Secretary",
          avatar: "samuelTuniEdited"
        },
        {
          name: "Barriister Kenneth",
          color: "primary",
          role: "Treasurer",
          avatar: "kennethEdited"
        },
        {
          name: "Matthew Tamakloe",
          color: "success",
          role: "Public Relations Officer",
          avatar: "tamaEdited"
        },
        {
          name: "Emmanuel owusu",
          color: "info",
          role: "Deputy P R O",
          avatar: "deputypro"
        },
        {
          name: "Isaac Osae",
          color: "black",
          role: "Organizing Sec",
          avatar: "IsacEdited"
        },

        {
          name: "Michael Osei",
          color: "success",
          role: "Dept. Organizing Sec",
          avatar: "michel"
        },
        {
          name: "Rafiq Arhin",
          color: "error",
          role: "Academic Chairperson",
          avatar: "radiqEdited"
        },

        {
          name: "Evelyn Gyetuah",
          color: "black",
          role: "Economics Administrator",
          avatar: "eveEdited"
        },
        {
          name: "Dennis Sunten",
          color: "info",
          role: "Health Director",
          avatar: "avatar-14"
        },

        {
          name: "Annie Abbeyquaye Donkor",
          color: "black",
          role: "Welfare Committee Chair",
          avatar: "annieEdited"
        },

        {
          name: "Bartz Amaniampong",
          color: "error",
          role: "Technical Administrator",
          avatar: "bartzEdited"
        }
      ]
    };
  }
};
</script>


<style lang="scss"  scoped>
.pin {
  border-radius: 0 50% 50% 50%;
  border: 4px solid #fff;

  transform: rotate(-45deg);
}

.pin-inner {
  transform: rotate(45deg);
}
</style>
