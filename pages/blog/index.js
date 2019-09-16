import React from "react";
import { lazyRegisterComponent } from "core/registry";

const lazyMount = () =>
  import(/* webpackChunkName: "blog-page" */ "./blog").then(
    module => module.BlogPage
  );
lazyRegisterComponent("pages/spa/blog-page", lazyMount, <div />);
