import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutesModule } from './app-routes';
import { PrimeNGModule } from './png';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { UnidadTiempoComponent } from './unidad-tiempo/unidad-tiempo.component';
import { FormasPagoComponent } from './formas-pago/formas-pago.component';
import { ConsultaDocumentosComponent } from './consulta-documentos/consulta-documentos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AmbienteComponent,
    ParametrosComponent,
    UnidadTiempoComponent,
    FormasPagoComponent,
    ConsultaDocumentosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    AppRoutesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
