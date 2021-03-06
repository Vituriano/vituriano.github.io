/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const ProfileWraper = styled.section`
  display: none;
  z-index: -1;

  ${media.lessThan('large')`
    display: block;
    color: var(--menu);
    position: relative;
    animation: ${(props) => (props.status)} 1s both;
    transition: opacity 1s ease;
    top: -27em; height: 0;

    @keyframes open {
      0% {top: -27em; height: 0;}
      100% {top: 0; height: 18em;}
    }
    @keyframes close {
      0% {top: 0; height: 18em;}
      100% {top: -27em; height: 0;}
    }
  `}
`;

export const ProfileDescription = styled.p`
  ${media.lessThan('large')`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;
    padding: 0 10%;
  `}
`;

export const item = styled.div`
  ${media.lessThan('large')`
    display: block;
    padding-bottom: 1em;
    background: var(--mediumBackground); 
  `}
`;
