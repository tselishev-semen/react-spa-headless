import { createSelector } from "reselect";

const getBlog = state => state["blog-page"];
export const articlesSelector = createSelector(
  getBlog,
  blog => blog.articles
);
