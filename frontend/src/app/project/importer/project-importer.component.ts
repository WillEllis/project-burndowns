import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-project-importer',
  templateUrl: './project-importer.component.html',
})
export class ProjectImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.project.menu'), '/project'],
    [i18n('entities.project.importer.title')],
  ];
}
