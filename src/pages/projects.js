/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Page/styled';

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <S.Wrapper>
      <h1>Projects:</h1>
      <p>This page will receive the projects developed by me</p>
    </S.Wrapper>
  </Layout>
);

export default Projects;
