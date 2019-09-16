import { createSelector } from "reselect";
import { propOr } from "libs/prop-or";
import { omit } from "libs/omit";

const getPage = state => state.page;
const jsonSelector = createSelector(
  getPage,
  page => page.json || {}
);
const itemsSelector = createSelector(
  jsonSelector,
  json => json[":items"] || {}
);
export const pathnameSelector = createSelector(
  getPage,
  page => page.pathname
);
export const headerSlotSelector = createSelector(
  itemsSelector,
  items => propOr(items, "header", {})[":items"] || {}
);
export const contentSlotSelector = createSelector(
  itemsSelector,
  items => propOr(items, "content", {})[":items"] || {}
);
export const layoutTypeSelector = createSelector(
  jsonSelector,
  json => json[":type"]
);
export const pagePropsSelector = createSelector(
  jsonSelector,
  json => omit(json, [":items", ":key", ":type"])
);
