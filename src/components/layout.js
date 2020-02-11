/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <main>{children}</main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
