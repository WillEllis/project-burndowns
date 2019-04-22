import { Injectable } from '@angular/core';
import { i18n, i18nExists } from 'src/i18n';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

const DEFAULT_ERROR_MESSAGE = i18n(
  'errors.defaultErrorMessage',
);

function isFirebaseAuthError(error) {
  return error.code && error.code.startsWith('auth');
}

function selectErrorMessage(error) {
  if (
    error &&
    error.graphQLErrors &&
    error.graphQLErrors.length &&
    error.graphQLErrors[0].message
  ) {
    return error.graphQLErrors[0].message;
  }

  if (
    error &&
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors &&
    error.networkError.result.errors.length &&
    error.networkError.result.errors[0].message
  ) {
    return error.networkError.result.errors[0].message;
  }

  if (isFirebaseAuthError(error)) {
    if (i18nExists(`firebaseErrors.${error.code}`)) {
      return i18n(`firebaseErrors.${error.code}`);
    }

    return DEFAULT_ERROR_MESSAGE;
  }

  return error.message || DEFAULT_ERROR_MESSAGE;
}

function selectErrorCode(error) {
  if (error && error.networkError) {
    if (
      error.networkError.result &&
      error.networkError.result.errors &&
      error.networkError.result.errors.length &&
      error.networkError.result.errors[0].code
    ) {
      return Number(
        error.networkError.result.errors[0].code,
      );
    }

    if (error.networkError.statusCode) {
      return Number(error.networkError.statusCode);
    }
  }

  if (
    error &&
    error.graphQLErrors &&
    error.graphQLErrors.length
  ) {
    return 400;
  }

  if (isFirebaseAuthError(error)) {
    return 400;
  }

  return 500;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(
    private router: Router,
    private snackbar: Snackbar,
  ) {}

  handle(error) {
    if (selectErrorCode(error) === 403) {
      this.router.navigate(['/403']);
      return;
    }

    if (selectErrorCode(error) === 400) {
      this.snackbar.error(selectErrorMessage(error));
      return;
    }

    this.router.navigate(['/500']);
  }

  errorCode(error) {
    return selectErrorCode(error);
  }

  selectMessage(error) {
    return selectErrorMessage(error);
  }

  showMessage(error) {
    this.snackbar.error(selectErrorMessage(error));
  }
}
