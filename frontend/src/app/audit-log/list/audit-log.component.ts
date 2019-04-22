import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
})
export class AuditLogComponent implements OnInit {
  constructor() {}

  async ngOnInit() {}

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('auditLog.menu')],
  ];
}
