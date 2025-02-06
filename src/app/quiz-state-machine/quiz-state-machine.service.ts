import { Injectable } from '@angular/core';
import { Actor, ActorRef, createActor } from 'xstate';
import { quizStateMachine } from './quiz-state-machine.machine';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuizState } from './quiz-state.model';
import { QuizStateMapper } from './quiz-state.mapper';

@Injectable({
  providedIn: 'root',
})
export class QuizStateMachineService {
  private actor: Actor<typeof quizStateMachine> = createActor(quizStateMachine).start();
  private stateSubject: BehaviorSubject<QuizState>;

  constructor() {
    this.stateSubject = new BehaviorSubject<QuizState>(QuizStateMapper.fromStateMachine(this.actor.getSnapshot()));
    this.actor.subscribe((data) => {
      this.stateSubject.next(QuizStateMapper.fromStateMachine(data));
    });
  }

  get state$() {
    return this.stateSubject;
  }

  send(event: string) {
    this.actor.send({ type: event });
  }
}