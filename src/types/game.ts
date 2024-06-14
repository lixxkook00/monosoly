import { SLOT_TYPE } from "../constants/game";

export type SlotType = typeof SLOT_TYPE[keyof typeof SLOT_TYPE];

export interface ISlot {
  point?: number | undefined;
  type: SlotType;
  x: number;
  y: number;
}

