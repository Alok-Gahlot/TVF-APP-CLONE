const intialState = {
  downloads: [],
};

export const downloads = (state = intialState, action) => {
  switch (action.type) {
    case 'DOWNLOAD_ARRAY': {
      return {
        downloads: [...state.downloads, action.payload],
      };
    }
    case 'DELETE_DOWNLOAD': {
      const index = action.payload;

      const demo = state.downloads.filter((i, idx) => idx !== index);
      return {
        downloads: [...demo],
      };
    }
    default:
      return state;
  }
};
