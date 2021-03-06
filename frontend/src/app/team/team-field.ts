import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { TeamApi } from 'src/app/team/team.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class TeamField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/team',
      Permissions.values.teamRead,
      TeamApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/team',
      Permissions.values.teamRead,
      TeamApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }
}
