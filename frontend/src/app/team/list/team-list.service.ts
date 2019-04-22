import { Injectable } from '@angular/core';
import { TeamApi } from 'src/app/team/team.api';
import teamExporterFields from 'src/app/team/list/team-exporter-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class TeamListService extends PaginationService {
  constructor(errorService: ErrorService) {
    super(
      TeamApi.list,
      teamExporterFields,
      'team',
      false,
      errorService,
    );
  }
}
