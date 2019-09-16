const toApiPath = pathname => {
  let preparedPathname = pathname;
  if (pathname === "/") {
    preparedPathname = "/index.html";
  }
  const ending = preparedPathname.replace(/(.*)(html)$/, "$1json");
  return `http://localhost:8080/api${ending}`;
};

export const fetch = pathname =>
  window.fetch(toApiPath(pathname)).then(response => response.json());
