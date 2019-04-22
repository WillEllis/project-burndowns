import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { IamViewService } from 'src/app/iam/view/iam-view.service';
import { IamService } from 'src/app/iam/iam.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';

@Component({
  selector: 'app-iam-view-toolbar',
  templateUrl: './iam-view-toolbar.component.html',
})
export class IamViewToolbarComponent {
  constructor(
    public service: IamViewService,
    private iamService: IamService,
    private auditLogService: AuditLogService,
  ) {}

  get hasPermissionToEdit() {
    return this.iamService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.iamService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.user;
  }
}
