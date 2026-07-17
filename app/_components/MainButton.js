import React from "react";

export default function MainButton({ btn_txt, className = "" }) {
  return (
    <button className={`rounded-md bg-highlight text-white border border-highlight hover:bg-highlight2 hover:border-highlight2 py-2.5 px-6 text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md ${className}`}>
      {btn_txt}
    </button>
  )
}
