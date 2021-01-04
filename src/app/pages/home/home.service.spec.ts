import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { IPerson, IPersons } from 'src/app/shared/models/people';
import { HomeService } from './home.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HomeService],
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve GET method', () => {
    service.getPeople().subscribe((people: IPersons) => {
      expect(people.results.length).toBe(10);
      let req = httpMock.expectOne(`${environment.apiKey}/people/`);
      expect(req.request.method).toBe('GET');
      req.flush(people.results);
      httpMock.verify();
    });
  });
});
