import React from "react";

export class HeaderSlot extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <header>{this.props.renderJson()}</header>;
  }
}
