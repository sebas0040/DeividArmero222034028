import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { OtherFormComponent } from './components/other-form/other-form.component';
import { OtherFormCbComponent } from './components/other-form-cb/other-form-cb.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FilteruserComponent } from './components/filteruser/filteruser.component';




export const routes: Routes = [

    {
        path: '', redirectTo:'home', pathMatch: 'full'
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path: 'login-test',
        component: LoginTestComponent
    },
    {
        path: 'other-form',
        component:OtherFormComponent
    },
    {
        path: 'other-form-cb',
        component: OtherFormCbComponent
    },
    {
        path: 'myupdate',
        component: UserManagementComponent
    },
    {
        path: 'list-users',
        component: ListUsersComponent
    },
    {
        path: 'filter-users',
        component: FilteruserComponent
    }
    // {
    //     path: 'logintest',
    //     component: LoginTestComponent
    // }

];
