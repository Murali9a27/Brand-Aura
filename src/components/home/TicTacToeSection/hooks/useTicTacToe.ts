"use client";

import { useEffect, useState } from "react";

import { getGameResult, getSystemMove, getWinner } from "../lib/game";

import type { Cell } from "../lib/types";

const EMPTY_BOARD: Cell[] = Array(9).fill(null);

const SYSTEM_MOVE_DELAY = 550;

export default function useTicTacToe() {
  const [board, setBoard] = useState<Cell[]>([...EMPTY_BOARD]);

  const [isSystemThinking, setIsSystemThinking] = useState(false);

  /* =====================================================
     DERIVED GAME STATE
     ===================================================== */

  const winnerData = getWinner(board);

  const result = getGameResult(board);

  const winningCells = winnerData?.combination ?? [];

  /* =====================================================
     SYSTEM MOVE
     ===================================================== */

  useEffect(() => {
    if (!isSystemThinking || result) {
      return;
    }

    const timer = window.setTimeout(() => {
      setBoard((currentBoard) => {
        if (getGameResult(currentBoard)) {
          return currentBoard;
        }

        const selectedCell = getSystemMove(currentBoard);

        if (selectedCell === null) {
          return currentBoard;
        }

        const nextBoard = [...currentBoard];

        nextBoard[selectedCell] = "O";

        return nextBoard;
      });

      setIsSystemThinking(false);
    }, 550);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isSystemThinking, result]);

  /* =====================================================
     PLAYER MOVE
     ===================================================== */

  const playCell = (index: number) => {
    if (board[index] !== null || isSystemThinking || result) {
      return;
    }

    const nextBoard = [...board];

    nextBoard[index] = "X";

    setBoard(nextBoard);

    /*
     * Only activate system if
     * game is still running.
     */
    if (!getGameResult(nextBoard)) {
      setIsSystemThinking(true);
    }
  };

  /* =====================================================
     RESET
     ===================================================== */

  const resetGame = () => {
    setBoard([...EMPTY_BOARD]);

    setIsSystemThinking(false);
  };

  return {
    board,
    result,
    winningCells,
    isSystemThinking,
    playCell,
    resetGame,
  };
}
