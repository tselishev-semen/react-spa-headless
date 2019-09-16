export const propOr = (obj, prop, defVal = "") => {
  let result = defVal;
  if (obj) {
    if (prop in obj) {
      result = obj[prop];
    }
  }
  return result;
};
