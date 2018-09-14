import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const HOME_ROUTER: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export const loginRouter = RouterModule.forChild(HOME_ROUTER );

