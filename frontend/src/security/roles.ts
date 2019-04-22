import { i18n } from 'src/i18n';
import { values as _values } from 'lodash';

export class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      teamEditor: 'teamEditor',
      teamViewer: 'teamViewer',
      projectEditor: 'projectEditor',
      projectViewer: 'projectViewer',
      sprintEditor: 'sprintEditor',
      sprintViewer: 'sprintViewer',
      complexityChangeEditor: 'complexityChangeEditor',
      complexityChangeViewer: 'complexityChangeViewer',
      phaseEditor: 'phaseEditor',
      phaseViewer: 'phaseViewer',
      storyEditor: 'storyEditor',
      storyViewer: 'storyViewer',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }
}
