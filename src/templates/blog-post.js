/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const Post = data.markdownRemark;
  return (
    <>
      <h1>{Post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: Post.html }} />
    </>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      html
    }
  }
`;
export default BlogPost;
