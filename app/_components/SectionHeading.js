import React from "react";
import { urbanist } from "../_style/fonts";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-highlight font-semibold mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl lg:text-5xl font-light text-ink leading-tight ${urbanist.className}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-light text-base leading-relaxed ${isCenter ? "mx-auto" : ""} max-w-2xl`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
