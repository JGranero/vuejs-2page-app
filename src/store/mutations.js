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

export const CHANGE_PAGE_TOTAL = (state, { num }) => {
  state.pageTotal = num;
}