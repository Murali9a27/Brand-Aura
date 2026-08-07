import type {
  Cell,
  GameResult,
  Player,
  WinnerData,
} from "./types";

/* =========================================================
   WINNING COMBINATIONS
   ========================================================= */

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
] as const;

/*
 * Used only when two moves receive exactly
 * the same Minimax score.
 *
 * This makes the AI deterministic:
 *
 * Centre
 * → Corners
 * → Sides
 *
 * NO RANDOM SELECTION.
 */
const MOVE_PRIORITY = [
  4,
  0,
  2,
  6,
  8,
  1,
  3,
  5,
  7,
] as const;

/* =========================================================
   WINNER
   ========================================================= */

export function getWinner(
  board: Cell[]
): WinnerData | null {
  for (
    const combination
    of WINNING_COMBINATIONS
  ) {
    const [a, b, c] =
      combination;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return {
        winner: board[a],
        combination,
      };
    }
  }

  return null;
}

/* =========================================================
   GAME RESULT
   ========================================================= */

export function getGameResult(
  board: Cell[]
): GameResult {
  const winner =
    getWinner(board);

  if (
    winner?.winner === "X"
  ) {
    return "win";
  }

  if (
    winner?.winner === "O"
  ) {
    return "lose";
  }

  const boardIsFull =
    board.every(
      (cell) =>
        cell !== null
    );

  if (boardIsFull) {
    return "draw";
  }

  return null;
}

/* =========================================================
   AVAILABLE MOVES
   ========================================================= */

function getAvailableMoves(
  board: Cell[]
): number[] {
  return MOVE_PRIORITY.filter(
    (index) =>
      board[index] === null
  );
}

/* =========================================================
   MINIMAX
   ========================================================= */

/*
 * O = system
 * X = visitor
 *
 * O tries to maximise score.
 * X tries to minimise score.
 */

function minimax(
  board: Cell[],
  currentPlayer: Player,
  depth: number
): number {
  const winner =
    getWinner(board);

  /*
   * System wins.
   *
   * Subtract depth so the AI prefers
   * winning sooner.
   */
  if (
    winner?.winner === "O"
  ) {
    return 10 - depth;
  }

  /*
   * User wins.
   *
   * Add depth so the AI prefers
   * delaying a loss if unavoidable.
   */
  if (
    winner?.winner === "X"
  ) {
    return depth - 10;
  }

  const availableMoves =
    getAvailableMoves(board);

  /*
   * No winner and no cells left.
   */
  if (
    availableMoves.length === 0
  ) {
    return 0;
  }

  /* =====================================================
     SYSTEM TURN — MAXIMISE SCORE
     ===================================================== */

  if (
    currentPlayer === "O"
  ) {
    let bestScore =
      -Infinity;

    for (
      const move
      of availableMoves
    ) {
      const nextBoard = [
        ...board,
      ];

      nextBoard[move] =
        "O";

      const score =
        minimax(
          nextBoard,
          "X",
          depth + 1
        );

      bestScore =
        Math.max(
          bestScore,
          score
        );
    }

    return bestScore;
  }

  /* =====================================================
     USER TURN — MINIMISE SYSTEM SCORE
     ===================================================== */

  let bestScore =
    Infinity;

  for (
    const move
    of availableMoves
  ) {
    const nextBoard = [
      ...board,
    ];

    nextBoard[move] =
      "X";

    const score =
      minimax(
        nextBoard,
        "O",
        depth + 1
      );

    bestScore =
      Math.min(
        bestScore,
        score
      );
  }

  return bestScore;
}

/* =========================================================
   SYSTEM MOVE
   ========================================================= */

export function getSystemMove(
  board: Cell[]
): number | null {
  /*
   * Game already finished.
   */
  if (
    getWinner(board)
  ) {
    return null;
  }

  const availableMoves =
    getAvailableMoves(board);

  if (
    availableMoves.length === 0
  ) {
    return null;
  }

  let bestMove:
    number | null = null;

  let bestScore =
    -Infinity;

  /*
   * Analyse EVERY possible O move.
   */
  for (
    const move
    of availableMoves
  ) {
    const nextBoard = [
      ...board,
    ];

    nextBoard[move] =
      "O";

    /*
     * Assume X then responds
     * optimally.
     */
    const score =
      minimax(
        nextBoard,
        "X",
        0
      );

    /*
     * IMPORTANT:
     *
     * Use > rather than >=.
     *
     * When two cells have the same
     * score, the earlier cell from
     * MOVE_PRIORITY remains selected.
     *
     * Therefore the behaviour is
     * completely deterministic.
     */
    if (
      score > bestScore
    ) {
      bestScore =
        score;

      bestMove =
        move;
    }
  }

  return bestMove;
}