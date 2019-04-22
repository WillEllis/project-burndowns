const Roles = require('./roles');
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,


        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      teamImport: {
        id: 'teamImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.teamEditor,
        ],
      },
      teamCreate: {
        id: 'teamCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.teamEditor,
        ],
        allowedStorageFolders: ['team'],
      },
      teamEdit: {
        id: 'teamEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.teamEditor,
        ],
        allowedStorageFolders: ['team'],
      },
      teamDestroy: {
        id: 'teamDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.teamEditor,
        ],
        allowedStorageFolders: ['team'],
      },
      teamRead: {
        id: 'teamRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.teamEditor,
          roles.teamViewer,
        ],
      },
      teamAutocomplete: {
        id: 'teamAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.teamEditor,
          roles.teamViewer,

        ],
      },

      projectImport: {
        id: 'projectImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
      },
      projectCreate: {
        id: 'projectCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      projectEdit: {
        id: 'projectEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      projectDestroy: {
        id: 'projectDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.projectEditor,
        ],
        allowedStorageFolders: ['project'],
      },
      projectRead: {
        id: 'projectRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.projectEditor,
          roles.projectViewer,
        ],
      },
      projectAutocomplete: {
        id: 'projectAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.projectEditor,
          roles.projectViewer,
          roles.complexityChangeEditor,
          roles.complexityChangeViewer,
        ],
      },

      sprintImport: {
        id: 'sprintImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.sprintEditor,
        ],
      },
      sprintCreate: {
        id: 'sprintCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.sprintEditor,
        ],
        allowedStorageFolders: ['sprint'],
      },
      sprintEdit: {
        id: 'sprintEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.sprintEditor,
        ],
        allowedStorageFolders: ['sprint'],
      },
      sprintDestroy: {
        id: 'sprintDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.sprintEditor,
        ],
        allowedStorageFolders: ['sprint'],
      },
      sprintRead: {
        id: 'sprintRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.sprintEditor,
          roles.sprintViewer,
        ],
      },
      sprintAutocomplete: {
        id: 'sprintAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.sprintEditor,
          roles.sprintViewer,

        ],
      },

      complexityChangeImport: {
        id: 'complexityChangeImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.complexityChangeEditor,
        ],
      },
      complexityChangeCreate: {
        id: 'complexityChangeCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.complexityChangeEditor,
        ],
        allowedStorageFolders: ['complexityChange'],
      },
      complexityChangeEdit: {
        id: 'complexityChangeEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.complexityChangeEditor,
        ],
        allowedStorageFolders: ['complexityChange'],
      },
      complexityChangeDestroy: {
        id: 'complexityChangeDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.complexityChangeEditor,
        ],
        allowedStorageFolders: ['complexityChange'],
      },
      complexityChangeRead: {
        id: 'complexityChangeRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.complexityChangeEditor,
          roles.complexityChangeViewer,
        ],
      },
      complexityChangeAutocomplete: {
        id: 'complexityChangeAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.complexityChangeEditor,
          roles.complexityChangeViewer,

        ],
      },

      phaseImport: {
        id: 'phaseImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.phaseEditor,
        ],
      },
      phaseCreate: {
        id: 'phaseCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.phaseEditor,
        ],
        allowedStorageFolders: ['phase'],
      },
      phaseEdit: {
        id: 'phaseEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.phaseEditor,
        ],
        allowedStorageFolders: ['phase'],
      },
      phaseDestroy: {
        id: 'phaseDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.phaseEditor,
        ],
        allowedStorageFolders: ['phase'],
      },
      phaseRead: {
        id: 'phaseRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.phaseEditor,
          roles.phaseViewer,
        ],
      },
      phaseAutocomplete: {
        id: 'phaseAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.phaseEditor,
          roles.phaseViewer,
          roles.storyEditor,
          roles.storyViewer,
        ],
      },

      storyImport: {
        id: 'storyImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.storyEditor,
        ],
      },
      storyCreate: {
        id: 'storyCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.storyEditor,
        ],
        allowedStorageFolders: ['story'],
      },
      storyEdit: {
        id: 'storyEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.storyEditor,
        ],
        allowedStorageFolders: ['story'],
      },
      storyDestroy: {
        id: 'storyDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.storyEditor,
        ],
        allowedStorageFolders: ['story'],
      },
      storyRead: {
        id: 'storyRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.storyEditor,
          roles.storyViewer,
        ],
      },
      storyAutocomplete: {
        id: 'storyAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.storyEditor,
          roles.storyViewer,
          roles.projectEditor,
          roles.projectViewer,
          roles.phaseEditor,
          roles.phaseViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
