import React from "react";
import { gql } from "apollo-boost";
import { BookQuery, BookQueryVariables } from "./gen/graphql-client-api";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import Author, { AUTHOR_FRAGMENT } from "./Author";

const BOOKS = gql`
  query book($title: String!) {
    book(title: $title) {
      title
      ...author
    }
  }

  ${AUTHOR_FRAGMENT}
`;

type Props = {
  className?: string;
};

const Books: React.FC<Props> = ({ className }) => {
  const usersQuery = useQuery<BookQuery, BookQueryVariables>(BOOKS, {
    variables: { title: "title1" }
  });
  return (
    <>
      <div className={className}>
        <div>{usersQuery.data?.book?.title}</div>
        <Author author={usersQuery.data?.book?.author} />
      </div>
    </>
  );
};

export default styled(Books)`
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
`;
