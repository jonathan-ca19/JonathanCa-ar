import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent implements OnInit {
  post: any
  constructor(private postsService: PostsService){}
  ngOnInit(): void {
    this.postsService.getPosts().subscribe((e) => {this.post=e})
    console.log(this.post)
  }
}
