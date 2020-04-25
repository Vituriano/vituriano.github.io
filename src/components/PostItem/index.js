/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import getThemeColor from '../../utils/getThemeColor';
import * as S from './styled';

const PostItem = ({
  slug,
  background,
  color,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink cover direction="right" bg={getThemeColor()} duration={1} to={slug}>
    <S.PostWrapper>
      <S.PostTag background={background} color={color}>
        {background === null ? category : ''}
        <p className="category">{background !== null ? category : ''}</p>
      </S.PostTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date}
          &nbsp;
          •
          &nbsp;
          {timeToRead}
          &nbsp;min read
        </S.PostItemDate>
        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostWrapper>
  </S.PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default PostItem;
