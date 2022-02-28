<template>
  <div class="gallery_person person">
    <div class="person_acc">
      <img class="person_acc_img" :src="pers.user.profile_image.medium" alt="">
      <span class="person_acc_name">{{ pers.user.username }}</span>
      <span class="person_acc_social"></span>
    </div>
    <img class="person_image" :src="pers.cover_photo.urls.small" alt="">
    <div class="person_views">
      <span class="person_views_quantity"></span>
      <span class="person_views_icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryPerson",
  props: ['pers']
}
</script>

<style scoped lang="scss">

.gallery_person {
  border: 1px solid grey;
  width: 100%;
  height: 400px;
  font-family: "Roboto";
}

.person_acc {
  display: flex;
  &_img {
    display: block;
    border-radius: 50%;
  }
  &_name {
    font-weight: bold;
    color: #333333
  }
  &_social {
    color: #8D8D8D;
  }

  person_views {
    display: flex;
    justify-content: flex-end;
    &_quantity {
      color: #8D8D8D;
    }
    &_icon {

    }
  }
}

@media screen and (min-width: 480px) {
  .gallery_person {
    width: 100%;
  }

}

@media screen and (min-width: 768px) {
  .gallery_person {
    width: 320px;
  }
}
</style>