import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostsComponent } from './posts/create-posts/create-posts.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostService } from './posts/posts.service';

@NgModule({
    declarations: [AppComponent, CreatePostsComponent, HeaderComponent, PostsListComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
    ],
    providers: [PostService],
    bootstrap: [AppComponent],
})
export class AppModule {}
