/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);
  display: flex;
  padding: 1.5rem 6.75rem 1.5rem 23rem;
  justify-content: space-between;

  ${media.lessThan('large')`
    padding: 3rem;
  `}

  a{
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover{
      color: var(--highlight);
    }
  }
`;
