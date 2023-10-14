import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominumComponent } from './condominum.component';

describe('CondominumComponent', () => {
  let component: CondominumComponent;
  let fixture: ComponentFixture<CondominumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondominumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
