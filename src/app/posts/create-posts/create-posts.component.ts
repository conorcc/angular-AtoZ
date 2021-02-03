import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../posts.service';

@Component({
    selector: 'app-create-posts',
    templateUrl: './create-posts.component.html',
    styleUrls: ['./create-posts.component.css'],
})
export class CreatePostsComponent implements OnInit {
    enteredContent = '';
    enteredTitle = '';

    constructor(public postService: PostService) {
        this.postService = postService;
    }
    ngOnInit(): void {}

    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }

        this.postService.addPost(form.value.title, form.value.content);
    }
}
