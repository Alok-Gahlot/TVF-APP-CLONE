const intialState = {
  watchlist: [],
};

export const watchlist = (state = intialState, action) => {
  switch (action.type) {
    case 'WATCHLIST_ARRAY': {
      return {
        watchlist: [...state.watchlist, action.payload],
      };
    }
    case 'DELETE_WATCHLIST': {
      const index = action.payload;

      const demo = state.watchlist.filter((i, idx) => idx !== index);
      return {
        watchlist: [...demo],
      };
    }
    default:
      return state;
  }
};
