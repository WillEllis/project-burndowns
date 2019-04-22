import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-complexity-change-list',
  templateUrl: './complexity-change-list.component.html',
})
export class ComplexityChangeListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.complexityChange.menu')],
  ];
}
