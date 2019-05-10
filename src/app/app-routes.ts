import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { UnidadTiempoComponent } from './unidad-tiempo/unidad-tiempo.component';
import { FormasPagoComponent } from './formas-pago/formas-pago.component';
import { ConsultaDocumentosComponent } from './consulta-documentos/consulta-documentos.component';
import { CrudUnidadTiempoComponent } from './crud-unidad-tiempo/crud-unidad-tiempo.component';
import { ProcesarDocumentosComponent } from './procesar-documentos/procesar-documentos.component';
import { CrudFormasPagoComponent } from './crud-formas-pago/crud-formas-pago.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'ambiente', component: AmbienteComponent, canActivate: [AuthGuard] },
    { path: 'parametros', component: ParametrosComponent, canActivate: [AuthGuard] },
    { path: 'unidad-tiempo', component: UnidadTiempoComponent, canActivate: [AuthGuard] },
    { path: 'formas-pago', component: FormasPagoComponent, canActivate: [AuthGuard] },
    { path: 'consulta-documentos', component: ConsultaDocumentosComponent, canActivate: [AuthGuard] },
    { path: 'crud-unidad-tiempo', component: CrudUnidadTiempoComponent, canActivate: [AuthGuard] },
    { path: 'procesar-documentos', component: ProcesarDocumentosComponent, canActivate: [AuthGuard] },
    { path: 'crud-formas-pago', component: CrudFormasPagoComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule { }
