import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`;

export const PostWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PostTag = styled.div`
  align-items: center;
  background: ${(props) => (props.background)} no-repeat center;
  background-size: cover, contain;
  border-radius: 0;
  color: var(--postColor);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: calc(100% - 20px);
  min-width: 200px;
  margin: 10px 0 10px 10px;
  text-decoration: uppercase;

  body#grid & {
    min-height: 200px;
    min-width: 100%;
  }
`;

export const PostItemInfo = styled.div`
  display: flex;
  padding: 2rem 3rem;
  padding-left: 0;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
