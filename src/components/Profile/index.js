/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import getThemeColor from '../../utils/getThemeColor';
import Avatar from '../Avatar';
import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWraper>
      <S.ProfileLink cover direction="left" bg={getThemeColor()} duration={1} to="/">
        <Avatar />
        <S.ProfileAuthor>
        <S.ProfilePositionTitle>{title}</S.ProfilePositionTitle>
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWraper>
  );
};

export default Profile;
