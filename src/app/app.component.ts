import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Facturación Electrónica';

  items: MenuItem[];



  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.items = [{
      label: 'Parametros',
      items: [
        {
          label: 'Ambientes',
          icon: 'pi pi-fw pi-file',
          routerLink: ['/ambiente']
        },
        {
          label: 'Parametros',
          icon: 'pi pi-fw pi-clone',
          routerLink: ['/parametros']
        },
        {
          label: 'Unidades de Tiempo',
          icon: 'pi pi-fw pi-clock',
          routerLink: ['/unidad-tiempo']
        },
        {
          label: 'CRUD Unidades de Tiempo',
          icon: 'pi pi-fw pi-clock',
          routerLink: ['/crud-unidad-tiempo']
        },
        {
          label: 'Formas de Pago',
          icon: 'pi pi-fw pi-dollar',
          routerLink: ['/formas-pago']
        },
        {
          label: 'CRUD Formas de Pago',
          icon: 'pi pi-fw pi-dollar',
          routerLink: ['/crud-formas-pago']
        },
      ]
    },
    {
      label: 'Transacciones',
      items: [
        {
          label: 'Procesar Documentos Electrónicos',
          icon: 'pi pi-fw pi-pencil',
          routerLink: ['/procesar-documentos']
        }
      ]
    },
    {
      label: 'Consultas',
      items: [
        {
          label: 'Consulta de Documentos Electrónicos',
          icon: 'pi pi-fw pi-search',
          routerLink: ['/consulta-documentos']
        },
      ]
    }
    ];

    /*
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        {
          label: 'Quit',
          // routerLink: ['/login'],
          command: (event) => {
            this.authService.logout();
          }
        }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];
    */
  }

  onClick() {
    // alert('click');
    this.authService.login();
  }
}
