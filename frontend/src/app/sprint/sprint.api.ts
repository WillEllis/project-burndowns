import gql from 'graphql-tag';
import graphqlClient from 'src/app/shared/graphql/graphql-client';

export class SprintApi {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPRINT_UPDATE(
          $id: String!
          $data: SprintInput!
        ) {
          sprintUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.sprintUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPRINT_DESTROY($ids: [String!]!) {
          sprintDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.sprintDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPRINT_CREATE($data: SprintInput!) {
          sprintCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.sprintCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPRINT_IMPORT(
          $data: SprintInput!
          $importHash: String!
        ) {
          sprintImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.sprintImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SPRINT_FIND($id: String!) {
          sprintFind(id: $id) {
            id
            number
            startDate
            fastTrack
            endDate
            estimatedVelocity
            actualVelocity
            status
            comments
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data['sprintFind'];
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SPRINT_LIST(
          $filter: SprintFilterInput
          $orderBy: SprintOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          sprintList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              number
              startDate
              fastTrack
              endDate
              estimatedVelocity
              actualVelocity
              status
              comments
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

    return response.data['sprintList'];
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SPRINT_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          sprintAutocomplete(query: $query, limit: $limit) {
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

    return response.data['sprintAutocomplete'];
  }
}
