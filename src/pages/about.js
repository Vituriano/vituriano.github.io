/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import * as S from '../components/Page/styled';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.Wrapper>
      <h1>About me:</h1>
      <p>This page will be about me and my skills</p>
    </S.Wrapper>
  </Layout>
);

export default AboutPage;
