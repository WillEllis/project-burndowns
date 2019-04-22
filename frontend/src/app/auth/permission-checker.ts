export class PermissionChecker {
  currentUser;
  roles;

  constructor(currentUser) {
    this.currentUser = currentUser;
    this.roles = currentUser ? currentUser.roles : [];
  }

  match(permission) {
    if (!permission) {
      return true;
    }

    return this.rolesMatchOneOf(permission.allowedRoles);
  }

  rolesMatchOneOf(arg) {
    if (!this.roles) {
      return false;
    }

    if (!arg) {
      return false;
    }

    if (Array.isArray(arg)) {
      if (!arg.length) {
        return false;
      }

      return arg.some((role) => this.roles.includes(role));
    }

    return this.roles.includes(arg);
  }

  get isEmptyPermissions() {
    if (!this.isAuthenticated) {
      return false;
    }

    return !this.roles || !this.roles.length;
  }

  get isAuthenticated() {
    return !!this.currentUser && !!this.currentUser.id;
  }

  get isEmailVerified() {
    if (!this.isAuthenticated) {
      return false;
    }

    return this.currentUser.emailVerified;
  }
}
