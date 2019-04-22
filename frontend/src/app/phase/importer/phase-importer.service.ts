import { Injectable } from '@angular/core';
import { PhaseApi } from 'src/app/phase/phase.api';
import phaseImporterFields from 'src/app/phase/importer/phase-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class PhaseImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      PhaseApi.import,
      phaseImporterFields,
      i18n('entities.phase.importer.fileName'),
      i18n('entities.phase.importer.hint'),
    );
  }
}
