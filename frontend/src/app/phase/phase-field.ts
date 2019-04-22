import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { PhaseApi } from 'src/app/phase/phase.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class PhaseField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/phase',
      Permissions.values.phaseRead,
      PhaseApi.listAutocomplete,
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
      '/phase',
      Permissions.values.phaseRead,
      PhaseApi.listAutocomplete,
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
