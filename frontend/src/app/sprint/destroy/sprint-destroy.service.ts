import { Injectable } from '@angular/core';
import { DestroyService } from 'src/app/shared/destroy/destroy.service';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { SprintApi } from 'src/app/sprint/sprint.api';
import { SprintListService } from 'src/app/sprint/list/sprint-list.service';

@Injectable({
  providedIn: 'root',
})
export class SprintDestroyService extends DestroyService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
    sprintListService: SprintListService,
  ) {
    super(
      errorService,
      router,
      snackbar,
      SprintApi.destroyAll,
      'entities.sprint.destroy.success',
      'entities.sprint.destroyAll.success',
      ['/sprint'],
      sprintListService,
    );
  }
}
