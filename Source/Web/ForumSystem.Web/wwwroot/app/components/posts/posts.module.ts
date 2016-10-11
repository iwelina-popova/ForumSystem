import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule, FieldsetModule, DialogModule, EditorModule } from 'primeng/primeng';
import { MomentModule } from 'angular2-moment/src/index';

import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { PostsService } from './posts.service';

import { PostsComponent } from './posts.component';
import { PostsTaggedComponent } from './posts-tagged.component';
import { PostDisplayComponent } from './post-display.component';
import { PostsCreateComponent } from './create-post.component';

import { postsRouting } from './posts.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        ButtonModule, FieldsetModule, DialogModule, EditorModule,
        MomentModule,
        postsRouting
    ],
    declarations: [
        PostsComponent,
        PostsTaggedComponent,
        PostDisplayComponent,
        PostsCreateComponent
    ],

    providers: [
        DataService,
        AuthService,
        NotificationService,
        PostsService
    ]
})
export class PostsModule { }