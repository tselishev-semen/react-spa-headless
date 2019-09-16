import React from "react";
import { Link } from "react-router-dom";
import { registerComponent } from "core/registry";

const Navigation = ({ extraUrls }) => {
  return (
    <nav>
      Navigation:
      <ul>
        <li>
          <Link to={"/index.html"}>Home Page</Link>
        </li>
        <li>
          <Link to={"/blogs.html"}>Blog</Link>
        </li>
        <li>
          <Link to={"/about.html"}>About</Link>
        </li>
        {extraUrls.map(({ name, url }) => {
          return (
            <li>
              <Link to={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
Navigation.defaultProps = {
  extraUrls: []
};
registerComponent("components/spa/navigation", Navigation);
