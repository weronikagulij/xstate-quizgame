import { createMachine } from "xstate";

export const quizStateMachine = createMachine({
  context: {},
  id: "Metaphor: Refantazio Archetype Quizgame",
  initial: "satisfaction",
  states: {
    satisfaction: {
      on: {
        creation: {
          target: "lying",
          description: "Creating new things.",
        },
        achievments: {
          target: "social",
          description:
            "Achievements: renovation, conquering mountain peaks, solving mathematical problem.",
        },
        helping: {
          target: "spirituality",
          description: "Helping others/solving their problem.",
        },
      },
      description: "What gives you the most satisfaction in life?",
    },
    lying: {
      on: {
        no: {
          target: "future",
          description: "No.",
        },
        yes: {
          target: "trip",
          description: "Yes.",
        },
      },
      description:
        "Do you believe that one can lie in the name of a greater good?",
    },
    social: {
      on: {
        alone: {
          target: "killingEnemies",
          description: "Alone.",
        },
        withPeople: {
          target: "money",
          description: "Around people.",
        },
      },
      description: "Do you prefer being alone or being around people?",
    },
    spirituality: {
      on: {
        yes: {
          target: "emotionsOverFacts",
          description: "Yes.",
        },
        no: {
          target: "planOverSpontaneously",
          description: "No.",
        },
      },
      description: "Are you spiritual?",
    },
    future: {
      on: {
        tech: {
          target: "gunner",
          description:
            "Programmer / AI specialist – ChatGPT will take over humanity.",
        },
        people: {
          target: "summoner",
          description:
            "Jobs that involve working with people – we will always need other humans.",
        },
        fun: {
          target: "maskedDancer",
          description: "Anything that entertains others will always sell.",
        },
      },
      description: "What will be the top job of the future?",
    },
    trip: {
      on: {
        alone: {
          target: "thief",
          description: "I go alone.",
        },
        persuade: {
          target: "faker",
          description: "I try to convince them.",
        },
      },
      description:
        "You want to go on a trip, but your friends aren't interested.",
    },
    killingEnemies: {
      on: {
        hotHeaded: {
          target: "berserker",
          description:
            "I’m killing everyone as fast as I can, best is to use mele weapon or strong physical attacs",
        },
        calm: {
          target: "brawler",
          description: "I calmly think through every move and plan the fight.",
        },
      },
      description: "What is your approach to killing enemies?",
    },
    money: {
      on: {
        noMoney: {
          target: "berserker",
          description:
            "I don’t have any money or not thinking about saving them.",
        },
        quick: {
          target: "merchant",
          description:
            "Buying and selling at a higher price, the stock market.\n\nI like to spend quickly and invest quickly.",
        },
        longTerm: {
          target: "commander",
          description: "Long-term investments",
        },
      },
      description: "What is your approach to investing money?",
    },
    emotionsOverFacts: {
      on: {
        emotions: {
          target: "Healer",
          description: "Emotions.",
        },
        arguments: {
          target: "Seeker",
          description: "Arguments.",
        },
        other: {
          target: "Mage",
          description:
            "Only a true wanderer knows the art of choosing between the call of the heart and the whisper of reason when fate lays unknown paths before them.",
        },
      },
      description:
        "Are you usually more convinced by arguments that appeal to emotions rather than facts?",
    },
    planOverSpontaneously: {
      on: {
        plan: {
          target: "Knight",
          description: "Plan.",
        },
        spontaneously: {
          target: "Warrior",
          description: "Spontaneously.",
        },
      },
      description: "Do you prefer to act spontaneously or plan?",
    },
    gunner: {},
    summoner: {},
    maskedDancer: {},
    thief: {},
    faker: {},
    berserker: {},
    brawler: {},
    merchant: {},
    commander: {},
    Healer: {},
    Seeker: {},
    Mage: {},
    Knight: {},
    Warrior: {},
  },
});