import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { CreateArticleModule } from './createArticle/createArticle.module';
import { EditArticleModule } from './editArticle/editArticle.module';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { SettingsModule } from './settings/settings.module';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';
import { UserProfileModule } from './userProfile/userProfile.module';
import { YourFeedModule } from './yourFeed/yourFeed.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './shared/services/authInterceptor.service';
import { PersistentService } from './shared/services/persistent.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    /** system */
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    /** project */
    AppRoutingModule,
    AuthModule,
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    EditArticleModule /** CreateArticleModule must be registered before EditArticleModule */,
    ArticleModule /** CreateArticleModule & EditArticleModule must be registered before ArticleModule */,
    SettingsModule,
    UserProfileModule,
  ],
  providers: [
    PersistentService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
