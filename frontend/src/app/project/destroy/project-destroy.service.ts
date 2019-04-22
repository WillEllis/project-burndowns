import { Injectable } from '@angular/core';
import { DestroyService } from 'src/app/shared/destroy/destroy.service';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProjectApi } from 'src/app/project/project.api';
import { ProjectListService } from 'src/app/project/list/project-list.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectDestroyService extends DestroyService {
  constructor(
    errorService: ErrorService,
    snackbar: Snackbar,
    router: Router,
    projectListService: ProjectListService,
  ) {
    super(
      errorService,
      router,
      snackbar,
      ProjectApi.destroyAll,
      'entities.project.destroy.success',
      'entities.project.destroyAll.success',
      ['/project'],
      projectListService,
    );
  }
}
