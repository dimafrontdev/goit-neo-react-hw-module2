import styles from './feedback.module.css';
import clsx from 'clsx';

const Feedback = ({ feedbacks = {}, total = 0, positive = 0 }) => {
  return (
    <>
      <div className={styles.cards}>
        <div className={clsx(styles.card, styles.good)}>
          <p>{feedbacks.good}</p>
          <p>Good</p>
        </div>
        <div className={clsx(styles.card, styles.neutral)}>
          <p>{feedbacks.neutral}</p>
          <p>Neutral</p>
        </div>
        <div className={clsx(styles.card, styles.bad)}>
          <p>{feedbacks.bad}</p>
          <p>Bad</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <p>Total feedback:</p>
          <p>{total}</p>
        </div>
        <div className={styles.stat}>
          <p>Positive feedback:</p>
          <p>{`${positive}%`}</p>
        </div>
      </div>
    </>
  );
};

export default Feedback;
