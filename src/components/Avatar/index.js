/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `,
  );
  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;
