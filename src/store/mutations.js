/* =============
    MUTATIONS
================ */


export const ADD_TO_SITES = (state, { payload, query }) => {
  state.sites = [];
  state.sites = state.sites.concat(payload);
  state.query = query;
};

export const ADD_MORE_SITES = (state, { payload }) => {
  state.sites = state.sites.concat(payload);
}

export const CHANGE_SEARCH_DATA = (state, { pages, results }) => {
  state.pageTotal = pages;
  state.resultTotal = results;
}

export const UPDATE_COPY = (state, payload) => {
  state.copydeck = payload.lang;
};

export const UPDATE_LANGUAGE = (state, payload) => {
  state.lang = payload;
};