import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArrayFormComponent } from "./array-form/array-form.component";
import { BasicFormComponent } from "./basic-form/basic-form.component";
import { HomeComponent } from "./home/home.component";
import { NestedFormComponent } from "./nested-form/nested-form.component";
import { SubmitFormComponent } from "./submit-form/submit-form.component";
import { ValidFormComponent } from "./valid-form/valid-form.component";

const routes: Routes = [
  {
    path: "basic",
    component: BasicFormComponent,
  },
  {
    path: "array",
    component: ArrayFormComponent,
  },
  {
    path: "nested",
    component: NestedFormComponent,
  },
  {
    path: "submit",
    component: SubmitFormComponent,
  },
  {
    path: "valid",
    component: ValidFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
