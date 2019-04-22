import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplexityChangeModel } from 'src/app/complexity-change/complexity-change-model';
import { ComplexityChangeViewService } from 'src/app/complexity-change/view/complexity-change-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-complexity-change-view',
  templateUrl: './complexity-change-view.component.html',
})
export class ComplexityChangeViewComponent implements OnInit {
  constructor(
    private service: ComplexityChangeViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ComplexityChangeModel.presenter(row, fieldName);
  }

  get fields() {
    return ComplexityChangeModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.complexityChange.menu'), '/complexity-change'],
    [i18n('entities.complexityChange.view.title')],
  ];
}
