/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import GlobalStyles from '../../styles/global';
import * as S from './styled';

function Layout({ children }) {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
