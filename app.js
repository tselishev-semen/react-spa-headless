import React from "react";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./register-all-components";

import { HeaderSlot } from "slots";
import { store } from "core/store";
import ReactDOM from "react-dom";
import { getComponent } from "core/registry";
import {
  headerSlotSelector,
  contentSlotSelector,
  layoutTypeSelector,
  pathnameSelector,
  pagePropsSelector
} from "core/page";
import { JsonTransformer } from "core/json-transformer";
import { Route } from "react-router";
import { DynamicRoute } from "./core/route";
import { ScrollToTop } from "./core/scroll-to-top";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const App = () => {
  const headerSlotJson = useSelector(headerSlotSelector);
  const pathname = useSelector(pathnameSelector);
  const contentSlotJson = useSelector(contentSlotSelector);
  const layoutType = useSelector(layoutTypeSelector);
  const pageProperties = useSelector(pagePropsSelector);
  const Layout = getComponent(layoutType);
  return (
    <>
      <ScrollToTop />
      <HeaderSlot
        key={pathname}
        renderJson={() =>
          headerSlotJson && <JsonTransformer json={headerSlotJson} />
        }
      />
      {Layout && (
        <Layout
          {...pageProperties}
          renderContentSlot={() => <JsonTransformer json={contentSlotJson} />}
        />
      )}
      <Route render={({ location }) => <DynamicRoute location={location} />} />
    </>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
