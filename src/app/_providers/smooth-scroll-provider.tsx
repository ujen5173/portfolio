"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import * as React from "react";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2.5, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}
