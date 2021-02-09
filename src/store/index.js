import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';


const state = {
  sites: [],
  resultTotal: Number,
  pageTotale: Number,
  query: "",
  copydeck: "Object",
  lang: "en"
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
