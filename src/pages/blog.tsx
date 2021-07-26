import { graphql, PageProps } from "gatsby";
import React, { Component } from "react";
import Layout from "../components/layout";

interface BlogHeroImage {
  title: string,
  src: string
}

interface BlogDescription {
  description: string
}

interface BlogEntry {
  title: string,
  slug: string,
  heroImage: BlogHeroImage,
  description: BlogDescription,
}

interface BlogPageProps extends PageProps {
    data: {
      allContentfulBlogPost: {
        nodes: BlogEntry[]
      }
    }
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        heroImage {
          title
          fluid(maxWidth: 500) {
            src
          }
        }
        title
        description {
          description
        }
        slug
      }
    }
  }
`;

export default class BlogPage extends Component<BlogPageProps> {

  render() {
    return (
      <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>{this.props.data.allContentfulBlogPost.nodes.map((node: BlogEntry ) => (
          <li key={node.slug}>{node.title}</li>
      ))}</ul>
    </Layout>
    )
  }

};
