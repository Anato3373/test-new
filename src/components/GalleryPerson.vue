<template>
  <div class="gallery_person person">
    <div class="person_acc">
      <img class="person_acc_img" :src="pers.user.profile_image.small" alt="">
      <div>
        <span class="person_acc_name">{{ pers.user.name }}</span>
        <span class="person_acc_social">{{ pers.user.social.instagram_username }}</span>
      </div>
    </div>
    <img class="person_image" :src="pers.urls.small" alt="">
    <div class="person_views">
      <span class="person_views_quantity">{{ pers.likes }}</span>
      <span class="person_views_icon"><img src="../assets/Eye.png" alt="eye"></span>
    </div>
  </div>
</template>

<script>
// import {mapGetters} from vuex

export default {
  name: "GalleryPerson",
  props: ['pers'],
  // computed: {
  //   ...mapGetters['']
  // }
}
</script>

<style scoped lang="scss">

.gallery_person {
  width: 100%;
  // height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.person_acc {
  display: flex;
  padding: 10px;
  &_img {
    display: block;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
  }
  div {
    display: block;
  }
  &_name {
    display: block;
    width: 100%;
    font-weight: bold;
    font-size: 12px;
    color: #333333
  }
  &_social {
    font-size: 12px;
    color: #8D8D8D;
  }
}

.person_image {
  width: 100%;
  max-width: 768px;
  height: 100%;
  align-self: center;
}

.person_views {
    display: flex;
    justify-content: flex-end;
    height: 40px;
    align-items: center;
    &_quantity {
      color: #8D8D8D;
      font-size: 12px;
    }
    &_icon {
      margin-left: 5px;
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 480px) {
    .person_acc {
        padding: 10px 0;
    }

    .gallery_person {
        width: 100%;
    } 

    .person_views {
        height: 30px;
    }

    .person_views_icon {
        margin-right: 0px;
    }
}

@media screen and (min-width: 768px) {
    .person_acc {
        padding: 10px;
    }

    .gallery_person {
        width: 320px;
        margin-right: 20px;
    }

    .person_views {
        height: 32px;
    }

    .person_views_icon {
        margin-right: 10px;
    }
}

@media screen and (min-width: 1000px) {
    .all_person{
        padding: 0 160px;
    }

    .person_acc {
        padding: 10px;
    }
}

</style>