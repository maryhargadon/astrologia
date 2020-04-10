import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

//const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'astrologia'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('astrologia');
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Astrologia');
  });

  

  //it('navigate', () => {
    //const fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.debugElement.componentInstance;
    //const component = fixture.componentInstance;
    //let router = { navigate: jasmine.createSpy('navigate')}
    //spyOn(component.router, 'navigate').and.returnValue(true);
    //expect(SignsComponent).toHaveBeenCalledWith('/signs');
  //});

});
