/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { HomeHeart as Home } from 'styled-icons/boxicons-solid/HomeHeart';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as UpArrow } from 'styled-icons/boxicons-regular/UpArrowAlt';
import { LightbulbFlash as Light } from 'styled-icons/remix-fill/LightbulbFlash';
import { Grid } from 'styled-icons/boxicons-solid/Grid';
import * as S from './styled';

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Back to Home">
        <S.MenuBarItem><Home /></S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Search">
        <S.MenuBarItem><Search /></S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Change Theme"><Light /></S.MenuBarItem>
      <S.MenuBarItem title="Change View"><Grid /></S.MenuBarItem>
      <S.MenuBarItem title="Page Up"><UpArrow /></S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
);

export default MenuBar;