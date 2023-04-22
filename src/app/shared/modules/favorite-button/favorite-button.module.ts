import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { FavoritesService } from './services/favorites.service';
import { AddToFavoriteEffect } from './store/effects/addToFavorite.effect';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    EffectsModule.forFeature([AddToFavoriteEffect]),
  ],
  declarations: [FavoriteButtonComponent],
  exports: [FavoriteButtonComponent],
  providers: [FavoritesService],
})
export class FavoriteButtonModule {}
