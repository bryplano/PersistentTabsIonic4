import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1detailPage } from './tab1detail.page';

describe('Tab1detailPage', () => {
  let component: Tab1detailPage;
  let fixture: ComponentFixture<Tab1detailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1detailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1detailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
