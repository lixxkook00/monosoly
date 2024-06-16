import { ISlot } from "../types";

export const SLOT_TYPE = {
  AWARD: 'award',
  CHANGE: 'change',
  START: 'start',
  TRAPS: 'traps',
} as const;

export const SLOTS: ISlot[] = [
  {
    x: 49,
    y: 63,
    type: SLOT_TYPE.AWARD,
    amount: 0,
  },
  {
    x: 42,
    y: 58,
    type: SLOT_TYPE.AWARD,
    amount: 200,
  },
  {
    x: 36,
    y: 54,
    type: SLOT_TYPE.AWARD,
    amount: 150,
  },
  {
    x: 28,
    y: 49,
    type: SLOT_TYPE.TRAPS,
    amount: 100,
  },
  {
    x: 22,
    y: 45,
    type: SLOT_TYPE.AWARD,
    amount: 150,
  },
  {
    x: 15,
    y: 41,
    type: SLOT_TYPE.AWARD,
    amount: 100,
  },
  {
    x: 7,
    y: 37,
    type: SLOT_TYPE.AWARD,
    amount: 1000,
  },
  {
    x: 15,
    y: 32,
    type: SLOT_TYPE.AWARD,
    amount: 150,
  },
  {
    x: 21,
    y: 28,
    type: SLOT_TYPE.AWARD,
    amount: 200,
  },
  {
    x: 28,
    y: 24,
    type: SLOT_TYPE.TRAPS,
    amount: 250,
  },
  {
    x: 35,
    y: 20,
    type: SLOT_TYPE.AWARD,
    amount: 150,
  },
  {
    x: 42,
    y: 15,
    type: SLOT_TYPE.AWARD,
    amount: 100,
  },
  {
    x: 49,
    y: 11,
    type: SLOT_TYPE.AWARD,
    amount: 500,
  },
  {
    x: 56,
    y: 15,
    type: SLOT_TYPE.AWARD,
    amount: 150,
  },
  {
    x: 63,
    y: 19,
    type: SLOT_TYPE.AWARD,
    amount: 100,
  },
  {
    x: 70,
    y: 23,
    type: SLOT_TYPE.AWARD,
    amount: 200,
  },
  {
    x: 77,
    y: 28,
    type: SLOT_TYPE.TRAPS,
    amount: 100,
  },
  {
    x: 84,
    y: 32,
    type: SLOT_TYPE.AWARD,
    amount: 500,
  },
  {
    x: 92,
    y: 37,
    type: SLOT_TYPE.AWARD,
    amount: 500,
  },
  {
    x: 84,
    y: 41,
    type: SLOT_TYPE.AWARD,
    amount: 100,
  },
  {
    x: 77,
    y: 45,
    type: SLOT_TYPE.AWARD,
    amount: 200,
  },
  {
    x: 70,
    y: 49,
    type: SLOT_TYPE.TRAPS,
    amount: 100,
  },
  {
    x: 63,
    y: 53,
    type: SLOT_TYPE.AWARD,
    amount: 100,
  },
  {
    x: 56,
    y: 58,
    type: SLOT_TYPE.AWARD,
    amount: 500,
  },
]