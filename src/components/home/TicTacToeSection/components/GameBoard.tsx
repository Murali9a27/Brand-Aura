import styles from "../TicTacToeSection.module.css";

import type {
  Cell,
  GameResult,
} from "../lib/types";

interface GameBoardProps {
  board: Cell[];
  winningCells: readonly number[];
  isSystemThinking: boolean;
  result: GameResult;
  onCellClick: (
    index: number
  ) => void;
}

export default function GameBoard({
  board,
  winningCells,
  isSystemThinking,
  result,
  onCellClick,
}: GameBoardProps) {
  return (
    <div
      className={
        styles.gameBoard
      }
      aria-label="Tic tac toe game"
    >
      {board.map(
        (cell, index) => {
          const isWinningCell =
            winningCells.includes(
              index
            );

          const isDisabled =
            cell !== null ||
            isSystemThinking ||
            Boolean(result);

          return (
            <button
              key={index}
              type="button"
              className={
                styles.gameCell
              }
              data-value={
                cell ?? "empty"
              }
              data-winning={
                isWinningCell
                  ? "true"
                  : "false"
              }
              disabled={
                isDisabled
              }
              onClick={() =>
                onCellClick(
                  index
                )
              }
              aria-label={
                cell
                  ? `Cell ${index + 1}: ${cell}`
                  : `Choose cell ${index + 1}`
              }
            >
              {cell === "X" && (
                <span
                  className={
                    styles.xMark
                  }
                  aria-hidden="true"
                >
                  <span />
                  <span />
                </span>
              )}

              {cell === "O" && (
                <span
                  className={
                    styles.oMark
                  }
                  aria-hidden="true"
                />
              )}
            </button>
          );
        }
      )}
    </div>
  );
}