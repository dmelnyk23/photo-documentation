import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'photo-page/:id', loadChildren: './photo-page/photo-page.module#PhotoPagePageModule' },
  { path: 'save-photo/:address', loadChildren: './save-photo/save-photo.module#SavePhotoPageModule' },
  // { path: 'list-photo', loadChildren: './list-photo/list-photo' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }