/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';
import PostItem from '../PostItem';

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
    color={hit.color}
    background={hit.background}
    timeToRead={hit.timeToRead}
  />
);

Hit.defaultProps = {
  hit: null,
};

Hit.propTypes = {
  hit: propTypes.shape({
    fields: propTypes.shape({ slug: propTypes.string }),
    title: propTypes.string,
    date: propTypes.string,
    description: propTypes.string,
    category: propTypes.string,
    background: propTypes.string,
    timeToRead: propTypes.string,
    color: propTypes.string,
  }),
};


export default Hit;
