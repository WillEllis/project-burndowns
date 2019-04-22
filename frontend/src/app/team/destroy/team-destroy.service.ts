import { Injectable } from '@angular/core';
import { DestroyService } from 'src/app/shared/destroy/destroy.service';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TeamApi } from 'src/app/team/team.api';
import { TeamListService } from 'src/app/team/list/team-list.service';

@Injectable({
  providedIn: 'root',
})
export class TeamDestroyService extends DestroyService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
    teamListService: TeamListService,
  ) {
    super(
      errorService,
      router,
      snackbar,
      TeamApi.destroyAll,
      'entities.team.destroy.success',
      'entities.team.destroyAll.success',
      ['/team'],
      teamListService,
    );
  }
}
