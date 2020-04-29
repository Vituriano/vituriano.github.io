import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 25px);
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;

  ${media.lessThan('large')`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
  `}
`;

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`;

export const MenuBarItem = styled.span`
  color: var(--menu);
  cursor: pointer;
  display: block;
  height: 2rem;
  padding: 1.1rem;
  position: relative;
  width: 2rem;

  &.light{
    color: #e7ff09 ;
    transition: 1s;

    &:hover{
      color: #d500d4;
      transition: 1s;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan('large')`
      display: none;
    `}
  }
  ${media.greaterThan('large')`
    &:hover {
      color: var(--highlight);
    }
  `}
`;
