import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-team-importer',
  templateUrl: './team-importer.component.html',
})
export class TeamImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.team.menu'), '/team'],
    [i18n('entities.team.importer.title')],
  ];
}
