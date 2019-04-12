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
// import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ambiente', component: AmbienteComponent },
    { path: 'parametros', component: ParametrosComponent },
    { path: 'unidad-tiempo', component: UnidadTiempoComponent },
    { path: 'formas-pago', component: FormasPagoComponent },
    { path: 'consulta-documentos', component: ConsultaDocumentosComponent },
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
