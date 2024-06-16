import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostComponent } from "./components/post/post.component";
import { HomeComponent } from "./components/home/home.component";
const routes : Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:PostComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SharedRoutingModule{}