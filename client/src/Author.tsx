import React from "react";
import { gql } from "apollo-boost";

export const AUTHOR_FRAGMENT = gql`
  fragment author on Book {
    author
  }
`;

type Props = {
  author: string | null | undefined;
};

const Author: React.FC<Props> = ({ author }) => {
  return <div>{author}</div>;
};

export default Author;
