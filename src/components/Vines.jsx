import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

/**
 * Hand-drawn vines that run down both edges of the page and "grow" as the
 * visitor scrolls: the stems draw themselves in, then leaves, curling tendrils
 * and little flowers unfurl once the growth tip reaches them.
 */

const WIDTH = 120; // drawing width of one side, in px
const STEP = 230; // vertical distance between stem anchor points
const TEAL = "#00cea8";
const PURPLE = "#bf61ff";
const PINK = "#f272c8";

// Small seeded random generator so the vines look the same on every load.
const makeRandom = (seed) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const clamp01 = (v) => Math.min(1, Math.max(0, v));

// Grows from 0 to 1 over `span` pixels once the growth tip passes `y`.
const useReveal = (tipY, y, span = 140) =>
  useTransform(tipY, (tip) => clamp01((tip - y) / span));

const leafPath = (len) =>
  `M0 0 C${len * 0.3} ${-len * 0.3} ${len * 0.75} ${-len * 0.3} ${len} 0 ` +
  `C${len * 0.75} ${len * 0.3} ${len * 0.3} ${len * 0.3} 0 0Z`;

const Leaf = ({ tipY, x, y, angle, len }) => {
  const reveal = useReveal(tipY, y);
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <motion.g style={{ scale: reveal, opacity: reveal, originX: 0, originY: 0 }}>
        <path
          d={leafPath(len)}
          fill="url(#vine-gradient)"
          fillOpacity="0.14"
          stroke="url(#vine-gradient)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d={`M0 0 L${len * 0.82} 0`}
          fill="none"
          stroke="url(#vine-gradient)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
      </motion.g>
    </g>
  );
};

const Tendril = ({ tipY, x, y, flip, scale }) => {
  const reveal = useReveal(tipY, y, 200);
  return (
    <g transform={`translate(${x} ${y}) scale(${scale} ${flip * scale})`}>
      <motion.path
        d="M0 0 C16 -10 36 -6 36 10 C36 22 22 26 18 17 C15 10 23 8 25 13"
        fill="none"
        stroke="url(#vine-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ pathLength: reveal, opacity: reveal }}
      />
    </g>
  );
};

const Flower = ({ tipY, x, y, size }) => {
  const reveal = useReveal(tipY, y, 200);
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.g style={{ scale: reveal, opacity: reveal }}>
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx={size * 0.9}
            cy="0"
            rx={size * 0.9}
            ry={size * 0.5}
            transform={`rotate(${deg})`}
            fill={PINK}
            fillOpacity="0.16"
            stroke={PINK}
            strokeWidth="1.3"
          />
        ))}
        <circle r={size * 0.38} fill="#915eff" fillOpacity="0.5" stroke="#915eff" strokeWidth="1.2" />
      </motion.g>
    </g>
  );
};

const stemPath = (points) =>
  points.reduce((d, p, i) => {
    if (i === 0) return `M${p.x} ${p.y}`;
    const prev = points[i - 1];
    const mid = (p.y - prev.y) / 2;
    return `${d} C${prev.x} ${prev.y + mid} ${p.x} ${p.y - mid} ${p.x} ${p.y}`;
  }, "");

const Side = ({ height, tipY, seed }) => {
  const heightRef = useRef(height);
  heightRef.current = height;
  const stemProgress = useTransform(tipY, (tip) =>
    clamp01(tip / heightRef.current)
  );

  const { stem, strand, leaves, tendrils, flowers } = useMemo(() => {
    const random = makeRandom(seed);
    const count = Math.ceil(height / STEP) + 2;
    const phase = random() * Math.PI * 2;

    const stemX = (i, offset = 0, ph = 0) =>
      36 + 13 * Math.sin(i * 1.15 + phase + ph) + offset;

    const mainPoints = [];
    const strandPoints = [];
    const leafList = [];
    const tendrilList = [];
    const flowerList = [];

    for (let i = 0; i < count; i++) {
      const y = i * STEP;
      const x = stemX(i);
      mainPoints.push({ x, y });
      strandPoints.push({ x: stemX(i, 2, Math.PI), y });

      // Two leaves per anchor, one swept upwards and one hanging down.
      leafList.push({
        id: `l-${i}-a`,
        x,
        y: y + 18,
        angle: -(20 + random() * 40),
        len: 34 + random() * 24,
      });
      leafList.push({
        id: `l-${i}-b`,
        x,
        y: y + STEP * 0.55,
        angle: 15 + random() * 45,
        len: 28 + random() * 24,
      });

      if (i % 3 === 1) {
        tendrilList.push({
          id: `t-${i}`,
          x,
          y: y + STEP * 0.3,
          flip: random() > 0.5 ? 1 : -1,
          scale: 0.9 + random() * 0.5,
        });
      }

      if (i % 4 === 2) {
        flowerList.push({
          id: `f-${i}`,
          x: x + 6,
          y: y + STEP * 0.8,
          size: 9 + random() * 4,
        });
      }
    }

    return {
      stem: stemPath(mainPoints),
      strand: stemPath(strandPoints),
      leaves: leafList,
      tendrils: tendrilList,
      flowers: flowerList,
    };
  }, [height, seed]);

  return (
    <svg
      width={WIDTH}
      height={height}
      viewBox={`0 0 ${WIDTH} ${height}`}
      fill="none"
      aria-hidden="true">
      <defs>
        <linearGradient
          id="vine-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="0"
          y2={height}>
          <stop offset="0" stopColor={TEAL} />
          <stop offset="1" stopColor={PURPLE} />
        </linearGradient>
      </defs>

      <motion.path
        d={strand}
        stroke="url(#vine-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        style={{ pathLength: stemProgress }}
      />
      <motion.path
        d={stem}
        stroke="url(#vine-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ pathLength: stemProgress }}
      />

      {tendrils.map((t) => (
        <Tendril key={t.id} tipY={tipY} {...t} />
      ))}
      {leaves.map((l) => (
        <Leaf key={l.id} tipY={tipY} {...l} />
      ))}
      {flowers.map((f) => (
        <Flower key={f.id} tipY={tipY} {...f} />
      ))}
    </svg>
  );
};

const Vines = () => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const tipY = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  // Match the height of the whole page.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver(() => setHeight(el.offsetHeight));
    observer.observe(el);
    setHeight(el.offsetHeight);
    return () => observer.disconnect();
  }, []);

  // The growth tip follows the bottom edge of the viewport.
  useEffect(() => {
    if (reduceMotion) {
      tipY.set(Infinity);
      return undefined;
    }
    const update = () => tipY.set(window.scrollY + window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion, tipY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true">
      {height > 0 && (
        <>
          <div className="absolute left-0 top-0 w-[44px] xl:w-[120px] overflow-hidden opacity-30 xl:opacity-60">
            <Side height={height} tipY={tipY} seed={7} />
          </div>
          <div className="absolute right-0 top-0 w-[44px] xl:w-[120px] overflow-hidden opacity-30 xl:opacity-60">
            {/* Mirrored so the leaves also point towards the content. */}
            <div className="-scale-x-100 origin-center">
              <Side height={height} tipY={tipY} seed={23} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Vines;
