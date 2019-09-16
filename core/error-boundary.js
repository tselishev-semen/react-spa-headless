import React from "react";

export class ErrorBoundary extends React.PureComponent {
  static getDerivedStateFromError(error) {
    return { error };
  }
  state = { error: null };

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div>Unhandled error in component: {this.state.error.toString()};</div>
      );
    }
    return this.props.children;
  }
}
