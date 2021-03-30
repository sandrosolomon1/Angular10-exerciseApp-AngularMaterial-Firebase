import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

export interface Exercise {
  id: string
  name: string
  duration: number
  calories: number
  date?: Date
  state?: 'completed' | 'cencelled' | null
}

@Injectable({providedIn: 'root'})
export class TrainingService {

  private exercises: Exercise[] = [
    {id: 'pushups', name: 'Pushups', duration: 30, calories: 8},
    {id: 'pullups', name: 'Pullups', duration: 30, calories: 16},
    {id: 'curves', name: 'Curves', duration: 15, calories: 4},
    {id: 'squads', name: 'Squads', duration: 45, calories: 32},
    {id: 'betch', name: 'Betches', duration: 3, calories: 9999}
  ]

  public PastExercises = []

  GetAvalaibleExercises(): Exercise[] {
    return this.exercises.slice()
  }

}
