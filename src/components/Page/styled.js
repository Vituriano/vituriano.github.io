/* eslint-disable */
import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  transition: background .5s;

  ${media.lessThan('large')`
    height: calc(100vh - 9rem);
  `}

  p{
    color: var(--postColor);
    transition: color .5s;
    font-size: 1.5em;
    text-align: center;
  }

  h1{
    text-align: center;
    color: #fff;
    transition: color .5s;
    font-size: 2em;
    background: red;
  }

  a{
    color: var(--highlight);
    transition: color .5s;
  }
`;  