import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../posts.service';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit, OnDestroy {
    posts: Post[] = [];
    private postSub = new Subscription();

    constructor(public postService: PostService) {
        this.postService = postService;
    }

    ngOnInit() {
        this.posts = this.postService.getPosts();
        this.postSub = this.postService.getPostUpdate().subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

    ngOnDestroy() {
        this.postSub.unsubscribe();
    }
}
