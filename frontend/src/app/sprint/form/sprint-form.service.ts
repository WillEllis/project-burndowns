import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SprintApi } from 'src/app/sprint/sprint.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { FormService } from 'src/app/shared/form/form.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class SprintFormService extends FormService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
  ) {
    super(
      errorService,
      router,
      snackbar,
      SprintApi.find,
      SprintApi.create,
      SprintApi.update,
      ['/sprint'],
      'entities.sprint.create.success',
      'entities.sprint.update.success',
    );
  }
}
