import React from "react";

export default function SecondButton(props) {
  return (
    <button className="rounded-md bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-white py-2.5 px-6 text-sm font-medium transition-all duration-300">
      {props.btn_txt}
    </button>
  )
}
