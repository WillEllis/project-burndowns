import gql from 'graphql-tag';
import graphqlClient from 'src/app/shared/graphql/graphql-client';

export default class AuditLogApi {
  static async fetch(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query AUDIT_LOG_LIST(
          $filter: AuditLogListFilterInput
          $orderBy: AuditLogListOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          auditLogList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              entityName
              entityId
              action
              timestamp
              createdByEmail
              values
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

    return response.data['auditLogList'];
  }
}
