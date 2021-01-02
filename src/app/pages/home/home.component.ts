import { People } from './../../shared/models/people';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  people: People[] = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople() {
    this.homeService.getPeople().subscribe((response:any) => this.people = response.results);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.people, event.previousIndex, event.currentIndex);
  }
}
