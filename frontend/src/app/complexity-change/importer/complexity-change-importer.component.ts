import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-complexity-change-importer',
  templateUrl: './complexity-change-importer.component.html',
})
export class ComplexityChangeImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.complexityChange.menu'), '/complexity-change'],
    [i18n('entities.complexityChange.importer.title')],
  ];
}
