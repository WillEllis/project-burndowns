import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
} from '@angular/material';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class Snackbar {
  constructor(public materialSnackbar: MatSnackBar) {}

  error(message) {
    message = message || i18n('errors.defaultErrorMessage');
    const config = new MatSnackBarConfig();
    config.duration = 5 * 1000;
    config.panelClass = ['bg-red', 'text-white'];
    this.materialSnackbar.open(message, null, config);
  }

  success(message) {
    const config = new MatSnackBarConfig();
    config.duration = 3 * 1000;
    config.panelClass = ['bg-green', 'text-white'];
    this.materialSnackbar.open(message, null, config);
  }
}
