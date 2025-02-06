import { SnapshotFrom } from "xstate";
import { QuizState } from "./quiz-state.model";
import { quizStateMachine } from "./quiz-state-machine.machine";

export class QuizStateMapper {
  /**
   * Returns a proper Quiz State for the View layer.
   * @param data eg. `this.actor.getSnapshot()`
   * @returns `QuizState`, based on snapshot
   */
  static fromStateMachine(data: SnapshotFrom<typeof quizStateMachine>): QuizState {
    const description = data._nodes[1].description ?? data._nodes[1].key;
    const nextStates: Array<{ eventKey: string; description: string; }> = [];

    for (const [key, value] of data._nodes[1].transitions.entries()) {
      nextStates.push({ eventKey: key, description: value[0].description ?? key })
    }
    
    return { description, nextStates }
  }
}