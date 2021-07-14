const intialState = {
  liked: [],
};

export const liked = (state = intialState, action) => {
  switch (action.type) {
    case 'LIKED_ARRAY': {
      return {
        liked: [...state.liked, action.payload],
      };
    }
    case 'DELETE_LIKED': {
      const index = action.payload;
      console.log('delere', index);
      const demo = state.liked.filter((i, idx) => idx !== index);
      return {
        liked: [...demo],
      };
    }
    default:
      return state;
  }
};
