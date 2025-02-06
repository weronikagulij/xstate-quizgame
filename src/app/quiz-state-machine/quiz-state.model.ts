export interface QuizState {
  description: string;
  nextStates?: Array<{ eventKey: string; description: string; }>;
}