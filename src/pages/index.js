/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/"  
      background="purple"
      category="JS"
      date="30 de Janeiro"
      timeToRead="4"
      title="Deploy na AWS"
      description="Deploy de aplicação Node na AWS"
    />
  </Layout>
);

export default IndexPage;
