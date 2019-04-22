import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComplexityChangeApi } from 'src/app/complexity-change/complexity-change.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { FormService } from 'src/app/shared/form/form.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ComplexityChangeFormService extends FormService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
  ) {
    super(
      errorService,
      router,
      snackbar,
      ComplexityChangeApi.find,
      ComplexityChangeApi.create,
      ComplexityChangeApi.update,
      ['/complexity-change'],
      'entities.complexityChange.create.success',
      'entities.complexityChange.update.success',
    );
  }
}
