import React from "react";

export function Container({ children, className = "", fluid = false, padded = true }) {
  // En mode "fluid", on garde une largeur max mais on centre avec mx-auto
  const base = fluid ? "w-full max-w-screen-2xl mx-auto" : "container mx-auto";
  const padding = padded ? (fluid ? "px-4 md:px-8" : "p-5 xl:px-0") : "";

  return <div className={`${base} ${padding} ${className}`.trim()}>{children}</div>;
}