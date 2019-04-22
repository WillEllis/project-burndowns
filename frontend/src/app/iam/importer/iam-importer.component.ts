import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-iam-importer',
  templateUrl: './iam-importer.component.html',
})
export class IamImporterComponent implements OnInit {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('iam.menu'), '/iam'],
    [i18n('iam.importer.title')],
  ];

  constructor() {}

  ngOnInit(): void {}
}
