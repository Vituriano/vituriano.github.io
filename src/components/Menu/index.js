/* eslint-disable */
import React from 'react';
import * as S from './styled';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

const Menu = ({ description }) => (
  <S.ProfileWraper>
    <S.item>
      <S.ProfileDescription>{description}</S.ProfileDescription>
      <SocialLinks />
      <MenuLinks />
    </S.item>
  </S.ProfileWraper>
);

export default Menu;
