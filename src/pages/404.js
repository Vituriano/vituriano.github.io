/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Page/styled';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <S.Wrapper>
      <h1>ERROR 404:</h1>
      <p>Page Not Found</p>
    </S.Wrapper>
  </Layout>
);

export default NotFoundPage;
