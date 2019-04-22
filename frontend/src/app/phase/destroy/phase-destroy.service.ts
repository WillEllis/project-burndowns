import { Injectable } from '@angular/core';
import { DestroyService } from 'src/app/shared/destroy/destroy.service';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PhaseApi } from 'src/app/phase/phase.api';
import { PhaseListService } from 'src/app/phase/list/phase-list.service';

@Injectable({
  providedIn: 'root',
})
export class PhaseDestroyService extends DestroyService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
    phaseListService: PhaseListService,
  ) {
    super(
      errorService,
      router,
      snackbar,
      PhaseApi.destroyAll,
      'entities.phase.destroy.success',
      'entities.phase.destroyAll.success',
      ['/phase'],
      phaseListService,
    );
  }
}
