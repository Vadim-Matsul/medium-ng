import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessagesModule } from '../errorMessages/errorMessages.module';
import { LoaderModule } from '../loader/loader.module';
import { PopularTagsComponent } from './components/popularTags/popularTags.component';
import { PopularTagsService } from './services/popularTags.service';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { StoreSlices } from '../../store/slices';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature(StoreSlices.POPULAR_TAGS, reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    /** project */
    LoaderModule,
    ErrorMessagesModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
