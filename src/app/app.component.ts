import { Component, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizStateMachineService } from './quiz-state-machine/quiz-state-machine.service';
import { BehaviorSubject } from 'rxjs';
import { QuizState } from './quiz-state-machine/quiz-state.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'xstate-quizgame';
  quizState$;

  constructor(private quizService: QuizStateMachineService) {
    this.quizState$ = this.quizService.state$;
  }

  answerClick(key: string) {
    this.quizService.send(key);
  }
}
