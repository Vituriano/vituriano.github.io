/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;
  padding: 0 3.75rem 0 20rem;  
  ${media.lessThan('large')`
    flex-direction: column;
    padding: 0;
  `}
`;

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  width: 100%;  
  transition: background .5s;

  body#grid & {
    grid-template-areas: 'posts' 'pagination';
  }

  ${media.lessThan('large')`
    padding: 5rem 0 4rem 0;
  `}
`;
