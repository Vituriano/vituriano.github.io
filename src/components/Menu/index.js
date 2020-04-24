/* eslint-disable */
import React from 'react';
import * as S from './styled';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

const Menu = ({ description }) => (
  <S.ProfileWraper>
    <S.ProfileDescription>{description}</S.ProfileDescription>
    <S.item>
      <SocialLinks />
      <MenuLinks />
    </S.item>
  </S.ProfileWraper>
);

export default Menu;
