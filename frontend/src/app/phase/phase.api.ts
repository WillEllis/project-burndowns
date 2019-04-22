import gql from 'graphql-tag';
import graphqlClient from 'src/app/shared/graphql/graphql-client';

export class PhaseApi {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PHASE_UPDATE(
          $id: String!
          $data: PhaseInput!
        ) {
          phaseUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.phaseUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PHASE_DESTROY($ids: [String!]!) {
          phaseDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.phaseDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PHASE_CREATE($data: PhaseInput!) {
          phaseCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.phaseCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PHASE_IMPORT(
          $data: PhaseInput!
          $importHash: String!
        ) {
          phaseImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.phaseImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PHASE_FIND($id: String!) {
          phaseFind(id: $id) {
            id
            order
            name
            stories {
              id
              name
            }
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data['phaseFind'];
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PHASE_LIST(
          $filter: PhaseFilterInput
          $orderBy: PhaseOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          phaseList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              name
              stories {
                id
                name
              }
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

    return response.data['phaseList'];
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PHASE_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          phaseAutocomplete(query: $query, limit: $limit) {
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

    return response.data['phaseAutocomplete'];
  }
}
