import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ComplexityChangeApi } from 'src/app/complexity-change/complexity-change.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ComplexityChangeField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/complexity-change',
      Permissions.values.complexityChangeRead,
      ComplexityChangeApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.reason,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/complexity-change',
      Permissions.values.complexityChangeRead,
      ComplexityChangeApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.reason,
        };
      },
      options,
    );
  }
}
