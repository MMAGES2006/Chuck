import { Component } from '@angular/core';
import { ChuckieService } from '../chuckie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  Chucklist: any = [];
  Jokelist: any = [];

  constructor(private chuckieService: ChuckieService) {}

  ngOnInit() {
    this.chuckieService.getlistChuck().subscribe((data) => {this.Chucklist = data
          })

    this.chuckieService.getJokes().subscribe((data) => {this.Jokelist = data})
        }

}
