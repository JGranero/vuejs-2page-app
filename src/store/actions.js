/* ==============
      ACTIONS
================= */

import axios from 'axios';


export const getSites = ({ state, commit }, payload) => {
  let query = "";
  if (payload.query) {
    query = payload.query;
  }
  else if (state.query) {
    query = state.query;
  }
  
  axios.get('http://localhost:3000/sites?', {
    params: {
      _page: payload.page,
      _limit: payload.limit,
      q: query
    }
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(response => {
    if (payload.pagination) {
      commit('ADD_MORE_SITES', { payload: response.data });
    }
    else {
      commit('ADD_TO_SITES', { payload: response.data, query: payload.query });
      commit('CHANGE_PAGE_TOTAL', { num: Math.round(response.headers["x-total-count"] / payload.limit + .5) });
    }
  })
}