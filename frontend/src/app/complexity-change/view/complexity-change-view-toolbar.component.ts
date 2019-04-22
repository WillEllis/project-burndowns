import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ComplexityChangeViewService } from 'src/app/complexity-change/view/complexity-change-view.service';
import { ComplexityChangeService } from 'src/app/complexity-change/complexity-change.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ComplexityChangeDestroyService } from 'src/app/complexity-change/destroy/complexity-change-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-complexity-change-view-toolbar',
  templateUrl: './complexity-change-view-toolbar.component.html',
})
export class ComplexityChangeViewToolbarComponent {
  constructor(
    public service: ComplexityChangeViewService,
    private complexityChangeService: ComplexityChangeService,
    private destroyService: ComplexityChangeDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
  }

  get hasPermissionToDestroy() {
    return this.complexityChangeService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.complexityChangeService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.complexityChangeService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
