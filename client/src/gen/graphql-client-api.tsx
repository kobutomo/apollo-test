import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

/** This "Book" type defines the queryable fields for every book in our data source. */
export type Book = {
   __typename?: 'Book',
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
};

/** 
 * The "Query" type is special: it lists all of the available queries that
 * clients can execute, along with the return type for each. In this
 * case, the "books" query returns an array of zero or more Books (defined above).
 */
export type Query = {
   __typename?: 'Query',
  books?: Maybe<Array<Maybe<Book>>>,
  book?: Maybe<Book>,
};


/** 
 * The "Query" type is special: it lists all of the available queries that
 * clients can execute, along with the return type for each. In this
 * case, the "books" query returns an array of zero or more Books (defined above).
 */
export type QueryBookArgs = {
  title: Scalars['String']
};

export type BookQueryVariables = {
  title: Scalars['String']
};


export type BookQuery = (
  { __typename?: 'Query' }
  & { book: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )> }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { books: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'title' | 'author'>
  )>>> }
);


export const BookDocument = gql`
    query book($title: String!) {
  book(title: $title) {
    title
    author
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useBookQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BookQuery, BookQueryVariables>) {
        return ApolloReactHooks.useQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
      }
export function useBookLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = ApolloReactCommon.QueryResult<BookQuery, BookQueryVariables>;
export const UsersDocument = gql`
    query users {
  books {
    title
    author
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;