import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './containers/admin/admin.component';
import { AdminguardService } from '../core/auth/service/adminguard.service';
import { ChangesGuard } from '../core/auth/service/canexit.service';


const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AdminguardService],
        canDeactivate: [ChangesGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
