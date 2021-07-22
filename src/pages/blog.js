import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const BlogPage = ({ data }) => (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>{data.allContentfulBlogPost.nodes.map((node) => (
          <li key={node.slug}>{node.title}</li>
      ))}</ul>
    </Layout>
  )

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

export default BlogPage;
