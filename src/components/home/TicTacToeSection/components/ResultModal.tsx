import Link from "next/link";

import styles from "../TicTacToeSection.module.css";

import type {
  GameResult,
} from "../lib/types";

interface ResultModalProps {
  result: Exclude<
    GameResult,
    null
  >;

  onReset: () => void;
}

const resultContent = {
  win: {
    title:
      "You beat boring. Nice.",

    description:
      "Now let's do the same for your brand.",
  },

  lose: {
    title:
      "Aura wins this round.",

    description:
      "Your brand doesn't have to lose to the noise.",
  },

  draw: {
    title:
      "Boring couldn't win either.",

    description:
      "Call it a draw. Your brand can still make the next move.",
  },
} as const;

export default function ResultModal({
  result,
  onReset,
}: ResultModalProps) {
  const content =
    resultContent[result];

  return (
    <div
      className={
        styles.resultOverlay
      }
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-result-title"
    >
      <div
        className={
          styles.resultCard
        }
      >
        {/* CONFETTI */}

        <div
          className={
            styles.resultDecorations
          }
          aria-hidden="true"
        >
          {Array.from({
            length: 28,
          }).map(
            (_, index) => (
              <span
                key={index}
                className={
                  styles.confetti
                }
              />
            )
          )}
        </div>

        {/* BRAND EQUATION */}

        <div
          className={
            styles.equation
          }
        >
          <span
            className={
              styles.equationX
            }
          >
            X
          </span>

          <span
            className={
              styles.equals
            }
          >
            =
          </span>

          <span>NOISE</span>

          <span
            className={
              styles.dot
            }
          >
            .
          </span>

          <span
            className={
              styles.equationO
            }
          >
            O
          </span>

          <span
            className={
              styles.equals
            }
          >
            =
          </span>

          <span>AURA</span>
        </div>

        {/* COPY */}

        <div
          className={
            styles.resultCopy
          }
        >
          <h3
            id="game-result-title"
          >
            {content.title}
          </h3>

          <p>
            {content.description}
          </p>
        </div>

        {/* ACTIONS */}

        <div
          className={
            styles.resultActions
          }
        >
          <Link
            href="/contact"
            className={
              styles.connectButton
            }
          >
            Connect With Us
          </Link>

          <button
            type="button"
            className={
              styles.playAgainButton
            }
            onClick={
              onReset
            }
          >
            <span
              className={
                styles.restartIcon
              }
              aria-hidden="true"
            >
              ↻
            </span>

            Waste Your Time Again
          </button>
        </div>
      </div>
    </div>
  );
}