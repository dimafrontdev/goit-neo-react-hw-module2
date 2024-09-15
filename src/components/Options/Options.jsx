import styles from './options.module.css';
import clsx from 'clsx';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.container}>
      <button
        onClick={() => updateFeedback('good')}
        className={clsx(styles.button, styles.good)}
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={clsx(styles.button, styles.neutral)}
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback('bad')}
        className={clsx(styles.button, styles.bad)}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          onClick={() => resetFeedback()}
          className={clsx(styles.button, styles.reset)}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
