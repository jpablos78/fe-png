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
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';


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
        CalendarModule,
        TableModule,
        DialogModule,
        SplitButtonModule
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
        CalendarModule,
        TableModule,
        DialogModule,
        SplitButtonModule
    ],
})
export class PrimeNGModule { }
