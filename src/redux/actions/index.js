export const signUp = value => {
  return {
    type: 'SIGN_UP',
    payload: value,
  };
};

export const signIn = value => {
  return {
    type: 'SIGN_IN',
    payload: value,
  };
};

export const likedArray = value => {
  return {
    type: 'LIKED_ARRAY',
    payload: value,
  };
};

export const likedDelete = value => {
  return {
    type: 'DELETE_LIKED',
    payload: value,
  };
};

export const watchlistArray = value => {
  return {
    type: 'WATCHLIST_ARRAY',
    payload: value,
  };
};
export const downloadsArray = value => {
  return {
    type: 'DOWNLOAD_ARRAY',
    payload: value,
  };
};

export const downloadsDelete = value => {
  return {
    type: 'DELETE_DOWNLOAD',
    payload: value,
  };
};
export const watchlistDelete = value => {
  return {
    type: 'DELETE_WATCHLIST',
    payload: value,
  };
};
