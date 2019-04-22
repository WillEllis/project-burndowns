import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ComplexityChangeListComponent } from 'src/app/complexity-change/list/complexity-change-list.component';
import { ComplexityChangeViewComponent } from 'src/app/complexity-change/view/complexity-change-view.component';
import { ComplexityChangeImporterComponent } from 'src/app/complexity-change/importer/complexity-change-importer.component';
import { ComplexityChangeFormComponent } from 'src/app/complexity-change/form/complexity-change-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ComplexityChangeFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.complexityChangeEdit,
        },
      },
      {
        path: 'new',
        component: ComplexityChangeFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.complexityChangeCreate,
        },
      },
      {
        path: 'import',
        component: ComplexityChangeImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.complexityChangeImport,
        },
      },
      {
        path: ':id',
        component: ComplexityChangeViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.complexityChangeRead,
        },
      },
      {
        path: '',
        component: ComplexityChangeListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.complexityChangeRead,
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
export class ComplexityChangeRoutingModule {}

export const routedComponents = [
  ComplexityChangeListComponent,
  ComplexityChangeFormComponent,
  ComplexityChangeViewComponent,
  ComplexityChangeImporterComponent,
];
