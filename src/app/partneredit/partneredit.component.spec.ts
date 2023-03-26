import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnereditComponent } from './partneredit.component';

describe('PartnereditComponent', () => {
  let component: PartnereditComponent;
  let fixture: ComponentFixture<PartnereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnereditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
