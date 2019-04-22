class Roles {
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
}

module.exports = Roles;
