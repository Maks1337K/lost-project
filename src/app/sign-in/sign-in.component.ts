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

    this.minDate.setFullYear(this.minDate.getFullYear() - 100)
  }

  ngOnDestroy()
  {
    this.featureService.show();
  }

  currentDate:Date = new Date();

  minDate:Date = new Date();

  name;

  email;

  birth: Date | null;

}
