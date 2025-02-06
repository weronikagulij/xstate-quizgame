import { Component } from '@angular/core';
import { QuizStateMachineService } from './quiz-state-machine/quiz-state-machine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
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
