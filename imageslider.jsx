import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import React, { useState, useEffect } from "react";

const defaultImages = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80",
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
];

export default function App({ images = defaultImages }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000); // auto-advance every 4s
    return () => clearInterval(id);
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images provided</div>;
  }

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const goTo = (i) => setIndex(i);

  return (
    <div style={styles.wrap}>
      <div style={styles.slider}>
        <img
          src={images[index]}
          alt={`slide-${index}`}
          style={styles.image}
          draggable={false}
        />
      </div>

      <div style={styles.controls}>
        <button onClick={prev} aria-label="Previous slide" style={styles.controlBtn}>
          Prev
        </button>

        <div style={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                ...styles.dot,
                opacity: i === index ? 1 : 0.5,
                transform: i === index ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>

        <button onClick={next} aria-label="Next slide" style={styles.controlBtn}>
          Next
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    width: "100%",
    maxWidth: 800,
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  slider: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 8,
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
    userSelect: "none",
  },
  nav: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 20,
  },
  controls: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  dots: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    border: "none",
    background: "#222",
    cursor: "pointer",
    padding: 0,
    transition: "transform 120ms ease, opacity 120ms ease",
  },
};
