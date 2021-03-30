import { Component, OnInit } from '@angular/core';
import {Exercise} from "../shared/services/training.service";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  ExerciseInProgress: boolean = false;
  exercise: Exercise;

  constructor() { }

  ngOnInit(): void {
  }

}
