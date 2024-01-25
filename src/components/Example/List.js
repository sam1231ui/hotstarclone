import React from "react";
import { useHorizontalScroll } from "./useHorizontalScroll";

export const SideScrollTest = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <div ref={scrollRef} style={{ width: 300, overflow: "auto" }}>
      <div style={{ whiteSpace: "nowrap" }}>
        I will definitely overflow due to the small width of my parent container
      </div>
    </div>
  );
};