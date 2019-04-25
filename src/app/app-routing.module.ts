import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { HelloComponent } from './landing/hello/hello.component';
import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes = [
    {path: '', component: HelloComponent},
    {
        path: '',
        component: AuthComponent,
        children: [{
          path: 'authentication',
          loadChildren: './authentication/authentication.module#AuthenticationModule'
        }
        ]
      },
      {
        path: '',
        component: AdminComponent,
        children: [{
          path: 'admin',
          loadChildren: './admin/admin.module#AdminModule'
        }
        ]
      }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
