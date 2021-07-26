import React, { Component } from "react";
import Layout from "../components/layout";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    );
  }
}
