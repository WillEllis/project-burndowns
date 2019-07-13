import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/layout/errors/error-404.component';
import { Error403Component } from 'src/app/layout/errors/error-403.component';
import { Error500Component } from 'src/app/layout/errors/error-500.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'iam',
    loadChildren: () => import('./iam/iam.module').then(m => m.IamModule),
  },
  {
    path: 'settings',
    loadChildren:
      () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'audit-log',
    loadChildren:
      () => import('./audit-log/audit-log.module').then(m => m.AuditLogModule),
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
  },
  {
    path: 'sprint',
    loadChildren: () => import('./sprint/sprint.module').then(m => m.SprintModule),
  },
  {
    path: 'complexity-change',
    loadChildren: () => import('./complexity-change/complexity-change.module').then(m => m.ComplexityChangeModule),
  },
  {
    path: 'phase',
    loadChildren: () => import('./phase/phase.module').then(m => m.PhaseModule),
  },
  {
    path: 'story',
    loadChildren: () => import('./story/story.module').then(m => m.StoryModule),
  },
  { path: '403', component: Error403Component },
  { path: '500', component: Error500Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [
  Error404Component,
  Error403Component,
  Error500Component,
];
