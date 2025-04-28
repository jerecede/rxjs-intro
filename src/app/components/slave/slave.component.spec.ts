import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveComponent } from './slave.component';

describe('SlaveComponent', () => {
  let component: SlaveComponent;
  let fixture: ComponentFixture<SlaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
