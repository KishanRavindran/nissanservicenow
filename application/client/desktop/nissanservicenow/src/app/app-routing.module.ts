import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { AuthGuard } from './auth/auth.guard';
import { TemplateComponent } from './template/template.component';
import { SuppliertselficketingComponent } from './suppliertselficketing/suppliertselficketing.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'suppliertselficketing', loadChildren: () => import('./suppliertselficketing/suppliertselficketing.module').then(mod => mod.SuppliertselficketingModule) , canActivate: [AuthGuard] },
  { path: '', component: TemplateComponent , pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
