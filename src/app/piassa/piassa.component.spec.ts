import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiassaComponent } from './piassa.component';

describe('PiassaComponent', () => {
  let component: PiassaComponent;
  let fixture: ComponentFixture<PiassaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiassaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
