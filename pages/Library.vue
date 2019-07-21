<template>
  <v-container class="OnlineLib">
    <h1 class="heading grey--text">Online Library</h1>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      projects: []
    };
  },
  metaInfo: {
    title: "Nugs-Ternopil",
    titleTemplate: "%s - Library",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "A combination of Books to fit students from Ternopil Medical, Technical and Economics University."
      },
      {
        name: "Keywords",
        content:
          "Nugs-Ternopil Library, Library, e-library, books, text books, download medical text books, e-books"
      }
    ]
  },


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

