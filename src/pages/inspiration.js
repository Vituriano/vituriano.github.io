/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Page/styled';

const Inspiration = () => (
  <Layout>
    <SEO title="Inspiration" />
    <S.Wrapper>
      <h1>Inspiration:</h1>
      <p>
        This design was inspirated by&nbsp;
        <a
          href="https://willianjusten.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          @willianjusten
        </a>
        .
      </p>
    </S.Wrapper>
  </Layout>
);

export default Inspiration;
