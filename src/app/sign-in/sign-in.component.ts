import { Component, OnDestroy } from '@angular/core';
import { FeatureService } from '../app.feature.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(public featureService:FeatureService) 
  {
    featureService.hide();
  }

  ngOnDestroy()
  {
    this.featureService.show();
  }

  name;

  age;

}
