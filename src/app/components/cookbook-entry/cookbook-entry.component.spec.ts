import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookEntryComponent } from './cookbook-entry.component';

describe('CookbookEntryComponent', () => {
  let component: CookbookEntryComponent;
  let fixture: ComponentFixture<CookbookEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookbookEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookbookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
