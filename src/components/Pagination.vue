<template>
  <div class="mt-3">
    <b-table
      id="my-table"
      :items="arrGallery"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
    <b-pagination-nav
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-number
      last-number
    ></b-pagination-nav>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      perPage: 6,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["arrGallery"]),
    rows() {
      return this.arrGallery.length
    },
  },
};
</script>