import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilitiesBarComponent } from './utilities-bar/utilities-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DividerComponent } from './divider/divider.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { AmbassadorCardComponent } from './ambassador-card/ambassador-card.component';
import { FaqCardComponent } from './faq-card/faq-card.component';
import { RoadmapCardComponent } from './roadmap-card/roadmap-card.component';
import { JoinCardComponent } from './join-card/join-card.component';
import { SubscribeCardComponent } from './subscribe-card/subscribe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilitiesBarComponent,
    NavBarComponent,
    FooterComponent,
    DividerComponent,
    TeamCardComponent,
    AmbassadorCardComponent,
    FaqCardComponent,
    RoadmapCardComponent,
    JoinCardComponent,
    SubscribeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
