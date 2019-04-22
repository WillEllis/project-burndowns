import { Injectable } from '@angular/core';
import { TeamApi } from 'src/app/team/team.api';
import teamImporterFields from 'src/app/team/importer/team-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class TeamImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      TeamApi.import,
      teamImporterFields,
      i18n('entities.team.importer.fileName'),
      i18n('entities.team.importer.hint'),
    );
  }
}
