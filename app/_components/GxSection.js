import React from "react";

export default function GxSection({ children, className = "", id }) {
  return (
    <section id={id} className={`my-12 lg:my-20 mx-6 lg:mx-24 py-4 lg:py-8 ${className}`}>
      {children}
    </section>
  )
}
