import React, { lazy, Suspense } from "react";

const registry = new Map();

export const registerComponent = (key, Component) => {
  registry.set(key, Component);
};
export const getComponent = key => {
  return registry.get(key);
};

export const lazyRegisterComponent = (componentName, mountCb, fallback) => {
  const LazyComponent = lazy(() =>
    mountCb().then(Component => {
      return { default: Component };
    })
  );
  const ComponentToRegister = props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  registerComponent(componentName, ComponentToRegister);
};
