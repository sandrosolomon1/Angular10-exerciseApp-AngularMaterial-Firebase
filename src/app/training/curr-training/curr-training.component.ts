import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {Exercise, TrainingService} from "../../shared/services/training.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-curr-training',
  templateUrl: './curr-training.component.html',
  styleUrls: ['./curr-training.component.scss']
})
export class CurrTrainingComponent implements OnInit {

  @Output() Finished: EventEmitter<void> = new EventEmitter<void>();
  @Input() ActiveExercise: Exercise

  progress: number = 0
  timer: any
  resumer: string = 'Stop'
  delay: number
  dialogRef: any

  success: string = 'You are Finished! Nice'
  fail: string = 'You could not Finish! sucker'

  constructor(public dialog: MatDialog,private trainingS: TrainingService) { }

  ngOnInit(): void {
    this.delay = this.ActiveExercise.duration/100*1000

    this.timer = setInterval(() => {
      this.progress += 1
      if(this.progress >= 100) {
        clearInterval(this.timer)
        this.HandleDialog(this.success,true)
      }
    },this.delay)

  }

  private HandleDialog(message: string, result: boolean) {
    this.OpenDialog(message)
    this.dialogRef.afterClosed().subscribe(result => {
      this.Finished.emit()
    });

    this.trainingS.PastExercises.push({
      ...this.ActiveExercise,
      duration: this.ActiveExercise.duration * this.progress/100,
      calories: this.ActiveExercise.calories * this.progress/100,
      date: new Date(),
      state: result ? 'completed' : "cencelled"
    })


  }

  private OpenDialog(message: string): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message: message,
        progress: this.progress
      }
    })
  }

  stop() {
    if (this.progress < 100) {
      if (this.resumer === 'Stop') {
        clearInterval(this.timer)
        this.resumer = 'resume'
      } else {
        this.timer = setInterval(() => {
          this.progress += 1
          if (this.progress >= 100) {
            clearInterval(this.timer)
            this.HandleDialog(this.success,true)
          }
        }, this.delay)
        this.resumer = 'Stop';
      }
    }
  }

  cancel() {
    this.HandleDialog(this.fail,false)
    clearInterval(this.timer)
  }
}
