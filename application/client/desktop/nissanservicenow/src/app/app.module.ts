import { FooterModule } from './footer/footer.module';
import { TemplateModule } from './template/template.module';
import { HeaderModule } from './header/header.module';
import { AppComponent } from './app.component';
import { TranslatorModule } from './translator/translator.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HomeModule } from './home/home.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SuppliertselficketingModule } from './suppliertselficketing/suppliertselficketing.module';

@NgModule({
  declarations: [
  AppComponent,
AuthorizationComponent
],
  imports: [
SuppliertselficketingModule,
  FooterModule,
TemplateModule,
HeaderModule,
TranslatorModule,
AppRoutingModule,
BrowserModule,
LoginModule,
SignupModule,
HomeModule,
UserModule,
HttpClientModule,
FormsModule
],
  providers: [
  ],
  bootstrap: [
  AppComponent
]
})
export class AppModule { }