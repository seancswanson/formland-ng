import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BasicFormComponent } from "./basic-form/basic-form.component";
import { NestedFormComponent } from "./nested-form/nested-form.component";
import { ArrayFormComponent } from "./array-form/array-form.component";
import { SubmitFormComponent } from "./submit-form/submit-form.component";
import { ValidFormComponent } from "./valid-form/valid-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    NestedFormComponent,
    ArrayFormComponent,
    SubmitFormComponent,
    ValidFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
