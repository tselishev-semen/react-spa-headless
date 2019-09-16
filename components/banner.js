import React from "react";
import { Link } from "react-router-dom";
import { registerComponent } from "core/registry";

const Banner = ({ href, title, children }) => (
  <Link to={href} className="banner">
    <h2>{title}</h2>
    <div className="banner__asset">{children}</div>
  </Link>
);
registerComponent("components/spa/banner", Banner);
