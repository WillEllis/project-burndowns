import { Injectable } from '@angular/core';
import { PhaseApi } from 'src/app/phase/phase.api';
import phaseExporterFields from 'src/app/phase/list/phase-exporter-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class PhaseListService extends PaginationService {
  constructor(errorService: ErrorService) {
    super(
      PhaseApi.list,
      phaseExporterFields,
      'phase',
      false,
      errorService,
    );
  }
}
