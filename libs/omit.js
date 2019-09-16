export const omit = (obj, names) => {
  const index = {};
  const len = names.length;
  let idx = 0;
  let result = {};

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  Object.keys(obj).reduce((object, key) => {
    if (!(key in index)) {
      object[key] = obj[key];
    }
    return (result = object);
  }, {});

  return result;
};
