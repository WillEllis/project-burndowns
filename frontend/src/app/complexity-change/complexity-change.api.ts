import gql from 'graphql-tag';
import graphqlClient from 'src/app/shared/graphql/graphql-client';

export class ComplexityChangeApi {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation COMPLEXITYCHANGE_UPDATE(
          $id: String!
          $data: ComplexityChangeInput!
        ) {
          complexityChangeUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.complexityChangeUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation COMPLEXITYCHANGE_DESTROY($ids: [String!]!) {
          complexityChangeDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.complexityChangeDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation COMPLEXITYCHANGE_CREATE($data: ComplexityChangeInput!) {
          complexityChangeCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.complexityChangeCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation COMPLEXITYCHANGE_IMPORT(
          $data: ComplexityChangeInput!
          $importHash: String!
        ) {
          complexityChangeImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.complexityChangeImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query COMPLEXITYCHANGE_FIND($id: String!) {
          complexityChangeFind(id: $id) {
            id
            project {
              id
              name
            }
            date
            effortChange
            reason
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data['complexityChangeFind'];
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query COMPLEXITYCHANGE_LIST(
          $filter: ComplexityChangeFilterInput
          $orderBy: ComplexityChangeOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          complexityChangeList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              project {
                id
                name
              }
              date
              effortChange
              reason
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

    return response.data['complexityChangeList'];
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query COMPLEXITYCHANGE_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          complexityChangeAutocomplete(query: $query, limit: $limit) {
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

    return response.data['complexityChangeAutocomplete'];
  }
}
