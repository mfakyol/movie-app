import React, { Component } from "react";
import { connect } from "react-redux";
import { getExample } from "../redux/actions/example-action";

class ExampleComponent extends Component {
  componentDidMount() {
    this.props.onGetExample("example-data");
  }

  render() {
    return <div>{this.props.example}</div>;
  }
}

const mapStateToProps = (state, props) => {
  return { example: state.example };
};

const mapDispatchToProps = {
  onGetExample: getExample,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
