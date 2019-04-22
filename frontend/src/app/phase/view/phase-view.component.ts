import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhaseModel } from 'src/app/phase/phase-model';
import { PhaseViewService } from 'src/app/phase/view/phase-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-phase-view',
  templateUrl: './phase-view.component.html',
})
export class PhaseViewComponent implements OnInit {
  constructor(
    private service: PhaseViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return PhaseModel.presenter(row, fieldName);
  }

  get fields() {
    return PhaseModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.phase.menu'), '/phase'],
    [i18n('entities.phase.view.title')],
  ];
}
