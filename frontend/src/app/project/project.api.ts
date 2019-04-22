import gql from 'graphql-tag';
import graphqlClient from 'src/app/shared/graphql/graphql-client';

export class ProjectApi {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PROJECT_UPDATE(
          $id: String!
          $data: ProjectInput!
        ) {
          projectUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.projectUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PROJECT_DESTROY($ids: [String!]!) {
          projectDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.projectDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PROJECT_CREATE($data: ProjectInput!) {
          projectCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.projectCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PROJECT_IMPORT(
          $data: ProjectInput!
          $importHash: String!
        ) {
          projectImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.projectImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PROJECT_FIND($id: String!) {
          projectFind(id: $id) {
            id
            name
            stories {
              id
              name
            }
            initialEstimate
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data['projectFind'];
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PROJECT_LIST(
          $filter: ProjectFilterInput
          $orderBy: ProjectOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          projectList(
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
              initialEstimate
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

    return response.data['projectList'];
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PROJECT_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          projectAutocomplete(query: $query, limit: $limit) {
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

    return response.data['projectAutocomplete'];
  }
}
