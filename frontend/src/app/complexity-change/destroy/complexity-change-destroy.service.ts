import { Injectable } from '@angular/core';
import { DestroyService } from 'src/app/shared/destroy/destroy.service';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ComplexityChangeApi } from 'src/app/complexity-change/complexity-change.api';
import { ComplexityChangeListService } from 'src/app/complexity-change/list/complexity-change-list.service';

@Injectable({
  providedIn: 'root',
})
export class ComplexityChangeDestroyService extends DestroyService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
    complexityChangeListService: ComplexityChangeListService,
  ) {
    super(
      errorService,
      router,
      snackbar,
      ComplexityChangeApi.destroyAll,
      'entities.complexityChange.destroy.success',
      'entities.complexityChange.destroyAll.success',
      ['/complexity-change'],
      complexityChangeListService,
    );
  }
}
