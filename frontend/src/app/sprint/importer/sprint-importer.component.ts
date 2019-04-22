import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-sprint-importer',
  templateUrl: './sprint-importer.component.html',
})
export class SprintImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.sprint.menu'), '/sprint'],
    [i18n('entities.sprint.importer.title')],
  ];
}
