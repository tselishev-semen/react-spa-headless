import React from "react";
import { getComponent } from "core/registry";
import { ErrorBoundary } from "./error-boundary";
import { omit } from "libs/omit";

const convertJsonToJSX = json => {
  const type = json[":type"];
  const Component = getComponent(type);
  if (!Component) {
    console.log(
      `Component: ${type} was not rendered, because it was not found in the registry`
    );
    return null;
  }
  const items = json[":items"];
  const key = json[":key"];
  const props = omit(json, [":type", ":items", ":key"]);
  if (items) {
    return (
      <ErrorBoundary key={key}>
        <Component {...props}>{items.map(convertJsonToJSX)}</Component>
      </ErrorBoundary>
    );
  }
  return (
    <ErrorBoundary key={key}>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export const JsonTransformer = ({ json }) => {
  const normalizedJson = Array.isArray(json) ? json : [json];
  return normalizedJson.map(container => convertJsonToJSX(container));
};
