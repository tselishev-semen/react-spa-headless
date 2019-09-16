import React from "react";

export class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.pathname !== prevProps.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}
