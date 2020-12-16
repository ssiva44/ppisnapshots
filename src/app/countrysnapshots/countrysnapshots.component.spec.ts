import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrysnapshotsComponent } from './countrysnapshots.component';

describe('CountrysnapshotsComponent', () => {
  let component: CountrysnapshotsComponent;
  let fixture: ComponentFixture<CountrysnapshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrysnapshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrysnapshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
