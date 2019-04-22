import { Injectable } from '@angular/core';
import { ComplexityChangeApi } from 'src/app/complexity-change/complexity-change.api';
import complexityChangeImporterFields from 'src/app/complexity-change/importer/complexity-change-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ComplexityChangeImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ComplexityChangeApi.import,
      complexityChangeImporterFields,
      i18n('entities.complexityChange.importer.fileName'),
      i18n('entities.complexityChange.importer.hint'),
    );
  }
}
