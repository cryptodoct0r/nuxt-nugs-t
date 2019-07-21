<template>
  <v-carousel
    height="375"
    hide-delimiters
    style="background-color: grey;"
  >
    <v-carousel-item
      v-for="(logo,i) in logos"
      :key="i"
      :src="require(`~/assets/images/${logo.src + '.png'}`)"
      contain
    ></v-carousel-item>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      logos: [
        {
          src: 'nugst-new-logo'
        }
      ],
      items: [

        {
          src: 'https://ghana.embassy.gov.au/files/acra/About%20Australia%20for%20Webpage.jpg'
        },
        {
          src: 'http://buzzghana.com/wp-content/uploads/2014/12/Independence-Square-Accra-Ghana.jpg'
        },
        {
          src: 'https://www.eni.com/img/international-presence/ghana_640.jpg'
        }
      ]
    }
  }
}
</script>
