<template>
  <div class="gallery_person person ">
    <div class="person_acc">
      <img class="person_acc_img" :src="personInfo.user.profile_image.large" alt="">
      <span class="person_acc_name">{{ personInfo.user.name }}</span>
      <p class="person_acc_description">{{ personInfo.user.bio }}</p>
    </div>
    <div class="person_path">
      <a :href="personInfo.user.links.html" class="person_path_link" target="_blank"> More information... </a>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PersonInfo",
  computed: {
    ...mapGetters(['infoPerson']),
    personInfo(){
      return this.infoPerson(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(["getGallery"]),
  },
  async mounted() {
    await this.getGallery();
  },
}
</script>

<style scoped lang="scss">
$size: calc(18px + (42 - 10) * ((100vw - 320px) / (1920 - 320)));

.gallery_person {
  display: flex;
  flex-direction: column;
}

.person_acc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  &_img {
    display: block;
    border-radius: 50%;
    margin: 0 10px 0 0;
  }
  &_name {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: $size;
    color: #333333
  }
  &_description {
    font-size: $size;
    color: #8D8D8D;
  }
}

.person_path {
  text-align: right;
  padding: 0 30px 0 0;
  &_link {
    color: cornflowerblue;
    text-decoration: none;
  }
}
</style>