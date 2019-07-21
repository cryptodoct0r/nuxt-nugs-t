<template>
  <v-container class="gallery">
    <h1 class="heading grey--text">Image Gallery</h1>
    <no-ssr>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </no-ssr>

    <v-layout>
      <v-flex
        xs12
        sm10
        offset-sm1
        lg8
        offset-lg2
      >
        <v-card>
          <v-container
            grid-list-sm
            fluid
          >
            <v-layout
              row
              wrap
            >
              <v-flex
                v-for="(image, thumbIndex)  in images"
                :key="thumbIndex"
                @click="index = thumbIndex"
                xs4
                d-flex
              >
                <v-card
                  flat
                  tile
                  class="d-flex"
                >
                  <v-img
                    :data-src="require(`~/assets/images/nugsImages/${image.thumb + '.jpeg'}`)"
                    :src="require(`~/assets/images/nugsImages/${image.thumb + '.jpeg'}`)"
                    :lazy-src="require(`~/assets/images/nugsImages/${image.thumb + '.jpeg'}`)"
                    position="center center"
                    aspect-ratio="1.6"
                    class="grey lighten-2"
                    style="cursor: pointer;"
                  >
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>


export default {
  metaInfo: {
    title: "Nugs-Ternopil",
    titleTemplate: "%s - Gallery",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "All the Picures from Nugs-Ternopil events and activities ready for viewing and downloading."
      },
      {
        name: "Keywords",
        content:
          "Nugs-Ternopil gallery, gallery, images, Pictures, pictures from Nugs-Ternopil events, images from nugs ternopil events, download nugsternopil photos"
      }
    ]
  },
  components: {

  },
  data () {
    return {

      images: [
        {
          id: 23,
          url: require("~/assets/images/nugsImages/nugstgal23.jpeg"),
          thumb: 'nugstgal23',
          title: 'The Nugs-T registration card',
        },
        {
          id: 22,
          url: require("~/assets/images/nugsImages/nugstgal22.jpeg"),
          thumb: 'nugstgal22',
          title: 'Heallth Screening 16 July 2019',
        },
        {
          id: 21,
          url: require("~/assets/images/nugsImages/nugstgal21.jpeg"),
          thumb: 'nugstgal21',
          title: 'New vice president at the inauguration',
        },
        {
          id: 20,
          url: require("~/assets/images/nugsImages/nugstgal20.jpeg"),
          thumb: 'nugstgal20',
          title: 'New President & vice president at the inauguration',
        },
        {
          id: 19,
          url: require("~/assets/images/nugsImages/nugstgal19.jpeg"),
          thumb: 'nugstgal19',
          title: 'Swearing in of the Vice president',
        },
        {
          id: 18,
          url: require("~/assets/images/nugsImages/nugstgal18.jpeg"),
          thumb: 'nugstgal18',
          title: 'Outgoing president and Incoming President',
        },
        {
          id: 17,
          url: require("~/assets/images/nugsImages/nugstgal17.jpeg"),
          thumb: 'nugstgal17',
          title: 'Outgoing and Incoming top executives with vice dean Elena',
        },
        {
          id: 16,
          url: require("~/assets/images/nugsImages/nugstgal16.jpeg"),
          thumb: 'nugstgal16',
          title: 'New executives at the inauguration',
        },
        {
          id: 15,
          url: require("~/assets/images/nugsImages/nugstgal15.jpeg"),
          thumb: 'nugstgal15',
          title: 'New president and vice with With Mr Samuel',
        },
        {
          id: 14,
          url: require("~/assets/images/nugsImages/nugstgal14.jpeg"),
          thumb: 'nugstgal14',
          title: 'Heallth Screening 16 July 2019',
        },
        {
          id: 13,
          url: require("~/assets/images/nugsImages/nugstgal13.jpeg"),
          thumb: 'nugstgal13',
          title: 'Heallth Screening 16 July 2019',
        },
        {
          id: 12,
          url: require("~/assets/images/nugsImages/nugstgal12.jpeg"),
          thumb: 'nugstgal12',
          title: 'Heallth Screening 16 July 2019',
        },
        {
          id: 11,
          url: require("~/assets/images/nugsImages/nugstgal11.jpeg"),
          thumb: 'nugstgal11',
          title: 'Heallth Screening 16 July 2019',
        },
        {
          id: 10,
          url: require("~/assets/images/nugsImages/nugstgal10.jpeg"),
          thumb: 'nugstgal10',
          title: 'Heallth Screening 16 July 2019',
        },
        {
          id: 9,
          url: require("~/assets/images/nugsImages/nugstgal9.jpeg"),
          thumb: 'nugstgal9',
          title: 'Heallth Screening 16 July 2019',
        },
        {
          id: 8,
          url: require("~/assets/images/nugsImages/nugstgal8.jpeg"),
          thumb: 'nugstgal8',
          title: 'Heallth Screening 16 July 2019',
        },
        {
          id: 7,
          url: require("~/assets/images/nugsImages/nugstgal7.jpeg"),
          thumb: 'nugstgal7',
          title: 'President and Vice with Vice deans',
        },
        {
          id: 6,
          url: require("~/assets/images/nugsImages/nugstgal6.jpeg"),
          thumb: 'nugstgal6',
          title: 'Executives for the 2019/2020 session on inauguration day.',
        },
        {
          id: 5,
          url: require("~/assets/images/nugsImages/nugstgal5.jpeg"),
          thumb: 'nugstgal5',
          title: 'NugsT President 2019/2020 with the Rector of TNMU',
        },
        {
          id: 4,
          url: require("~/assets/images/nugsImages/nugstgal4.jpeg"),
          thumb: 'nugstgal4',
          title: 'President and Vice with Vice dean Mr Furdela',
        },
        {
          id: 3,
          url: require("~/assets/images/nugsImages/nugstgal3.jpeg"),
          thumb: 'nugstgal3',
          title: 'NugsT executives 2019/2020 with TNMU Dean and vice deans.',
        },
        {
          id: 2,
          url: require("~/assets/images/nugsImages/nugstgal2.jpeg"),
          thumb: 'nugstgal2',
          title: 'NugsT President 2019/2020 with the Rector of TNMU',
        },
        {
          id: 1,
          url: require("~/assets/images/nugsImages/nugstgal1.jpeg"),
          thumb: 'nugstgal1',
          title: 'Female executives with the Vice deans.',
        }
      ],
      index: null,
    };
  }
};
</script>

