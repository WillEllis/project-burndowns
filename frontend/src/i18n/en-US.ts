const enUS = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End'
  },

  app: {
    title: 'Project Burndowns',
  },

  entities: {
    team: {
      name: 'team',
      label: '',
      menu: '',
      exporterFileName: 'team_export',
      list: {
        menu: '',
        title: '',
      },
      create: {
        success: 'team saved successfully',
      },
      update: {
        success: 'team saved successfully',
      },
      destroy: {
        success: 'team deleted successfully',
      },
      destroyAll: {
        success: 'team(s) deleted successfully',
      },
      edit: {
        title: 'Edit team',
      },
      fields: {
        id: '',
        'image': '',
        'name': '',
        'estVelocityRange': '',
        'estVelocity': '',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New team',
      },
      view: {
        title: 'View team',
      },
      importer: {
        title: 'Import teams',
        fileName: 'team_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    project: {
      name: 'project',
      label: '',
      menu: '',
      exporterFileName: 'project_export',
      list: {
        menu: '',
        title: '',
      },
      create: {
        success: 'project saved successfully',
      },
      update: {
        success: 'project saved successfully',
      },
      destroy: {
        success: 'project deleted successfully',
      },
      destroyAll: {
        success: 'project(s) deleted successfully',
      },
      edit: {
        title: 'Edit project',
      },
      fields: {
        id: '',
        'name': '',
        'stories': '',
        'initialEstimateRange': '',
        'initialEstimate': '',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New project',
      },
      view: {
        title: 'View project',
      },
      importer: {
        title: 'Import projects',
        fileName: 'project_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    sprint: {
      name: 'sprint',
      label: '',
      menu: '',
      exporterFileName: 'sprint_export',
      list: {
        menu: '',
        title: '',
      },
      create: {
        success: 'sprint saved successfully',
      },
      update: {
        success: 'sprint saved successfully',
      },
      destroy: {
        success: 'sprint deleted successfully',
      },
      destroyAll: {
        success: 'sprint(s) deleted successfully',
      },
      edit: {
        title: 'Edit sprint',
      },
      fields: {
        id: '',
        'numberRange': '',
        'number': '',
        'startDateRange': '',
        'startDate': '',
        'fastTrack': '',
        'endDateRange': '',
        'endDate': '',
        'estimatedVelocityRange': '',
        'estimatedVelocity': '',
        'actualVelocityRange': '',
        'actualVelocity': '',
        'status': '',
        'comments': '',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'hit': '',
          'missed': '',
        },
      },
      new: {
        title: 'New sprint',
      },
      view: {
        title: 'View sprint',
      },
      importer: {
        title: 'Import sprints',
        fileName: 'sprint_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    complexityChange: {
      name: 'complexityChange',
      label: '',
      menu: '',
      exporterFileName: 'complexityChange_export',
      list: {
        menu: '',
        title: '',
      },
      create: {
        success: 'complexityChange saved successfully',
      },
      update: {
        success: 'complexityChange saved successfully',
      },
      destroy: {
        success: 'complexityChange deleted successfully',
      },
      destroyAll: {
        success: 'complexityChange(s) deleted successfully',
      },
      edit: {
        title: 'Edit complexityChange',
      },
      fields: {
        id: '',
        'project': '',
        'dateRange': '',
        'date': '',
        'effortChangeRange': '',
        'effortChange': '',
        'reason': '',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New complexityChange',
      },
      view: {
        title: 'View complexityChange',
      },
      importer: {
        title: 'Import complexityChanges',
        fileName: 'complexityChange_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    phase: {
      name: 'phase',
      label: '',
      menu: '',
      exporterFileName: 'phase_export',
      list: {
        menu: '',
        title: '',
      },
      create: {
        success: 'phase saved successfully',
      },
      update: {
        success: 'phase saved successfully',
      },
      destroy: {
        success: 'phase deleted successfully',
      },
      destroyAll: {
        success: 'phase(s) deleted successfully',
      },
      edit: {
        title: 'Edit phase',
      },
      fields: {
        id: '',
        'orderRange': '',
        'order': '',
        'name': '',
        'stories': '',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New phase',
      },
      view: {
        title: 'View phase',
      },
      importer: {
        title: 'Import phases',
        fileName: 'phase_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    story: {
      name: 'story',
      label: '',
      menu: '',
      exporterFileName: 'story_export',
      list: {
        menu: '',
        title: '',
      },
      create: {
        success: 'story saved successfully',
      },
      update: {
        success: 'story saved successfully',
      },
      destroy: {
        success: 'story deleted successfully',
      },
      destroyAll: {
        success: 'story(s) deleted successfully',
      },
      edit: {
        title: 'Edit story',
      },
      fields: {
        id: '',
        'backlogPriorityRange': '',
        'backlogPriority': '',
        'name': '',
        'description': '',
        'effortRange': '',
        'effort': '',
        'phase': '',
        'dateAddedRange': '',
        'dateAdded': '',
        'status': '',
        'dateFinishedRange': '',
        'dateFinished': '',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'pending': '',
          'in_progress': '',
          'complete': '',
        },
      },
      new: {
        title: 'New story',
      },
      view: {
        title: 'View story',
      },
      importer: {
        title: 'Import storys',
        fileName: 'story_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to confinue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordReset: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetSuccess: `Password reset email sent successfully`,
  },

  roles: {
    owner: {
      label: 'Owner',
      description: 'Full access to all resources',
    },
    editor: {
      label: 'Editor',
      description: 'Edit access to all resources',
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Access to view audit logs',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: `Full access to manage users roles`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Edit access to all entities',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'View access to all entities',
    },
    teamEditor: {
      label: 'team Editor',
      description: 'Edit access to team',
    },
    teamViewer: {
      label: 'team Viewer',
      description: 'View access to team',
    },
    projectEditor: {
      label: 'project Editor',
      description: 'Edit access to project',
    },
    projectViewer: {
      label: 'project Viewer',
      description: 'View access to project',
    },
    sprintEditor: {
      label: 'sprint Editor',
      description: 'Edit access to sprint',
    },
    sprintViewer: {
      label: 'sprint Viewer',
      description: 'View access to sprint',
    },
    complexityChangeEditor: {
      label: 'complexityChange Editor',
      description: 'Edit access to complexityChange',
    },
    complexityChangeViewer: {
      label: 'complexityChange Viewer',
      description: 'View access to complexityChange',
    },
    phaseEditor: {
      label: 'phase Editor',
      description: 'Edit access to phase',
    },
    phaseViewer: {
      label: 'phase Viewer',
      description: 'View access to phase',
    },
    storyEditor: {
      label: 'story Editor',
      description: 'Edit access to story',
    },
    storyViewer: {
      label: 'story Viewer',
      description: 'View access to story',
    },
  },

  iam: {
    title: 'Identity and Access Management',
    menu: 'IAM',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      primaryColor: 'Primary Color',
      secondaryColor: 'Secondary Color',
    },
    colors: {
      default: 'Default',
      amber: 'Amber',
      blue: 'Blue',
      cyan: 'Cyan',
      deep_orange: 'Deep Orange',
      deep_purple: 'Deep Purple',
      green: 'Green',
      indigo: 'Indigo',
      light_blue: 'Light Blue',
      light_green: 'Light Green',
      lime: 'Lime',
      orange: 'Orange',
      pink: 'Pink',
      purple: 'Purple',
      red: 'Red',
      teal: 'Teal',
      yellow: 'Yellow',
      grey: 'Grey',
      blue_grey: 'Blue Grey',
      brown: 'Brown',
    },
  },
  home: {
    menu: 'Home',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/app/home/home.component.html.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      sales: 'Sales',
      visitor: 'Visitors',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      type: '${path} must be an number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `Status: {0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Items per page:',
    nextPageLabel: 'Next page',
    previousPageLabel: 'Previous page',
    firstPageLabel: 'First page',
    lastPageLabel: 'Last page',
    getRangeLabel: {
      zero: '0 of {0}',
      interval: '{0} - {1} of {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Add a second',
    downSecondLabel: 'Minus a second',
    upMinuteLabel: 'Add a minute',
    downMinuteLabel: 'Minus a minute',
    upHourLabel: 'Add a hour',
    downHourLabel: 'Minus a hour',
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    prevYearLabel: 'Previous year',
    nextYearLabel: 'Next year',
    prevMultiYearLabel: 'Previous 21 years',
    nextMultiYearLabel: 'Next 21 years',
    switchToMonthViewLabel: 'Change to month view',
    switchToMultiYearViewLabel: 'Choose month and year',
    cancelBtnLabel: 'Cancel',
    setBtnLabel: 'Set',
    rangeFromLabel: 'From',
    rangeToLabel: 'To',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'No data',
    loading: 'Loading...',
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Your account is disabled',
    'auth/user-not-found': `Sorry, we don't recognize your credentials`,
    'auth/wrong-password': `Sorry, we don't recognize your credentials`,
    'auth/weak-password': 'This password is too weak',
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Please provide a valid email',
    'auth/account-exists-with-different-credential':
      'Email is already in use for a different authentication method.',
    'auth/credential-already-in-use':
      'Credentials are already in use',
  },
};

export default enUS;
