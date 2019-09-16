const initialState = {
  articles: []
};
export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLES_LOADED":
      return {
        ...state,
        articles: action.articles
      };
    default:
      return state;
  }
};
