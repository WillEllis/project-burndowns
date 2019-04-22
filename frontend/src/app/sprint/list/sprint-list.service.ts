import { Injectable } from '@angular/core';
import { SprintApi } from 'src/app/sprint/sprint.api';
import sprintExporterFields from 'src/app/sprint/list/sprint-exporter-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class SprintListService extends PaginationService {
  constructor(errorService: ErrorService) {
    super(
      SprintApi.list,
      sprintExporterFields,
      'sprint',
      false,
      errorService,
    );
  }
}
