import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { PhaseListComponent } from 'src/app/phase/list/phase-list.component';
import { PhaseViewComponent } from 'src/app/phase/view/phase-view.component';
import { PhaseImporterComponent } from 'src/app/phase/importer/phase-importer.component';
import { PhaseFormComponent } from 'src/app/phase/form/phase-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: PhaseFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.phaseEdit,
        },
      },
      {
        path: 'new',
        component: PhaseFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.phaseCreate,
        },
      },
      {
        path: 'import',
        component: PhaseImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.phaseImport,
        },
      },
      {
        path: ':id',
        component: PhaseViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.phaseRead,
        },
      },
      {
        path: '',
        component: PhaseListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.phaseRead,
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
export class PhaseRoutingModule {}

export const routedComponents = [
  PhaseListComponent,
  PhaseFormComponent,
  PhaseViewComponent,
  PhaseImporterComponent,
];
