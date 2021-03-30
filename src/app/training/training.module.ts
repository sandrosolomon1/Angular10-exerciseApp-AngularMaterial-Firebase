import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { CurrTrainingComponent } from './curr-training/curr-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import {MaterialModule} from "../material/material.module";
import {Router, RouterModule, Routes} from "@angular/router";
import {DialogComponent} from "./curr-training/dialog/dialog.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: TrainingComponent}
]

@NgModule({
  declarations: [TrainingComponent, CurrTrainingComponent, NewTrainingComponent, PastTrainingComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
  exports: [RouterModule],
  entryComponents: [DialogComponent]
})
export class TrainingModule { }
