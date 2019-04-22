import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PhaseApi } from 'src/app/phase/phase.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { FormService } from 'src/app/shared/form/form.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class PhaseFormService extends FormService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
  ) {
    super(
      errorService,
      router,
      snackbar,
      PhaseApi.find,
      PhaseApi.create,
      PhaseApi.update,
      ['/phase'],
      'entities.phase.create.success',
      'entities.phase.update.success',
    );
  }
}
