import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookEntryModalComponent } from './cookbook-entry-modal.component';

describe('CookbookEntryModalComponent', () => {
  let component: CookbookEntryModalComponent;
  let fixture: ComponentFixture<CookbookEntryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookbookEntryModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookbookEntryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
