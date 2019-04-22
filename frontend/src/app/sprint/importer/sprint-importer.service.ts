import { Injectable } from '@angular/core';
import { SprintApi } from 'src/app/sprint/sprint.api';
import sprintImporterFields from 'src/app/sprint/importer/sprint-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class SprintImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      SprintApi.import,
      sprintImporterFields,
      i18n('entities.sprint.importer.fileName'),
      i18n('entities.sprint.importer.hint'),
    );
  }
}
