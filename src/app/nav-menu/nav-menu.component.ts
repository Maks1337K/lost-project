import { Component } from '@angular/core';
import { FeatureService } from '../app.feature.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(protected featureService:FeatureService) { }

  showState = ["none", "flex"];
  
}