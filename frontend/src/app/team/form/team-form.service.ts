import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TeamApi } from 'src/app/team/team.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { FormService } from 'src/app/shared/form/form.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class TeamFormService extends FormService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
  ) {
    super(
      errorService,
      router,
      snackbar,
      TeamApi.find,
      TeamApi.create,
      TeamApi.update,
      ['/team'],
      'entities.team.create.success',
      'entities.team.update.success',
    );
  }
}
