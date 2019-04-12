import { NgModule } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
    imports: [
        PanelModule,
        ButtonModule,
        InputTextModule,
        MessagesModule,
        MessageModule,
        ToolbarModule,
        MenubarModule,
        SlideMenuModule,
        MenuModule,
        DropdownModule,
        CalendarModule
    ],
    exports: [
        PanelModule,
        ButtonModule,
        InputTextModule,
        MessagesModule,
        MessageModule,
        ToolbarModule,
        MenubarModule,
        SlideMenuModule,
        MenuModule,
        DropdownModule,
        CalendarModule
    ],
})
export class PrimeNGModule { }
