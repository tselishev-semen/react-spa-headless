const mockArticles = [
  {
    name: "Article about react",
    message: "Use only React, it is the best framework"
  },
  {
    name: "Article about angular",
    message: "Use only Angular, it is the best framework"
  }
];
export const loadArticles = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: "ARTICLES_LOADED", articles: mockArticles });
  }, 400);
};
