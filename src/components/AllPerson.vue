<template>
  <div class="block">
    <div class="all_person">
      <div v-for="pers in lists" :key="pers.id">
        <GalleryPerson :pers="pers" />
      </div>
    </div>
    <b-pagination
      v-model="currentPage"
      :items="arrGallery"
      :total-rows="rows"
      :per-page="perPage"
      first-number
      last-number
    ></b-pagination>
  </div>
</template>

<script>
import GalleryPerson from "@/components/GalleryPerson";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AllPerson",
  data() {
    return {
      perPage: 6,
      currentPage: 1,
    };
  },
  components: { GalleryPerson },
  computed: {
    ...mapGetters(["arrGallery"]),
    lists() {
      return this.arrGallery.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    rows() {
      return this.arrGallery.length;
    },
  },
  methods: {
    ...mapActions(["getGallery"]),
  },
  mounted() {
    this.getGallery();
  },
};
</script>

<style scoped lang="scss">
.all_person {
  background-color: #fff;
}

@media screen and (min-width: 480px) {
  .all_person {
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
  }
}

@media screen and (min-width: 768px) {
  .all_person {
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 44px;
  }
}

@media screen and (min-width: 1000px) {
  .all_person {
    padding: 0 160px;
  }
}


</style>