import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-phase-importer',
  templateUrl: './phase-importer.component.html',
})
export class PhaseImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.phase.menu'), '/phase'],
    [i18n('entities.phase.importer.title')],
  ];
}
