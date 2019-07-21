
  <template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-carousel
        height="375"
        hide-delimiters
      >
        <v-carousel-item
          style="cursor: pointer;"
          prevent.stop
          v-for="meetup in meetups"
          :key="meetup.id"
          :src="meetup.src"
          @click="onLoadMeetup(meetup.id)"
        >
          <div class="title s12">
            <v-container class="text-center">
              Click to see more info on the
              <br />
              {{meetup.title}}
            </v-container>
          </div>
        </v-carousel-item>
      </v-carousel>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          class="text-xs-center text-sm-right"
        >
          <v-btn
            large
            router
            to="/meetups"
            class="primary"
          >Explore News & Events</v-btn>
        </v-flex>
        <v-flex
          xs12
          sm6
          class="text-xs-center text-sm-left"
        >
          <v-btn
            large
            router
            to="/meetUp/new"
            class="primary"
          >Update News & Events</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-layout
      row
      wrap
    ></v-layout>
  </div>
</template>

  

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups;
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>


<style lang="stylus">
.title {
  width: 100%;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
</style>
