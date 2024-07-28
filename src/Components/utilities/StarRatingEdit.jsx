import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

const StarRatingEdit = ({ reviewValueEdit, handleRatingChangeEdit }) => {
  const styles = useMemo(() => ({
    container: {
      display: 'flex',
      flexDirection: 'row-reverse',
      gap: '0.3rem',
      '--stroke': '#666',
      '--fill': '#ffc73a',
    },
    input: {
      appearance: 'none',
    },
    label: {
      cursor: 'pointer',
    },
    svg: {
      width: '2rem',
      height: '2rem',
      overflow: 'visible',
      fill: 'transparent',
      stroke: 'var(--stroke)',
      strokeLinejoin: 'bevel',
      strokeDasharray: '12',
      animation: 'idle 4s linear infinite',
      transition: 'stroke 0.2s, fill 0.5s',
    },
    checkedSvg: {
      animation: 'idle 4s linear infinite, yippee 0.75s backwards',
      fill: 'var(--fill)',
      stroke: 'var(--fill)',
      strokeOpacity: 0,
      strokeDasharray: 0,
      strokeLinejoin: 'miter',
      strokeWidth: '8px',
    },
  }), []);

  const keyframes = useMemo(() => `
    @keyframes idle {
      from { stroke-dashoffset: 24; }
    }
    @keyframes yippee {
      0% {
        transform: scale(1);
        fill: var(--fill);
        fill-opacity: 0;
        stroke-opacity: 1;
        stroke: var(--stroke);
        stroke-dasharray: 10;
        stroke-width: 1px;
        stroke-linejoin: bevel;
      }
      30% {
        transform: scale(0);
        fill: var(--fill);
        fill-opacity: 0;
        stroke-opacity: 1;
        stroke: var(--stroke);
        stroke-dasharray: 10;
        stroke-width: 1px;
        stroke-linejoin: bevel;
      }
      30.1% {
        stroke: var(--fill);
        stroke-dasharray: 0;
        stroke-linejoin: miter;
        stroke-width: 8px;
      }
      60% {
        transform: scale(1.2);
        fill: var(--fill);
      }
    }
  `, []);

  const handleMouseEnter = useCallback((e) => {
    e.currentTarget.querySelector('svg').style.stroke = 'var(--fill)';
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.querySelector('svg').style.stroke = 'var(--stroke)';
  }, []);

  const renderStar = useCallback((star) => (
    <React.Fragment key={star}>
      <input
        type="radio"
        id={`star-edit-${star}`}
        name="star-radio-edit"
        value={`star-${star}`}
        checked={reviewValueEdit === star}
        onChange={() => handleRatingChangeEdit(star)}
        style={styles.input}
      />
      <label
        htmlFor={`star-edit-${star}`}
        style={styles.label}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={reviewValueEdit >= star ? { ...styles.svg, ...styles.checkedSvg } : styles.svg}
        >
          <path
            pathLength="360"
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
          />
        </svg>
      </label>
    </React.Fragment>
  ), [reviewValueEdit, handleRatingChangeEdit, styles, handleMouseEnter, handleMouseLeave]);

  return (
    <>
      <style>{keyframes}</style>
      <div className="rating" style={styles.container}>
        {[5, 4, 3, 2, 1].map(renderStar)}
      </div>
    </>
  );
};

StarRatingEdit.propTypes = {
  reviewValueEdit: PropTypes.number.isRequired,
  handleRatingChangeEdit: PropTypes.func.isRequired,
};

export default React.memo(StarRatingEdit);