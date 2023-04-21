import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { settingsFeature } from './store/reducers';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    StoreModule.forFeature(settingsFeature),
    /** project */
    SettingsRoutingModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
