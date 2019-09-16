import React from "react";
import { injectReducerOnce } from "./reducer-registry";
export const withReducer = (name, reducer) => WrappedComponent => {
  class PageWithReducer extends React.PureComponent {
    constructor(props) {
      super(props);
      injectReducerOnce(name, reducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return PageWithReducer;
};
