/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <S.Sidebaritem>
      <SocialLinks />
      <MenuLinks />
    </S.Sidebaritem>
  </S.SidebarWrapper>
);

export default Sidebar;
