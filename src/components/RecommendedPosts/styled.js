import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  padding: 0 3.75rem 0 20rem;

  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));

  ${media.lessThan('large')`
    padding: 0;
  `}
`;

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  &:hover {
    background: var(--borders);
  }
  &.previous {
    border-right: 1px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`;
