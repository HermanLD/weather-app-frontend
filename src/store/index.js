import Vue from "vue";
import Vuex from "vuex";
import locationPackage from "../utils/locationPackage";
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
    TOGGLE_UNIT(state, payload) {
      state.selectedUnit = payload;
    },
  },
  actions: {
    toggleUnit({ commit, dispatch, state }, currCheck) {
      const selectedUnit = currCheck === false ? "m" : "f";
      commit("TOGGLE_UNIT", selectedUnit);

      const wrappedPackage = locationPackage(
        undefined,
        undefined,
        state.cityName
      );

      dispatch("fetchForecast", wrappedPackage);
    },
    togglePermission({ commit }) {
      commit("TOGGLE_USER_PERMISSON");
    },
    async fetchForecast({ commit, state }, payload) {
      const URL = process.env.VUE_APP_BACKEND_URL;

      try {
        const res = await fetch(
          `${URL}?lat=${payload.lat}&lon=${
            payload.lon
          }&address=${encodeURIComponent(payload.address)}&unit=${
            state.selectedUnit
          }`
        );

        if (res.status !== 200) throw new Error("Cannot fetch data!");

        const forecast = await res.json();

        commit("LOAD_FORECAST", forecast);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getTodaysForecast(state) {
      return state.forecast[1];
    },
    getFutureForecast(state) {
      return state.forecast.slice(2);
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
