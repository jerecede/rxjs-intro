import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedditService } from './services/reddit/reddit.service';
import { HttpClient } from '@angular/common/http';
import { Post } from './model/post';
import { MasterComponent } from "./components/master/master.component";
import { SlaveComponent } from "./components/slave/slave.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, SlaveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  posts: Post[] = [];

  // redditServ = inject(RedditService); //NUOVO

  constructor(private redditServ: RedditService){ //VECCHIO
    // this.redditServ.getData().then(data => console.log(data));

    // this.redditServ.getData().subscribe(data => console.log(data));
    this.redditServ.getData().subscribe({
      next: data => this.posts = data,
      error: err => console.log(err)      
    });
  }
}
