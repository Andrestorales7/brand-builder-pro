import { useEffect, useRef, useState } from 'react';

interface FlipTextProps {
  phrases: string[];
  interval?: number; // ms
  className?: string;
  ariaLabel?: string;
}

export const FlipText = ({ phrases, interval = 5000, className = '', ariaLabel }: FlipTextProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduceMotion(true);
    }
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, interval);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index, paused, reduceMotion, interval, phrases.length]);

  return (
    <span
      className={`flip-text-outer ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label={ariaLabel}
      tabIndex={0}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ display: 'inline-block', position: 'relative', minHeight: '1em' }}
    >
      {phrases.map((phrase, i) => (
        <span
          key={phrase}
          className={`flip-text-inner${i === index ? ' flip-text-active' : ''}`}
          aria-hidden={i !== index}
          style={{
            position: i === index ? 'static' : 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            opacity: i === index ? 1 : 0,
            pointerEvents: i === index ? 'auto' : 'none',
            transition: reduceMotion
              ? 'none'
              : 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
            transform:
              i === index
                ? 'none'
                : 'rotateX(90deg) translateY(0.5em)',
            willChange: 'opacity, transform',
            backfaceVisibility: 'hidden',
            font: 'inherit',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            color: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 'inherit',
            textAlign: 'inherit',
            background: 'none',
          }}
        >
          {phrase}
        </span>
      ))}
    </span>
  );
};
