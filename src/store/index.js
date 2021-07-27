import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forecast: [],
  },
  mutations: {
    LOAD_FORECAST(state, payload) {
      state.forecast = payload;
    },
  },
  actions: {
    async fetchForecast() {
      try {
        const res = await fetch();

        if (res.status !== 200) throw new Error("Cannot fetch data!");

        const data = await res.json();

        console.log(data);
        // commit("LOAD_FORECAST", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  // getters: {
  //   getForecast() {}
  // },
});
