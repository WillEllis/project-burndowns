import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { SprintListComponent } from 'src/app/sprint/list/sprint-list.component';
import { SprintViewComponent } from 'src/app/sprint/view/sprint-view.component';
import { SprintImporterComponent } from 'src/app/sprint/importer/sprint-importer.component';
import { SprintFormComponent } from 'src/app/sprint/form/sprint-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: SprintFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.sprintEdit,
        },
      },
      {
        path: 'new',
        component: SprintFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.sprintCreate,
        },
      },
      {
        path: 'import',
        component: SprintImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.sprintImport,
        },
      },
      {
        path: ':id',
        component: SprintViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.sprintRead,
        },
      },
      {
        path: '',
        component: SprintListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.sprintRead,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SprintRoutingModule {}

export const routedComponents = [
  SprintListComponent,
  SprintFormComponent,
  SprintViewComponent,
  SprintImporterComponent,
];
