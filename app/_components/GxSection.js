import React from "react";

export default function GxSection({ children, className = "", id }) {
  return (
    <section id={id} className={`my-8 lg:my-14 mx-5 lg:mx-20 py-2 lg:py-4 ${className}`}>
      {children}
    </section>
  )
}
