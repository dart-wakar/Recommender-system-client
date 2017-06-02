import { Component,OnInit } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit  { 
    componentName = 'Test';
    preferences: any[];

    constructor(private preferencesService:PreferencesService) {}

    ngOnInit() {
        this.getPreferences();
    }

    getPreferences() {
        this.preferencesService.getAllPreferences()
            .subscribe(preferences => {
                console.log(preferences);
                this.preferences = preferences;
            },err => console.log(err));
    }
}
