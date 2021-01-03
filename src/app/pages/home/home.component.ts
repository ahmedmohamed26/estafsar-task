import { IPersons, IPerson } from './../../shared/models/people';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  persons: IPerson[] = [];
  filter: any;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople() {
    this.homeService
      .getPeople()
      .subscribe((response: IPersons) => this.persons = response.results);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.persons, event.previousIndex, event.currentIndex);
  }
}
