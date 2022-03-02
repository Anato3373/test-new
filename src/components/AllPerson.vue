<template>
  <div class="all_person">
    <div v-for="pers in arrGallery" :key="pers.id">
    <GalleryPerson 
      :pers='pers'
    />
    </div>
    <Pagination />
  </div>
</template>

<script>
import GalleryPerson from "@/components/GalleryPerson";
import Pagination from "@/components/Pagination";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AllPerson",
  components: {GalleryPerson, Pagination},
  computed:{
    ...mapGetters(['arrGallery']),
    rows() {
      return this.arrGallery.length
    }
  },
  methods: {
    ...mapActions(['getGallery'])
  },
  mounted() {
    this.getGallery()
  }
}
</script>

<style scoped lang="scss">
.all_person{
  background-color: #fff;
}

@media screen and (min-width: 480px) {
    .all_person{
        background-color: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 20px;
    }
}

@media screen and (min-width: 768px) {
    .all_person{
        flex-wrap: wrap;
        flex-direction: row;
        padding: 0 44px;
    }
}

@media screen and (min-width: 1000px) {
    .all_person{
        padding: 0 160px;
    }
}

</style>