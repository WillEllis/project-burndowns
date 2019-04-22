import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { StoryApi } from 'src/app/story/story.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class StoryField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/story',
      Permissions.values.storyRead,
      StoryApi.listAutocomplete,
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
      '/story',
      Permissions.values.storyRead,
      StoryApi.listAutocomplete,
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
