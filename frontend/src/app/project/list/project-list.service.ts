import { Injectable } from '@angular/core';
import { ProjectApi } from 'src/app/project/project.api';
import projectExporterFields from 'src/app/project/list/project-exporter-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService extends PaginationService {
  constructor(errorService: ErrorService) {
    super(
      ProjectApi.list,
      projectExporterFields,
      'project',
      false,
      errorService,
    );
  }
}
