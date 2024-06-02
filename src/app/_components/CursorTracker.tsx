"use client";
import { useEffect } from "react";

const CursorTracker = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    if (!cursor) return;

    const updateCursor = (e: MouseEvent | WheelEvent) => {
      const { clientX, clientY } = e;

      cursor.style.background = `radial-gradient(
        500px at ${clientX}px ${clientY}px,
        rgba(29, 78, 216, 0.15),
        transparent 80%
      )`;
    };

    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[60] transition duration-300"></div>
  );
};

export default CursorTracker;
