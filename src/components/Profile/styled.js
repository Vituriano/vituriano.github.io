/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProfileWraper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.div`
  font-size: 1.7rem;
  margin: 0.5rem auto 2rem;
`;

export const ProfilePositionTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: 1000;
`;


export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 0;
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4
`;
