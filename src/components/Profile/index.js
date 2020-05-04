/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Hamburger } from 'styled-icons/fa-solid/Hamburger';
import { Close } from 'styled-icons/material/Close';

import getThemeColor from '../../utils/getThemeColor';
import Avatar from '../Avatar';
import Menu from '../Menu';
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

  const [media, setMedia] = useState(null);
  const isOpenMode = media === 'open';

  return (
    <>
      <S.ProfileWraper>
        <S.ProfileLink cover direction="left" bg={getThemeColor()} duration={1} to="/">
          <Avatar />
          <S.ProfileAuthor>
            <S.ProfilePositionTitle>{title}</S.ProfilePositionTitle>
            <S.ProfilePosition>{position}</S.ProfilePosition>
          </S.ProfileAuthor>
        </S.ProfileLink>
        {isOpenMode ? (
          <Close
            className="menu"
            title="Close Menu"
            onClick={() => {
              setMedia('close');
            }}
          />
        ) : (
          <Hamburger
            className="menu"
            title="Open Menu"
            onClick={() => {
              setMedia('open');
            }}
          />
        )}
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileWraper>
      <Menu description={description} status={media} />
    </>
  );
};

export default Profile;
