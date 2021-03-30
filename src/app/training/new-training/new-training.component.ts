import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Exercise, TrainingService} from "../../shared/services/training.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  @Output() inprogress: EventEmitter<Exercise> = new EventEmitter<Exercise>()

  exercises: Exercise[]

  constructor(private trainingS: TrainingService) { }

  ngOnInit(): void {
    this.exercises = this.trainingS.GetAvalaibleExercises()
  }

  Start(ex: Exercise) {
    this.inprogress.emit(ex)
  }

  submit(f: NgForm) {
    console.log(f.value.exercise)
    const ex: Exercise = this.exercises.find(exs => {
      return f.value.exercise === exs.id
    })
    this.Start(ex)
  }
}
