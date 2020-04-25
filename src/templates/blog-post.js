/* eslint-disable */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';

import * as S from '../components/Post/styled';

const BlogPost = ({ data, pageContext }) => {
  const Post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  return (
    <Layout>
      <SEO title={Post.frontmatter.title} description={Post.frontmatter.description} image={Post.frontmatter.image} />
      <S.PostHeader>
        <S.PostDate>
          {Post.frontmatter.date}
          &nbsp;
          •
          &nbsp;
          {Post.timeToRead}
          &nbsp;min read
        </S.PostDate>
        <S.PostTitle>{Post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{Post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: Post.html }} />
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        date(formatString: "MMMM DD[,] YYYY", locale: "en-us")
        image
      }
      html
      timeToRead
    }
  }
`;
export default BlogPost;
