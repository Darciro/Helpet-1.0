import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {DialogOverviewExampleDialog} from './app.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {HeaderComponent} from './header/header.component';
import {PetComponent} from './pet/pet.component';
import {PetCardComponent} from './pet/pet-card/pet-card.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UpdatesComponent} from './dashboard/updates/updates.component';
import {FollowingComponent} from './dashboard/following/following.component';
import {PetService} from './pet/pet.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    PetComponent,
    PetCardComponent,
    DashboardComponent,
    UpdatesComponent,
    FollowingComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    PetService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog],
})
export class AppModule {
}
