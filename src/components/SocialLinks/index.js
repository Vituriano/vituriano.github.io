/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import * as S from './styled';
import Icons from './icons';
import links from './content';

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link) => {
        const Icon = Icons[link.label];

        return (
          <S.SocialLinksItem key={link.label}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        );
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
);

export default SocialLinks;
