import { Injectable } from '@angular/core';
import AuditLogApi from 'src/app/audit-log/audit-log-api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import audigLogExporterFields from 'src/app/audit-log/audig-log-exporter-fields';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class AuditLogService extends PaginationService {
  constructor(
    errorService: ErrorService,
    private authService: AuthService,
  ) {
    super(
      AuditLogApi.fetch,
      audigLogExporterFields,
      i18n('auditLog.exporterFileName'),
      false,
      errorService,
    );
  }

  get hasPermissionToRead() {
    return this.authService.hasPermission(
      Permissions.values.auditLogRead,
    );
  }
}
