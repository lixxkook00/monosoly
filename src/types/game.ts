import { SLOT_TYPE } from "../constants/game";

export type SlotType = typeof SLOT_TYPE[keyof typeof SLOT_TYPE];

export interface ISlot {
  point?: number | undefined;
  type: SlotType;
  x: number;
  y: number;
}

export interface Slot {
  x: number;
  y: number;
}

export interface CharacterRef {
  current: HTMLDivElement | null;
}

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

