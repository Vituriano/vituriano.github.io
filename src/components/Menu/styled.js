/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const ProfileWraper = styled.section`
  color: var(--texts);
  padding: 0 1rem;
  padding-top: 2rem;
  position: relative;
  animation: open 1s both;
  transition: opacity 1s ease;
  @keyframes open {
    0% {top: -17em; height: 0;}
    100% {top: 0; height: 17em}
  }
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  padding: 0 10%;
`;

export const item = styled.div`
  ${media.lessThan('large')`
    display: block;
    background: var(--mediumBackground); 
  `}
`;
