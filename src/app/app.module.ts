import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountrysnapshotsComponent } from './countrysnapshots/countrysnapshots.component';
import { SectorsnapshotsComponent } from './sectorsnapshots/sectorsnapshots.component';
import { RegionsnapshotsComponent } from './regionsnapshots/regionsnapshots.component';
import { FeaturedrankingComponent } from './featuredranking/featuredranking.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrysnapshotsComponent,
    SectorsnapshotsComponent,
    RegionsnapshotsComponent,
    FeaturedrankingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
