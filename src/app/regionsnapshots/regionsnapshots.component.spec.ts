import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsnapshotsComponent } from './regionsnapshots.component';

describe('RegionsnapshotsComponent', () => {
  let component: RegionsnapshotsComponent;
  let fixture: ComponentFixture<RegionsnapshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsnapshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsnapshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
