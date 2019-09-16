import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestPage } from "core/page";

export function DynamicRoute({ location }) {
  const pathname = location.pathname;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestPage(pathname));
  }, [pathname, dispatch]);

  return null;
}
