<template>
<div class="mt-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      ></b-pagination>
</div>
</template>


<script>


  export default {
    data() {
      return {
        rows: 8,
        perPage: 8,
        currentPage: 1
      }
    }
  }
</script>