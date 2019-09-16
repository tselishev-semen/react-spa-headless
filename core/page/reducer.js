const initialState = {
  json: {}
};
export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAGE_TRANSITION_ENDED":
      return {
        ...state,
        json: action.json,
        pathname: action.pathname
      };
    default:
      return state;
  }
};
