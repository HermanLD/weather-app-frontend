import Vue from "vue";
import Vuex from "vuex";
import testData from "./testData.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forecast: testData.data,
    cityName: testData.city_name,
    allowUserLocation: true,
    //? f -or- m
    selectedUnit: "f",
  },
  mutations: {
    LOAD_FORECAST(state, payload) {
      state.forecast = payload.data;
      state.cityName = payload.city_name;
    },
    TOGGLE_USER_PERMISSON(state) {
      state.allowUserLocation = !state.allowUserLocation;
    },
  },
  actions: {
    togglePermission({ commit }) {
      commit("TOGGLE_USER_PERMISSON");
    },
    async fetchForecast({ commit, state }, payload) {
      console.log("FROM STORE - fetchForecast payload", payload);
      console.log("FROM STORE - state:", state.cityName);
      try {
        // const res = await fetch(
        //   `${process.env.BACKEND_URL}?lat=${payload.lat}&lon=${payload.lon}&address=${payload.address}&unit=${state.selectedUnit}`
        // );

        // if (res.status !== 200) throw new Error("Cannot fetch data!");

        // const forecast = await res.json();

        // commit("LOAD_FORECAST", forecast);

        commit("LOAD_FORECAST", testData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getTodaysForecast(state) {
      return state.forecast[0];
    },
    getFutureForecast(state) {
      return state.forecast.slice(1);
    },
    getCurrLocation(state) {
      return state.cityName;
    },
    getFahOrCelc(state) {
      if (state.selectedUnit === "f") return "°F";
      return "°C";
    },
    getPermission(state) {
      return state.allowUserLocation;
    },
  },
});
