/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import getThemeColor from '../../utils/getThemeColor';
import * as S from './styled';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <AniLink cover direction="left" bg={getThemeColor()} duration={1} to={prevPage}>⇜ prev</AniLink>}
    <p>
      {currentPage}
      &nbsp;of&nbsp;
      {numPages}
    </p>
    {!isLast && <AniLink cover direction="right" bg={getThemeColor()} duration={1} to={nextPage}>next ⇝</AniLink>}
  </S.PaginationWrapper>
);

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};


export default Pagination;
