const AbstractEntityRepository = require('./abstractEntityRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const ComplexityChange = require('../models/complexityChange');

class ComplexityChangeRepository extends AbstractEntityRepository {
  constructor() {
    super(new ComplexityChange());
  }

  async refreshTwoWayRelations(record, options) {

  }

  async destroyFromRelations(id, options) {

  }

  async findById(id) {
    const record = await this.findDocument('complexityChange', id);
    return this.populate(record);
  }

  async findAndCountAll(
    {
      requestedAttributes,
      filter,
      limit,
      offset,
      orderBy,
    } = {
      requestedAttributes: null,
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
  ) {
    const query = FirebaseQuery.forList({
      limit,
      offset,
      orderBy: orderBy || 'createdAt_DESC',
    });

    if (filter) {
      if (filter.id) {
        query.appendId('id', filter.id);
      }

      if (filter.project) {
        query.appendId('project', filter.project);
      }

      if (filter.dateRange) {
        query.appendRange(
          'date',
          filter.dateRange,
        );
      }

      if (filter.createdAtRange) {
        query.appendRange(
          'createdAt',
          filter.createdAtRange,
        );
      }
    }

    const collection = await admin
      .firestore()
      .collection(`complexityChange`)
      .get();

    const all = this.mapCollection(collection);
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'reason_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('reason', search);
    }

    const collection = await admin
      .firestore()
      .collection(`complexityChange`)
      .get();

    const all = this.mapCollection(collection);
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['reason'],
    }));
  }

  async populateAll(records) {
    return await Promise.all(
      records.map((record) => this.populate(record)),
    );
  }

  async populate(record) {
    if (!record) {
      return record;
    }

    record.project = await this.findRelation(
      'project',
      record.project,
    );

    return record;
  }
}

module.exports = ComplexityChangeRepository;
