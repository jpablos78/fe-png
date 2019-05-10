import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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

import { ConsultaService } from './services/consulta.service';
import { CrudUnidadTiempoComponent } from './crud-unidad-tiempo/crud-unidad-tiempo.component';
import { ProcesarDocumentosComponent } from './procesar-documentos/procesar-documentos.component';
import { CrudFormasPagoComponent } from './crud-formas-pago/crud-formas-pago.component';
import { MantenimientoUsuariosComponent } from './components/modulo-general/usuarios/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { CambioClaveComponent } from './components/modulo-general/usuarios/cambio-clave/cambio-clave.component';
import { FavoritosComponent } from './components/modulo-general/usuarios/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AmbienteComponent,
    ParametrosComponent,
    UnidadTiempoComponent,
    FormasPagoComponent,
    ConsultaDocumentosComponent,
    CrudUnidadTiempoComponent,
    ProcesarDocumentosComponent,
    CrudFormasPagoComponent,
    MantenimientoUsuariosComponent,
    CambioClaveComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    AppRoutesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ConsultaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
