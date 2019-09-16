import { fetch } from "libs/fetch";

export const pageTransitionEnded = (json, pathname) => ({
  type: "PAGE_TRANSITION_ENDED",
  json,
  pathname
});

export const requestPage = pathname => dispatch => {
  fetch(pathname).then(json => {
    dispatch(pageTransitionEnded(json, pathname));
  });
};
