import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectApi } from 'src/app/project/project.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { FormService } from 'src/app/shared/form/form.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectFormService extends FormService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
  ) {
    super(
      errorService,
      router,
      snackbar,
      ProjectApi.find,
      ProjectApi.create,
      ProjectApi.update,
      ['/project'],
      'entities.project.create.success',
      'entities.project.update.success',
    );
  }
}
