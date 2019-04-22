import { Injectable } from '@angular/core';
import { IamApi } from 'src/app/iam/iam.api';
import iamImporterFields from 'src/app/iam/importer/iam-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class IamImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      IamApi.import,
      iamImporterFields,
      i18n('iam.importer.fileName'),
      i18n('iam.importer.hint'),
    );
  }
}
