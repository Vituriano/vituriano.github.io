/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const ProfileWraper = styled.section`
  color: var(--menu);
  display: flex;
  flex-direction: column;
  background: var(--mediumBackground);

  .menu{
    display: none;
  }

  ${media.lessThan('large')`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 1rem 0;
    
    .menu{
      display: inline;
      height: 2rem;
      width: 2rem;  
    }
  `}
`;

export const ProfileLink = styled(AniLink)`
  color: var(--menu);
  text-decoration: none;
  transition: color 0.5s;

  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.div`
  font-size: 1.7rem;
  margin: 0.5rem auto 2rem;

  ${media.lessThan('large')`
    font-size: 1.2em;
    margin: 0 0 0 10px;
  `}
`;

export const ProfilePositionTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: 1000;
`;


export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 0;

  ${media.lessThan('large')`
    font-size: 0.8em;
    margin-top: 0.2em;
  `}
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan('large')`
    display: none;
  `}
`;
