import { Component, OnInit } from '@angular/core';
import {Exercise, TrainingService} from "../../shared/services/training.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit {

  displayedColumns: string[] = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource: MatTableDataSource<Exercise> = new MatTableDataSource<Exercise>()
  data: Exercise[] = []

  constructor(private trainingS: TrainingService) { }

  ngOnInit(): void {

    this.dataSource.data = this.data
  }

}
