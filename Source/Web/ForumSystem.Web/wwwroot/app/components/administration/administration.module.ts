import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccordionModule  } from 'primeng/primeng';     //accordion and accordion tab
import { InputTextModule } from 'primeng/primeng';            //api
import { DataTableModule, EditorModule, SharedModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { ButtonModule } from 'primeng/components/button/button';

import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { AdministrationService } from './administration.service';

import { AdministrationComponent } from './administration.component';

import { administrationRouting } from './administration.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        AccordionModule, InputTextModule, DataTableModule, DialogModule, ButtonModule, EditorModule, SharedModule,
        administrationRouting
    ],
    declarations: [
        AdministrationComponent
    ],

    providers: [
        DataService,
        AuthService,
        NotificationService,
        AdministrationService
    ]
})
export class AdministrationModule { }