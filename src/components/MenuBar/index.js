/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { HomeSmile as Home } from 'styled-icons/boxicons-solid/HomeSmile';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as UpArrow } from 'styled-icons/boxicons-regular/UpArrowAlt';
import { Sun as Light } from 'styled-icons/boxicons-solid/Sun';
import { ThList as List } from 'styled-icons/typicons/ThList';
import { Grid } from 'styled-icons/boxicons-solid/Grid';
import getThemeColor from '../../utils/getThemeColor';
import * as S from './styled';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" cover direction="right" bg={getThemeColor()} duration={1} title="Back to Home">
          <S.MenuBarItem><Home /></S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search" cover direction="right" bg={getThemeColor()} duration={1} title="Search">
          <S.MenuBarItem><Search /></S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change Theme"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Change View"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
          }}
          id={display}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem onClick={() => scrollTo('#top')} title="Page Up"><UpArrow /></S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
