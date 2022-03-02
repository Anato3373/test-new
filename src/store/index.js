import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    gallery: [],
    accesKey: 'q7LHQiyZge3nPA6GkLWpYkPiYOUTEmUZgEAagNLkOlA',
    API: 'https://api.unsplash.com/photos?per_page=60&'
  },
  mutations: {
    CREATE(state, arr){
      state.gallery.push(...arr)
    }
  },
  actions: {
    getGallery(ctx){
      fetch(`${this.state.API}client_id=${this.state.accesKey}`)
          .then(res => res.json())
          .then(json => ctx.commit('CREATE', json))
          .catch(err => console.log(err))
    }
  },
  getters: {
    arrGallery(state){
      return state.gallery
    }
  },

  modules: {
  }
})
