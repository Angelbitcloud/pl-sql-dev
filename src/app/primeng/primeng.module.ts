import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MessagesModule } from 'primeng/messages';




@NgModule({
  exports:[
    ButtonModule,
    MenubarModule,
    AutoCompleteModule,
    CardModule,
    ScrollerModule,
    ScrollPanelModule,
    MessagesModule
  ],
})
export class PrimengModule { }
