import React from "react";
import Header from "../components/header";

export default class extends React.Component {
  static getInitialProps ({ query: { object } }) {
    return { object: object }
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.object }
      </div>
    );
  }
};
