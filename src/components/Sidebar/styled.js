/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 25px);
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 16rem;

  ${media.lessThan('large')`
    height: auto;
    width: 100%;
    padding: 0;
    .hide{
      display: none;
    }
  `}
`;

export const Sidebaritem = styled.div`
  width: 100%;
  ${media.lessThan('large')`
    display: none;
  `}
`;
