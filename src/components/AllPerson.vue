<template>
  <div class="all_person">
    <div v-for="pers in arrGallery" :key="pers.id">
    
    <GalleryPerson 
      :pers='pers'
    />
    </div>
  </div>
</template>

<script>
import GalleryPerson from "@/components/GalleryPerson";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AllPerson",
  components: {GalleryPerson},
  computed:{
    ...mapGetters(['arrGallery'])
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
@media screen and (min-width: 480px){
  .all_person{
    padding: 0 20px;
  }
}
@media screen and (min-width: 768px){
  .all_person{
    padding: 0 20px;
  }
}
</style>