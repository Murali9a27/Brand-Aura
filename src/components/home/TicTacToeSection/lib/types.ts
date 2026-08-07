export type Player = "X" | "O";

export type Cell = Player | null;

export type GameResult =
  | "win"
  | "lose"
  | "draw"
  | null;

export interface WinnerData {
  winner: Player;
  combination: readonly number[];
}