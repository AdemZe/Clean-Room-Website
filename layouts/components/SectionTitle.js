import React from "react";
import { Container } from "@components/Container";

export const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-8 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {/* PreTitle */}
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase transition-transform duration-300 hover:scale-105">
          {props.preTitle}
        </div>
      )}

      {/* Main Title */}
      {props.title && (
        <h2
          className="max-w-2xl mt-4 text-4xl font-extrabold leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 lg:leading-tight lg:text-5xl"
        >
          {props.title}
        </h2>
      )}

      {/* Description or Children */}
      {props.children && (
        <p className="max-w-3xl py-6 text-lg leading-relaxed text-gray-600 lg:text-xl xl:text-xl dark:text-gray-400 transition-opacity duration-300 hover:opacity-90">
          {props.children}
        </p>
      )}
    </Container>
  );
};
