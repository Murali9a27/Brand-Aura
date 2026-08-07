"use client";

import GameBoard from "./components/GameBoard";
import ResultModal from "./components/ResultModal";

import useScrollLock from "./hooks/useScrollLock";
import useTicTacToe from "./hooks/useTicTacToe";

import styles from "./TicTacToeSection.module.css";

export default function TicTacToeSection() {
  const {
    board,
    result,
    winningCells,
    isSystemThinking,
    playCell,
    resetGame,
  } = useTicTacToe();

  /*
   * Freeze body whenever
   * result popup is visible.
   */
  useScrollLock(
    Boolean(result)
  );

  return (
    <section
      className={
        styles.section
      }
      aria-labelledby="tic-tac-toe-heading"
    >
      {/* BACKGROUND */}

      <div
        className={
          styles.backgroundPattern
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.blueGlow
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.goldGlow
        }
        aria-hidden="true"
      />

      <div
        className={styles.orb}
        aria-hidden="true"
      >
        <span
          className={
            styles.orbInner
          }
        />
      </div>

      {/* GAME */}

      <div
        className={
          styles.container
        }
      >
        <header
          className={
            styles.header
          }
        >
          <h2
            id="tic-tac-toe-heading"
            className={
              styles.heading
            }
          >
            Can Your Brand Beat
            Boring?
          </h2>

          <p
            className={
              styles.gameHint
            }
          >
            {result
              ? ""
              : isSystemThinking
                ? "Aura is making its move..."
                : "Your move. You’re X."}
          </p>
        </header>

        <GameBoard
          board={board}
          winningCells={
            winningCells
          }
          isSystemThinking={
            isSystemThinking
          }
          result={result}
          onCellClick={
            playCell
          }
        />
      </div>

      {/* RESULT */}

      {result && (
        <ResultModal
          result={result}
          onReset={
            resetGame
          }
        />
      )}
    </section>
  );
}