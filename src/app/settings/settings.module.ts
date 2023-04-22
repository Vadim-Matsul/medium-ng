import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { LoaderModule } from '../shared/modules/loader/loader.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { ZodService } from '../shared/services/zod.service';
import { settingsFeature } from './store/reducers';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(settingsFeature),
    /** project */
    SettingsRoutingModule,
    LoaderModule,
    ErrorMessagesModule,
  ],
  declarations: [SettingsComponent],
  providers: [ZodService],
})
export class SettingsModule {}
