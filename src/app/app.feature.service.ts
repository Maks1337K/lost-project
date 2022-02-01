import { Injectable } from "@angular/core";


@Injectable()
export class FeatureService {

    navBarVisible: boolean;

    constructor() { this.navBarVisible = true; }

    hide() { this.navBarVisible = false; }

    show() { this.navBarVisible = true; }

}