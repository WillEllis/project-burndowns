import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-story-importer',
  templateUrl: './story-importer.component.html',
})
export class StoryImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.story.menu'), '/story'],
    [i18n('entities.story.importer.title')],
  ];
}
