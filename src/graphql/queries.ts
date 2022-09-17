/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessages = /* GraphQL */ `
  query GetMessages($id: ID!) {
    getMessages(id: $id) {
      id
      senderName
      body
      creationDate
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderName
        body
        creationDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
