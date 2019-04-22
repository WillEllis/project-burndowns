import gql from 'graphql-tag';
import graphqlClient from 'src/app/shared/graphql/graphql-client';

export class TeamApi {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation TEAM_UPDATE(
          $id: String!
          $data: TeamInput!
        ) {
          teamUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.teamUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation TEAM_DESTROY($ids: [String!]!) {
          teamDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.teamDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation TEAM_CREATE($data: TeamInput!) {
          teamCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.teamCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation TEAM_IMPORT(
          $data: TeamInput!
          $importHash: String!
        ) {
          teamImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.teamImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query TEAM_FIND($id: String!) {
          teamFind(id: $id) {
            id
            image {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
            }
            name
            estVelocity
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data['teamFind'];
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query TEAM_LIST(
          $filter: TeamFilterInput
          $orderBy: TeamOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          teamList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              image {
                id
                name
                sizeInBytes
                publicUrl
                privateUrl
              }
              name
              estVelocity
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

    return response.data['teamList'];
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query TEAM_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          teamAutocomplete(query: $query, limit: $limit) {
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

    return response.data['teamAutocomplete'];
  }
}
