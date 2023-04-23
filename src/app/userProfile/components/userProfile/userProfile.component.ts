import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { combineLatest, filter, firstValueFrom, map, tap, type Observable } from 'rxjs';
import queryString from 'query-string';

import { PROFILE_SLUG } from '../../userProfile-routing.module';
import { getUserProfileAction } from '../../store/actions/getUserProfile.actions';
import { type UserProfileStateModel } from '../../models/userProfileState.model';
import { errorMessagesSelector, isLoadingSelector, profileSelector } from '../../store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { HttpLinks } from 'src/app/shared/common/httpLinks';
import { StoreEndpoints } from 'src/app/shared/store/endpoints';

@Component({
  selector: 'ma-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  #userSlug = this.route.snapshot.paramMap.get(PROFILE_SLUG);
  HttpLinks = HttpLinks;
  apiUrl: string;
  isFavoritesPage: boolean;

  userProfile: UserProfileStateModel['profile'];
  isLoading$: Observable<UserProfileStateModel['isLoading']>;
  errorMessages$: Observable<UserProfileStateModel['validationErrors']>;
  isUserProfile$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.initializeListeners();
    this.initializeValues();
  }

  private initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errorMessages$ = this.store.pipe(select(errorMessagesSelector));

    this.isFavoritesPage = queryString.parseUrl(this.router.url).url.includes(HttpLinks.Favorites);
    const authorQuery = `?${this.isFavoritesPage ? 'favorited' : 'author'}=${this.#userSlug}`;
    this.apiUrl = `${StoreEndpoints.ALL_FEEDS}/${authorQuery}`;
  }

  private initializeListeners() {
    const closeStream = false;

    firstValueFrom(
      this.store
        .pipe(
          select(profileSelector),
          map((profile) => {
            this.userProfile = profile;
          })
        )
        .pipe(filter(() => closeStream))
    );

    firstValueFrom(
      this.route.params
        .pipe(
          map((params) => {
            const currentSlug = <string>params[PROFILE_SLUG];

            if (this.#userSlug !== currentSlug) {
              this.#userSlug = currentSlug;
            }

            if (!this.userProfile || this.userProfile.username !== this.#userSlug) {
              this.fetchProfile();
            }
          })
        )
        .pipe(filter(() => closeStream))
    );

    this.isUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(profileSelector), filter(Boolean)),
    ]).pipe(
      map(
        ([currentUser, { username, bio, image }]) =>
          currentUser.username === username &&
          currentUser.bio === bio &&
          currentUser.image === image
      )
    );
  }

  private fetchProfile() {
    if (!this.#userSlug) return;
    this.store.dispatch(getUserProfileAction({ userSlug: this.#userSlug }));
  }
}
