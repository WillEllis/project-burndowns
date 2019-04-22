import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { SprintApi } from 'src/app/sprint/sprint.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class SprintField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/sprint',
      Permissions.values.sprintRead,
      SprintApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/sprint',
      Permissions.values.sprintRead,
      SprintApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
