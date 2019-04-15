import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'photo-page', loadChildren: './photo-page/photo-page.module#PhotoPagePageModule' },
  { path: 'save-photo', loadChildren: './save-photo/save-photo.module#SavePhotoPageModule' },
  { path: 'photos-list', loadChildren: './photos-list/photos-list.module#PhotosListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }