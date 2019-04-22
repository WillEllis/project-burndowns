import gql from 'graphql-tag';
import graphqlClient from 'src/app/shared/graphql/graphql-client';

export class StoryApi {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation STORY_UPDATE(
          $id: String!
          $data: StoryInput!
        ) {
          storyUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.storyUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation STORY_DESTROY($ids: [String!]!) {
          storyDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.storyDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation STORY_CREATE($data: StoryInput!) {
          storyCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.storyCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation STORY_IMPORT(
          $data: StoryInput!
          $importHash: String!
        ) {
          storyImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.storyImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query STORY_FIND($id: String!) {
          storyFind(id: $id) {
            id
            backlogPriority
            name
            description
            effort
            phase {
              id
              name
            }
            dateAdded
            status
            dateFinished
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data['storyFind'];
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query STORY_LIST(
          $filter: StoryFilterInput
          $orderBy: StoryOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          storyList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              backlogPriority
              name
              description
              effort
              phase {
                id
                name
              }
              dateAdded
              status
              dateFinished
              updatedAt
              createdAt
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data['storyList'];
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query STORY_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          storyAutocomplete(query: $query, limit: $limit) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data['storyAutocomplete'];
  }
}
